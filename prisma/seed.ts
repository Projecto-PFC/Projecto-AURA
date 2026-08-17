import { PrismaClient } from "../lib/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({connectionString});
const prisma = new PrismaClient({adapter});
export { prisma };

interface Classe {
  id_classe: number;
  descricao_classe: string;
}

interface Curso {
  id_curso: number;
  descricao_curso: string;
}

interface Turma {
  id_turma: number;
  id_classe: number;
  id_curso: number;
  descricao_turma: string;
  quantidade_alunos: number;
}

interface Sala {
  id_sala: number;
  descricao_sala: string;
  id_tipoSala: number;
  capacidade: number;
}

async function main() {
  console.log("🚀 Iniciando Seed...");

  // 1. Dados Estáticos
  const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  const periodos = ["Manhã", "Tarde"];
  const classesData = ["10ª Classe", "11ª Classe", "12ª Classe", "13ª Classe"];
  const cursosData = ["Informática", "Contabilidade e Gestão", "Ciências Económicas e Jurídicas", "Ciências Físicas e Biológicas", "Electrónica", "Obras de Construcção Civil"];

  for (const d of dias) await prisma.diaSemana.upsert({ where: { descricao_dia: d }, update: {}, create: { descricao_dia: d } });   console.log(`✅ ${dias.length} Dias criados.`);

  for (const p of periodos) await prisma.periodo.upsert({ where: { descricao_periodo: p }, update: {}, create: { descricao_periodo: p } });   console.log(`✅ ${periodos.length} Períodos criados.`);

  const classes: Classe[] = [];
  for (const c of classesData) {
    const classe = await prisma.classe.upsert(
      { where: { descricao_classe: c }, update: {}, create: { descricao_classe: c } }
    )   
    classes.push(classe);
  }

  console.log(`✅ ${classesData.length} Classes criadas.`);

  const cursos: Curso[] = [];
  for (const cu of cursosData) {
    const curso = await prisma.curso.upsert(
      { where: { descricao_curso: cu }, update: {}, create: { descricao_curso: cu } });   
    cursos.push(curso);
  }

  console.log(`✅ ${cursosData.length} Cursos criados.`);

  // 1.5. Tipos de Sala
  const tiposSalaData = ["Normal", "Laboratório de Informática", "Oficina", "Campo"];
  const tiposSalaMap = new Map<string, number>();

  for (const t of tiposSalaData) {
    const ts = await prisma.tipoSala.upsert({
      where: { descricao_tipoSala: t },
      update: {},
      create: { descricao_tipoSala: t }
    });
    tiposSalaMap.set(t.toLowerCase(), ts.id_tipoSala);
  }
  console.log(`✅ ${tiposSalaData.length} Tipos de Sala criados.`);

  // 2. Salas
  const salasData = [
    { nome: "Sala 1", cap: 20, tipo: "normal" }, { nome: "Sala 2", cap: 20, tipo: "normal" },
    { nome: "Sala 3", cap: 20, tipo: "normal" }, { nome: "Sala 4", cap: 20, tipo: "normal" },
    { nome: "Sala 5", cap: 20, tipo: "normal" }, { nome: "Sala 6", cap: 30, tipo: "normal" },
    { nome: "Sala 7", cap: 30, tipo: "normal" }, { nome: "Sala 8", cap: 20, tipo: "normal" },
    { nome: "Sala 9", cap: 20, tipo: "normal" }, { nome: "Sala 10", cap: 20, tipo: "normal" },
    { nome: "Sala 11", cap: 25, tipo: "normal" }, { nome: "Sala 12", cap: 25, tipo: "normal" },
    { nome: "Sala 13", cap: 20, tipo: "normal" }, { nome: "Sala 14", cap: 20, tipo: "normal" },
    { nome: "Sala 15", cap: 20, tipo: "normal" }, { nome: "Sala 16", cap: 25, tipo: "normal" },
    { nome: "Sala 17", cap: 25, tipo: "normal" }, { nome: "Sala 18", cap: 20, tipo: "normal" },
    { nome: "Sala 19", cap: 20, tipo: "normal" }, { nome: "Sala 20", cap: 20, tipo: "normal" },
    { nome: "Sala 21", cap: 25, tipo: "normal" }, { nome: "Sala 22", cap: 25, tipo: "normal" },
    { nome: "Lab INF 1", cap: 30, tipo: "Laboratório de Informática" },
    { nome: "Lab INF 2", cap: 30, tipo: "Laboratório de Informática" },
    { nome: "Oficina", cap: 40, tipo: "Oficina" },
    { nome: "Campo", cap: 50, tipo: "Campo" }
  ];

  const salas: Sala[] = [];
  for (const s of salasData) {
    const id_tipoSala = tiposSalaMap.get(s.tipo.toLowerCase()) || tiposSalaMap.get("normal")!;
    const sala = await prisma.sala.upsert({
      where: { descricao_sala: s.nome },
      update: { capacidade: s.cap, id_tipoSala },
      create: { descricao_sala: s.nome, capacidade: s.cap, id_tipoSala }
    });
    salas.push(sala)
  }

  console.log(`✅ ${salas.length} Salas criadas.`);

  // 3. Turmas (Vinculadas a Classes e Cursos)
  const turmas = [];
  let i = 0
  for (const classe of classes) {
    for (const curso of cursos) {
      if ((classe.descricao_classe !== "13ª Classe") || (curso.descricao_curso !== "Ciências Físicas e Biológicas" && curso.descricao_curso !== "Ciências Económicas e Jurídicas")) {
        const desc_turma = `${classe.descricao_classe} - ${curso.descricao_curso}`;
        const turma = await prisma.turma.upsert({
          where: { descricao_turma: desc_turma },
          update: { id_classe: classe.id_classe, id_curso: curso.id_curso },
          create: {
            descricao_turma: desc_turma,
            id_classe: classe.id_classe,
            id_curso: curso.id_curso,
            id_sala: salas[i % salas.length].id_sala,
            quantidade_alunos: 30
          },
        });
        turmas.push(turma);
        i++;
      }
    }
  }

  console.log(`✅ ${turmas.length} turmas criadas/verificadas`);

  // 4. Disciplinas
  const disciplinas = [
    { nome: "An.Eco.Fin.", tipo: "Normal" },
    { nome: "Biologia", tipo: "Normal" },
    { nome: "Cont.Analit.", tipo: "Normal" },
    { nome: "Cont.Financ.", tipo: "Normal" },
    { nome: "D.C.C.", tipo: "Normal" },
    { nome: "D.L.C.", tipo: "Normal" },
    { nome: "D.L.F.", tipo: "Normal" },
    { nome: "DCC.Autocad", tipo: "Normal" },
    { nome: "Des.Ec.Social", tipo: "Normal" },
    { nome: "Desenho Téc.", tipo: "Normal" },
    { nome: "Ed. Física", tipo: "Campo" },
    { nome: "Electrotecnia", tipo: "Normal" },
    { nome: "Elect.Electrón.", tipo: "Normal" },
    { nome: "Empreend.", tipo: "Normal" },
    { nome: "F.A.I.", tipo: "Normal" },
    { nome: "Filosofia", tipo: "Normal" },
    { nome: "Fiscalidade C.A.I.", tipo: "Normal" },
    { nome: "Física", tipo: "Normal" },
    { nome: "Geografia", tipo: "Normal" },
    { nome: "Geologia", tipo: "Normal" },
    { nome: "Geom. Desc.", tipo: "Normal" },
    { nome: "História", tipo: "Normal" },
    { nome: "História Ec.Soc.", tipo: "Normal" },
    { nome: "Infor.A.C.G.", tipo: "Laboratório de Informática" },
    { nome: "Informática", tipo: "Laboratório de Informática" },
    { nome: "Int.Direito", tipo: "Normal" },
    { nome: "Int.Economia", tipo: "Normal" },
    { nome: "L. Inglesa", tipo: "Normal" },
    { nome: "L. Portuguesa", tipo: "Normal" },
    { nome: "Matemática", tipo: "Normal" },
    { nome: "Medições O.", tipo: "Normal" },
    { nome: "Medições-Plan.", tipo: "Normal" },
    { nome: "Metodolog.T.A.", tipo: "Normal" },
    { nome: "Noc.Direito", tipo: "Normal" },
    { nome: "O.G.E.", tipo: "Normal" },
    { nome: "O.G.I.", tipo: "Normal" },
    { nome: "Projecto Téc.", tipo: "Normal" },
    { nome: "Prát.Oficinal", tipo: "Normal" },
    { nome: "Práticas.Ofic.", tipo: "Normal" },
    { nome: "Química", tipo: "Normal" },
    { nome: "S.E.A.C.", tipo: "Normal"},
    { nome: "Sist.Digitais", tipo: "Normal" },
    { nome: "Sociologia", tipo: "Normal" },
    { nome: "T.C.C.", tipo: "Normal" },
    { nome: "T.C.E.", tipo: "Normal" },
    { nome: "T.C.O.-I.E.U.", tipo: "Normal" },
    { nome: "T.C.O.Edifícios", tipo: "Normal" },
    { nome: "T.I.C.", tipo: "Laboratório de Informática"},
    { nome: "T.L.P.", tipo: "Laboratório de Informática"},
    { nome: "T.R.E.I.", tipo: "Oficina"},
    { nome: "T.Topografia", tipo: "Normal" },
    { nome: "Tecnol.Telec.", tipo: "Normal" },
    { nome: "Telecomunic.", tipo: "Normal" },
  ];
  
  for (const d of disciplinas) {
    const id_tipoSala = tiposSalaMap.get(d.tipo.toLowerCase()) || tiposSalaMap.get("normal")!;
    await prisma.disciplina.upsert({
      where: { descricao_disciplina: d.nome },
      update: { id_tipoSala },
      create: { descricao_disciplina: d.nome, id_tipoSala }
    });
  }
  console.log(`✅ ${disciplinas.length} Disciplinas criadas.`);

  // 5. Professores (Diferenciados por email único)
  const professores = [
    { nome: "Mário Teste", email: "mriocapitango.teste@escola.ao", tel: "939000000" },
    { nome: "L.Magalhães Teste", email: "lmagalhes.teste@escola.ao", tel: "939000001" },
    { nome: "Kapoco Teste", email: "kapoco.teste@escola.ao", tel: "939000002" },
    { nome: "Genildo Teste", email: "genildo.teste@escola.ao", tel: "939000003" },
    { nome: "Emerson Teste", email: "emerson.teste@escola.ao", tel: "939000004" },
    { nome: "Sapalalo Teste", email: "sapalalo.teste@escola.ao", tel: "939000005" },
    { nome: "Eduardo Teste", email: "eduardo.teste@escola.ao", tel: "939000006" },
    { nome: "Bibiana Teste", email: "bibiana.teste@escola.ao", tel: "939000007" },
    { nome: "J. Teste", email: "jjacinto.teste@escola.ao", tel: "939000008" },
    { nome: "Abrantes Teste", email: "abrantes.teste@escola.ao", tel: "939000009" },
    { nome: "Olívia Teste", email: "olvia.teste@escola.ao", tel: "939000010" },
    { nome: "Abílio Teste", email: "ablio.teste@escola.ao", tel: "939000011" },
    { nome: "Alexandre Teste", email: "alexandre.teste@escola.ao", tel: "939000012" },
    { nome: "Salopa Teste", email: "salopa.teste@escola.ao", tel: "939000013" },
    { nome: "Daniel Teste", email: "daniel.teste@escola.ao", tel: "939000014" },
    { nome: "J.Roxo Teste", email: "jroxo.teste@escola.ao", tel: "939000015" },
    { nome: "Tito Teste", email: "tito.teste@escola.ao", tel: "939000016" },
    { nome: "Maura Teste", email: "maura.teste@escola.ao", tel: "939000017" },
    { nome: "Catarina Teste", email: "catarina.teste@escola.ao", tel: "939000018" },
    { nome: "Alfredo Teste", email: "alfredo.teste@escola.ao", tel: "939000019" },
    { nome: "Garcia Teste", email: "garcia.teste@escola.ao", tel: "939000020" },
    { nome: "Moisés Teste", email: "moiss.teste@escola.ao", tel: "939000021" },
    { nome: "Madaleno Teste", email: "madaleno.teste@escola.ao", tel: "939000022" },
    { nome: "L.Sapalo Teste", email: "lsapalo.teste@escola.ao", tel: "939000023" },
    { nome: "Elvis Teste", email: "elvis.teste@escola.ao", tel: "939000024" },
    { nome: "Aurélio Teste", email: "aurlio.teste@escola.ao", tel: "939000025" },
    { nome: "Edgar Ramos Teste", email: "edgarramos.teste@escola.ao", tel: "939000026" },
    { nome: "Isaías Teste", email: "isaastchitue.teste@escola.ao", tel: "939000027" },
    { nome: "M.Sambalaca Teste", email: "msambalaca.teste@escola.ao", tel: "939000028" },
    { nome: "A.Mavila Teste", email: "amavila.teste@escola.ao", tel: "939000029" },
    { nome: "Joaquim Teste", email: "joaquim.teste@escola.ao", tel: "939000030" },
    { nome: "Pedro Teste", email: "pedrofaial.teste@escola.ao", tel: "939000031" },
    { nome: "J.Paulino-J.Jacinto Teste", email: "jpaulinojjacinto.teste@escola.ao", tel: "939000032" },
    { nome: "Floriano Teste", email: "floriano.teste@escola.ao", tel: "939000033" },
    { nome: "Floriano-J.Paulino Teste", email: "florianojpaulino.teste@escola.ao", tel: "939000034" },
    { nome: "Edgar Somak Teste", email: "edgarsomak.teste@escola.ao", tel: "939000035" },
    { nome: "Edgar Pessela Teste", email: "edgarpessela.teste@escola.ao", tel: "939000036" },
    { nome: "Alberto Teste", email: "alberto.teste@escola.ao", tel: "939000037" },
    { nome: "Cena Teste", email: "cena.teste@escola.ao", tel: "939000038" },
    { nome: "J.Paulino/Floriano Teste", email: "jpaulinofloriano.teste@escola.ao", tel: "939000039" },
    { nome: "M.Francisco Teste", email: "mfrancisco.teste@escola.ao", tel: "939000040" },
    { nome: "J.Chilembo Teste", email: "jchilembo.teste@escola.ao", tel: "939000041" },
    { nome: "Vitorino Teste", email: "vitorinonhany.teste@escola.ao", tel: "939000042" },
    { nome: "Divaldo Teste", email: "divaldo.teste@escola.ao", tel: "939000043" },
    { nome: "A.Chipaco Teste", email: "achipaco.teste@escola.ao", tel: "939000044" },
    { nome: "Ordésio Teste", email: "ordsio.teste@escola.ao", tel: "939000045" },
    { nome: "João Teste", email: "joocassoma.teste@escola.ao", tel: "939000046" },
    { nome: "Cléusio Teste", email: "clusio.teste@escola.ao", tel: "939000047" },
    { nome: "Beatriz Teste", email: "beatriz.teste@escola.ao", tel: "939000048" },
    { nome: "Mário Teste", email: "mriobalama.teste@escola.ao", tel: "939000049" },
    { nome: "Euclides Teste", email: "euclides.teste@escola.ao", tel: "939000050" },
    { nome: "A.Gourgel Teste", email: "agourgel.teste@escola.ao", tel: "939000051" },
    { nome: "Margarido Teste", email: "margarido.teste@escola.ao", tel: "939000052" },
    { nome: "Cardine Teste", email: "cardine.teste@escola.ao", tel: "939000053" },
    { nome: "Cariongo Teste", email: "cariongo.teste@escola.ao", tel: "939000054"},
    { nome: "Capalandanda", email: "capalandanda.teste@escola.ao", tel: "939000055"},
    { nome: "Vicente", email: "vicente.teste@escola.ao", tel: "939000056"}
  ];

  for (const p of professores) {
    await prisma.professor.upsert({
      where: { email: p.email },
      update: { nome_professor: p.nome, telefone: p.tel },
      create: { nome_professor: p.nome, email: p.email, telefone: p.tel }
    });
  }

  console.log(`✅ ${professores.length} Professores criados.`);

// 6. Disponibilidade aleatórias para os professores
console.log("A gerar disponibilidades aleatórias...");

const todosOsProfessores = await prisma.professor.findMany();
const todosDias = await prisma.diaSemana.findMany();
const todosPeriodos = await prisma.periodo.findMany();

// Assumindo que o primeiro é Manhã e o segundo é Tarde. 
const periodoManha = todosPeriodos[0];
const periodoTarde = todosPeriodos[1];

for (const prof of todosOsProfessores) {
  const jaTemDisp = await prisma.disponibilidade.count({
    where: { id_professor: prof.id_professor }
  });
  if (jaTemDisp > 0) continue;

  // Escolher entre 2 a 5 dias aleatórios
  const diasBaralhados = [...todosDias].sort(() => Math.random() - 0.5);
  const numDias = 2 + Math.floor(Math.random() * 4); // 2, 3, 4 ou 5 dias
  const diasEscolhidos = diasBaralhados.slice(0, numDias);

  // Criar um mapeamento para saber quais os períodos que cada dia vai ter
  const periodosPorDia = new Map<number, Set<number>>();
  diasEscolhidos.forEach(dia => periodosPorDia.set(dia.id_dia, new Set()));

  // 1. Garantir as duas Manhãs em dias distintos
  const diasParaManha = [...diasEscolhidos].sort(() => Math.random() - 0.5).slice(0, 2);
  diasParaManha.forEach(dia => periodosPorDia.get(dia.id_dia)!.add(periodoManha.id_periodo));

  // 2. Garantir as duas Tardes em dias distintos
  // Se o numDias for 2, os dias escolhidos aqui serão obrigatoriamente os mesmos da Manhã.
  const diasParaTarde = [...diasEscolhidos].sort(() => Math.random() - 0.5).slice(0, 2);
  diasParaTarde.forEach(dia => periodosPorDia.get(dia.id_dia)!.add(periodoTarde.id_periodo));

  // 3. (Opcional) Adicionar aleatoriedade extra para ultrapassar o mínimo de 24
  // Há 50% de probabilidade de um professor receber um período extra nos dias que restam
  for (const dia of diasEscolhidos) {
    if (Math.random() > 0.5) {
      const periodoAleatorio = todosPeriodos[Math.floor(Math.random() * todosPeriodos.length)];
      periodosPorDia.get(dia.id_dia)!.add(periodoAleatorio.id_periodo);
    }
  }

  // 4. Transformar os períodos mapeados em slots (6 tempos por cada período)
  const slots: { id_dia: number; id_periodo: number; ordem: number }[] = [];

  for (const [id_dia, periodos] of periodosPorDia.entries()) {
    for (const id_periodo of periodos) {
      for (let ordem = 1; ordem <= 6; ordem++) {
        slots.push({ id_dia, id_periodo, ordem });
      }
    }
  }

  // 5. Inserir na base de dados
  for (const slot of slots) {
    await prisma.disponibilidade.upsert({
      where: {
        id_professor_id_dia_id_periodo_ordem: {
          id_professor: prof.id_professor,
          id_dia:       slot.id_dia,
          id_periodo:   slot.id_periodo,
          ordem:        slot.ordem,
        }
      },
      update: {},
      create: {
        id_professor: prof.id_professor,
        id_dia:       slot.id_dia,
        id_periodo:   slot.id_periodo,
        ordem:        slot.ordem,
      }
    });
  }
}

  console.log(`✅ Disponibilidades aleatórias geradas para ${todosOsProfessores.length} professores`);
  console.log("--------------------------------------------------------------------------------------------")
  console.log("✅ Dados básicos criados: Dias, Períodos, Classes, Cursos, Turmas, Salas, Disciplinas, Professores e as suas Disponbilidades.");

  // --- HELPERS PARA ATRIBUIÇÕES ---
  const vincular = async (turmaDesc: string, discDesc: string, profEmail: string, aulas: number) => {
    const t = await prisma.turma.findUnique({ where: { descricao_turma: turmaDesc } });
    const d = await prisma.disciplina.findUnique({ where: { descricao_disciplina: discDesc } });
    const p = await prisma.professor.findUnique({ where: { email: profEmail } });

    if (!t || !d || !p) {
      console.error(`❌ Erro ao vincular: Turma(${turmaDesc}), Disciplina(${discDesc}), Prof(${profEmail})`);
      return;
    }

    // TurmaDisciplina (Possui aulas_por_semana no schema)
    await prisma.turmaDisciplina.upsert({
      where: { id_turma_id_disciplina: { id_turma: t!.id_turma, id_disciplina: d!.id_disciplina } },
      update: { aulas_por_semana: aulas },
      create: { id_turma: t!.id_turma, id_disciplina: d!.id_disciplina, aulas_por_semana: aulas }
    });

    // ProfTurmaDisciplina (Não possui aulas_por_semana no schema)
    await prisma.profTurmaDisciplina.upsert({
      where: { id_turma_id_disciplina: { id_turma: t!.id_turma, id_disciplina: d!.id_disciplina } },
      update: {},
      create: { id_professor: p!.id_professor, id_turma: t!.id_turma, id_disciplina: d!.id_disciplina }
    });
  };

  // 6. Atribuições Organizadas por Turma
  console.log("📝 Criando atribuições...");

  // --- 10ªINF ---
  await vincular("10ª Classe - Informática", "Ed. Física", "mriocapitango.teste@escola.ao", 2);
  await vincular("10ª Classe - Informática", "Física", "daniel.teste@escola.ao", 3);
  await vincular("10ª Classe - Informática", "L. Inglesa", "genildo.teste@escola.ao", 3);
  await vincular("10ª Classe - Informática", "L. Portuguesa", "eduardo.teste@escola.ao", 3);
  await vincular("10ª Classe - Informática", "Matemática", "sapalalo.teste@escola.ao", 5);
  await vincular("10ª Classe - Informática", "T.L.P.", "cena.teste@escola.ao", 4);
  await vincular("10ª Classe - Informática", "T.I.C.", "vicente.teste@escola.ao", 4);
  await vincular("10ª Classe - Informática", "Electrotecnia", "cariongo.teste@escola.ao", 2);
  await vincular("10ª Classe - Informática", "S.E.A.C.", "cardine.teste@escola.ao", 3);
  await vincular("10ª Classe - Informática", "Desenho Téc.", "lmagalhes.teste@escola.ao", 3);

  console.log(`✅ 10ª Classe - Informática: 10 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 11ªINF ---
  await vincular("11ª Classe - Informática", "Ed. Física", "mriocapitango.teste@escola.ao", 2);
  await vincular("11ª Classe - Informática", "Física", "daniel.teste@escola.ao", 3);
  await vincular("11ª Classe - Informática", "L. Inglesa", "salopa.teste@escola.ao", 3);
  await vincular("11ª Classe - Informática", "S.E.A.C.", "cardine.teste@escola.ao", 5);
  await vincular("11ª Classe - Informática", "L. Portuguesa", "ablio.teste@escola.ao", 3);
  await vincular("11ª Classe - Informática", "T.L.P.", "cardine.teste@escola.ao", 5);
  await vincular("11ª Classe - Informática", "Química", "alexandre.teste@escola.ao", 3);
  await vincular("11ª Classe - Informática", "Matemática", "alberto.teste@escola.ao", 4);
  await vincular("11ª Classe - Informática", "Electrotecnia", "cariongo.teste@escola.ao", 2);
  await vincular("11ª Classe - Informática", "F.A.I.", "olvia.teste@escola.ao", 2);

  console.log(`✅ 11ª Classe - Informática: 10 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 12ªINF ---
  await vincular("12ª Classe - Informática", "Projecto Téc.", "catarina.teste@escola.ao", 2);
  await vincular("12ª Classe - Informática", "Matemática", "tito.teste@escola.ao", 5);
  await vincular("12ª Classe - Informática", "F.A.I.", "maura.teste@escola.ao", 2);
  await vincular("12ª Classe - Informática", "T.R.E.I.", "capalandanda.teste@escola.ao", 5);
  await vincular("12ª Classe - Informática", "T.L.P.", "cena.teste@escola.ao", 5);
  await vincular("12ª Classe - Informática", "Química", "alexandre.teste@escola.ao", 3);
  await vincular("12ª Classe - Informática", "O.G.I.", "alfredo.teste@escola.ao", 2);
  await vincular("12ª Classe - Informática", "Empreend.", "garcia.teste@escola.ao", 2);
  await vincular("12ª Classe - Informática", "S.E.A.C.", "cardine.teste@escola.ao", 4);

  console.log(`✅ 12ª Classe - Informática: 9 disciplinas atribuídas. Ao todo 30 Tempos Lectivos`);

  // --- 13ªINF ---
  await vincular("13ª Classe - Informática", "Projecto Téc.", "moiss.teste@escola.ao", 2);
  await vincular("13ª Classe - Informática", "Química", "alexandre.teste@escola.ao", 2);
  await vincular("13ª Classe - Informática", "Matemática", "tito.teste@escola.ao", 2);
  await vincular("13ª Classe - Informática", "Física", "daniel.teste@escola.ao", 2);

  console.log(`✅ 13ª Classe - Informática: 4 disciplinas atribuídas. Ao todo 8 Tempos Lectivos`);

  // --- 10ªO.C.C. ---
  await vincular("10ª Classe - Obras de Construcção Civil", "Ed. Física", "mriocapitango.teste@escola.ao", 2);
  await vincular("10ª Classe - Obras de Construcção Civil", "Física", "lmagalhes.teste@escola.ao", 3);
  await vincular("10ª Classe - Obras de Construcção Civil", "Práticas.Ofic.", "kapoco.teste@escola.ao", 3);
  await vincular("10ª Classe - Obras de Construcção Civil", "Geom. Desc.", "lmagalhes.teste@escola.ao", 2);
  await vincular("10ª Classe - Obras de Construcção Civil", "L. Inglesa", "genildo.teste@escola.ao", 3);
  await vincular("10ª Classe - Obras de Construcção Civil", "T.C.C.", "emerson.teste@escola.ao", 3);
  await vincular("10ª Classe - Obras de Construcção Civil", "Matemática", "sapalalo.teste@escola.ao", 5);
  await vincular("10ª Classe - Obras de Construcção Civil", "T.C.O.Edifícios", "emerson.teste@escola.ao", 3);
  await vincular("10ª Classe - Obras de Construcção Civil", "L. Portuguesa", "eduardo.teste@escola.ao", 3);
  await vincular("10ª Classe - Obras de Construcção Civil", "D.C.C.", "bibiana.teste@escola.ao", 3);
  await vincular("10ª Classe - Obras de Construcção Civil", "Informática", "jjacinto.teste@escola.ao", 2);

  console.log(`✅ 10ª Classe - Obras de Construcção Civil: 11 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 11ªO.C.C. ---
  await vincular("11ª Classe - Obras de Construcção Civil", "Ed. Física", "mriocapitango.teste@escola.ao", 2);
  await vincular("11ª Classe - Obras de Construcção Civil", "Matemática", "abrantes.teste@escola.ao", 4);
  await vincular("11ª Classe - Obras de Construcção Civil", "F.A.I.", "olvia.teste@escola.ao", 2);
  await vincular("11ª Classe - Obras de Construcção Civil", "D.C.C.", "bibiana.teste@escola.ao", 3);
  await vincular("11ª Classe - Obras de Construcção Civil", "Práticas.Ofic.", "kapoco.teste@escola.ao", 3);
  await vincular("11ª Classe - Obras de Construcção Civil", "L. Portuguesa", "ablio.teste@escola.ao", 3);
  await vincular("11ª Classe - Obras de Construcção Civil", "Química", "alexandre.teste@escola.ao", 3);
  await vincular("11ª Classe - Obras de Construcção Civil", "L. Inglesa", "salopa.teste@escola.ao", 3);
  await vincular("11ª Classe - Obras de Construcção Civil", "T.C.O.Edifícios", "emerson.teste@escola.ao", 3);
  await vincular("11ª Classe - Obras de Construcção Civil", "T.C.C.", "emerson.teste@escola.ao", 3);
  await vincular("11ª Classe - Obras de Construcção Civil", "Física", "daniel.teste@escola.ao", 3);

  console.log(`✅ 11ª Classe - Obras de Construcção Civil: 11 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 12ªO.C.C. ---
  await vincular("12ª Classe - Obras de Construcção Civil", "T.C.O.-I.E.U.", "jroxo.teste@escola.ao", 2);
  await vincular("12ª Classe - Obras de Construcção Civil", "Práticas.Ofic.", "jroxo.teste@escola.ao", 3);
  await vincular("12ª Classe - Obras de Construcção Civil", "Medições O.", "kapoco.teste@escola.ao", 3);
  await vincular("12ª Classe - Obras de Construcção Civil", "Prát.Oficinal", "jroxo.teste@escola.ao", 1);
  await vincular("12ª Classe - Obras de Construcção Civil", "DCC.Autocad", "bibiana.teste@escola.ao", 2);
  await vincular("12ª Classe - Obras de Construcção Civil", "Matemática", "tito.teste@escola.ao", 5);
  await vincular("12ª Classe - Obras de Construcção Civil", "F.A.I.", "maura.teste@escola.ao", 2);
  await vincular("12ª Classe - Obras de Construcção Civil", "Projecto Téc.", "catarina.teste@escola.ao", 2);
  await vincular("12ª Classe - Obras de Construcção Civil", "Química", "alexandre.teste@escola.ao", 3);
  await vincular("12ª Classe - Obras de Construcção Civil", "T.Topografia", "jroxo.teste@escola.ao", 3);
  await vincular("12ª Classe - Obras de Construcção Civil", "O.G.I.", "alfredo.teste@escola.ao", 2);
  await vincular("12ª Classe - Obras de Construcção Civil", "Empreend.", "garcia.teste@escola.ao", 2);

  console.log(`✅ 12ª Classe - Obras de Construcção Civil: 12 disciplinas atribuídas. Ao todo 30 Tempos Lectivos`);

  // --- 13ªO.C.C. ---
  await vincular("13ª Classe - Obras de Construcção Civil", "Medições-Plan.", "jroxo.teste@escola.ao", 3);
  await vincular("13ª Classe - Obras de Construcção Civil", "Projecto Téc.", "moiss.teste@escola.ao", 2);
  await vincular("13ª Classe - Obras de Construcção Civil", "Matemática", "tito.teste@escola.ao", 2);
  await vincular("13ª Classe - Obras de Construcção Civil", "Química", "alexandre.teste@escola.ao", 2);
  await vincular("13ª Classe - Obras de Construcção Civil", "Física", "daniel.teste@escola.ao", 2);

  console.log(`✅ 13ª Classe - Obras de Construcção Civil: 5 disciplinas atribuídas. Ao todo 8 Tempos Lectivos`);

  // --- 10ªC.G. ---
  await vincular("10ª Classe - Contabilidade e Gestão", "Ed. Física", "mriocapitango.teste@escola.ao", 2);
  await vincular("10ª Classe - Contabilidade e Gestão", "O.G.E.", "garcia.teste@escola.ao", 4);
  await vincular("10ª Classe - Contabilidade e Gestão", "F.A.I.", "maura.teste@escola.ao", 2);
  await vincular("10ª Classe - Contabilidade e Gestão", "Matemática", "sapalalo.teste@escola.ao", 4);
  await vincular("10ª Classe - Contabilidade e Gestão", "Int.Economia", "madaleno.teste@escola.ao", 4);
  await vincular("10ª Classe - Contabilidade e Gestão", "L. Portuguesa", "eduardo.teste@escola.ao", 3);
  await vincular("10ª Classe - Contabilidade e Gestão", "Noc.Direito", "lsapalo.teste@escola.ao", 3);
  await vincular("10ª Classe - Contabilidade e Gestão", "Cont.Financ.", "elvis.teste@escola.ao", 4);
  await vincular("10ª Classe - Contabilidade e Gestão", "L. Inglesa", "genildo.teste@escola.ao", 3);
  await vincular("10ª Classe - Contabilidade e Gestão", "Infor.A.C.G.", "aurlio.teste@escola.ao", 3);

  console.log(`✅ 10ª Classe - Contabilidade e Gestão: 10 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 11ªC.G.-A ---
  await vincular("11ª Classe - Contabilidade e Gestão", "Ed. Física", "mriocapitango.teste@escola.ao", 2);
  await vincular("11ª Classe - Contabilidade e Gestão", "L. Portuguesa", "ablio.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "T.C.E.", "edgarramos.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "O.G.E.", "elvis.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "Matemática", "abrantes.teste@escola.ao", 4);
  await vincular("11ª Classe - Contabilidade e Gestão", "Infor.A.C.G.", "aurlio.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "D.L.C.", "lsapalo.teste@escola.ao", 2);
  await vincular("11ª Classe - Contabilidade e Gestão", "Empreend.", "garcia.teste@escola.ao", 2);
  await vincular("11ª Classe - Contabilidade e Gestão", "L. Inglesa", "salopa.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "F.A.I.", "olvia.teste@escola.ao", 2);
  await vincular("11ª Classe - Contabilidade e Gestão", "Cont.Financ.", "isaastchitue.teste@escola.ao", 4);
  await vincular("11ª Classe - Contabilidade e Gestão", "D.C.C.", "lsapalo.teste@escola.ao", 1);

  console.log(`✅ 11ª Classe - Contabilidade e Gestão: 12 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 11ªC.G.-B ---
  await vincular("11ª Classe - Contabilidade e Gestão", "Ed. Física", "mriocapitango.teste@escola.ao", 2);
  await vincular("11ª Classe - Contabilidade e Gestão", "Infor.A.C.G.", "aurlio.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "Matemática", "abrantes.teste@escola.ao", 4);
  await vincular("11ª Classe - Contabilidade e Gestão", "D.L.C.", "lsapalo.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "Empreend.", "garcia.teste@escola.ao", 2);
  await vincular("11ª Classe - Contabilidade e Gestão", "O.G.E.", "elvis.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "L. Portuguesa", "ablio.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "F.A.I.", "olvia.teste@escola.ao", 2);
  await vincular("11ª Classe - Contabilidade e Gestão", "Cont.Financ.", "isaastchitue.teste@escola.ao", 4);
  await vincular("11ª Classe - Contabilidade e Gestão", "T.C.E.", "edgarramos.teste@escola.ao", 3);
  await vincular("11ª Classe - Contabilidade e Gestão", "L. Inglesa", "salopa.teste@escola.ao", 3);

  console.log(`✅ 11ª Classe - Contabilidade e Gestão: 11 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 12ªC.G.-A ---
  await vincular("12ª Classe - Contabilidade e Gestão", "O.G.E.", "elvis.teste@escola.ao", 5);
  await vincular("12ª Classe - Contabilidade e Gestão", "Projecto Téc.", "catarina.teste@escola.ao", 2);
  await vincular("12ª Classe - Contabilidade e Gestão", "Sociologia", "olvia.teste@escola.ao", 3);
  await vincular("12ª Classe - Contabilidade e Gestão", "D.L.F.", "lsapalo.teste@escola.ao", 3);
  await vincular("12ª Classe - Contabilidade e Gestão", "Cont.Analit.", "aurlio.teste@escola.ao", 6);
  await vincular("12ª Classe - Contabilidade e Gestão", "An.Eco.Fin.", "edgarramos.teste@escola.ao", 4);
  await vincular("12ª Classe - Contabilidade e Gestão", "Matemática", "tito.teste@escola.ao", 5);
  await vincular("12ª Classe - Contabilidade e Gestão", "Empreend.", "garcia.teste@escola.ao", 2);

  console.log(`✅ 12ª Classe - Contabilidade e Gestão: 9 disciplinas atribuídas. Ao todo 30 Tempos Lectivos`);

  // --- 12ªC.G.-B ---
  await vincular("12ª Classe - Contabilidade e Gestão", "Sociologia", "olvia.teste@escola.ao", 3);
  await vincular("12ª Classe - Contabilidade e Gestão", "Cont.Analit.", "aurlio.teste@escola.ao", 6);
  await vincular("12ª Classe - Contabilidade e Gestão", "An.Eco.Fin.", "edgarramos.teste@escola.ao", 4);
  await vincular("12ª Classe - Contabilidade e Gestão", "Projecto Téc.", "catarina.teste@escola.ao", 2);
  await vincular("12ª Classe - Contabilidade e Gestão", "Matemática", "tito.teste@escola.ao", 5);
  await vincular("12ª Classe - Contabilidade e Gestão", "D.L.F.", "lsapalo.teste@escola.ao", 3);
  await vincular("12ª Classe - Contabilidade e Gestão", "O.G.E.", "elvis.teste@escola.ao", 5);
  await vincular("12ª Classe - Contabilidade e Gestão", "Empreend.", "garcia.teste@escola.ao", 2);

  console.log(`✅ 12ª Classe - Contabilidade e Gestão: 8 disciplinas atribuídas. Ao todo 30 Tempos Lectivos`);

  // --- 13ªC.G.-A ---
  await vincular("13ª Classe - Contabilidade e Gestão", "Fiscalidade C.A.I.", "msambalaca.teste@escola.ao", 1);

  // --- 13ªC.G. ---
  await vincular("13ª Classe - Contabilidade e Gestão", "Fiscalidade C.A.I.", "amavila.teste@escola.ao", 4);
  await vincular("13ª Classe - Contabilidade e Gestão", "História Ec.Soc.", "joaquim.teste@escola.ao", 2);
  await vincular("13ª Classe - Contabilidade e Gestão", "Projecto Téc.", "moiss.teste@escola.ao", 2);
  await vincular("13ª Classe - Contabilidade e Gestão", "Matemática", "tito.teste@escola.ao", 2);

  console.log(`✅ 13ª Classe - Contabilidade e Gestão: 4 disciplinas atribuídas. Ao todo 10 Tempos Lectivos`);

  // --- 10ªE.T.C. ---
  await vincular("10ª Classe - Electrónica", "Ed. Física", "pedrofaial.teste@escola.ao", 2);
  await vincular("10ª Classe - Electrónica", "Matemática", "sapalalo.teste@escola.ao", 5);
  await vincular("10ª Classe - Electrónica", "L. Portuguesa", "eduardo.teste@escola.ao", 3);
  await vincular("10ª Classe - Electrónica", "Informática", "jjacinto.teste@escola.ao", 2);
  await vincular("10ª Classe - Electrónica", "Desenho Téc.", "lmagalhes.teste@escola.ao", 3);
  await vincular("10ª Classe - Electrónica", "L. Inglesa", "genildo.teste@escola.ao", 3);
  await vincular("10ª Classe - Electrónica", "Prát.Oficinal", "jpaulinojjacinto.teste@escola.ao", 3);
  await vincular("10ª Classe - Electrónica", "Física", "lmagalhes.teste@escola.ao", 3);
  await vincular("10ª Classe - Electrónica", "Tecnol.Telec.", "floriano.teste@escola.ao", 4);
  await vincular("10ª Classe - Electrónica", "Elect.Electrón.", "florianojpaulino.teste@escola.ao", 4);

  console.log(`✅ 10ª Classe - Electrónica: 10 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 11ªE.T.C. ---
  await vincular("11ª Classe - Electrónica", "Ed. Física", "edgarsomak.teste@escola.ao", 2);
  await vincular("11ª Classe - Electrónica", "Elect.Electrón.", "florianojpaulino.teste@escola.ao", 3);
  await vincular("11ª Classe - Electrónica", "L. Inglesa", "salopa.teste@escola.ao", 3);
  await vincular("11ª Classe - Electrónica", "F.A.I.", "olvia.teste@escola.ao", 2);
  await vincular("11ª Classe - Electrónica", "Sist.Digitais", "edgarpessela.teste@escola.ao", 3);
  await vincular("11ª Classe - Electrónica", "Matemática", "alberto.teste@escola.ao", 4);
  await vincular("11ª Classe - Electrónica", "Física", "daniel.teste@escola.ao", 3);
  await vincular("11ª Classe - Electrónica", "L. Portuguesa", "ablio.teste@escola.ao", 3);
  await vincular("11ª Classe - Electrónica", "Tecnol.Telec.", "cena.teste@escola.ao", 3);
  await vincular("11ª Classe - Electrónica", "Prát.Oficinal", "jpaulinojjacinto.teste@escola.ao", 3);
  await vincular("11ª Classe - Electrónica", "Química", "alexandre.teste@escola.ao", 3);

  console.log(`✅ 11ª Classe - Electrónica: 11 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 12ªE.T.C. ---
  await vincular("12ª Classe - Electrónica", "Tecnol.Telec.", "edgarpessela.teste@escola.ao", 3);
  await vincular("12ª Classe - Electrónica", "Sist.Digitais", "cena.teste@escola.ao", 3);
  await vincular("12ª Classe - Electrónica", "Projecto Téc.", "catarina.teste@escola.ao", 2);
  await vincular("12ª Classe - Electrónica", "Química", "alexandre.teste@escola.ao", 3);
  await vincular("12ª Classe - Electrónica", "Prát.Oficinal", "jpaulinofloriano.teste@escola.ao", 3);
  await vincular("12ª Classe - Electrónica", "Práticas.Ofic.", "jpaulinofloriano.teste@escola.ao", 1);
  await vincular("12ª Classe - Electrónica", "F.A.I.", "maura.teste@escola.ao", 2);
  await vincular("12ª Classe - Electrónica", "O.G.I.", "alfredo.teste@escola.ao", 2);
  await vincular("12ª Classe - Electrónica", "Matemática", "abrantes.teste@escola.ao", 5);
  await vincular("12ª Classe - Electrónica", "Telecomunic.", "edgarpessela.teste@escola.ao", 4);
  await vincular("12ª Classe - Electrónica", "Empreend.", "garcia.teste@escola.ao", 2);

  console.log(`✅ 12ª Classe - Electrónica: 11 disciplinas atribuídas. Ao todo 30 Tempos Lectivos`);

  // --- 10ªC.E.J. ---
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "Ed. Física", "pedrofaial.teste@escola.ao", 2);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "Matemática", "mfrancisco.teste@escola.ao", 5);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "Geografia", "jchilembo.teste@escola.ao", 3);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "Int.Direito", "vitorinonhany.teste@escola.ao", 3);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "História", "joaquim.teste@escola.ao", 3);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "Int.Economia", "divaldo.teste@escola.ao", 3);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "Informática", "jjacinto.teste@escola.ao", 3);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "L. Inglesa", "genildo.teste@escola.ao", 3);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "L. Portuguesa", "achipaco.teste@escola.ao", 4);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "Metodolog.T.A.", "ordsio.teste@escola.ao", 1);
  await vincular("10ª Classe - Ciências Económicas e Jurídicas", "Empreend.", "madaleno.teste@escola.ao", 2);

  console.log(`✅ 10ª Classe - Ciências Económicas e Jurídicas: 11 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 11ª C.E.J. ---
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "Ed. Física", "edgarsomak.teste@escola.ao", 2);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "Filosofia", "joocassoma.teste@escola.ao", 2);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "Sociologia", "maura.teste@escola.ao", 2);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "Matemática", "alberto.teste@escola.ao", 4);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "Int.Direito", "vitorinonhany.teste@escola.ao", 4);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "L. Inglesa", "clusio.teste@escola.ao", 3);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "Int.Economia", "divaldo.teste@escola.ao", 4);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "L. Portuguesa", "achipaco.teste@escola.ao", 3);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "Metodolog.T.A.", "ordsio.teste@escola.ao", 1);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "Geografia", "jchilembo.teste@escola.ao", 3);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "História", "joaquim.teste@escola.ao", 3);
  await vincular("11ª Classe - Ciências Económicas e Jurídicas", "Empreend.", "madaleno.teste@escola.ao", 1);

  console.log(`✅ 11ª Classe - Ciências Económicas e Jurídicas: 12 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 12ªC.E.J. ---
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "Ed. Física", "edgarsomak.teste@escola.ao", 2);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "Sociologia", "maura.teste@escola.ao", 2);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "História", "joaquim.teste@escola.ao", 3);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "Geografia", "jchilembo.teste@escola.ao", 3);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "L. Inglesa", "clusio.teste@escola.ao", 3);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "L. Portuguesa", "achipaco.teste@escola.ao", 3);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "Int.Direito", "vitorinonhany.teste@escola.ao", 3);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "Matemática", "alberto.teste@escola.ao", 2);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "Des.Ec.Social", "divaldo.teste@escola.ao", 4);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "Empreend.", "madaleno.teste@escola.ao", 2);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "Int.Economia", "madaleno.teste@escola.ao", 3);
  await vincular("12ª Classe - Ciências Económicas e Jurídicas", "Filosofia", "joocassoma.teste@escola.ao", 2);

  console.log(`✅ 12ª Classe - Ciências Económicas e Jurídicas: 12 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 10ªC.F.B. ---
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "Ed. Física", "pedrofaial.teste@escola.ao", 2);
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "Química", "beatriz.teste@escola.ao", 4);
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "L. Inglesa", "mriobalama.teste@escola.ao", 3);
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "Matemática", "mfrancisco.teste@escola.ao", 5);
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "Física", "euclides.teste@escola.ao", 4);
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "Informática", "jjacinto.teste@escola.ao", 3);
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "Biologia", "agourgel.teste@escola.ao", 4);
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "L. Portuguesa", "achipaco.teste@escola.ao", 4);
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "Empreend.", "madaleno.teste@escola.ao", 2);
  await vincular("10ª Classe - Ciências Físicas e Biológicas", "Metodolog.T.A.", "ordsio.teste@escola.ao", 1);

  console.log(`✅ 10ª Classe - Ciências Físicas e Biológicas: 10 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 11ªC.F.B. ---
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Ed. Física", "edgarsomak.teste@escola.ao", 2);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Biologia", "agourgel.teste@escola.ao", 4);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Química", "beatriz.teste@escola.ao", 4);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "L. Portuguesa", "achipaco.teste@escola.ao", 3);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Matemática", "alberto.teste@escola.ao", 4);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Metodolog.T.A.", "ordsio.teste@escola.ao", 1);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Geom. Desc.", "lmagalhes.teste@escola.ao", 2);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Geologia", "margarido.teste@escola.ao", 2);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "L. Inglesa", "clusio.teste@escola.ao", 3);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Empreend.", "madaleno.teste@escola.ao", 1);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Filosofia", "joocassoma.teste@escola.ao", 2);
  await vincular("11ª Classe - Ciências Físicas e Biológicas", "Física", "euclides.teste@escola.ao", 4);

  console.log(`✅ 11ª Classe - Ciências Físicas e Biológicas: 12 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);

  // --- 12ªC.F.B. ---
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "Ed. Física", "edgarsomak.teste@escola.ao", 2);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "Matemática", "alberto.teste@escola.ao", 4);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "Física", "euclides.teste@escola.ao", 4);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "L. Inglesa", "clusio.teste@escola.ao", 3);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "L. Portuguesa", "achipaco.teste@escola.ao", 3);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "Biologia", "agourgel.teste@escola.ao", 4);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "Geologia", "margarido.teste@escola.ao", 2);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "Química", "beatriz.teste@escola.ao", 4);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "Empreend.", "madaleno.teste@escola.ao", 2);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "Geom. Desc.", "lmagalhes.teste@escola.ao", 2);
  await vincular("12ª Classe - Ciências Físicas e Biológicas", "Filosofia", "joocassoma.teste@escola.ao", 2);

  console.log(`✅ 12ª Classe - Ciências Físicas e Biológicas: 11 disciplinas atribuídas. Ao todo 32 Tempos Lectivos`);
  console.log("----------------------------------------------------------------------------------------------------")

  console.log("🎉 Seed finalizado com sucesso!");
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
