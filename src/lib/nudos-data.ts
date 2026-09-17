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

export type DimensionKey = "H" | "P" | "C" | "M" | "T";

export type Subdimension = {
  name: string;
  /** Qué mide o premia esta subdimensión. */
  description: string;
  /** Regla de puntuación oficial (MP por actividad, tramos, o mecánica de ranking). */
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
    key: "H",
    name: "Huella Verde",
    short: "Compromiso social y cultura a largo plazo",
    max: 80,
    weight: 15,
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
        rule: "25 MP por actividad · 1 actividad máx. por acción",
        actions: [
          "Participar en jornadas y proyectos sociales de impacto, internos y externos, certificados por Responsabilidad Social.",
          "Ser mentor o tutor voluntario en programas de educación financiera para la comunidad.",
          "Facilitar talleres de inclusión financiera para poblaciones vulnerables.",
        ],
      },
      {
        name: "Impacto responsable",
        description:
          "Es la alineación con los valores de inclusión, diversidad y sostenibilidad ambiental. Premia la participación en actividades que buscan dejar un legado positivo en el entorno.",
        rule: "25 MP por actividad · 1 actividad máx. por acción",
        actions: [
          "Participar como promotor de las acciones de la Impacto Responsable.",
          "Obtener certificaciones en sostenibilidad, finanzas sostenibles o impacto responsable.",
        ],
      },
      {
        name: "Bienestar integral",
        description:
          "Acciones que promuevan la salud física, mental y el balance vida-trabajo. Premiamos el autocuidado y la resiliencia como pilares de la sostenibilidad organizacional.",
        rule: "25 MP por actividad · 1 actividad máx. por acción",
        actions: [
          "Participar en programas de salud preventiva o retos de actividad física certificados.",
          "Asistir a talleres, cursos o diplomados de gestión del estrés, salud mental o bienestar.",
        ],
      },
    ],
  },
  {
    key: "P",
    name: "Pulso Colectivo",
    short: "Liderazgo distribuido y conexión digital",
    max: 140,
    weight: 20,
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
        rule: "25 MP por actividad · 1 actividad máx. por acción",
        actions: [
          "Completar la certificación \"Cultura y Propósito\" y mantenerla vigente.",
          "Participar en actividades de Storytelling del Legado compartiendo la historia de la marca.",
          "Ser Guardián de la Marca, velando por el uso correcto de la identidad institucional.",
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
        ],
      },
    ],
  },
  {
    key: "C",
    name: "Chispa Creativa",
    short: "Innovación y colaboración sin silos",
    max: 300,
    weight: 28,
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
        rule: "50 MP por actividad · 2 actividades máx. por acción",
        actions: [
          "Participar en células de aprendizaje cruzado con otras áreas.",
          "Sumarse a espacios de co-diseño y co-creación de soluciones.",
        ],
      },
      {
        name: "Innovación",
        description:
          "Es el espacio para el pensamiento disruptivo. Reconoce a quienes proponen soluciones creativas y aplicables — incluye el ranking de LabInnova (1°, 2° y 3° lugar).",
        rule: "50 MP por actividad · 2 actividades máx. por acción",
        actions: [
          "Presentar iniciativas innovadoras aplicables al negocio.",
          "Participar en LabInnova con propuestas de solución.",
        ],
      },
      {
        name: "Gestión del conocimiento",
        description:
          "Premia el proceso de documentar y transferir el saber crítico para que la organización no dependa de personas, sino de procesos inteligentes.",
        rule: "50 MP por actividad · 2 actividades máx. por acción",
        actions: [
          "Ejercer tutoría y facilitación de temas especializados.",
          "Brindar mentoría a otros colaboradores.",
          "Diseñar material instruccional para formación interna.",
        ],
      },
    ],
  },
  {
    key: "M",
    name: "Motor de Resultados",
    short: "Resultados medibles y eficiencia operativa",
    max: 260,
    weight: 24,
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
        rule: "Se asignan MP desde 80% de EDR: 100%-120% = 120 MP · 90%-99% = 70 MP · 80%-89% = 40 MP",
        actions: [
          "Cumplir o superar las metas individuales definidas en el EDR.",
          "Alcanzar una puntuación de EDR igual o superior al 80%.",
          "Definir objetivos claros y medibles alineados a los de la organización.",
        ],
      },
      {
        name: "Crecimiento y lealtad",
        description:
          "Convertir a cada empleado en un embajador de marca capaz de atraer y retener clientes mediante la excelencia en el servicio y el uso de herramientas digitales.",
        rule: "Por ranking de captación: 1° lugar = 150 MP · 2° lugar = 100 MP · 3° lugar = 60 MP",
        actions: [
          "Participar en el programa de referidos para la captación de clientes.",
          "Vincular nuevos clientes naturales (Sede Central).",
          "Cumplir el promedio semestral de la meta de captación del área comercial.",
        ],
      },
    ],
  },
  {
    key: "T",
    name: "Frontera Digital",
    short: "Gestión del conocimiento y dominio de nuevas herramientas",
    max: 160,
    weight: 13,
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
        rule: "50 MP por actividad · 1 actividad máx. por acción",
        actions: [
          "Participar en la optimización de procesos con IA.",
          "Sumarse a células de transferencia sobre una herramienta de IA específica.",
        ],
      },
      {
        name: "Blindaje y conocimiento técnico especializado",
        description:
          "Garantizar la actualización en habilidades técnicas críticas y competencias de ciberseguridad, transformando el conocimiento en un activo de protección organizacional.",
        rule: "50 MP por actividad · 1 actividad máx. por acción",
        actions: [
          "Obtener certificaciones externas en tu especialidad técnica.",
          "Aprobar rutas de aprendizaje internas (Campus Virtual).",
        ],
      },
      {
        name: "Experiencias gamificadas",
        description:
          "Fomenta el aprendizaje a través del juego y la interactividad, reconociendo que un colaborador motivado aprende de manera más efectiva y rápida.",
        rule: "50 MP por actividad · 1 actividad máx. por acción",
        actions: [
          "Completar los retos diseñados en el Campus Virtual.",
          "Aportar feedback para mejorar las experiencias gamificadas.",
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
    points: 50,
    status: "Aprobada",
    date: "12 mar 2027",
  },
  {
    id: 2,
    title: "Mentoría interdepartamental",
    dim: "C",
    points: 50,
    status: "Aprobada",
    date: "20 mar 2027",
  },
  {
    id: 3,
    title: "Jornada de voluntariado",
    dim: "H",
    points: 25,
    status: "En revisión",
    date: "05 abr 2027",
  },
  {
    id: 4,
    title: "Storytelling del legado",
    dim: "P",
    points: 25,
    status: "Aprobada",
    date: "09 abr 2027",
  },
];

export const ranking: { name: string; points: number }[] = [
  { name: "Explorador Alfa", points: 892 },
  { name: "Explorador Bravo", points: 845 },
  { name: "Explorador Coral", points: 811 },
  { name: "Explorador Delta", points: 789 },
  { name: "Explorador Eco", points: 762 },
  { name: "Explorador Faro", points: 734 },
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
    name: "Curso a elección",
    category: "Crecimiento",
    cost: 90,
    icon: BookOpen,
    gradient: "var(--gradient-cyan)",
    description: "Un curso o certificación corta, elegido libremente, para sumar a tu perfil.",
  },
  {
    name: "Tarde libre de ocio",
    category: "Ocio",
    cost: 130,
    icon: Sparkles,
    gradient: "var(--gradient-violet)",
    description: "Entradas a cine, un plan recreativo o una salida con el equipo.",
  },
  {
    name: "Sesión de bienestar",
    category: "Salud",
    cost: 75,
    icon: Star,
    gradient: "var(--gradient-ocean)",
    description: "Una sesión de masajes, actividad física guiada o chequeo preventivo.",
  },
  {
    name: "Donación a nombre tuyo",
    category: "Comunidad",
    cost: 50,
    icon: Leaf,
    gradient: "var(--gradient-magenta)",
    description: "Convierte tus puntos en una donación a una causa social, a tu nombre.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "¿Cuándo comienza la acumulación?",
    a: "En julio de 2027, sin retroactividad.",
  },
  {
    q: "¿Qué son los MP+?",
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
  name: "MP+ · Órbita Plus",
  description:
    "Una categoría aparte para reconocer momentos que se salen de lo previsto: un desempeño excepcional, una emergencia bien resuelta, o un proyecto de alto impacto que nadie vio venir.",
  purpose:
    "Busca que ese tipo de esfuerzo tenga un espacio inmediato de reconocimiento, sin esperar al próximo corte semestral.",
  conditions: [
    {
      title: "Criterio de excepcionalidad",
      detail:
        "Aplica solo a lo que no encaja en ninguna de las 5 dimensiones, o que supera muy por encima el tope de alguna por una situación fuera de lo normal.",
    },
    {
      title: "Aprobación cruzada",
      detail:
        "Debe proponerlo el líder del área y aprobarlo un comité interno, para mantener el criterio parejo entre equipos.",
    },
    {
      title: "Frecuencia",
      detail: "Máximo una vez por semestre por persona.",
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
    detail: "Se iniciará el conteo y la acumulación de MP en el mes de julio 2027, sin retroactividad.",
  },
  {
    title: "Cortes semestrales",
    detail:
      "Se harán cortes semestrales de MP y reportes de ranking. Cada semestre se reinicia, desde cero, la acumulación de MP.",
  },
  {
    title: "Primera premiación",
    detail:
      "En el mes de julio 2028 se hará la primera premiación de acuerdo al ranking de lo acumulado, así como al finalizar el Plan Estratégico.",
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
    periodo: "Febrero - abril 2028",
    titulo: "Encendido de motores",
    detalle: "Foco en que el 100% de la población conozca el programa y su funcionamiento.",
  },
  {
    periodo: "Mayo - julio 2028",
    titulo: "Aceleración a máxima potencia",
    detalle: "Inicio de la acumulación de puntos Órbita.",
  },
  {
    periodo: "Agosto - octubre 2028",
    titulo: "Primera órbita completa",
    detalle:
      "Primer reporte del período (octubre), revisión de ranking y canje por premios en la tienda.",
  },
];

export function fmt(n: number) {
  return new Intl.NumberFormat("es-VE").format(n);
}
