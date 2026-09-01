"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  AlertTriangle,
  Trash2,
} from "lucide-react"
import { apagarHorario, gerarHorario } from "@/lib/actions/horario.actions";
import type { ResultadoGeracao, LogItem } from "@/lib/algoritmos/types";

import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Turma {
  id: number
  nome: string
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

  const [selectedTurmas, setSelectedTurmas] = useState<number[]>([]);
  const [hasInitializedSelection, setHasInitializedSelection] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultado, setResultado] = useState<ResultadoGeracao | null>(null)

  const [isDeleting, setIsDeleting] = useState(false);

  // 2. Sincronizar o estado inicial quando os dados da API chegarem
  useEffect(() => {
    if (data?.turmas && !hasInitializedSelection) {
      setSelectedTurmas(data.turmas.map((t) => t.id));
      setHasInitializedSelection(true);
    }
  }, [data, hasInitializedSelection]);

  // 3. Handlers
  const toggleTurma = (id: number) => {
    setSelectedTurmas((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const selectAll = () => setSelectedTurmas(data?.turmas.map((t) => t.id) || []);
  const deselectAll = () => setSelectedTurmas([]);

  const simulateGeneration = async () => {
    setIsGenerating(true)
    setProgress(0)
    setResultado(null)

    try {
      const response = await gerarHorario({
        ids_turmas: selectedTurmas,
        ano_lectivo: new Date().getFullYear(),
        permitirRegeneracao: false,
      })

      const resultadoGeracao = response.data?.resultado ?? null;
      const logs = resultadoGeracao?.logs ?? [{ tipo: "erro", mensagem: response.message ?? "Não foi possível gerar o horário." }];

      setResultado(resultadoGeracao ?? { sucesso: false, metricas: { tempo_execucao_ms: 0, total_aulas_a_alocar: 0, total_aulas_alocadas: 0, candidatos_gerados: 0, candidatos_rejeitados: 0, candidatos_avaliados: 0, custo_soft_final: 0, falhas: [] }, logs })
      setProgress(response.success && resultadoGeracao?.sucesso ? 100 : 0)

      if (!response.success || !resultadoGeracao || !resultadoGeracao.sucesso) {
        setResultado({
          sucesso: false,
          metricas: resultadoGeracao?.metricas ?? {
            tempo_execucao_ms: 0,
            total_aulas_a_alocar: 0,
            total_aulas_alocadas: 0,
            candidatos_gerados: 0,
            candidatos_rejeitados: 0,
            candidatos_avaliados: 0,
            custo_soft_final: 0,
            falhas: [],
          },
          logs,
        })
      }
    } catch (e) {
      console.error("Erro na Action:", e)
      setResultado({
        sucesso: false,
        metricas: {
          tempo_execucao_ms: 0,
          total_aulas_a_alocar: 0,
          total_aulas_alocadas: 0,
          candidatos_gerados: 0,
          candidatos_rejeitados: 0,
          candidatos_avaliados: 0,
          custo_soft_final: 0,
          falhas: [],
        },
        logs: [{ tipo: "erro", mensagem: "Erro inesperado ao comunicar com o servidor." }],
      })
      setProgress(0)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await apagarHorario({ ids_turmas: selectedTurmas, ano_lectivo: new Date().getFullYear() });
      setProgress(0)
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
                          id={String(turma.id)}
                          checked={selectedTurmas.includes(turma.id)}
                          onCheckedChange={() => toggleTurma(turma.id)}
                        />
                        <Label htmlFor={String(turma.id)} className="cursor-pointer flex-1">{turma.nome}</Label>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {(isGenerating || resultado) && (
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                      {isGenerating && <RefreshCcw className="animate-spin" />}
                      {!isGenerating && (
                          resultado?.sucesso
                              ? <CheckCircle2 className="text-green-500" />
                              : <XCircle className="text-red-500" />
                      )}

                      {isGenerating && "A processar..."}
                      {!isGenerating && (resultado?.sucesso ? "Concluído com sucesso" : "Concluído com erros")}
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  {isGenerating ? (
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-primary rounded-full animate-[progress_1.5s_ease-in-out_infinite]"
                              style={{ width: "40%" }} />
                      </div>
                  ) : (
                      <Progress value={progress} />
                  )}

                  <p className="text-sm text-muted-foreground">
                      {isGenerating
                          ? "A gerar horários, por favor aguarde..."
                          : `${resultado?.metricas.total_aulas_alocadas ?? 0} aulas alocadas para ${selectedTurmas.length} turma(s).`
                      }
                  </p>

                {resultado && resultado.logs && resultado.logs.length > 0 && (
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
                disabled={selectedTurmas.length === 0 || isGenerating}
                onClick={simulateGeneration}
              >
                <Play className="mr-2 h-4 w-4" /> Gerar Agora
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    className="w-full"
                    disabled={selectedTurmas.length === 0 || isGenerating || isDeleting}
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

              {resultado && (
                <div className="rounded-md border p-3 space-y-2 text-sm">
                  <p className="font-medium text-foreground">Resumo</p>
                  <p className="text-muted-foreground">
                    Tempo execução: <span className="text-foreground font-medium">{resultado.metricas.tempo_execucao_ms} ms</span>
                  </p>
                  <p className="text-muted-foreground">
                    Aulas a alocar: <span className="text-foreground font-medium">{resultado.metricas.total_aulas_a_alocar}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Aulas geradas: <span className="text-foreground font-medium">{resultado.metricas.total_aulas_alocadas}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Candidatos gerados: <span className="text-foreground font-medium">{resultado.metricas.candidatos_gerados}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Candidatos rejeitados: <span className="text-foreground font-medium">{resultado.metricas.candidatos_rejeitados}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Candidatos avaliados: <span className="text-foreground font-medium">{resultado.metricas.candidatos_avaliados}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Custo soft final: <span className="text-foreground font-medium">{resultado.metricas.custo_soft_final}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Erros: <span className="text-red-400 font-medium">
                      {resultado.logs?.filter(l => l.tipo === "erro").length ?? 0}
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    Avisos: <span className="text-yellow-400 font-medium">
                      {resultado.logs?.filter(l => l.tipo === "aviso").length ?? 0}
                    </span>
                  </p>
                  {resultado.metricas.falhas.length > 0 && (
                    <div className="space-y-2 pt-1 border-t border-border">
                      <p className="font-medium text-foreground">Falhas</p>
                      {resultado.metricas.falhas.map((falha, index) => (
                        <div key={`${falha.id_aula}-${index}`} className="space-y-1 text-muted-foreground">
                          <p>{falha.descricao_aula}: {falha.motivo}</p>
                          {falha.detalhe && <p className="text-xs text-muted-foreground/80">{falha.detalhe}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
