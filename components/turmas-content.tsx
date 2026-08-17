// components/turmas-content.tsx
"use client"

import React, { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DataTable } from "@/components/data-table"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, GraduationCap, Layers, BookMarked, ArrowRight } from "lucide-react"
import {
  criarTurma, atualizarTurma, apagarTurma,
  criarClasse, atualizarClasse, apagarClasse,
  criarCurso, atualizarCurso, apagarCurso,
} from "@/app/turmas/turma-action"
import { useRouter } from "next/navigation"

// ══════════════════════════════════════════════════════════
// TYPES - CORRIGIDOS PARA BATER COM A BASE
// ══════════════════════════════════════════════════════════

interface ClasseData {
  id_classe: number
  descricao_classe: string
}

interface CursoData {
  id_curso: number
  descricao_curso: string
}

interface TipoSalaData {
  id_tipoSala: number
  descricao_tipoSala: string
}

interface SalaData {
  id_sala: number
  descricao_sala: string
  id_tipoSala?: number
  tipoSala?: TipoSalaData
}

interface TurmaData {
  id_turma: number
  descricao_turma: string
  id_curso: number
  id_classe: number
  id_sala: number | null
  quantidade_alunos: number
  curso: CursoData
  classe: ClasseData
  sala_preferencial: SalaData | null
}

interface TurmasContentProps {
  turmas: TurmaData[]
  classes: ClasseData[]
  cursos: CursoData[]
  salas: SalaData[]
}

interface TurmaRow extends TurmaData {
  id: number
}

interface ClasseRow extends ClasseData {
  id: number
}

interface CursoRow extends CursoData {
  id: number
}

// ══════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL
// ══════════════════════════════════════════════════════════

export function TurmasContent({ turmas, classes, cursos, salas }: TurmasContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("turmas")

  // ──────────────────────────────────────────────────────
  // STATE - TURMA (CORRIGIDO)
  // ──────────────────────────────────────────────────────
  const [turmaOpen, setTurmaOpen] = useState(false)
  const [editingTurma, setEditingTurma] = useState<TurmaRow | null>(null)
  const [turmaForm, setTurmaForm] = useState({
    descricao_turma: "",
    id_classe: 0,
    id_curso: 0,
    id_sala: 0,
    quantidade_alunos: 0,
  })

  // ──────────────────────────────────────────────────────
  // STATE - CLASSE
  // ──────────────────────────────────────────────────────
  const [classeOpen, setClasseOpen] = useState(false)
  const [editingClasse, setEditingClasse] = useState<ClasseRow | null>(null)
  const [classeForm, setClasseForm] = useState({ descricao_classe: "" })

  // ──────────────────────────────────────────────────────
  // STATE - CURSO
  // ──────────────────────────────────────────────────────
  const [cursoOpen, setCursoOpen] = useState(false)
  const [editingCurso, setEditingCurso] = useState<CursoRow | null>(null)
  const [cursoForm, setCursoForm] = useState({ descricao_curso: "" })

  // ══════════════════════════════════════════════════════════
  // MAPPED ROWS
  // ══════════════════════════════════════════════════════════

  const turmaRows: TurmaRow[] = turmas.map((t) => ({
    ...t,
    id: t.id_turma,
  }))

  const classeRows: ClasseRow[] = classes.map((c) => ({
    ...c,
    id: c.id_classe,
  }))

  const cursoRows: CursoRow[] = cursos.map((c) => ({
    ...c,
    id: c.id_curso,
  }))

  // ══════════════════════════════════════════════════════════
  // HANDLERS - TURMA (CORRIGIDOS)
  // ══════════════════════════════════════════════════════════

  const gerarDescricaoTurma = (id_classe: number, id_curso: number): string => {
    const classe = classes.find(c => c.id_classe === id_classe)
    const curso = cursos.find(c => c.id_curso === id_curso)
    
    if (classe && curso) {
      return `${classe.descricao_classe} - ${curso.descricao_curso}`
    }
    return ""
  }

  const handleTurmaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    if (!turmaForm.id_classe || !turmaForm.id_curso) {
      setError("É necessário seleccionar uma classe e um curso.")
      return
    }

    if (!turmaForm.id_sala) {
      setError("É necessário seleccionar uma sala.")
      return
    }

    if (!turmaForm.quantidade_alunos || turmaForm.quantidade_alunos <= 0) {
      setError("Quantidade de alunos deve ser maior que zero.")
      return
    }

    const fd = new FormData()
    fd.append("descricao_turma", turmaForm.descricao_turma)
    fd.append("id_classe", turmaForm.id_classe.toString())
    fd.append("id_curso", turmaForm.id_curso.toString())
    fd.append("id_sala", turmaForm.id_sala.toString())
    fd.append("quantidade_alunos", turmaForm.quantidade_alunos.toString())

    startTransition(async () => {
      const result = editingTurma
        ? await atualizarTurma(editingTurma.id_turma, fd)
        : await criarTurma(fd)
        
      if (result.success) {
        resetTurmaForm()
        router.refresh()
      } else {
        setError(result.message || "Ocorreu um erro inesperado")
      }
    })
  }

  const resetTurmaForm = () => {
    setTurmaForm({
      descricao_turma: "",
      id_classe: 0,
      id_curso: 0,
      id_sala: 0,
      quantidade_alunos: 0,
    })
    setEditingTurma(null)
    setError(null)
    setTurmaOpen(false)
  }

  const handleTurmaEdit = (turma: TurmaRow) => {
    setEditingTurma(turma)
    setTurmaForm({
      descricao_turma: turma.descricao_turma,
      id_classe: turma.id_classe,
      id_curso: turma.id_curso,
      id_sala: turma.id_sala ?? 0,
      quantidade_alunos: turma.quantidade_alunos,
    })
    setError(null)
    setTurmaOpen(true)
  }

  const handleTurmaDelete = (turma: TurmaRow) => {
    if (!confirm(`Tem certeza que deseja apagar a turma "${turma.descricao_turma}"?`)) {
      return
    }
    
    startTransition(async () => {
      const result = await apagarTurma(turma.id_turma)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar turma")
      }
    })
  }

  // ══════════════════════════════════════════════════════════
  // HANDLERS - CLASSE
  // ══════════════════════════════════════════════════════════

  const handleClasseSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    const fd = new FormData()
    fd.append("descricao_classe", classeForm.descricao_classe)

    startTransition(async () => {
      const result = editingClasse
        ? await atualizarClasse(editingClasse.id_classe, fd)
        : await criarClasse(fd)
        
      if (result.success) {
        resetClasseForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetClasseForm = () => {
    setClasseForm({ descricao_classe: "" })
    setEditingClasse(null)
    setError(null)
    setClasseOpen(false)
  }

  const handleClasseEdit = (classe: ClasseRow) => {
    setEditingClasse(classe)
    setClasseForm({ descricao_classe: classe.descricao_classe })
    setError(null)
    setClasseOpen(true)
  }

  const handleClasseDelete = (classe: ClasseRow) => {
    if (!confirm(`Tem certeza que deseja apagar a classe "${classe.descricao_classe}"?`)) {
      return
    }
    
    startTransition(async () => {
      const result = await apagarClasse(classe.id_classe)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar classe")
      }
    })
  }

  // ══════════════════════════════════════════════════════════
  // HANDLERS - CURSO
  // ══════════════════════════════════════════════════════════

  const handleCursoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    const fd = new FormData()
    fd.append("descricao_curso", cursoForm.descricao_curso)

    startTransition(async () => {
      const result = editingCurso
        ? await atualizarCurso(editingCurso.id_curso, fd)
        : await criarCurso(fd)
        
      if (result.success) {
        resetCursoForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetCursoForm = () => {
    setCursoForm({ descricao_curso: "" })
    setEditingCurso(null)
    setError(null)
    setCursoOpen(false)
  }

  const handleCursoEdit = (curso: CursoRow) => {
    setEditingCurso(curso)
    setCursoForm({ descricao_curso: curso.descricao_curso })
    setError(null)
    setCursoOpen(true)
  }

  const handleCursoDelete = (curso: CursoRow) => {
    if (!confirm(`Tem certeza que deseja apagar o curso "${curso.descricao_curso}"?`)) {
      return
    }
    
    startTransition(async () => {
      const result = await apagarCurso(curso.id_curso)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar curso")
      }
    })
  }

  // ══════════════════════════════════════════════════════════
  // RENDER
  // ══════════════════════════════════════════════════════════

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Turmas</h1>
        <p className="text-muted-foreground">Gerir turmas, classes e cursos do sistema</p>
      </div>

      {/* Cards de Resumo */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card 
          className={`cursor-pointer transition-all hover:shadow-md ${
            activeTab === "turmas" ? "border-primary bg-primary/5" : ""
          }`}
          onClick={() => setActiveTab("turmas")}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Turmas</p>
                <p className="text-2xl font-bold">{turmaRows.length}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
              <span>Ver lista completa</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all hover:shadow-md ${
            activeTab === "classes" ? "border-blue-500 bg-blue-500/5" : ""
          }`}
          onClick={() => setActiveTab("classes")}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Classes</p>
                <p className="text-2xl font-bold">{classeRows.length}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <Layers className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
              <span>Gerir classes</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all hover:shadow-md ${
            activeTab === "cursos" ? "border-green-500 bg-green-500/5" : ""
          }`}
          onClick={() => setActiveTab("cursos")}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Cursos</p>
                <p className="text-2xl font-bold">{cursoRows.length}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                <BookMarked className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
              <span>Gerir cursos</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        {/* ════════════════════════════════════════════════
            TAB: TURMAS
        ════════════════════════════════════════════════ */}
        <TabsContent value="turmas" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Lista de Turmas</h2>
            
            {/* Dialog Criar/Editar Turma */}
            <Dialog open={turmaOpen} onOpenChange={setTurmaOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2" onClick={resetTurmaForm}>
                  <Plus className="h-4 w-4" /> Nova Turma
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingTurma ? "Editar Turma" : "Nova Turma"}
                  </DialogTitle>
                  <DialogDescription>
                    Seleccione a classe e o curso. A descrição será gerada automaticamente.
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleTurmaSubmit}>
                  <div className="grid gap-6 py-4">
                    {/* Error Display */}
                    {error && (
                      <div className="text-sm text-destructive bg-destructive/10 rounded-md p-3 border border-destructive/20">
                        {error}
                      </div>
                    )}
                    {/* Selecção de Classe */}
                    <div className="grid gap-3">
                      <Label className="text-base font-semibold">Classe *</Label>
                      <RadioGroup
                        value={turmaForm.id_classe.toString()}
                        onValueChange={(value) => {
                          const id_classe = Number(value)
                          const descricao = gerarDescricaoTurma(id_classe, turmaForm.id_curso)
                          setTurmaForm({
                            ...turmaForm,
                            id_classe,
                            descricao_turma: descricao,
                          })
                        }}
                        className="grid grid-cols-2 gap-3"
                      >
                        {classes.map((classe) => (
                          <div key={classe.id_classe} className="flex items-center space-x-2">
                            <RadioGroupItem 
                              value={classe.id_classe.toString()} 
                              id={`classe-${classe.id_classe}`}
                            />
                            <Label 
                              htmlFor={`classe-${classe.id_classe}`}
                              className="font-normal cursor-pointer"
                            >
                              {classe.descricao_classe}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Selecção de Curso */}
                    <div className="grid gap-3">
                      <Label className="text-base font-semibold">Curso *</Label>
                      <RadioGroup
                        value={turmaForm.id_curso.toString()}
                        onValueChange={(value) => {
                          const id_curso = Number(value)
                          const descricao = gerarDescricaoTurma(turmaForm.id_classe, id_curso)
                          setTurmaForm({
                            ...turmaForm,
                            id_curso,
                            descricao_turma: descricao,
                          })
                        }}
                        className="grid grid-cols-2 gap-3"
                      >
                        {cursos.map((curso) => (
                          <div key={curso.id_curso} className="flex items-center space-x-2">
                            <RadioGroupItem 
                              value={curso.id_curso.toString()} 
                              id={`curso-${curso.id_curso}`}
                            />
                            <Label 
                              htmlFor={`curso-${curso.id_curso}`}
                              className="font-normal cursor-pointer"
                            >
                              {curso.descricao_curso}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Quantidade de Alunos */}
                    <div className="grid gap-2">
                      <Label htmlFor="sala">Sala *</Label>
                      <Select
                        value={turmaForm.id_sala ? turmaForm.id_sala.toString() : ""}
                        onValueChange={(value) =>
                          setTurmaForm({
                            ...turmaForm,
                            id_sala: Number(value),
                          })
                        }
                      >
                        <SelectTrigger id="sala">
                          <SelectValue placeholder="Seleccionar sala..." />
                        </SelectTrigger>
                        <SelectContent>
                          {salas.map((sala) => (
                            <SelectItem key={sala.id_sala} value={sala.id_sala.toString()}>
                              {sala.descricao_sala}
                              {sala.tipoSala?.descricao_tipoSala ? ` - ${sala.tipoSala.descricao_tipoSala}` : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Quantidade de Alunos */}
                    <div className="grid gap-2">
                      <Label htmlFor="quantidade">Quantidade de Alunos *</Label>
                      <Input
                        id="quantidade"
                        type="number"
                        min="1"
                        value={turmaForm.quantidade_alunos || ""}
                        onChange={(e) =>
                          setTurmaForm({
                            ...turmaForm,
                            quantidade_alunos: Number(e.target.value),
                          })
                        }
                        placeholder="Ex: 30"
                        required
                      />
                    </div>

                    {/* Preview da Descrição */}
                    {turmaForm.descricao_turma && (
                      <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                        <p className="text-xs uppercase font-semibold text-primary mb-1">
                          Nome da Turma
                        </p>
                        <p className="text-lg font-bold">{turmaForm.descricao_turma}</p>
                      </div>
                    )}
                  </div>
                  
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={resetTurmaForm}>
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={isPending}>
                      {isPending ? "A processar..." : "Guardar"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Tabela de Turmas */}
          <DataTable
            data={turmaRows}
            columns={[
              { key: "descricao_turma", header: "Turma" },
              { key: "classe", header: "Classe", render: (row: TurmaRow) => row.classe?.descricao_classe },
              { key: "curso", header: "Curso", render: (row: TurmaRow) => row.curso?.descricao_curso },
              { key: "sala_preferencial", header: "Sala", render: (row: TurmaRow) => row.sala_preferencial?.descricao_sala ?? "Sem sala" },
              { key: "quantidade_alunos", header: "Capacidade" },
            ]}
            searchKey="descricao_turma"
            searchPlaceholder="Pesquisar turmas..."
            onEdit={handleTurmaEdit}
            onDelete={handleTurmaDelete}
          />
        </TabsContent>

        {/* ════════════════════════════════════════════════
            TAB: CLASSES
        ════════════════════════════════════════════════ */}
        <TabsContent value="classes" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Lista de Classes</h2>
            
            <Dialog open={classeOpen} onOpenChange={setClasseOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2" onClick={resetClasseForm}>
                  <Plus className="h-4 w-4" /> Nova Classe
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingClasse ? "Editar Classe" : "Nova Classe"}
                  </DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleClasseSubmit}>
                  <div className="grid gap-4 py-4">
                    {error && (
                      <div className="text-sm text-destructive bg-destructive/10 rounded-md p-3 border border-destructive/20">
                        {error}
                      </div>
                    )}
                    <div className="grid gap-2">
                      <Label htmlFor="classe-nome">Nome da Classe</Label>
                      <Input
                        id="classe-nome"
                        value={classeForm.descricao_classe}
                        onChange={(e) =>
                          setClasseForm({ ...classeForm, descricao_classe: e.target.value })
                        }
                        placeholder="Ex: 10ª Classe"
                        required
                      />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={resetClasseForm}>
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={isPending}>
                      {isPending ? "A guardar..." : "Guardar"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <DataTable
            data={classeRows}
            columns={[
              { key: "id_classe", header: "ID" },
              { key: "descricao_classe", header: "Descrição" },
            ]}
            searchKey="descricao_classe"
            searchPlaceholder="Pesquisar classes..."
            onEdit={handleClasseEdit}
            onDelete={handleClasseDelete}
          />
        </TabsContent>

        {/* ════════════════════════════════════════════════
            TAB: CURSOS
        ════════════════════════════════════════════════ */}
        <TabsContent value="cursos" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Lista de Cursos</h2>
            
            <Dialog open={cursoOpen} onOpenChange={setCursoOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2" onClick={resetCursoForm}>
                  <Plus className="h-4 w-4" /> Novo Curso
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingCurso ? "Editar Curso" : "Novo Curso"}
                  </DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleCursoSubmit}>
                  <div className="grid gap-4 py-4">
                    {error && (
                      <div className="text-sm text-destructive bg-destructive/10 rounded-md p-3 border border-destructive/20">
                        {error}
                      </div>
                    )}
                    <div className="grid gap-2">
                      <Label htmlFor="curso-nome">Nome do Curso</Label>
                      <Input
                        id="curso-nome"
                        value={cursoForm.descricao_curso}
                        onChange={(e) =>
                          setCursoForm({ ...cursoForm, descricao_curso: e.target.value })
                        }
                        placeholder="Ex: Informática"
                        required
                      />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={resetCursoForm}>
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={isPending}>
                      {isPending ? "A guardar..." : "Guardar"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <DataTable
            data={cursoRows}
            columns={[
              { key: "id_curso", header: "ID" },
              { key: "descricao_curso", header: "Descrição" },
            ]}
            searchKey="descricao_curso"
            searchPlaceholder="Pesquisar cursos..."
            onEdit={handleCursoEdit}
            onDelete={handleCursoDelete}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
