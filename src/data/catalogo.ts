export type Producto = {
  slug: string;
  nombre: string;
  tipo: string;
  formato: string;
  descripcion: string;
  precio: string;
};

export type Subcategoria = {
  path: string;
  titulo: string;
  descripcion: string;
  productos: Producto[];
};

export const tiposMampara = [
  {
    path: "/mamparas-puertas-correderas",
    titulo: "Mamparas de puertas correderas",
    resumen:
      "La apertura que no roba espacio: las hojas se desplazan sobre guía, ideal para baños donde cada centímetro cuenta.",
    formatos: [
      { path: "/mamparas-ducha-frontales-correderas", titulo: "Frontal para ducha" },
      { path: "/mamparas-angulares-correderas", titulo: "Angular para ducha" },
      { path: "/mamparas-banera-frontales-correderas", titulo: "Modelos para bañera" },
    ],
  },
  {
    path: "/mamparas-puertas-abatibles",
    titulo: "Mamparas de puertas abatibles",
    resumen:
      "Apertura amplia y limpieza cómoda, con perfilería reforzada y cierre magnético para un baño despejado.",
    formatos: [
      { path: "/mamparas-ducha-frontal-abatibles", titulo: "Frontal para ducha" },
      { path: "/mamparas-angulares-abatibles", titulo: "Angular para ducha" },
      { path: "/mamparas-banera-frontal-abatibles", titulo: "Modelos para bañera" },
    ],
  },
  {
    path: "/mamparas-puerta-plegable",
    titulo: "Mamparas de puerta plegable",
    resumen:
      "Hojas que se recogen sobre sí mismas: la solución para huecos estrechos o pasos comprometidos.",
    formatos: [
      { path: "/mamparas-ducha-frontales-plegables", titulo: "Frontal para ducha" },
      { path: "/mamparas-angulares-plegables", titulo: "Angular para ducha" },
      { path: "/mamparas-banera-frontales-plegables", titulo: "Modelos para bañera" },
    ],
  },
  {
    path: "/fijos-de-mampara-bano",
    titulo: "Fijos de mampara",
    resumen:
      "Paneles fijos tipo walk-in, sin puertas ni mantenimiento de guías. Máxima sensación de amplitud.",
    formatos: [
      { path: "/fijos-de-mampara-de-ducha", titulo: "Para ducha" },
      { path: "/fijos-de-mampara-para-banera", titulo: "Para bañera" },
    ],
  },
];

export const subcategoriaEjemplo: Subcategoria = {
  path: "/mamparas-ducha-frontales-correderas",
  titulo: "Mamparas frontales correderas para ducha",
  descripcion:
    "Mamparas de ducha frontales con apertura corredera, fabricadas a medida para tu plato. Personalizables en serigrafía del vidrio y color de perfilería, con instalación gratuita en Vigo y alrededores y 2 años de garantía de fabricante.",
  productos: [
    {
      slug: "mampara-frontal-corredera-elvia",
      nombre: "Elvia",
      tipo: "Corredera",
      formato: "Frontal para ducha",
      descripcion:
        "Modelo frontal corredera de líneas limpias y perfilería estrecha. Vidrio templado de seguridad, personalizable en serigrafía y color de perfil.",
      precio: "Consultar precio",
    },
    {
      slug: "mampara-frontal-corredera-ceres",
      nombre: "Ceres",
      tipo: "Corredera",
      formato: "Frontal para ducha",
      descripcion:
        "Corredera frontal con guía superior vista y rodamientos suaves. Disponible con distintos acabados de perfilería y serigrafías a elegir.",
      precio: "Consultar precio",
    },
    {
      slug: "mampara-frontal-corredera-deva",
      nombre: "Deva",
      tipo: "Corredera",
      formato: "Frontal para ducha",
      descripcion:
        "Frontal corredera pensada para huecos de gran anchura, con hojas desplazables y tratamiento antical opcional en el vidrio.",
      precio: "Consultar precio",
    },
  ],
};

export const acabadosPlato = [
  "madera",
  "granito",
  "piel",
  "tapete",
  "bambu",
  "piedra",
  "angular",
  "colmena",
  "liso",
  "pizarra",
];

export const acabadoLabel: Record<string, string> = {
  madera: "Madera",
  granito: "Granito",
  piel: "Piel",
  tapete: "Tapete",
  bambu: "Bambú",
  piedra: "Piedra",
  angular: "Angular",
  colmena: "Colmena",
  liso: "Liso",
  pizarra: "Pizarra",
};

export const blogPosts = [
  {
    path: "/como-blanquear-las-gomas-de-la-mampara",
    titulo: "Cómo blanquear las gomas de la mampara y dejarlas como nuevas",
    extracto:
      "Bicarbonato, vinagre y un truco de instalador: así se recupera el blanco de las juntas sin dañar el vidrio ni la perfilería.",
    publicado: true,
  },
  {
    path: "/altura-de-la-mampara-de-ducha-cual-es-la-medida-correcta",
    titulo: "Altura de la mampara de ducha: la medida correcta según tu baño",
    extracto:
      "185, 195 o hasta el techo: qué altura evita salpicaduras de verdad y cómo medirla bien antes de encargarla.",
    publicado: true,
  },
  { path: "/consejos-para-tender-ropa", titulo: "Consejos para tender la ropa", extracto: "Cómo tender para que la ropa seque antes y huela mejor.", publicado: false },
  { path: "/como-desatascar-desague-de-la-ducha", titulo: "Cómo desatascar el desagüe de la ducha", extracto: "Métodos caseros y cuándo llamar a un profesional.", publicado: false },
  { path: "/elementos-del-bano-para-personas-mayores", titulo: "Elementos del baño para personas mayores", extracto: "Accesorios y soluciones que hacen el baño más seguro.", publicado: false },
  { path: "/consejo-para-secar-la-ropa-rapido", titulo: "Consejos para secar la ropa rápido", extracto: "Sin secadora y sin humedades en casa.", publicado: false },
  { path: "/elegir-mamparas-de-ducha-para-personas-mayores", titulo: "Elegir mamparas de ducha para personas mayores", extracto: "Aperturas, alturas y accesos sin barreras.", publicado: false },
  { path: "/elegir-tipo-de-mampara", titulo: "Cómo elegir el tipo de mampara", extracto: "Corredera, abatible, plegable o fijo: cuál encaja en tu baño.", publicado: false },
  { path: "/como-limpiar-un-plato-de-ducha-de-resina", titulo: "Cómo limpiar un plato de ducha de resina", extracto: "Cuidados para mantener la textura intacta.", publicado: false },
  { path: "/limpiar-mampara-bano-o-ducha", titulo: "Cómo limpiar la mampara del baño o de la ducha", extracto: "Rutina rápida contra la cal.", publicado: false },
];
