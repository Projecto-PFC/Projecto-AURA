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
import { Plus, Users } from "lucide-react"
import { criarProfessor, atualizarProfessor, apagarProfessor } from "@/app/professores/professores-action"
import { useRouter } from "next/navigation"

interface Disciplina {
  nome_disciplina: string
}

interface ProfessorData {
  id_professor: number
  nome: string
  email: string | null
  telefone: string | null
  ProfDisciplinas: {
    Disciplina: Disciplina
  }[]
}

interface ProfessorRow {
  id: number
  id_professor: number
  nome: string
  email: string
  telefone: string
  disciplinas: string[]
  disciplinaNomes: string[]
}

function mapProfessores(professores: ProfessorData[]): ProfessorRow[] {
  return professores.map((p) => ({
    id: p.id_professor,
    id_professor: p.id_professor,
    nome: p.nome,
    email: p.email || "",
    telefone: p.telefone || "",
    disciplinas: p.ProfDisciplinas.map(
      (pd) => pd.Disciplina.nome_disciplina
    ),
    disciplinaNomes: p.ProfDisciplinas.map(
      (pd) => pd.Disciplina.nome_disciplina
    ),
  }))
}

interface ProfessoresContentProps {
  professores: ProfessorData[]
  disciplinas: Disciplina[]
}

export function ProfessoresContent({ professores, disciplinas }: ProfessoresContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingProfessor, setEditingProfessor] = useState<ProfessorRow | null>(null)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    disciplinaNomes: [] as string[],
  })
  const [error, setError] = useState<string | null>(null)

  const rows = mapProfessores(professores)

  const columns = [
    { key: "nome" as const, header: "Nome" },
    { key: "email" as const, header: "Email" },
    { key: "telefone" as const, header: "Telefone" },
    {
      key: "disciplinas",
      header: "Disciplinas",
      render: (professor: ProfessorRow) => (
        <div className="flex flex-wrap gap-1">
          {professor.disciplinas.map((d) => (
            <Badge key={d} variant="outline" className="text-xs">
              {d}
            </Badge>
          ))}
        </div>
      ),
    },
  ]

  const toggleDisciplina = (nome: string) => {
    setFormData((prev) => ({
      ...prev,
      disciplinaNomes: prev.disciplinaNomes.includes(nome)
        ? prev.disciplinaNomes.filter((d) => d !== nome)
        : [...prev.disciplinaNomes, nome],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const fd = new FormData()
    fd.append("nome", formData.nome)
    fd.append("email", formData.email)
    fd.append("telefone", formData.telefone)
    formData.disciplinaNomes.forEach((nome) =>
      fd.append("disciplinaNomes", nome)
    )

    startTransition(async () => {
      const result = editingProfessor
        ? await atualizarProfessor(editingProfessor.id_professor, fd)
        : await criarProfessor(fd)

      if (result.success) {
        resetForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetForm = () => {
    setFormData({ nome: "", email: "", telefone: "", disciplinaNomes: [] })
    setEditingProfessor(null)
    setError(null)
    setIsOpen(false)
  }

  const handleEdit = (professor: ProfessorRow) => {
    setEditingProfessor(professor)
    setFormData({
      nome: professor.nome,
      telefone: professor.telefone,
      email: professor.email,
      disciplinaNomes: professor.disciplinaNomes,
    })
    setIsOpen(true)
  }

  const handleDelete = (professor: ProfessorRow) => {
    startTransition(async () => {
      const result = await apagarProfessor(professor.id_professor)
      if (result.success) router.refresh()
      else setError(result.message || "Erro ao apagar professor")
    })
  }

  return (
    <div className="space-y-6">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={resetForm}>
            <Plus className="h-4 w-4" />
            Adicionar Professor
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingProfessor ? "Editar Professor" : "Novo Professor"}
            </DialogTitle>
            <DialogDescription>
              Preencha os dados do professor
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <Input
                placeholder="Nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
              />

              <Input
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <Input
                placeholder="Telefone"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                required
              />

              <div className="grid gap-2">
                {disciplinas.map((d) => (
                  <div key={d.nome_disciplina} className="flex items-center gap-2">
                    <Checkbox
                      checked={formData.disciplinaNomes.includes(d.nome_disciplina)}
                      onCheckedChange={() => toggleDisciplina(d.nome_disciplina)}
                    />
                    <Label>{d.nome_disciplina}</Label>
                  </div>
                ))}
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}
            </div>

            <DialogFooter>
              <Button type="submit" disabled={isPending}>
                Guardar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <DataTable
        data={rows}
        columns={columns}
        searchKey="nome"
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}