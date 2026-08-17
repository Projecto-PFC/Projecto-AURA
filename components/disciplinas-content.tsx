"use client"

import React, { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "@/components/data-table"
import { Plus, BookOpen, GraduationCap } from "lucide-react"
import {
  criarDisciplina,
  atualizarDisciplina,
  apagarDisciplina,
  atualizarTurmasDaDisciplina,
} from "@/app/disciplinas/disciplinas-action"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Interfaces alinhadas com o Prisma Schema
interface TurmaDisciplinaData {
  disciplina: {
    descricao_disciplina: string
  }
}

interface TurmaData {
  id_turma: number
  descricao_turma: string
  curso: {
    descricao_curso: string
  }
  classe: {
    descricao_classe: string
  }
  turmaDisciplinas: TurmaDisciplinaData[] 
}

interface TipoSalaData {
  id_tipoSala: number
  descricao_tipoSala: string
}

interface DisciplinaData {
  id_disciplina: number
  descricao_disciplina: string
  id_tipoSala: number
  tipoSala: TipoSalaData
}

interface DisciplinaRow {
  id: number      
  nome: string
  turmas: string[]
}

interface DisciplinasContentProps {
  disciplinas: DisciplinaData[]
  turmas: TurmaData[]
  tiposSala: TipoSalaData[]
}

// Tipo para alinhar com o erro do Prisma/TS
type TurmaConfig = { id_turma: number; aulas_por_semana: number };

export function DisciplinasContent({ disciplinas, turmas, tiposSala }: DisciplinasContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingDisciplina, setEditingDisciplina] = useState<DisciplinaRow | null>(null)
  
  const [formData, setFormData] = useState({ 
    nome: "", 
    id_tipoSala: "",
    turmaConfigs: [] as TurmaConfig[] 
  })
  
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const rows: DisciplinaRow[] = disciplinas.map((d) => {
    const associatedTurmas = turmas
      .filter((t) => t.turmaDisciplinas.some((td) => td.disciplina.descricao_disciplina === d.descricao_disciplina))
      .map((t) => t.descricao_turma) 
      
    return {
      id: d.id_disciplina,
      nome: d.descricao_disciplina,
      turmas: associatedTurmas,
    }
  })

  const columns = [
    { key: "nome" as const, header: "Nome" },
    {
      key: "turmas",
      header: "Turmas Associadas",
      render: (row: DisciplinaRow) => (
        <div className="flex flex-wrap gap-1">
          {row.turmas.length > 0 ? (
            row.turmas.map((t) => (
              <Badge key={t} variant="outline" className="text-xs">
                {t}
              </Badge>
            ))
          ) : (
            <span className="text-xs text-muted-foreground italic">
              Nenhuma turma
            </span>
          )}
        </div>
      ),
    },
  ]

  // CORRECÇÃO: Lógica para alternar objectos em vez de apenas IDs
  const toggleTurma = (turmaId: number) => {
    setFormData((prev) => {
      const existe = prev.turmaConfigs.find((t) => t.id_turma === turmaId)
      if (existe) {
        return {
          ...prev,
          turmaConfigs: prev.turmaConfigs.filter((t) => t.id_turma !== turmaId),
        }
      } else {
        return {
          ...prev,
          turmaConfigs: [...prev.turmaConfigs, { id_turma: turmaId, aulas_por_semana: 2 }],
        }
      }
    })
  }

  const updateAulasPorSemana = (turmaId: number, aulas: number) => {
    setFormData((prev) => ({
      ...prev,
      turmaConfigs: prev.turmaConfigs.map(t => 
        t.id_turma === turmaId ? { ...t, aulas_por_semana: aulas } : t
      )
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setFieldErrors({})

    if (!formData.id_tipoSala) {
      setError("Por favor, selecione um tipo de sala.")
      return
    }

    const fd = new FormData()
    fd.append("descricao_disciplina", formData.nome)
    fd.append("id_tipoSala", formData.id_tipoSala)

    startTransition(async () => {
      let result
      if (editingDisciplina) {
        result = await atualizarDisciplina(editingDisciplina.id, fd)
        if (result.success) {
          // CORRECÇÃO: Passando o array de objectos correcto
          await atualizarTurmasDaDisciplina(editingDisciplina.id, formData.turmaConfigs)
        }
      } else {
        result = await criarDisciplina(fd)
        if (result.success && result.data) {
          await atualizarTurmasDaDisciplina(result.data.id_disciplina, formData.turmaConfigs)
        }
      }

      if (result.success) {
        resetForm()
        router.refresh()
      } else {
        if (result.errors) {
          setFieldErrors(result.errors as Record<string, string[]>)
        }
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetForm = () => {
    setFormData({ 
      nome: "", 
      id_tipoSala: tiposSala[0]?.id_tipoSala?.toString() || "", 
      turmaConfigs: [] 
    })
    setEditingDisciplina(null)
    setError(null)
    setFieldErrors({})
    setIsOpen(false)
  }

  const handleEdit = (disciplina: DisciplinaRow) => {
    // CORRECÇÃO: Mapear para o formato de objecto esperado ao carregar para edição
    const associatedConfigs = turmas
      .filter((t) => t.turmaDisciplinas.some((td) => td.disciplina.descricao_disciplina === disciplina.nome))
      .map((t) => ({ id_turma: t.id_turma, aulas_por_semana: 2 })) // Ajuste conforme a lógica de aulas do seu DB

    setEditingDisciplina(disciplina)
    const existingData = disciplinas.find((d) => d.id_disciplina === disciplina.id)
    setFormData({ 
      nome: disciplina.nome, 
      id_tipoSala: existingData?.id_tipoSala ? String(existingData.id_tipoSala) : (tiposSala[0]?.id_tipoSala?.toString() || ""),
      turmaConfigs: associatedConfigs 
    })
    setError(null)
    setFieldErrors({})
    setIsOpen(true)
  }

  const handleDelete = (disciplina: DisciplinaRow) => {
    startTransition(async () => {
      const result = await apagarDisciplina(disciplina.id)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar disciplina")
      }
    })
  }

  const turmasByCurso = turmas.reduce<Record<string, TurmaData[]>>((acc, t) => {
    const nomeCurso = t.curso.descricao_curso
    if (!acc[nomeCurso]) acc[nomeCurso] = []
    acc[nomeCurso].push(t)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Disciplinas</h1>
          <p className="text-muted-foreground">
            Gerir disciplinas e suas associações com turmas
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => resetForm()}>
              <Plus className="h-4 w-4" />
              Nova Disciplina
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingDisciplina ? "Editar Disciplina" : "Nova Disciplina"}
              </DialogTitle>
              <DialogDescription>
                {editingDisciplina
                  ? "Atualize os dados da disciplina"
                  : "Preencha os dados para criar uma nova disciplina"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="nome">Nome da Disciplina</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: Matemática, Física..."
                    required
                  />
                  {fieldErrors.descricao_disciplina && (
                    <p className="text-[13px] font-medium text-destructive">
                      {fieldErrors.descricao_disciplina[0]}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="id_tipoSala">Tipo de Sala</Label>
                  <Select
                    value={formData.id_tipoSala}
                    onValueChange={(val) => setFormData({ ...formData, id_tipoSala: val })}
                  >
                    <SelectTrigger id="id_tipoSala">
                      <SelectValue placeholder="Selecione o tipo de sala..." />
                    </SelectTrigger>
                    <SelectContent>
                      {tiposSala.map((tipo) => (
                        <SelectItem key={tipo.id_tipoSala} value={tipo.id_tipoSala.toString()}>
                          {tipo.descricao_tipoSala}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldErrors.id_tipoSala && (
                    <p className="text-[13px] font-medium text-destructive">
                      {fieldErrors.id_tipoSala[0]}
                    </p>
                  )}
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      Turmas Associadas
                    </Label>
                    {formData.turmaConfigs.length > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {formData.turmaConfigs.length} seleccionada{formData.turmaConfigs.length !== 1 ? "s" : ""}
                      </Badge>
                    )}
                  </div>

                  {turmas.length > 0 ? (
                    <div className="rounded-lg border border-border bg-card max-h-56 overflow-y-auto">
                      {Object.entries(turmasByCurso).map(([curso, cursoTurmas], idx) => (
                        <div key={curso}>
                          {idx > 0 && <div className="border-t border-border/50" />}
                          <div className="px-3 py-2 bg-muted/30">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                              {curso}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-1 p-2">
                            {cursoTurmas.map((t) => {
                              // CORREÇÃO: Verificação de check agora olha para id_turma dentro do objeto
                              const isChecked = formData.turmaConfigs.some(config => config.id_turma === t.id_turma)
                              return (
                                <div
                                  key={t.id_turma}
                                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-md px-2.5 py-2 transition-all duration-150 ${isChecked
                                      ? "bg-primary/10 border border-primary/30"
                                      : "hover:bg-muted/50 border border-transparent"
                                    }`}
                                >
                                  <label
                                    htmlFor={`turma-${t.id_turma}`}
                                    className="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0"
                                  >
                                    <Checkbox
                                      id={`turma-${t.id_turma}`}
                                      checked={isChecked}
                                      onCheckedChange={() => toggleTurma(t.id_turma)}
                                      className="flex-shrink-0"
                                    />
                                    <div className="flex flex-col min-w-0 overflow-hidden">
                                      <span className="text-sm font-medium leading-tight truncate">
                                        {t.descricao_turma}
                                      </span>
                                      <span className="text-[10px] text-muted-foreground leading-tight truncate">
                                        {t.classe.descricao_classe}
                                      </span>
                                    </div>
                                  </label>
                                  {isChecked && (
                                    <div className="flex items-center gap-1.5 flex-shrink-0 sm:ml-4 ml-7">
                                      <span className="text-[11px] text-muted-foreground whitespace-nowrap">Aulas:</span>
                                      <Input 
                                        type="number" 
                                        min="1" 
                                        max="10" 
                                        className="h-7 w-12 text-[11px] px-1 text-center"
                                        value={formData.turmaConfigs.find(config => config.id_turma === t.id_turma)?.aulas_por_semana || 2}
                                        onChange={(e) => updateAulasPorSemana(t.id_turma, parseInt(e.target.value) || 1)}
                                      />
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-md border border-dashed border-border p-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        Nenhuma turma registada.
                      </p>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="rounded-md bg-destructive/15 p-3">
                    <p className="text-sm font-medium text-destructive">{error}</p>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "A guardar..." : editingDisciplina ? "Guardar" : "Criar"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl font-bold">{disciplinas.length}</p>
          <p className="text-sm text-muted-foreground">Disciplinas registadas</p>
        </div>
      </div>

      <DataTable
        data={rows}
        columns={columns}
        searchKey="nome"
        searchPlaceholder="Pesquisar disciplinas..."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}