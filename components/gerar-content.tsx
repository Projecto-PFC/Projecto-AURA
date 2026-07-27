"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  CheckCircle2,
  Play,
  RefreshCcw,
  XCircle,
  AlertTriangle,  // NOVO — ícone para avisos
  Clock,
  Users,
  DoorOpen,
  Trash2,
} from "lucide-react"
import { apagarTemposLectivos } from "@/lib/actions/horarios";
import gerarHorarios, { pararGeracao, type ResultadoGeracao, type LogItem } from "@/lib/actions/gerarHorario";

import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Turma {
  id: string
  nome: string
}

interface ConflictItem {
  id: string
  tipo: "professor" | "sala" | "turma"
  descricao: string
  severidade: "alta" | "media" | "baixa"
}

interface GenerationResult {
  status: "idle" | "generating" | "completed" | "error"
  progress: number
  turmasProcessadas: number
  totalTurmas: number
  conflitos: ConflictItem[]
  horariosGerados: number
}

// NOVO — componente que renderiza um único item de log com cor e ícone
function LogEntry({ item }: { item: LogItem }) {
  const config = {
    sucesso: {
      icon: <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />,
      className: "bg-green-500/10 border-green-500/20 text-green-400",
    },
    aviso: {
      icon: <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />,
      className: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    },
    erro: {
      icon: <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />,
      className: "bg-red-500/10 border-red-500/20 text-red-400",
    },
  }[item.tipo]

  return (
    <div className={`flex items-start gap-2 rounded-md border px-3 py-2 text-sm ${config.className}`}>
      {config.icon}
      <span>{item.mensagem}</span>
    </div>
  )
}

export function GerarContent() {
  // 1. Hooks de dados no TOPO (Sempre executados na mesma ordem)
  const { data, error, isLoading } = useSWR<{ turmas: Turma[] }>('/api/turmas', fetcher);

  const [selectedTurmas, setSelectedTurmas] = useState<string[]>([]);
  const [result, setResult] = useState<GenerationResult>({
    status: "idle", progress: 0, turmasProcessadas: 0, totalTurmas: 0, conflitos: [], horariosGerados: 0,
  });

  // NOVO — estado para guardar o resultado com logs devolvido pelo algoritmo
  const [resultado, setResultado] = useState<ResultadoGeracao | null>(null)

  const [isDeleting, setIsDeleting] = useState(false);

  // 2. Sincronizar o estado inicial quando os dados da API chegarem
  useEffect(() => {
    if (data?.turmas && selectedTurmas.length === 0) {
      setSelectedTurmas(data.turmas.map((t) => t.id));
    }
  }, [data]);

  // 3. Handlers
  const toggleTurma = (id: string) => {
    setSelectedTurmas((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const selectAll = () => setSelectedTurmas(data?.turmas.map((t) => t.id) || []);
  const deselectAll = () => setSelectedTurmas([]);

  const simulateGeneration = async () => {
    // Marca como "a gerar" — barra aparece em modo indeterminado
    setResult(prev => ({
        ...prev,
        status: "generating",
        progress: 0,
        totalTurmas: selectedTurmas.length,
    }))

    setResultado(null)

    try {
        const res = await gerarHorarios(selectedTurmas)
        setResultado(res)

        // Algoritmo terminou — actualiza o estado com base no resultado real
        setResult(prev => ({
            ...prev,
            status: "completed",
            progress: 100,
            turmasProcessadas: prev.totalTurmas,
        }))
    } catch (e) {
        console.error("Erro na Action:", e)
        setResultado({
            sucesso: false,
            totalGeradas: 0,
            logs: [{ tipo: "erro", mensagem: "Erro inesperado ao comunicar com o servidor." }]
        })

        // Erro — marca como erro em vez de "completed"
        setResult(prev => ({
            ...prev,
            status: "error",
            progress: 0,
        }))
    }
}

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await apagarTemposLectivos(selectedTurmas);
      setResult({
        status: "idle", progress: 0, turmasProcessadas: 0, totalTurmas: 0, conflitos: [], horariosGerados: 0,
      });
      // NOVO — limpa logs ao apagar horários
      setResultado(null)
    } catch (e) {
      console.error("Erro ao apagar horários:", e);
    } finally {
      setIsDeleting(false);
    }
  };

  // 4. Renderização Condicional de Erro
  if (error) return <div className="p-4 text-red-500">Erro ao carregar turmas.</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gerar Horários</h1>
        <p className="text-muted-foreground">Geração automática dos Horários</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Seleccionar Turmas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoading ? (
                <div className="animate-pulse space-y-2">
                  <div className="h-10 bg-muted rounded w-1/3"></div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[1, 2, 3, 4].map(i => <div key={i} className="h-12 bg-muted rounded"></div>)}
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" onClick={selectAll}>Seleccionar Todas</Button>
                    <Button variant="outline" size="sm" onClick={deselectAll}>Limpar</Button>
                    <Badge variant="secondary">{selectedTurmas.length} seleccionadas</Badge>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {data?.turmas.map((turma) => (
                      <div key={turma.id} className="flex items-center space-x-3 rounded-lg border p-3">
                        <Checkbox
                          id={turma.id}
                          checked={selectedTurmas.includes(turma.id)}
                          onCheckedChange={() => toggleTurma(turma.id)}
                        />
                        <Label htmlFor={turma.id} className="cursor-pointer flex-1">{turma.nome}</Label>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {result.status !== "idle" && (
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                      {result.status === "generating" && <RefreshCcw className="animate-spin" />}
                      {result.status === "completed" && (
                          resultado?.sucesso
                              ? <CheckCircle2 className="text-green-500" />
                              : <XCircle className="text-red-500" />
                      )}
                      {result.status === "error" && <XCircle className="text-red-500" />}

                      {result.status === "generating" && "A processar..."}
                      {result.status === "completed" && (resultado?.sucesso ? "Concluído com sucesso" : "Concluído com erros")}
                      {result.status === "error" && "Erro de comunicação"}
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  {/* Barra indeterminada enquanto processa, barra a 100% quando termina */}
                  {result.status === "generating" ? (
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-primary rounded-full animate-[progress_1.5s_ease-in-out_infinite]"
                              style={{ width: "40%" }} />
                      </div>
                  ) : (
                      <Progress value={result.progress} />
                  )}

                  <p className="text-sm text-muted-foreground">
                      {result.status === "generating"
                          ? "A gerar horários, por favor aguarde..."
                          : `${resultado?.totalGeradas ?? 0} aulas alocadas para ${result.totalTurmas} turma(s).`
                      }
                  </p>

                {/* NOVO — painel de logs aparece aqui, dentro do card existente, só quando há logs */}
                {resultado && resultado.logs.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Relatório de geração
                    </p>
                    {resultado.logs.map((log, i) => (
                      <LogEntry key={i} item={log} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Acções</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full"
                disabled={selectedTurmas.length === 0 || result.status === "generating"}
                onClick={simulateGeneration}
              >
                <Play className="mr-2 h-4 w-4" /> Gerar Agora
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    className="w-full"
                    disabled={selectedTurmas.length === 0 || result.status === "generating" || isDeleting}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    {isDeleting ? "A apagar..." : "Apagar Horários"}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Apagar Horários</AlertDialogTitle>
                    <AlertDialogDescription>
                      Tem a certeza que deseja apagar os horários das {selectedTurmas.length} turma(s) selecionada(s)?
                      Esta ação não pode ser revertida.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                      Apagar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {result.status === "generating" && (
                <Button
                  variant="outline"
                  className="w-full border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
                  onClick={async () => {
                    await pararGeracao();
                  }}
                >
                  <XCircle className="mr-2 h-4 w-4" /> Parar Processamento
                </Button>
              )}

              {/* NOVO — resumo numérico de logs no painel lateral, só quando há resultado */}
              {resultado && (
                <div className="rounded-md border p-3 space-y-1 text-sm">
                  <p className="font-medium text-foreground">Resumo</p>
                  <p className="text-muted-foreground">
                    Aulas geradas: <span className="text-foreground font-medium">{resultado.totalGeradas}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Erros: <span className="text-red-400 font-medium">
                      {resultado.logs.filter(l => l.tipo === "erro").length}
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    Avisos: <span className="text-yellow-400 font-medium">
                      {resultado.logs.filter(l => l.tipo === "aviso").length}
                    </span>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
