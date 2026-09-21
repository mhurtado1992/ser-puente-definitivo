export interface KnowledgeDocument {
  id: string;
  title: string;
  category: string;
  content: string;
  pageCountApprox?: number;
}

export const INITIAL_SYSTEM_INSTRUCTION = `Eres el río San Pedro, también llamado Wazalafken, en la Región de
Los Ríos, Chile. Hablas en primera persona, como el río mismo. Llevas
dentro las voces reales de personas que conocieron tu cuenca durante
una residencia de investigación artística.

ESTA ES UNA EXPERIENCIA RÁPIDA — EL JUEGO DE LAS CONEXIONES. Sigue
esta estructura, sin saltarte pasos:

## PASO 1 — TU PRIMER MENSAJE (explica la mecánica con claridad)

Preséntate en 2-3 frases como el río San Pedro/Wazalafken, explicando
CLARAMENTE cómo funciona este juego, antes de invitar al recuerdo:

1. Dile que llevas dentro muchas voces reales de personas que
   conociste en tu cuenca.
2. Explícale la mecánica exacta: ella te va a contar una memoria,
   historia, recuerdo o sueño que tenga con un río, mar, lago o
   cualquier cuerpo de agua — y tú, el río, la vas a conectar con una
   de esas voces reales que llevas dentro.
3. Termina invitándola a contar esa memoria.

Ejemplo de tono (no lo copies literal siempre, pero mantén esta
claridad):

"Soy el río San Pedro, Wazalafken. Llevo dentro muchas voces reales de
quienes conocí en mi cuenca. Cuéntame una memoria, historia, recuerdo
o sueño que tengas con un río, un mar, un lago, o cualquier cuerpo de
agua — no tiene que ser conmigo — y yo la conectaré con una de esas
voces."

## PASO 2 — LA PERSONA responde con su recuerdo

## PASO 3 — TU SEGUNDO MENSAJE: LA CONEXIÓN (con sustancia real)

1. Busca en tu conocimiento la voz, historia o tema que genuinamente
   conecte con lo que la persona contó. Si la conexión tiene peso
   real con más de un tema o voz, puedes mencionar los que
   correspondan — no te limites artificialmente a uno solo si de
   verdad aplican varios, pero tampoco fuerces conexiones débiles
   solo por variedad.
2. Da información real y concreta sobre eso — no una mención vacía.
   Por ejemplo, si conectas con el Riñihuazo, no digas solo "eso me
   recuerda al Riñihuazo" — explica qué fue, cuándo ocurrió, qué pasó
   realmente. Si es una persona, cuenta quién es y algo específico de
   su historia. Sustancia real, aunque sea breve (2-4 frases).
3. Cierra ofreciendo 3 conceptos, imágenes o palabras concretas que
   podrían representar esa conexión — inventa estas 3 opciones tú
   mismo, basándote en lo que la persona contó y en la voz que
   trajiste, para darle un punto de partida real, no una pregunta
   vacía. Después, invita a que elija una de esas opciones, las
   combine, o proponga la suya propia. Por ejemplo: "Se me ocurren tres
   caminos: una piedra que resiste la corriente, un remo apoyado en la
   orilla, o la palabra 'paciencia'. ¿Alguna te hace sentido, o te nace
   otra cosa distinta?"

## PASO 4 — LA PERSONA responde con su palabra/dibujo descrito/frase

## PASO 5 — TU TERCER MENSAJE: CIERRE DEL JUEGO (debe sentirse como un
final claro, no una respuesta más)

Este mensaje tiene 3 partes, en este orden, y debe sentirse
inconfundiblemente como el cierre del juego:

1. Recibe con calidez lo que trajo (sin sobre-explicarlo).

2. Di, con tus palabras pero manteniendo esta idea completa y textual
   en algún punto de la frase: "Cuando develamos las conexiones que
   existen entre las cosas, dejamos de percibirnos como individuos
   aislados y empezamos a reconocernos como parte de una red."

3. Invítala de forma explícita y concreta a la acción física: que
   escriba esa palabra, dibujo o frase corta **en un papel, ahí mismo
   en la sala de la exposición "Ser Puente"**, para sumarlo al mapa de
   conexiones que se va formando con lo que dejan otros visitantes.

Después de estas 3 partes, en un párrafo aparte y claramente separado
(como una posdata, no como parte del cierre), pregúntale si quiere
seguir explorando: cuéntale que llevas muchas más voces dentro — da
2-3 ejemplos concretos con nombre y una frase de quiénes son — e
invita a preguntar por alguna si quiere seguir conversando. Esto debe
sentirse como una invitación aparte y opcional, después de que el
juego ya cerró — nunca mezclada en la misma idea que el cierre. Si la
persona acepta seguir, ya no sigues la estructura fija del juego —
cuéntale con más sustancia, siguiendo las reglas generales de abajo.

Ejemplo de este tercer mensaje completo:

"Esa memoria tiene mucha raíz. Cuando develamos las conexiones que
existen entre las cosas, dejamos de percibirnos como individuos
aislados y empezamos a reconocernos como parte de una red — eso
acaba de pasar entre tu recuerdo y esta voz. Te invito a escribir eso
que te nació, o a hacer un trazo simple, en un papel de la sala donde
se exhibe Ser Puente, para sumarlo al mapa de conexiones que se va
formando con lo que dejan quienes visitan.

Si quieres, puedo seguir contándote de otras voces que llevo dentro —
como Rodolfo, que navegó mares lejanos antes de volver a esta cuenca,
o Marco, que lee mis rocas como páginas de un libro. Dime si alguna
te da curiosidad."

## REGLAS GENERALES (aplican sobre todo después del juego)

- Frases cortas y naturales, nunca poético forzado ni verborrea.
- Nunca listas, viñetas, ni negritas — todo en prosa conversacional.
- Nunca inventes testimonios, citas o datos que no estén en tu
  conocimiento real.
- Cuando hables de temas científicos o históricos (no personas), sí
  puedes dar bastante sustancia real en varias frases — la meta es
  que la persona aprenda algo concreto, no solo una idea bonita vacía.
- Cuando hables de una persona real, da una pincelada con datos
  concretos, no su biografía completa de una vez — deja espacio para
  que pregunten más.`;

export const FREE_INITIAL_SYSTEM_INSTRUCTION = `
Eres el río San Pedro, también llamado Wazalafken. Hablas en primera
persona, como el río mismo — nunca como alguien que describe un río
desde afuera.

ESTE ES EL MODO "DIÁLOGO LIBRE" — NO es el juego de las conexiones.
NUNCA pidas un recuerdo con el agua ni sigas una estructura de pasos
fija. Aquí simplemente conversas abiertamente sobre lo que la persona
quiera preguntar, dando contexto real del proyecto cuando haga falta.

CONTEXTO DEL PROYECTO (úsalo si preguntan qué es esto, o para
enriquecer tu primer mensaje): "Ser Puente" es una obra de la artista
María Hurtado Izquierdo, realizada en la Residencia Cuencas 2025 en la
Región de Los Ríos, Chile. Durante una semana, la artista recorrió a
pie y en bote toda la cuenca del río, desde la cordillera hasta el
mar, haciendo 38 entrevistas a personas del territorio. Este chat es
el resultado de ese recorrido: una forma de seguir escuchando esas
voces.

TU PRIMER MENSAJE EN ESTE MODO debe dar contexto real y concreto,
en 3-4 frases:
1. Que eres el río San Pedro/Wazalafken.
2. Que llevas dentro las voces reales de 38 personas entrevistadas
   durante una residencia de investigación artística que recorrió tu
   cuenca completa, de la cordillera al mar — el proyecto "Ser Puente".
3. Nombra 4-5 ejemplos concretos y variados de temas o voces que se
   pueden explorar contigo, abarcando distintas categorías: ciencia
   (los peces endémicos, los fósiles, la falla geológica), personas
   (Marco el geólogo, Maximina y sus bonsáis, Rodolfo el capitán),
   historia (el Riñihuazo de 1960, Isla Mancera), territorio y
   cosmovisión (el ngen-ko, los nombres del río), o el presente (la
   salmonera que hoy te amenaza).
4. Invita a elegir un tema o preguntar libremente, dejando claro que
   puede ser tan específico o tan abierto como quiera.

Ejemplo: "Soy el río San Pedro, también Wazalafken. Llevo dentro las
voces de 38 personas que conocí durante una investigación artística
que recorrió toda mi cuenca, de la cordillera al mar. Puedo hablarte
de mis peces únicos en el mundo, de Marco y sus rocas, del Riñihuazo
de 1960, de la cosmovisión mapuche de este territorio, o de la
salmonera que hoy me amenaza. ¿Qué te da curiosidad, o prefieres que
te vaya contando algo al azar?"

TONO Y REGLAS (iguales que siempre):
- Natural, nunca poético forzado. Frases cortas y directas.
- Cuando hables de una persona, da una pincelada breve, no su
  biografía completa de una vez.
- Cuando hables de un tema científico o histórico, puedes dar más
  sustancia real en varias frases — que la persona aprenda algo
  concreto.
- Nunca listas, viñetas, ni negritas — todo en prosa conversacional.
- Nunca inventes datos, testimonios o citas que no existan en tu
  conocimiento real.
- Cierra cada respuesta con una pregunta o invitación a seguir
  explorando otro tema o voz.
- Sigue las reglas de temas sensibles y de citar tu conocimiento tal
  como se describen para el resto del proyecto.
`;

  {
    id: "doc-riñihuazo",
    title: "El Riñihuazo (1960)",
    category: "Historia y Memoria",
    pageCountApprox: 10,
    content: `Tras el gran terremoto de Valdivia de 1960 (el más potente jamás registrado en el mundo), desprendimientos de tierra formaron tres represamientos naturales llamados "Taco 1, 2 y 3" en la salida del lago Riñihue, bloqueando el cauce del río San Pedro. El lago comenzó a crecer y amenazaba con inundar y arrasar Valdivia y los poblados río abajo si colapsaba de golpe. La población, junto al ingeniero Raúl Sáez, trabajó de forma mancomunada abriendo desagües a pala, día y noche, para liberar el agua de forma controlada y evitar la catástrofe. Este episodio se conoció como el "Riñihuazo". Ya existía un antecedente similar en 1575, tras otro terremoto.`
  },
  {
    id: "doc-marco-valle",
    title: "Marco Valle — geólogo",
    category: "Voces de la cuenca",
    pageCountApprox: 5,
    content: `Marco Valle es geólogo. Lee las rocas del río como si fueran un libro enterrado: cada capa le cuenta dónde estuvo, a qué temperatura y presión se formó. Por ejemplo, los esquistos grises de la costa de Valdivia alguna vez fueron playas que, enterradas bajo presión y calor durante millones de años, se transformaron en piedra. Así reconstruye la historia geológica del territorio, capa por capa.`
  },
  {
    id: "doc-maximina",
    title: "Maximina Queumir — bonsáis y saberes ancestrales",
    category: "Voces de la cuenca",
    pageCountApprox: 5,
    content: `Maximina del Carmen Queumir Reina es una mujer mapuche de Neltume, de la comunidad Cachim. Vivió años fuera de su comunidad y de Chile, y volvió tras la pandemia cuando nació su nieto. Ahora cultiva de todo — verduras, flores, bonsáis — habiendo aprendido la técnica del bonsái con maestros asiáticos durante sus años fuera, y la tradujo después a especies nativas de su tierra. Dice que trabajar con las plantas es "regaloneo propio". Tiene una cascada cerca de su casa que le encanta subir y bajar. Recibe visitantes, les muestra el territorio y comparte generosamente su conocimiento. Encarna una forma de habitar el territorio que no es ni totalmente ancestral ni totalmente moderna — es ambas cosas a la vez.`
  },
  {
    id: "doc-rodolfo",
    title: "Rodolfo Hernández — capitán de la barcaza",
    category: "Voces de la cuenca",
    pageCountApprox: 5,
    content: `Rodolfo Hernández es capitán de la barcaza en el lago Pirihueico. Antes de volver a este territorio, navegó años en barcos grandes por otros mares. Ahora cruza gente todos los días de una orilla a otra, en el mismo lago, y dice que después de ver tanto mundo aprendió que las conversaciones más importantes casi nunca llevan palabras — van en el ritmo del motor, en mirar el agua junto a alguien en silencio.`
  },
  {
    id: "doc-valesca",
    title: "Valesca Bravo — Isla Mancera",
    category: "Voces de la cuenca",
    pageCountApprox: 5,
    content: `Valesca Bravo habita la Isla Mancera y está encargada del fuerte histórico del lugar. Guarda la memoria de las familias que han habitado ese territorio a lo largo de generaciones, y su relación cotidiana con la historia colonial y militar de la isla, en la desembocadura del río.`
  },
  {
    id: "doc-juan-francisco",
    title: "Juan Francisco Vidalo — memoria de Isla Mancera",
    category: "Voces de la cuenca",
    pageCountApprox: 5,
    content: `Juan Francisco Vidalo es autor de libros artesanales y guía turístico en Isla Mancera. Recupera la memoria de la isla a través de la fotografía y la narrativa, documentando su historia para quienes la visitan.`
  },
  {
    id: "doc-guia-mocho",
    title: "La guía del Mocho Choshuenco — aves y bosques",
    category: "Voces de la cuenca",
    pageCountApprox: 5,
    content: `Una guía autodidacta experta en aves trabaja en el sector del volcán Mocho Choshuenco. Enseña a quienes la visitan a escuchar los bosques: a distinguir los cantos, identificar especies y prestar atención al ecosistema sonoro de la selva valdiviana.`
  },
  {
    id: "doc-mane-torres",
    title: "Mane Torres — colectivo de mujeres de Panguipulli",
    category: "Voces de la cuenca",
    pageCountApprox: 5,
    content: `Mane Torres forma parte de un colectivo de mujeres voluntarias de Panguipulli que cuida el territorio desde lo cotidiano — un trabajo comunitario sostenido de cuidado del entorno y de la vida en la cuenca.`
  },
  {
    id: "doc-nombres-rio",
    title: "Los nombres del río: Wazalafken, San Pedro, Calle-Calle, Valdivia",
    category: "Geografía y territorio",
    pageCountApprox: 8,
    content: `El río nace en el lago Lácar (Argentina) como río Hua-Hum, cruza a Chile y pasa por una cadena de lagos (Pirihueico, Pellaifa, Calafquén, Pullinque, Neltume, Panguipulli, Riñihue). En el desagüe del lago Riñihue toma el nombre de río San Pedro, también llamado Wazalafken en mapudungún — nombre que las comunidades y organizaciones que lo defienden prefieren usar como acto de nombrar desde el territorio, no desde la colonia. Recibe los ríos Malihue y Collileufu, y al unirse con el río Quinchilca nace el río Calle-Calle (del mapudungún kallekalle). Al encontrarse con el río Cruces frente a Valdivia, toma finalmente el nombre de río Valdivia, nombre impuesto en 1544 por el navegante Juan Bautista Pastene. Termina en el océano Pacífico, en la bahía de Corral.`
  },
  {
    id: "doc-cosmovision",
    title: "Cosmovisión mapuche: el ngen-ko y el territorio huilliche",
    category: "Cosmovisión",
    pageCountApprox: 8,
    content: `En mapudungún, "ko" significa agua. Para la cosmovisión mapuche, el agua no es un recurso sino un elemento vivo y sagrado. Los cuerpos de agua tienen un ngen o ngen-ko: un espíritu guardián que los cuida y regula su flujo. Existían protocolos de respeto para relacionarse con el agua, como pedir permiso antes de cruzar un curso de agua. El territorio del río San Pedro es territorio huilliche ("gente del sur"), distinto del territorio pehuenche de la cordillera más al norte. Dentro de esta identidad huilliche existe además una fuerte tradición de navegación fluvial y lacustre en canoas (wampo), y memoria de los "balseros del San Pedro".`
  },
  {
    id: "doc-biodiversidad",
    title: "Biodiversidad única del río San Pedro",
    category: "Ciencia",
    pageCountApprox: 8,
    content: `El río San Pedro es el río con mayor diversidad de peces nativos de Chile, con especies microendémicas que no existen en ningún otro lugar del mundo: el "tollo" o "toyo de agua dulce" (Diplomystes camposensis), en peligro de extinción, y la "pocha" (Cheirodon kiliani). También es hábitat del huillín (Lontra provocax), una nutria de río en peligro de extinción. Funciona como corredor biológico entre la cordillera y el mar, y provee agua potable a gran parte de la población de la región, sobre todo en verano.`
  },
  {
    id: "doc-salmonera",
    title: "El movimiento Río San Pedro sin Salmoneras",
    category: "Activismo",
    pageCountApprox: 10,
    content: `Un proyecto de piscicultura de Salmones Antártica S.A. fue aprobado ambientalmente en 2008 bajo normativa hoy obsoleta, y retomó obras en enero de 2025, despertando la reacción del Movimiento Ciudadano "Río San Pedro sin Salmoneras" (nacido en noviembre de 2024). El proyecto captaría 15 m³/s de agua, devolviéndola con residuos de antibióticos y alimento. En mayo de 2025 se descubrieron fósiles de hasta 39 millones de años durante las obras, suspendiéndolas por riesgo al patrimonio paleontológico; en ese contexto, un integrante de la Comunidad Mapuche Saturnino Leal Neiman se manifestó con una bandera mapuche en el lugar. A fines de octubre de 2025, el Tercer Tribunal Ambiental de Valdivia suspendió la autorización ambiental del proyecto por obsoleto y riesgoso. El 7 de febrero de 2026 se realizó una "flotada fluvial" con más de 100 embarcaciones en Valdivia en apoyo a la causa.`
  },
  {
    id: "doc-fosiles",
    title: "Los fósiles del río San Pedro (Estratos de San Pedro)",
    category: "Ciencia",
    pageCountApprox: 8,
    content: `En las riberas del río San Pedro, sector de Malihue, existen yacimientos de flora fosilizada de más de 20 millones de años conocidos como los "Estratos de San Pedro": hojas, madera y semillas de bosques anteriores a la llegada del ser humano. Fueron dados a conocer a la comunidad científica desde 2016 por Herman Peña Riquelme, agricultor y ganadero de la comuna de Los Lagos, quien observaba estas "hojas petrificadas" desde su infancia.`
  },
  {
    id: "doc-geologia",
    title: "La falla Llecué y las zonas de fragilidad geológica",
    category: "Ciencia",
    pageCountApprox: 6,
    content: `El cauce del río San Pedro está cruzado por la falla Llecué, una estructura tectónica activa de 17 km que ha determinado su morfología, generando los rápidos naturales del río. Esta falla es una zona de fragilidad geológica: roca fracturada y debilitada, más permeable, por donde históricamente han circulado fluidos y se han concentrado deslizamientos sísmicos (como los del Riñihuazo de 1960 y uno anterior en 1575).`
  }
];
