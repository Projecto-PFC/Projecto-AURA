"use client"

import React, { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DataTable } from "@/components/data-table"
import { Plus, BookOpen } from "lucide-react"
import { criarDisciplina, atualizarDisciplina, apagarDisciplina } from "@/app/disciplinas/disciplinas-action"
import { useRouter } from "next/navigation"

interface DisciplinaData {
  nome_disciplina: string  // ← era idDisciplina: number + nome: string
}

interface DisciplinaRow extends DisciplinaData {
  id: string  // ← o id agora é o nome_disciplina
}

interface DisciplinasContentProps {
  disciplinas: DisciplinaData[]
}

export function DisciplinasContent({ disciplinas }: DisciplinasContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingDisciplina, setEditingDisciplina] = useState<DisciplinaData | null>(null)
  const [formData, setFormData] = useState({ nome_disciplina: "" })
  const [error, setError] = useState<string | null>(null)

  const rows: DisciplinaRow[] = disciplinas.map((d) => ({
    ...d,
    id: d.nome_disciplina,  // id é o nome — é a PK no teu schema
  }))

  const columns = [
    { key: "nome_disciplina" as const, header: "Nome" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const fd = new FormData()
    fd.append("nome_disciplina", formData.nome_disciplina)

    startTransition(async () => {
      let result
      if (editingDisciplina) {
        // passa o nome como identificador — é a PK
        result = await atualizarDisciplina(editingDisciplina.nome_disciplina, fd)
      } else {
        result = await criarDisciplina(fd)
      }

      if (result.success) {
        resetForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetForm = () => {
    setFormData({ nome_disciplina: "" })
    setEditingDisciplina(null)
    setError(null)
    setIsOpen(false)
  }

  const handleEdit = (disciplina: DisciplinaRow) => {
    setEditingDisciplina(disciplina)
    setFormData({ nome_disciplina: disciplina.nome_disciplina })
    setError(null)
    setIsOpen(true)
  }

  const handleDelete = (disciplina: DisciplinaRow) => {
    startTransition(async () => {
      // passa o nome — é o que o service espera
      const result = await apagarDisciplina(disciplina.nome_disciplina)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar disciplina")
      }
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Disciplinas</h1>
          <p className="text-muted-foreground">Gerir disciplinas e cargas horárias</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => resetForm()}>
              <Plus className="h-4 w-4" />
              Nova Disciplina
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingDisciplina ? "Editar Disciplina" : "Nova Disciplina"}
              </DialogTitle>
              <DialogDescription>
                {editingDisciplina
                  ? "Actualize os dados da disciplina"
                  : "Preencha os dados para criar uma nova disciplina"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="nome_disciplina">Nome</Label>
                  <Input
                    id="nome_disciplina"
                    value={formData.nome_disciplina}
                    onChange={(e) => setFormData({ ...formData, nome_disciplina: e.target.value })}
                    placeholder="Ex: Matemática"
                    required
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
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
        searchKey="nome_disciplina"
        searchPlaceholder="Pesquisar disciplinas..."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}