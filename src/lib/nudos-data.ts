import {
  Bot,
  BookOpen,
  Leaf,
  Rocket,
  Sparkles,
  Star,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export type DimensionKey = "S" | "M" | "A" | "R" | "T";

export type Subdimension = {
  name: string;
  /** Qué mide o premia esta subdimensión. */
  description: string;
  /** Regla de puntuación oficial (PO por actividad, tramos, o mecánica de ranking). */
  rule: string;
  /** Acciones referenciales para sumar puntos en esta subdimensión. */
  actions: string[];
};

export type Dimension = {
  key: DimensionKey;
  name: string;
  short: string;
  max: number;
  weight: number;
  gradient: string;
  accentClass: string;
  icon: LucideIcon;
  description: string;
  subdimensions: Subdimension[];
};

/**
 * Fuente: contenido ficticio creado para esta demo (presentación de ejemplo
 * actualizada). Topes, reglas de puntuación, descripciones y acciones referenciales
 * transcritas tal como están definidas allí — no inventar cifras no confirmadas.
 */
export const dimensions: Dimension[] = [
  {
    key: "S",
    name: "Huella Verde",
    short: "Compromiso social y cultura a largo plazo",
    max: 750,
    weight: 8,
    gradient: "var(--gradient-cyan)",
    accentClass: "text-cyan",
    icon: Leaf,
    description:
      "Esta dimensión mide el compromiso del empleado con el futuro de la sociedad y la ética institucional. No se trata solo de rentabilidad financiera, sino de rentabilidad social y humana.",
    subdimensions: [
      {
        name: "Voluntariado",
        description:
          "Acciones altruistas donde el empleado dona su tiempo y talento para causas sociales avaladas por la organización. Representa la \"cara humana\" de la estrategia.",
        rule: "250 PO por actividad · 1 actividad máx. por acción",
        actions: [
          "Participar en jornadas y proyectos sociales de impacto, internos y externos, certificados por Responsabilidad Social.",
          "Ser mentor o tutor voluntario en programas de educación financiera para la comunidad.",
          "Facilitar talleres de inclusión financiera para poblaciones vulnerables.",
          "Sumarse a jornadas de voluntariado ambiental: reforestación, limpieza de playas o espacios públicos.",
          "Colaborar en campañas de recolección y donación de alimentos, útiles, ropa o juguetes.",
          "Participar en jornadas de donación de sangre avaladas por la organización.",
          "Acompañar a comunidades, escuelas o fundaciones aliadas en actividades sociales.",
          "Ofrecer talleres pro bono de tu especialidad a organizaciones sociales.",
          "Integrar brigadas de ayuda ante emergencias o contingencias sociales.",
          "Participar en programas de padrinazgo o becas para jóvenes y estudiantes.",
          "Apoyar el voluntariado corporativo en fechas especiales: Navidad o vuelta a clases.",
          "Difundir las causas avaladas por la organización y sumar nuevos voluntarios.",
        ],
      },
      {
        name: "Impacto responsable",
        description:
          "Es la alineación con los valores de inclusión, diversidad y sostenibilidad ambiental. Premia la participación en actividades que buscan dejar un legado positivo en el entorno.",
        rule: "250 PO por actividad · 1 actividad máx. por acción",
        actions: [
          "Participar como promotor de las acciones de la Impacto Responsable.",
          "Obtener certificaciones en sostenibilidad, finanzas sostenibles o impacto responsable.",
          "Participar en comités, actividades o foros de igualdad, diversidad, inclusión y equidad de género.",
          "Completar formaciones en ética, valores y código de conducta institucional.",
          "Impulsar la eficiencia energética y el uso responsable de papel, agua y energía en tu área.",
          "Sumarse a campañas de reciclaje y manejo responsable de residuos.",
          "Promover productos y servicios con criterios sostenibles y de inclusión.",
          "Apoyar iniciativas de educación e inclusión financiera para clientes y comunidades.",
          "Proponer proyectos o mejoras que reduzcan el impacto ambiental de la operación.",
          "Impulsar la accesibilidad y la atención inclusiva a clientes con discapacidad.",
          "Formarse en criterios ASG (ambientales, sociales y de gobernanza) y aplicarlos en tu gestión.",
          "Ser vocero o embajador interno de la cultura de diversidad e inclusión.",
        ],
      },
      {
        name: "Bienestar integral",
        description:
          "Acciones que promuevan la salud física, mental y el balance vida-trabajo. Premiamos el autocuidado y la resiliencia como pilares de la sostenibilidad organizacional.",
        rule: "250 PO por actividad · 1 actividad máx. por acción",
        actions: [
          "Participar en programas de salud preventiva o retos de actividad física certificados.",
          "Asistir a talleres, cursos o diplomados de gestión del estrés, salud mental o bienestar.",
          "Participar en carreras o caminatas organizadas o avaladas por la organización.",
          "Usar de forma activa las plataformas y beneficios de bienestar corporativo.",
          "Asistir a jornadas de chequeo médico, nutrición o salud preventiva.",
          "Incorporar pausas activas o rutinas de ejercicio dentro de la jornada laboral.",
          "Sumarse a actividades de mindfulness, meditación o manejo de emociones.",
          "Participar en talleres de balance vida-trabajo y desconexión digital.",
          "Asistir a charlas de finanzas personales y bienestar financiero del empleado.",
          "Integrar equipos deportivos o recreativos internos de la organización.",
          "Participar en actividades de integración y clima laboral que fortalezcan la resiliencia.",
          "Completar programas de ergonomía y salud ocupacional en tu puesto de trabajo.",
        ],
      },
    ],
  },
  {
    key: "M",
    name: "Pulso Colectivo",
    short: "Liderazgo distribuido y conexión digital",
    max: 1250,
    weight: 14,
    gradient: "var(--gradient-sky)",
    accentClass: "text-sky",
    icon: Users,
    description:
      "Define la capacidad de generar influencia y liderazgo en un entorno híbrido y conectado, desde el conocimiento de nuestra historia y lo que nos trajo hasta donde estamos en la actualidad.",
    subdimensions: [
      {
        name: "Identidad y legado",
        description:
          "Reconoce el compromiso del colaborador con el propósito, la historia y la evolución de la marca. Premia el conocimiento de los hitos que nos trajeron hasta aquí y la capacidad de proyectar nuestra esencia en el entorno digital actual.",
        rule: "250 PO por actividad · 1 actividad máx. por acción",
        actions: [
          "Completar la certificación \"Cultura y Propósito\" y mantenerla vigente.",
          "Participar en actividades de Storytelling del Legado compartiendo la historia de la marca.",
          "Ser Guardián de la Marca, velando por el uso correcto de la identidad institucional.",
          "Participar en las Trivias de Hitos Estratégicos de la organización.",
          "Conocer y difundir los hitos y logros que marcaron la evolución de la organización.",
          "Proyectar la esencia y los valores de la marca en los canales y entornos digitales.",
          "Crear o compartir contenido que refuerce la identidad y el propósito institucional.",
          "Ser embajador de la marca en la inducción y el onboarding de nuevos colaboradores.",
          "Documentar historias, anécdotas o casos que fortalezcan el legado organizacional.",
          "Representar a la marca en eventos internos o externos con coherencia y orgullo.",
          "Aportar ideas para preservar y modernizar la identidad visual y cultural de la organización.",
          "Mentorear a otros en el conocimiento de la historia y la evolución de la marca.",
        ],
      },
      {
        name: "Principios de Actuación",
        description:
          "Es el reconocimiento a la vivencia de la cultura corporativa. Se basa en el prestigio que el empleado construye ante sus compañeros por ser un ejemplo a seguir.",
        rule: "Por ranking de referentes: Nominados · Top 15 · Top 15 + 1 dimensión",
        actions: [
          "Ser postulado o nominado como referente de los Principios de Actuación.",
          "Ubicarse en el Top 15 del ranking de referentes de Principios de Actuación.",
          "Alcanzar el Top 15 destacando además en una dimensión del programa.",
          "Vivir y modelar los Principios de Actuación en el día a día.",
          "Ser reconocido por los compañeros como ejemplo de la cultura corporativa.",
          "Promover los Principios de Actuación en tu equipo y en proyectos transversales.",
          "Actuar con integridad, ética y coherencia en la toma de decisiones.",
          "Reconocer y destacar a compañeros que ejemplifican los Principios de Actuación.",
          "Participar en foros o espacios de reflexión sobre la cultura y los valores de la organización.",
          "Aplicar los Principios de Actuación en la atención y experiencia del cliente.",
          "Acompañar a nuevos colaboradores en la apropiación de la cultura corporativa.",
          "Proponer iniciativas que fortalezcan la vivencia de los Principios de Actuación.",
        ],
      },
    ],
  },
  {
    key: "A",
    name: "Chispa Creativa",
    short: "Innovación y colaboración sin silos",
    max: 3100,
    weight: 33,
    gradient: "var(--gradient-violet)",
    accentClass: "text-violet",
    icon: Rocket,
    description:
      "Evalúa el impulso sostenido para transformar ideas en soluciones terminadas y funcionales. Se basa en la optimización de flujos, la eliminación de obstáculos y la colaboración que permite generar resultados que impacten directamente en la rentabilidad y la experiencia del cliente.",
    subdimensions: [
      {
        name: "Construcción del conocimiento y co-creación",
        description:
          "Rompe los \"silos\" departamentales. Premia a quienes trabajan en equipos multidisciplinarios para alcanzar un objetivo común.",
        rule: "500 PO por actividad · 2 actividades máx. por acción",
        actions: [
          "Participar en células de aprendizaje cruzado con otras áreas.",
          "Sumarse a espacios de co-diseño y co-creación de soluciones.",
          "Participar en proyectos interdepartamentales con objetivos comunes.",
          "Integrar equipos multidisciplinarios para resolver retos del negocio.",
          "Facilitar o participar en dinámicas de design thinking e ideación conjunta.",
          "Compartir aprendizajes y buenas prácticas entre áreas.",
          "Co-crear soluciones junto a clientes internos o externos.",
          "Participar en comunidades de práctica o grupos de trabajo transversales.",
          "Apoyar la resolución colaborativa de incidencias entre equipos.",
          "Proponer mejoras de procesos que eliminen silos y cuellos de botella.",
          "Documentar y compartir los resultados de proyectos colaborativos.",
          "Impulsar la colaboración con otras vicepresidencias o unidades.",
        ],
      },
      {
        name: "Innovación",
        description:
          "Es el espacio para el pensamiento disruptivo. Reconoce a quienes proponen soluciones creativas y aplicables — incluye el ranking de LabInnova (1°, 2° y 3° lugar).",
        rule: "500 PO por actividad · 2 actividades máx. por acción",
        actions: [
          "Presentar iniciativas innovadoras aplicables al negocio.",
          "Participar en LabInnova con propuestas de solución.",
          "Sumarse a la comunidad Makers de innovación.",
          "Postular ideas al ranking de LabInnova.",
          "Proponer mejoras que optimicen la experiencia del cliente.",
          "Prototipar y validar soluciones creativas a problemas reales.",
          "Participar en retos o hackatones de innovación internos.",
          "Identificar oportunidades de automatización o simplificación de procesos.",
          "Aportar ideas para nuevos productos, servicios o canales.",
          "Investigar tendencias del sector y proponer su aplicación en la organización.",
          "Colaborar en la implementación de una iniciativa innovadora hasta su resultado.",
          "Compartir casos de innovación que puedan escalarse a otras áreas.",
        ],
      },
      {
        name: "Gestión del conocimiento",
        description:
          "Premia el proceso de documentar y transferir el saber crítico para que la organización no dependa de personas, sino de procesos inteligentes.",
        rule: "500 PO por actividad · 2 actividades máx. por acción",
        actions: [
          "Ejercer tutoría y facilitación de temas especializados.",
          "Brindar mentoría a otros colaboradores.",
          "Diseñar material instruccional para formación interna.",
          "Realizar curaduría de contenido relevante para tu área.",
          "Actualizar repositorios y bases de conocimiento.",
          "Crear contenido digital de aprendizaje: videos, guías o tutoriales.",
          "Documentar procesos críticos para reducir la dependencia de personas.",
          "Dictar charlas o webinars internos para transferir conocimiento.",
          "Sistematizar las lecciones aprendidas de los proyectos.",
          "Elaborar manuales, instructivos o procedimientos.",
          "Acompañar el onboarding técnico de nuevos integrantes.",
          "Mantener vigente la documentación de tu área.",
        ],
      },
    ],
  },
  {
    key: "R",
    name: "Motor de Resultados",
    short: "Resultados medibles y eficiencia operativa",
    max: 2700,
    weight: 29,
    gradient: "var(--gradient-magenta)",
    accentClass: "text-magenta",
    icon: Target,
    description:
      "Se centra en la eficiencia y el impacto directo en los resultados del negocio. Es la métrica que asegura que todas las demás acciones se traduzcan en solidez financiera.",
    subdimensions: [
      {
        name: "Evaluación de Desempeño (EDR)",
        description:
          "Es el indicador formal del cumplimiento de metas individuales alineadas a los objetivos de la organización. Es la base del compromiso profesional.",
        rule: "Se asignan PO desde 80% de EDR: 100%-120% = 1.200 PO · 90%-99% = 700 PO · 80%-89% = 400 PO",
        actions: [
          "Cumplir o superar las metas individuales definidas en el EDR.",
          "Alcanzar una puntuación de EDR igual o superior al 80%.",
          "Definir objetivos claros y medibles alineados a los de la organización.",
          "Dar seguimiento periódico al avance de tus indicadores.",
          "Documentar logros y evidencias del cumplimiento de metas.",
          "Participar en las sesiones de feedback y evaluación de desempeño.",
          "Elaborar y ejecutar un plan de acción para cerrar brechas.",
          "Aportar a los resultados y objetivos de tu equipo.",
          "Mejorar la eficiencia operativa en tus procesos.",
          "Traducir tus actividades en impacto medible para el negocio.",
          "Mantener la calidad y la puntualidad en tus entregas.",
          "Alinear tus prioridades con los objetivos estratégicos de la organización.",
        ],
      },
      {
        name: "Crecimiento y lealtad",
        description:
          "Convertir a cada empleado en un embajador de marca capaz de atraer y retener clientes mediante la excelencia en el servicio y el uso de herramientas digitales.",
        rule: "Por ranking de captación: 1° lugar = 1.500 PO · 2° lugar = 1.000 PO · 3° lugar = 600 PO",
        actions: [
          "Participar en el programa de referidos para la captación de clientes.",
          "Vincular nuevos clientes naturales (Sede Central).",
          "Cumplir el promedio semestral de la meta de captación del área comercial.",
          "Brindar excelencia en el servicio para fidelizar clientes.",
          "Promover el uso de los canales y herramientas digitales de la organización.",
          "Ser embajador de marca ante clientes y prospectos.",
          "Identificar oportunidades de venta cruzada y profundización.",
          "Acompañar a los clientes en la adopción de productos digitales.",
          "Recoger y canalizar la voz del cliente para mejorar el servicio.",
          "Participar en campañas comerciales y de captación.",
          "Fortalecer relaciones de largo plazo con la cartera de clientes.",
          "Referir prospectos calificados a las áreas de negocio.",
        ],
      },
    ],
  },
  {
    key: "T",
    name: "Frontera Digital",
    short: "Gestión del conocimiento y dominio de nuevas herramientas",
    max: 1500,
    weight: 16,
    gradient: "var(--gradient-ocean)",
    accentClass: "text-sky",
    icon: Bot,
    description:
      "Mide el dominio de las herramientas del futuro. No es solo saber usar una computadora, es tener una mentalidad de seguridad y aprendizaje continuo en la era digital.",
    subdimensions: [
      {
        name: "Champions IA",
        description:
          "Empoderar a referentes digitales que transformen la gestión con IA acelerando la adopción tecnológica global.",
        rule: "500 PO por actividad · 1 actividad máx. por acción",
        actions: [
          "Participar en la optimización de procesos con IA.",
          "Sumarse a células de transferencia sobre una herramienta de IA específica.",
          "Crear librerías de prompts para tu área.",
          "Ser referente o champion de IA en tu equipo.",
          "Capacitarse en el uso de herramientas de inteligencia artificial.",
          "Acompañar a otros en la adopción de soluciones de IA.",
          "Identificar casos de uso de IA que agreguen valor al negocio.",
          "Compartir buenas prácticas y aprendizajes sobre IA.",
          "Documentar flujos de trabajo optimizados con IA.",
          "Facilitar demostraciones o talleres prácticos de IA.",
          "Proponer mejoras impulsadas por IA en la gestión diaria.",
          "Medir y difundir los resultados obtenidos con IA.",
        ],
      },
      {
        name: "Blindaje y conocimiento técnico especializado",
        description:
          "Garantizar la actualización en habilidades técnicas críticas y competencias de ciberseguridad, transformando el conocimiento en un activo de protección organizacional.",
        rule: "500 PO por actividad · 1 actividad máx. por acción",
        actions: [
          "Obtener certificaciones externas en tu especialidad técnica.",
          "Aprobar rutas de aprendizaje internas (Campus Virtual).",
          "Certificarse en protección de datos y seguridad de la información.",
          "Formarse en prevención de fraude.",
          "Aplicar en el trabajo las certificaciones obtenidas.",
          "Actualizarse en las habilidades técnicas críticas de tu rol.",
          "Adoptar buenas prácticas de ciberseguridad en la operación.",
          "Participar en simulacros o campañas de concientización en seguridad.",
          "Difundir prácticas seguras entre tus compañeros.",
          "Mantener vigentes las certificaciones técnicas requeridas.",
          "Fortalecer competencias en las herramientas y plataformas de la organización.",
          "Reportar y ayudar a mitigar riesgos o vulnerabilidades técnicas.",
        ],
      },
      {
        name: "Experiencias gamificadas",
        description:
          "Fomenta el aprendizaje a través del juego y la interactividad, reconociendo que un colaborador motivado aprende de manera más efectiva y rápida.",
        rule: "500 PO por actividad · 1 actividad máx. por acción",
        actions: [
          "Completar los retos diseñados en el Campus Virtual.",
          "Aportar feedback para mejorar las experiencias gamificadas.",
          "Participar en la creación o co-creación de experiencias gamificadas.",
          "Sumarse a retos, misiones o desafíos de aprendizaje.",
          "Participar en trivias, quizzes o concursos de conocimiento.",
          "Alcanzar niveles, insignias o logros en las plataformas de aprendizaje.",
          "Proponer ideas para nuevas dinámicas gamificadas.",
          "Motivar a tu equipo a participar en los retos del Campus Virtual.",
          "Compartir tu experiencia y resultados en las dinámicas.",
          "Participar en rankings o tablas de posiciones de aprendizaje.",
          "Probar y validar nuevas experiencias gamificadas.",
          "Integrar la gamificación en las actividades de formación de tu área.",
        ],
      },
    ],
  },
];

export const TOTAL_MAX = dimensions.reduce((sum, d) => sum + d.max, 0);

export const TOTAL_ACTIONS = dimensions.reduce(
  (sum, d) => sum + d.subdimensions.reduce((s, sub) => s + sub.actions.length, 0),
  0,
);

export const TOTAL_SUBDIMENSIONS = dimensions.reduce((sum, d) => sum + d.subdimensions.length, 0);

export function getDimension(key: string) {
  return dimensions.find((d) => d.key === key);
}

export type ActionStatus = "Aprobada" | "En revisión" | "Devuelta";

export type NudoAction = {
  id: number;
  title: string;
  dim: DimensionKey;
  points: number;
  status: ActionStatus;
  date: string;
  evidence?: string;
};

export const initialActions: NudoAction[] = [
  {
    id: 1,
    title: "Célula de transferencia de IA",
    dim: "T",
    points: 500,
    status: "Aprobada",
    date: "18 jul 2026",
  },
  {
    id: 2,
    title: "Mentoría interdepartamental",
    dim: "A",
    points: 500,
    status: "Aprobada",
    date: "24 jul 2026",
  },
  {
    id: 3,
    title: "Jornada de voluntariado",
    dim: "S",
    points: 250,
    status: "En revisión",
    date: "02 ago 2026",
  },
  {
    id: 4,
    title: "Storytelling del legado",
    dim: "M",
    points: 250,
    status: "Aprobada",
    date: "04 ago 2026",
  },
];

export const ranking: { name: string; points: number }[] = [
  { name: "Explorador Alfa", points: 8920 },
  { name: "Explorador Bravo", points: 8450 },
  { name: "Explorador Coral", points: 8110 },
  { name: "Explorador Delta", points: 7890 },
  { name: "Explorador Eco", points: 7620 },
  { name: "Explorador Faro", points: 7340 },
];

export type Reward = {
  name: string;
  category: string;
  cost: number;
  icon: LucideIcon;
  gradient: string;
  description: string;
};

export const rewards: Reward[] = [
  {
    name: "Ruta de aprendizaje",
    category: "Aprendizaje",
    cost: 900,
    icon: BookOpen,
    gradient: "var(--gradient-cyan)",
    description: "Certificación o programa formativo alineado a tu plan de carrera.",
  },
  {
    name: "Experiencia cultural",
    category: "Experiencias",
    cost: 1300,
    icon: Sparkles,
    gradient: "var(--gradient-violet)",
    description: "Encuentros, conciertos y actividades del ecosistema cultural aliado.",
  },
  {
    name: "Beneficio bienestar",
    category: "Bienestar",
    cost: 750,
    icon: Star,
    gradient: "var(--gradient-ocean)",
    description: "Sesiones de salud integral, deporte o descanso adicional.",
  },
  {
    name: "Aporte de impacto",
    category: "Sostenibilidad",
    cost: 500,
    icon: Leaf,
    gradient: "var(--gradient-magenta)",
    description: "Dona tus puntos a una causa social apoyada por la organización.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "¿Cuándo comienza la acumulación?",
    a: "En julio de 2026, sin retroactividad.",
  },
  {
    q: "¿Qué son los PO+?",
    a: "Una categoría extraordinaria para desempeño fuera de serie, contingencias críticas o proyectos de alto impacto no tabulados.",
  },
  {
    q: "¿Cada cuánto se realizan los cortes?",
    a: "Los cortes, reportes y oportunidades de canje están planteados semestralmente.",
  },
  {
    q: "¿Cómo sé si una acción es elegible?",
    a: "Debe ir más allá de las funciones ordinarias, contar con evidencia y producir impacto medible o transversal.",
  },
];

/** Slide 20-21 del programa: categoría extraordinaria fuera de las 5 dimensiones. */
export const nsPlus = {
  name: "PO+ · Órbita Plus",
  description:
    "Se integran como una categoría extraordinaria para premiar el desempeño fuera de serie, la resolución de contingencias críticas o la gestión de proyectos de alto impacto que surgen de forma imprevista.",
  purpose:
    "Su objetivo es garantizar que la excelencia espontánea y el compromiso tengan un lugar inmediato en el ecosistema de valor de la organización.",
  conditions: [
    {
      title: "Criterio de excepcionalidad",
      detail:
        "Solo para acciones que no encajen en las 5 dimensiones, o que superen por mucho el tope de una de ellas debido a una crisis o emergencia.",
    },
    {
      title: "Aprobación cruzada",
      detail:
        "Propuesto por el líder de área y avalado por el Comité de Innovación, asegurando la equidad institucional.",
    },
    {
      title: "Frecuencia",
      detail: "Máximo una asignación por semestre por colaborador.",
    },
  ],
};

/** Slide 23: preguntas oficiales para decidir si una acción suma puntos. */
export const nivelacion: { question: string; ifYes: "suma" | "no-suma"; note: string }[] = [
  {
    question: "¿Esto está en su descripción de cargo?",
    ifYes: "no-suma",
    note: "Si es sí, no suma puntos.",
  },
  {
    question: "¿Esto le ahorró tiempo o dinero a la organización de forma medible?",
    ifYes: "suma",
    note: "Si es sí, suma puntos.",
  },
  {
    question: "¿Esto ayudó a que otra área fuera más ágil?",
    ifYes: "suma",
    note: "Si es sí, suma puntos.",
  },
];

/** Slide 25: reglas del juego del programa. */
export const reglasDelJuego: { title: string; detail: string }[] = [
  {
    title: "Sin retroactividad",
    detail: "Se iniciará el conteo y la acumulación de PO en el mes de julio 2026, sin retroactividad.",
  },
  {
    title: "Cortes semestrales",
    detail:
      "Se harán cortes semestrales de PO y reportes de ranking. Cada semestre se reinicia, desde cero, la acumulación de PO.",
  },
  {
    title: "Primera premiación",
    detail:
      "En el mes de julio 2027 se hará la primera premiación de acuerdo al ranking de lo acumulado, así como al finalizar el Plan Estratégico.",
  },
  {
    title: "Exclusiones",
    detail:
      "Se excluirá al personal contratado, Pasantes Universitarios, Ejecutivos y los que sean considerados por el comité.",
  },
];

/** Slide 26: hitos de comunicación 2026. */
export const cronograma2026: { periodo: string; titulo: string; detalle: string }[] = [
  {
    periodo: "Q2 · Abril - junio",
    titulo: "Encendido de motores",
    detalle: "Foco en que el 100% de la población conozca el programa y su actualización.",
  },
  {
    periodo: "Q3 · Julio - septiembre",
    titulo: "Aceleración a máxima potencia",
    detalle: "Inicio de la acumulación de puntos Órbita.",
  },
  {
    periodo: "Q4 · Octubre - diciembre",
    titulo: "Primera órbita completa 2026",
    detalle:
      "Primer reporte semestral (diciembre), revisión de ranking y canje por premios en la Tienda la organización.",
  },
];

export function fmt(n: number) {
  return new Intl.NumberFormat("es-VE").format(n);
}
