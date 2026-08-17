import { DashboardLayout } from "@/components/dashboard-layout"
import { SalasContent } from "@/components/salas-content"
import { prisma } from "@/lib/prisma"

export default async function SalasPage() {
  const salas = await prisma.sala.findMany({
    include: {
      tipoSala: true
    }
  });

  salas.sort((a, b) => 
    a.descricao_sala.localeCompare(b.descricao_sala, undefined, { numeric: true, sensitivity: 'base' })
  );

  const tiposSala = await prisma.tipoSala.findMany({
    orderBy: {
      descricao_tipoSala: 'asc'
    }
  });

  return (
    <DashboardLayout>
      <SalasContent salas={salas} tiposSala={tiposSala} />
    </DashboardLayout>
  )
}
