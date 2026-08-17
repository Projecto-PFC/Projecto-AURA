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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DataTable } from "@/components/data-table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Plus, DoorOpen, Trash2, FolderPlus, Info } from "lucide-react"

import { criarSala, atualizarSala, apagarSala, criarTipoSala, apagarTipoSala } from "@/app/salas/salas-action"
import { useRouter } from "next/navigation"

interface TipoSalaData {
  id_tipoSala: number
  descricao_tipoSala: string
}

interface SalaData {
  id_sala: number
  descricao_sala: string
  capacidade: number
  id_tipoSala: number
  tipoSala: TipoSalaData
}

interface SalasContentProps {
  salas: SalaData[]
  tiposSala: TipoSalaData[]
}

export function SalasContent({ salas, tiposSala }: SalasContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  
  const [isOpen, setIsOpen] = useState(false)
  const [editingSala, setEditingSala] = useState<SalaData | null>(null)
  
  const [formData, setFormData] = useState({
    nome: "",
    capacidade: "",
    id_tipoSala: "",
  })

  // States for TipoSala management
  const [tipoFormDescricao, setTipoFormDescricao] = useState("")
  const [tipoError, setTipoError] = useState<string | null>(null)
  const [tipoSuccess, setTipoSuccess] = useState<string | null>(null)

  // Format array for DataTable
  const dataTableRows = salas.map(s => ({
    ...s,
    id: s.id_sala
  }))

  const columns = [
    { key: "descricao_sala" as const, header: "Sala" },
    {
      key: "capacidade" as const,
      header: "Capacidade",
      render: (sala: SalaData) => `${sala.capacidade} lugares`,
    },
    {
      key: "tipoSala" as const,
      header: "Tipo",
      render: (sala: SalaData) => (
        <Badge className="bg-primary/15 text-primary border border-primary/20 hover:bg-primary/25 transition-colors">
          {sala.tipoSala?.descricao_tipoSala || "Não definido"}
        </Badge>
      ),
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.id_tipoSala) {
      alert("Por favor, selecione um tipo de sala.")
      return
    }

    const fd = new FormData()
    fd.append("descricao_sala", formData.nome)
    fd.append("capacidade", formData.capacidade)
    fd.append("id_tipoSala", formData.id_tipoSala)

    startTransition(async () => {
      let result;
      if (editingSala) {
        result = await atualizarSala(editingSala.id_sala, fd)
      } else {
        result = await criarSala(fd)
      }

      if (result.success) {
        resetForm()
        router.refresh()
      } else {
        alert(result.message)
      }
    })
  }

  const resetForm = () => {
    setFormData({ 
      nome: "", 
      capacidade: "", 
      id_tipoSala: tiposSala[0]?.id_tipoSala?.toString() || "" 
    })
    setEditingSala(null)
    setIsOpen(false)
  }

  const handleEdit = (sala: SalaData) => {
    setEditingSala(sala)
    setFormData({
      nome: sala.descricao_sala,
      capacidade: String(sala.capacidade),
      id_tipoSala: String(sala.id_tipoSala),
    })
    setIsOpen(true)
  }

  const handleDelete = (sala: SalaData) => {
    if (!confirm(`Tem certeza que deseja apagar a sala "${sala.descricao_sala}"?`)) return;

    startTransition(async () => {
      const result = await apagarSala(sala.id_sala)
      if (result.success) {
        router.refresh()
      } else {
        alert(result.message)
      }
    })
  }

  const handleCreateTipoSala = (e: React.FormEvent) => {
    e.preventDefault()
    setTipoError(null)
    setTipoSuccess(null)

    if (!tipoFormDescricao.trim()) {
      setTipoError("A descrição do tipo de sala é obrigatória.")
      return
    }

    const fd = new FormData()
    fd.append("descricao_tipoSala", tipoFormDescricao)

    startTransition(async () => {
      const result = await criarTipoSala(fd)
      if (result.success) {
        setTipoFormDescricao("")
        setTipoSuccess("Tipo de sala criado com sucesso!")
        router.refresh()
      } else {
        setTipoError(result.message || "Erro ao criar tipo de sala.")
      }
    })
  }

  const handleDeleteTipoSala = (tipo: TipoSalaData) => {
    setTipoError(null)
    setTipoSuccess(null)
    if (!confirm(`Tem certeza que deseja apagar o tipo de sala "${tipo.descricao_tipoSala}"?`)) return;

    startTransition(async () => {
      const result = await apagarTipoSala(tipo.id_tipoSala)
      if (result.success) {
        setTipoSuccess("Tipo de sala apagado com sucesso!")
        router.refresh()
      } else {
        setTipoError(result.message || "Erro ao apagar tipo de sala.")
      }
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Salas</h1>
          <p className="text-muted-foreground">
            Gerir salas e espaços disponíveis da instituição
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => resetForm()}>
              <Plus className="h-4 w-4" />
              Nova Sala
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingSala ? "Editar Sala" : "Nova Sala"}
              </DialogTitle>
              <DialogDescription>
                {editingSala
                  ? "Atualize os dados da sala"
                  : "Preencha os dados para adicionar uma nova sala"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="nome">Nome da Sala</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: Sala 101"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="capacidade">Capacidade</Label>
                    <Input
                      id="capacidade"
                      type="number"
                      value={formData.capacidade}
                      onChange={(e) => setFormData({ ...formData, capacidade: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="id_tipoSala">Tipo</Label>
                    <Select
                      value={formData.id_tipoSala}
                      onValueChange={(value) => setFormData({ ...formData, id_tipoSala: value })}
                    >
                      <SelectTrigger id="id_tipoSala">
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        {tiposSala.map((tipo) => (
                          <SelectItem key={tipo.id_tipoSala} value={tipo.id_tipoSala.toString()}>
                            {tipo.descricao_tipoSala}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={resetForm} disabled={isPending}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "A processar..." : editingSala ? "Guardar" : "Adicionar"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <DoorOpen className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl font-bold">{salas.length}</p>
          <p className="text-sm text-muted-foreground">
            Salas registadas
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rooms Table */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Lista de Salas</CardTitle>
              <CardDescription>Visualizar, editar e remover salas de aula</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                data={dataTableRows}
                columns={columns}
                searchKey="descricao_sala"
                searchPlaceholder="Pesquisar salas..."
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </CardContent>
          </Card>
        </div>

        {/* TipoSala Management Section */}
        <div className="space-y-4">
          <Card className="border-primary/10 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-primary">
                <FolderPlus className="h-5 w-5" />
                <CardTitle className="text-xl">Tipos de Sala</CardTitle>
              </div>
              <CardDescription>
                Gerir categorias utilizadas para associar salas a disciplinas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Feedback messages */}
              {tipoError && (
                <div className="p-3 text-xs bg-destructive/10 text-destructive border border-destructive/20 rounded-md flex items-start gap-2">
                  <Info className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{tipoError}</span>
                </div>
              )}
              {tipoSuccess && (
                <div className="p-3 text-xs bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-md flex items-start gap-2">
                  <Info className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{tipoSuccess}</span>
                </div>
              )}

              {/* Form to create new type */}
              <form onSubmit={handleCreateTipoSala} className="flex gap-2">
                <Input
                  placeholder="Novo tipo de sala..."
                  value={tipoFormDescricao}
                  onChange={(e) => setTipoFormDescricao(e.target.value)}
                  className="h-9 text-sm"
                  disabled={isPending}
                />
                <Button type="submit" size="sm" className="h-9 shrink-0" disabled={isPending}>
                  {isPending ? "..." : "Adicionar"}
                </Button>
              </form>

              {/* List of existing types */}
              <div className="border border-border rounded-md overflow-hidden max-h-[300px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 text-muted-foreground font-medium border-b border-border">
                    <tr>
                      <th className="py-2 px-3 text-left">Descrição</th>
                      <th className="py-2 px-3 text-right w-10">Acções</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {tiposSala.map((tipo) => (
                      <tr key={tipo.id_tipoSala} className="hover:bg-muted/30 transition-colors">
                        <td className="py-2 px-3 font-medium">{tipo.descricao_tipoSala}</td>
                        <td className="py-2 px-3 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            onClick={() => handleDeleteTipoSala(tipo)}
                            disabled={isPending}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Eliminar</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {tiposSala.length === 0 && (
                      <tr>
                        <td colSpan={2} className="py-4 text-center text-muted-foreground text-xs">
                          Nenhum tipo de sala registado.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
