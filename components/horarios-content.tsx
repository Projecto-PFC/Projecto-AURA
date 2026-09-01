"use client"

import { useEffect, useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, Printer, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { listarHorario, listarHorarioPorProfessor, TempoLectivoComDetalhes } from "@/lib/actions/horario.actions"
import { listarTodasTurmas } from "@/app/turmas/turma-action"
import { listarTodos as listarTodosProfessores } from "@/app/professores/professores-action"
import { useRouter } from "next/navigation"
import { HorarioPDF } from "@/components/horario-pdf"

// ── DADOS FIXOS ───────────────────────────────────────────────
const diasSemana = ["2ª FEIRA", "3ª FEIRA", "4ª FEIRA", "5ª FEIRA", "6ª FEIRA"]
const ANO_LECTIVO_ATUAL = new Date().getFullYear()

type LinhaTabela =
  | { tipo: "aula";      tempo: string; horaInicio: string; horaFim: string; ordem: number }
  | { tipo: "intervalo"; horaInicio: string; horaFim: string }

const linhasManha: LinhaTabela[] = [
  { tipo: "aula",      tempo: "1º manhã",  horaInicio: "7H30",  horaFim: "8H15",  ordem: 1 },
  { tipo: "aula",      tempo: "2º manhã",  horaInicio: "8H15",  horaFim: "9H00",  ordem: 2 },
  { tipo: "intervalo", horaInicio: "9H00",  horaFim: "9H15" },
  { tipo: "aula",      tempo: "3º manhã",  horaInicio: "9H15",  horaFim: "10H00", ordem: 3 },
  { tipo: "aula",      tempo: "4º manhã",  horaInicio: "10H00", horaFim: "10H45", ordem: 4 },
  { tipo: "intervalo", horaInicio: "10H45", horaFim: "11H00" },
  { tipo: "aula",      tempo: "5º manhã",  horaInicio: "11H00", horaFim: "11H45", ordem: 5 },
  { tipo: "aula",      tempo: "6º manhã",  horaInicio: "11H45", horaFim: "12H30", ordem: 6 },
]

const linhasTarde: LinhaTabela[] = [
  { tipo: "aula",      tempo: "1º tarde",  horaInicio: "13H00", horaFim: "13H45", ordem: 1 },
  { tipo: "aula",      tempo: "2º tarde",  horaInicio: "13H45", horaFim: "14H30", ordem: 2 },
  { tipo: "intervalo", horaInicio: "14H30", horaFim: "14H45" },
  { tipo: "aula",      tempo: "3º tarde",  horaInicio: "14H45", horaFim: "15H30", ordem: 3 },
  { tipo: "aula",      tempo: "4º tarde",  horaInicio: "15H30", horaFim: "16H15", ordem: 4 },
  { tipo: "intervalo", horaInicio: "16H15", horaFim: "16H30" },
  { tipo: "aula",      tempo: "5º tarde",  horaInicio: "16H30", horaFim: "17H15", ordem: 5 },
  { tipo: "aula",      tempo: "6º tarde",  horaInicio: "17H15", horaFim: "18H00", ordem: 6 },
]

interface Aula { 
  disciplina: string
  professor:  string
  sala:       string
  turma?:     string
}

interface OpcaoHorario {
  id: number
  nome: string
}

type HorarioData = {
  [turma: string]: {
    [periodo: string]: {
      [dia: string]: {
        [ordem: number]: Aula | null
      }
    }
  }
}

export function HorariosContent() {
  const [turmas, setTurmas] = useState<OpcaoHorario[]>([])
  const [professores, setProfessores] = useState<OpcaoHorario[]>([])
  const [selectedTurma, setSelectedTurma] = useState<string>("")
  const [selectedProfessor, setSelectedProfessor] = useState("")
  const [viewType, setViewType] = useState("turma")
  const [horario, setHorario] = useState<HorarioData>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isExporting, setIsExporting] = useState(false)

  const router = useRouter() // Se precisares de refrescar a página

  // Carregar lista inicial
  useEffect(() => {
    async function carregarDados() {
      const [dadosTurma, dadosProf] = await Promise.all([
        listarTodasTurmas(),
        listarTodosProfessores()
      ])

      const opcoesTurmas = dadosTurma.map((turma) => ({ id: turma.id_turma, nome: turma.descricao_turma }))
      setTurmas(opcoesTurmas)
      if (opcoesTurmas.length > 0) setSelectedTurma(opcoesTurmas[0].nome)

      const opcoesProfessores = dadosProf.map((professor) => ({ id: professor.id_professor, nome: professor.nome_professor }))
      setProfessores(opcoesProfessores)
      if (opcoesProfessores.length > 0) setSelectedProfessor(opcoesProfessores[0].nome)
    }   
    carregarDados()
  }, [])

  // Buscar dados do horário quando a selecção muda
  useEffect(() => {
    const isProf = viewType === "professor"
    const target = isProf ? selectedProfessor : selectedTurma

    if (!target) return

    async function buscar() {
      setIsLoading(true)
      try {
        const opcaoTurma = turmas.find((turma) => turma.nome === selectedTurma)
        const opcaoProfessor = professores.find((professor) => professor.nome === selectedProfessor)

        if (isProf && !opcaoProfessor) return
        if (!isProf && !opcaoTurma) return

        const resposta = isProf
          ? await listarHorarioPorProfessor({
              id_professor: opcaoProfessor!.id,
              ano_lectivo: ANO_LECTIVO_ATUAL,
            })
          : await listarHorario({
              ids_turmas: [opcaoTurma!.id],
              ano_lectivo: ANO_LECTIVO_ATUAL,
            })

        if (!resposta.success || !resposta.data) {
          return
        }

        const dados: TempoLectivoComDetalhes[] = resposta.data
        const novoHorario: HorarioData = {}

        const mapaDias: Record<string, string> = {
          "SEGUNDA-FEIRA": "2ª FEIRA", "TERCA-FEIRA": "3ª FEIRA", "QUARTA-FEIRA": "4ª FEIRA",
          "QUINTA-FEIRA": "5ª FEIRA", "SEXTA-FEIRA": "6ª FEIRA",
          "Segunda-Feira": "2ª FEIRA", "Terça-Feira": "3ª FEIRA", "Quarta-Feira": "4ª FEIRA",
          "Quinta-Feira": "5ª FEIRA", "Sexta-Feira": "6ª FEIRA",
          "SEGUNDA": "2ª FEIRA", "TERCA": "3ª FEIRA", "QUARTA": "4ª FEIRA",
          "QUINTA": "5ª FEIRA", "SEXTA": "6ª FEIRA",
          "Segunda": "2ª FEIRA", "Terça": "3ª FEIRA", "Quarta": "4ª FEIRA",
          "Quinta": "5ª FEIRA", "Sexta": "6ª FEIRA"
        }
        const mapaPeriodos: Record<string, string> = { 
          "MANHA": "manha", "TARDE": "tarde",
          "Manhã": "manha", "Tarde": "tarde"
        }

        console.log("Dados recebidos para o horário:", dados)
        if (dados.length > 0) {
          console.log("Primeiro dia:", dados[0]?.dia?.descricao_dia)
          console.log("Primeiro periodo:", dados[0]?.periodo?.descricao_periodo)
        }

        dados.forEach((aula) => {
          const dia = mapaDias[aula.dia?.descricao_dia || ""]
          const periodo = mapaPeriodos[aula.periodo?.descricao_periodo || ""]
          const key = isProf ? aula.professor?.nome_professor : aula.turma?.descricao_turma
          const ordem = aula.ordem

          if (!dia || !periodo || !key) return

          if (!novoHorario[key]) novoHorario[key] = {}
          if (!novoHorario[key][periodo]) novoHorario[key][periodo] = {}
          if (!novoHorario[key][periodo][dia]) novoHorario[key][periodo][dia] = {}

          novoHorario[key][periodo][dia][ordem] = {
            disciplina: aula.disciplina?.descricao_disciplina || "Sem Disciplina",
            professor:  aula.professor?.nome_professor || "Sem Prof",
            sala:       aula.sala?.descricao_sala || "Sem Sala",
            turma:      aula.turma?.descricao_turma || "Sem Turma"
          }
        })
        setHorario(novoHorario)
      } catch (err) {
        console.error("Erro ao carregar horário:", err)
      } finally {
        setIsLoading(false)          
      }
    }
    buscar()
  }, [selectedTurma, selectedProfessor, viewType])

  const turmaIndex = turmas.findIndex((turma) => turma.nome === selectedTurma)

  const navigateTurma = (direction: number) => {
    const newIndex = turmaIndex + direction
    if (newIndex >= 0 && newIndex < turmas.length) {
      setSelectedTurma(turmas[newIndex].nome)
    }
  }

  const professorIndex = professores.findIndex((professor) => professor.nome === selectedProfessor)

  const navigateProfessor = (direction: number) => {
    const newIndex = professorIndex + direction
    if (newIndex >= 0 && newIndex < professores.length) {
      setSelectedProfessor(professores[newIndex].nome)
    }
  }

  const getAula = (key: string, periodo: string, dia: string, ordem: number): Aula | null => {
    return horario[key]?.[periodo]?.[dia]?.[ordem] ?? null
  }

  const handleExportPDF = useCallback(async () => {
    const isProf = viewType === "professor"
    const targetKey = isProf ? selectedProfessor : selectedTurma
    if (!targetKey) return

    setIsExporting(true)
    try {
      const { pdf } = await import("@react-pdf/renderer")
      const blob = await pdf(
        <HorarioPDF horario={horario} targetKey={targetKey} isProf={isProf} />
      ).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `horario-${targetKey.replace(/\s+/g, "_")}.pdf`
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error("Erro ao gerar PDF:", err)
    } finally {
      setIsExporting(false)
    }
  }, [viewType, selectedProfessor, selectedTurma, horario])

  // ── CÉLULA DE AULA ──────────────────────────────────────────
  const CelulaAula = ({ aula, isProf }: { aula: Aula | null, isProf?: boolean }) => {
    if (aula) {
      return (
        <div className="flex h-full min-h-[70px] flex-col justify-center rounded-md bg-primary p-2 text-primary-foreground text-[10px] leading-tight shadow-sm">
          <div className="font-bold uppercase mb-1 border-b border-primary-foreground/20">
            {aula.disciplina}
          </div>
          <div className="truncate">{isProf ? `Turma ${aula.turma}` : `Prof. ${aula.professor}`}</div>
          <div className="opacity-90 font-medium mt-1">{aula.sala}</div>
        </div>
      )
    }
    return (
      <div className="flex h-full min-h-[70px] flex-col justify-center p-2 text-[10px] text-muted-foreground/40 italic border border-dashed border-border rounded-md">
        <div className="mb-1">Disciplina</div>
        <div>{isProf ? "Turma" : "Professor"}</div>
        <div className="mt-1">Sala</div>
      </div>
    )
  }

  // ── TABELA (manhã ou tarde) ──────────────────────────────────
  const TabelaPeriodo = ({ linhas, periodo, targetKey, isProf }: { linhas: LinhaTabela[], periodo: string, targetKey: string, isProf?: boolean }) => (
    <table className="w-full border-collapse text-sm table-fixed">
      <thead>
        <tr>
          <th className="border border-border bg-muted p-2 text-left text-[10px] font-bold w-14">TEMPO</th>
          <th className="border border-border bg-muted p-2 text-center text-[10px] font-bold w-16">HORA</th>
          {diasSemana.map((dia) => (
            <th key={dia} className="border border-border bg-muted p-2 text-center text-[10px] font-bold">
              {dia}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={isLoading ? "opacity-40 transition-opacity" : ""}>
        {linhas.map((linha, i) => {
          if (linha.tipo === "intervalo") {
            return (
              <tr key={`interv-${i}`} className="bg-muted/50">
                <td className="border border-border p-1 text-[9px] font-bold text-center">INTERVALO</td>
                <td className="border border-border p-1 text-[9px] text-center">
                  {linha.horaInicio} - {linha.horaFim}
                </td>
                <td className="border border-border bg-muted/20" colSpan={diasSemana.length} />
              </tr>
            )
          }

          return (
            <tr key={`aula-${linha.ordem}`}>
              <td className="border border-border bg-muted/20 p-2 text-[10px] font-medium text-center">
                {linha.tempo}
              </td>
              <td className="border border-border p-1 text-[10px] text-center">
                <div className="font-semibold">{linha.horaInicio}</div>
                <div className="text-muted-foreground text-[9px]">{linha.horaFim}</div>
              </td>
              {diasSemana.map((dia) => (
                <td key={dia} className="border border-border p-1 h-full">
                  <CelulaAula aula={getAula(targetKey, periodo, dia, linha.ordem)} isProf={isProf} />
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Horários</h1>
          <p className="text-muted-foreground">Visualização do calendário escolar por turma ou docente</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2" onClick={handleExportPDF} disabled={isExporting}>
            {isExporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            {isExporting ? "A gerar..." : "Exportar PDF"}
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Printer className="h-4 w-4" /> Imprimir
          </Button>
        </div>
      </div>

      <Tabs value={viewType} onValueChange={setViewType} className="w-full">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2">
          <TabsTrigger value="turma">Por Turma</TabsTrigger>
          <TabsTrigger value="professor">Por Professor</TabsTrigger>
        </TabsList>

        <TabsContent value="turma" className="mt-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-card border rounded-md p-1 shadow-sm">
              <Button
                variant="ghost" size="icon" className="h-8 w-8"
                onClick={() => navigateTurma(-1)}
                disabled={turmaIndex <= 0 || isLoading}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Select value={selectedTurma} onValueChange={setSelectedTurma} disabled={isLoading}>
                <SelectTrigger className="w-44 border-none shadow-none focus:ring-0">
                  <SelectValue placeholder="Escolha a turma" />
                </SelectTrigger>
                <SelectContent>
                  {turmas.map((turma) => (
                    <SelectItem key={turma.id} value={turma.nome}>Turma {turma.nome}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="ghost" size="icon" className="h-8 w-8"
                onClick={() => navigateTurma(1)}
                disabled={turmaIndex >= turmas.length - 1 || isLoading}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            {isLoading && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
          </div>

          <Card className="shadow-md border-t-4 border-t-primary">
            <CardHeader className="pb-3 border-b bg-muted/10">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Calendário Semanal: {selectedTurma}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-8">
              <div className="space-y-3">
                <h3 className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Período da Manhã</h3>
                <div className="overflow-x-auto rounded-lg border">
                  <TabelaPeriodo linhas={linhasManha} periodo="manha" targetKey={selectedTurma} isProf={false} />
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <h3 className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">Período da Tarde</h3>
                <div className="overflow-x-auto rounded-lg border">
                  <TabelaPeriodo linhas={linhasTarde} periodo="tarde" targetKey={selectedTurma} isProf={false} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professor" className="mt-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-card border rounded-md p-1 shadow-sm">
              <Button
                variant="ghost" size="icon" className="h-8 w-8"
                onClick={() => navigateProfessor(-1)}
                disabled={professorIndex <= 0 || isLoading}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Select value={selectedProfessor} onValueChange={setSelectedProfessor} disabled={isLoading}>
                <SelectTrigger className="w-44 border-none shadow-none focus:ring-0">
                  <SelectValue placeholder="Escolha o docente" />
                </SelectTrigger>
                <SelectContent>
                  {professores.map((professor) => (
                    <SelectItem key={professor.id} value={professor.nome}>{professor.nome}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="ghost" size="icon" className="h-8 w-8"
                onClick={() => navigateProfessor(1)}
                disabled={professorIndex >= professores.length - 1 || isLoading}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            {isLoading && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
          </div>

          <Card className="shadow-md border-t-4 border-t-primary">
            <CardHeader className="pb-3 border-b bg-muted/10">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Calendário Semanal: {selectedProfessor}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-8">
              <div className="space-y-3">
                <h3 className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Período da Manhã</h3>
                <div className="overflow-x-auto rounded-lg border">
                  <TabelaPeriodo linhas={linhasManha} periodo="manha" targetKey={selectedProfessor} isProf={true} />
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <h3 className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">Período da Tarde</h3>
                <div className="overflow-x-auto rounded-lg border">
                  <TabelaPeriodo linhas={linhasTarde} periodo="tarde" targetKey={selectedProfessor} isProf={true} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}