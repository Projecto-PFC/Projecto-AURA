import { DashboardLayout } from "@/components/dashboard-layout"
import { DisciplinasContent } from "@/components/disciplinas-content"
import { listarTodas, listarTurmas } from "./disciplinas-action"
import { listarTiposSala } from "@/app/salas/sala-action"

export default async function DisciplinasPage() {
  const [disciplinas, turmas, tiposSala] = await Promise.all([
    listarTodas(),
    listarTurmas(),
    listarTiposSala(),
  ])

  return (
    <DashboardLayout>
      <DisciplinasContent disciplinas={disciplinas} turmas={turmas} tiposSala={tiposSala} />
    </DashboardLayout>
  )
}
