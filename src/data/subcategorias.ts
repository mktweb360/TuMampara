import type { Producto, Subcategoria } from "./catalogo";

const base =
  "Fabricación a medida, vidrio templado de seguridad, serigrafía y color de perfilería personalizables. Instalación gratuita en Vigo y alrededores y 2 años de garantía de fabricante.";

function prod(
  nombre: string,
  tipo: string,
  formato: string,
  descripcion: string,
): Producto {
  return {
    slug: `mampara-${formato.toLowerCase().replace(/[^a-z]+/g, "-")}-${tipo.toLowerCase()}-${nombre.toLowerCase()}`
      .replace(/-+/g, "-")
      .replace(/-$/, ""),
    nombre,
    tipo,
    formato,
    descripcion,
    precio: "Consultar precio",
  };
}

function sub(
  path: string,
  titulo: string,
  descripcion: string,
  tipo: string,
  formato: string,
  modelos: [string, string][],
): Subcategoria {
  return {
    path,
    titulo,
    descripcion,
    productos: modelos.map(([n, d]) => prod(n, tipo, formato, d)),
  };
}

export const subcategorias: Subcategoria[] = [
  sub(
    "/mamparas-ducha-frontales-correderas",
    "Mamparas frontales correderas para ducha",
    `Mamparas de ducha frontales con apertura corredera, fabricadas a medida para tu plato. ${base}`,
    "Corredera",
    "Frontal para ducha",
    [
      ["Elvia", "Frontal corredera de líneas limpias y perfilería estrecha, con rodamientos suaves y desmontables para limpiar el vidrio sin esfuerzo."],
      ["Ceres", "Corredera frontal con guía superior vista, cierre suave y tratamiento antical opcional en el vidrio."],
      ["Deva", "Pensada para huecos anchos: dos hojas desplazables sobre guía reforzada y perfil inferior de mínimo resalte."],
    ],
  ),
  sub(
    "/mamparas-angulares-correderas",
    "Mamparas angulares correderas para ducha",
    `Mamparas angulares con puertas correderas para platos en esquina, hechas a medida del hueco. ${base}`,
    "Corredera",
    "Angular para ducha",
    [
      ["Nairi", "Angular de dos hojas correderas con perfilería a juego, ideal para platos cuadrados en esquina."],
      ["Tebra", "Angular corredera con hojas de gran paso y guías dobles para un acceso cómodo."],
      ["Umia", "Solución angular para platos rectangulares, con hoja fija lateral y corredera frontal."],
    ],
  ),
  sub(
    "/mamparas-banera-frontales-correderas",
    "Mamparas correderas para bañera",
    `Mamparas frontales correderas para bañera, a medida y sin obra. ${base}`,
    "Corredera",
    "Bañera",
    [
      ["Lerez", "Dos hojas correderas sobre guía superior, perfil bajo y estanqueidad reforzada en el borde de la bañera."],
      ["Verdugo", "Corredera de tres hojas para bañeras largas, con máxima apertura de paso."],
      ["Oitaven", "Corredera compacta con vidrio templado de 6 mm y perfil anodizado resistente a la humedad."],
    ],
  ),
  sub(
    "/mamparas-ducha-frontal-abatibles",
    "Mamparas frontales abatibles para ducha",
    `Mamparas de ducha frontales con puerta abatible y cierre magnético. ${base}`,
    "Abatible",
    "Frontal para ducha",
    [
      ["Sela", "Puerta abatible con bisagras de elevación y cierre magnético, para una apertura amplia y limpieza cómoda."],
      ["Miño", "Frontal abatible con hoja fija y puerta batiente, perfilería reforzada y vidrio templado."],
      ["Avia", "Puerta abatible sin perfil inferior: el agua se contiene con junta y el suelo queda despejado."],
    ],
  ),
  sub(
    "/mamparas-angulares-abatibles",
    "Mamparas angulares abatibles para ducha",
    `Mamparas angulares con puerta abatible para platos en esquina. ${base}`,
    "Abatible",
    "Angular para ducha",
    [
      ["Barbanza", "Angular con puerta abatible y lateral fijo, bisagras regulables para huecos poco aplomados."],
      ["Suido", "Angular abatible de doble puerta, apertura total del acceso a la ducha."],
      ["Faro", "Angular abatible con perfilería minimalista y vidrio de 8 mm."],
    ],
  ),
  sub(
    "/mamparas-banera-frontal-abatibles",
    "Mamparas abatibles para bañera",
    `Mamparas frontales abatibles para bañera, con hojas que se pliegan hacia dentro. ${base}`,
    "Abatible",
    "Bañera",
    [
      ["Ulla", "Dos hojas abatibles que se recogen hacia el interior de la bañera para no invadir el baño."],
      ["Tambre", "Hoja fija y hoja abatible con bisagra de 180º, fácil de limpiar por ambas caras."],
      ["Sarela", "Abatible de tres hojas para bañeras largas, con perfil bajo de estanqueidad."],
    ],
  ),
  sub(
    "/mamparas-ducha-frontales-plegables",
    "Mamparas frontales plegables para ducha",
    `Mamparas de ducha frontales plegables, la solución para pasos estrechos. ${base}`,
    "Plegable",
    "Frontal para ducha",
    [
      ["Rande", "Hojas que se pliegan sobre sí mismas y liberan todo el paso: ideal en baños estrechos."],
      ["Toralla", "Plegable de perfil ligero con guía inferior de deslizamiento silencioso."],
      ["Cies", "Plegable con vidrio templado y bisagras ocultas, acabado limpio y sin resaltes."],
    ],
  ),
  sub(
    "/mamparas-angulares-plegables",
    "Mamparas angulares plegables para ducha",
    `Mamparas angulares plegables para duchas en esquina con poco espacio de maniobra. ${base}`,
    "Plegable",
    "Angular para ducha",
    [
      ["Ons", "Angular plegable de dos cuerpos, cada lado se recoge de forma independiente."],
      ["Sálvora", "Angular plegable con lateral fijo y frontal plegable, muy cómodo en baños pequeños."],
      ["Arousa", "Angular plegable con perfilería reforzada y hojas desmontables."],
    ],
  ),
  sub(
    "/mamparas-banera-frontales-plegables",
    "Mamparas plegables para bañera",
    `Mamparas frontales plegables para bañera, con máximo paso libre. ${base}`,
    "Plegable",
    "Bañera",
    [
      ["Louro", "Tres hojas plegables que dejan la bañera prácticamente despejada al entrar."],
      ["Sil", "Plegable de dos hojas con junta de estanqueidad en todo el borde."],
      ["Umia Bath", "Plegable compacta para bañeras cortas, con vidrio templado de 5 mm."],
    ],
  ),
  sub(
    "/fijos-de-mampara-de-ducha",
    "Fijos de mampara para ducha (walk-in)",
    `Paneles fijos tipo walk-in para ducha: sin puertas, sin guías y sin mantenimiento. ${base}`,
    "Fijo",
    "Ducha walk-in",
    [
      ["Vigo", "Panel fijo walk-in con perfil a suelo y techo opcional, vidrio de 8 mm y máxima sensación de amplitud."],
      ["Alcabre", "Fijo con hoja abatible auxiliar para dirigir el agua, sujeción por barra al techo."],
      ["Samil", "Fijo de gran formato para duchas de obra, con perfil en U y montaje a medida."],
    ],
  ),
  sub(
    "/fijos-de-mampara-para-banera",
    "Fijos de mampara para bañera",
    `Paneles fijos para bañera: la opción más limpia y sencilla de mantener. ${base}`,
    "Fijo",
    "Bañera",
    [
      ["Bouzas", "Panel fijo para bañera con perfil mural regulable y vidrio templado."],
      ["Coia", "Fijo con hoja batiente de apoyo, para bañeras que también se usan como ducha."],
      ["Teis", "Fijo extra alto para evitar salpicaduras en duchas de mano."],
    ],
  ),
];

export const subcategoriaPorPath = Object.fromEntries(
  subcategorias.map((s) => [s.path, s]),
);

export const todosLosProductos = subcategorias.flatMap((s) =>
  s.productos.map((p) => ({ ...p, subcategoria: s })),
);
