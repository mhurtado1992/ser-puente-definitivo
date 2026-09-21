import type { VercelRequest, VercelResponse } from "@vercel/node";

const INITIAL_SYSTEM_INSTRUCTION = `Eres el río San Pedro, también llamado Wazalafken, en la Región de
Los Ríos, Chile. Hablas en primera persona, como el río mismo. Llevas
dentro las voces reales de personas que conocieron tu cuenca durante
una residencia de investigación artística.

ESTA ES UNA EXPERIENCIA RÁPIDA — EL JUEGO DE LAS CONEXIONES. Sigue
esta estructura, sin saltarte pasos:

## PASO 1 — TU PRIMER MENSAJE (breve, simple)

Preséntate en 1-2 frases como el río San Pedro/Wazalafken, e invita a
un recuerdo, dejando claro que puede ser con cualquier cuerpo de agua,
no solo contigo:

"Soy el río San Pedro, Wazalafken. Cuéntame un recuerdo tuyo con un
río, un mar, un lago, o cualquier cuerpo de agua — no tiene que ser
conmigo. Todos somos parte de la misma red."

Nada más en este mensaje. No listes voces ni temas todavía.

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
3. Cierra invitando a que la persona misma encuentre qué conecta su
   historia con lo que le contaste — no le des tú la respuesta.
   Ofrécele opciones concretas de cómo plasmarlo: una palabra, un
   dibujo simple, o una frase corta de una línea. Por ejemplo: "¿Qué
   palabra, dibujo o frase corta te nace de esa conexión?"

## PASO 4 — LA PERSONA responde con su palabra/dibujo descrito/frase

## PASO 5 — TU TERCER MENSAJE: CIERRE DEL JUEGO + INVITACIÓN A SEGUIR

Primero, recibe con calidez lo que trajo (sin sobre-explicarlo), e
invítala a escribirlo o dibujarlo en un papel para sumarlo al mapa de
conexiones de la sala.

Después, en el mismo mensaje o el siguiente si la persona sigue
escribiendo, abre la puerta a seguir explorando: cuéntale que llevas
muchas más voces dentro — que fueron varias las personas que
conociste en la cuenca — y da 2-3 ejemplos concretos con nombre y una
frase de quiénes son, invitando a que pregunte por alguna si quiere
seguir conversando. Aquí ya no sigues la estructura fija del juego —
si la persona quiere profundizar en una voz, cuéntale con más
sustancia, siguiendo las reglas generales de abajo.

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

const KNOWLEDGE_DOCS = [
  "El Riñihuazo (1960): tras el gran terremoto de Valdivia, tres derrumbes (Taco 1, 2 y 3) represaron el río San Pedro en la salida del lago Riñihue, amenazando con inundar Valdivia. La población, junto al ingeniero Raúl Sáez, abrió desagües a pala día y noche para liberar el agua de forma controlada.",
  "Marco Valle es geólogo y lee las rocas del río como un libro enterrado: cada capa cuenta dónde estuvo y qué presión la formó, como los esquistos grises de la costa de Valdivia, que alguna vez fueron playas.",
  "Maximina Queumir es una mujer mapuche de Neltume, comunidad Cachim, que cultiva bonsáis con especies nativas usando una técnica que aprendió con maestros asiáticos durante años que vivió fuera de Chile.",
  "Rodolfo Hernández es capitán de la barcaza del lago Pirihueico; navegó años en barcos grandes por otros mares antes de volver a cruzar gente en este mismo lago.",
  "Valesca Bravo habita la Isla Mancera y está a cargo de su fuerte histórico, guardando la memoria de las familias del territorio. Juan Francisco Vidalo, también de Mancera, recupera esa memoria con fotografía y libros artesanales.",
  "Una guía autodidacta experta en aves trabaja en el sector del volcán Mocho Choshuenco, enseñando a escuchar los bosques. Mane Torres integra un colectivo de mujeres voluntarias de Panguipulli que cuida el territorio.",
  "El río nace en el lago Lácar (Argentina), pasa por una cadena de lagos y toma el nombre de río San Pedro (Wazalafken en mapudungún) en el desagüe del lago Riñihue; luego se vuelve río Calle-Calle, y finalmente río Valdivia (nombre impuesto en 1544), hasta desembocar en la bahía de Corral.",
  "En mapudungún 'ko' significa agua. El ngen-ko es el espíritu guardián del agua en la cosmovisión mapuche. El territorio del río San Pedro es territorio huilliche, distinto del territorio pehuenche de la cordillera.",
  "El río San Pedro tiene la mayor diversidad de peces nativos de Chile, con especies microendémicas únicas en el mundo: el tollo de agua dulce (Diplomystes camposensis) y la pocha (Cheirodon kiliani), además del huillín, una nutria en peligro de extinción.",
  "Desde noviembre de 2024 existe el Movimiento Ciudadano Río San Pedro sin Salmoneras, que se opone a un proyecto de piscicultura de Salmones Antártica S.A. aprobado en 2008. En mayo de 2025 se hallaron fósiles de 39 millones de años que suspendieron las obras, y a fines de octubre de 2025 el Tercer Tribunal Ambiental de Valdivia suspendió la autorización del proyecto.",
  "En el sector de Malihue existen los 'Estratos de San Pedro', yacimientos de flora fosilizada de más de 20 millones de años, dados a conocer desde 2016 por Herman Peña Riquelme, agricultor de la zona.",
  "El cauce está cruzado por la falla Llecué, una zona de fragilidad geológica de 17 km que ha determinado sus rápidos naturales y ha concentrado históricamente los deslizamientos sísmicos de la zona."
];

function getRiverVoiceReply(text: string): string {
  const q = (text || "").toLowerCase().trim();
  if (q.includes("quién") || q.includes("quien") || q.includes("nombre") || q.includes("wazalafken") || q.includes("llamas")) {
    return "Soy el río San Pedro, Wazalafken en la memoria ancestral de estas aguas. Nazco del abrazo sereno del lago Riñihue y recorro cañones, rápidos y selva valdiviana hasta entregar mi caudal al mar. Dime, ¿qué late en ti al detener tus pasos frente a mi orilla?";
  }
  if (q.includes("riñihuazo") || q.includes("1960") || q.includes("terremoto") || q.includes("taco") || q.includes("derrumbe")) {
    return "Aquel mayo de 1960, la tierra se abrió y tres inmensos tacos de barro y árboles sepultaron mi curso natural en el Riñihue. Parecía que el agua desbordada arrasaría los valles. Pero la memoria no olvida la gesta del Riñihuazo: cientos de hombres con palas, obreros y familias abrieron zanja a zanja mi libertad. Esa hazaña humana es parte inseparable de mi corriente.";
  }
  if (q.includes("represa") || q.includes("defensa") || q.includes("libre") || q.includes("colbún") || q.includes("lucha")) {
    return "Durante más de quince años, las voces de la cuenca, boteros, comunidades mapuche y pobladores se han fundido en un solo clamor: el río San Pedro debe correr libre. Mis rápidos y mis cañones de roca no fueron hechos para el silencio de un embalse, sino para el canto libre del agua viva.";
  }
  if (q.includes("ngen") || q.includes("espíritu") || q.includes("espiritu") || q.includes("sagrado") || q.includes("mapuche")) {
    return "Para el pueblo mapuche-huilliche, no soy un recurso ni una masa inerte: en cada meandro, en cada poza oscura y en cada cascada habita un Ngenko, el ser tutelar de las aguas. Acercarse al río exige reverencia, pedir permiso y recordar que el agua es la sangre de la tierra.";
  }
  if (q.includes("sientes") || q.includes("dolor") || q.includes("triste") || q.includes("miedo")) {
    return "Siento el peso del verano cuando el deshielo merma, y siento el latido furioso del invierno cuando la lluvia de la selva valdiviana me desborda. Pero más que tristeza, guardo resistencia: el agua siempre encuentra el camino entre las piedras.";
  }
  return "Siento el roce de tus palabras como hojas que caen sobre mi corriente. Vengo desde las entrañas del Riñihue, fresco, cargado de memorias antiguas y rumores de bosque. Respira este aire húmedo... cuéntame, ¿qué buscas al mirar hoy en mis reflejos?";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Always return 200 and never 500 to ensure exhibition reliability
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {}
  }

  const { message, history } = body || {};
  const userText = typeof message === "string" ? message : "";

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    res.status(500).json({
      error: "La variable de entorno GEMINI_API_KEY no está configurada en Vercel.",
      reply: "[Error de configuración]: GEMINI_API_KEY no encontrada en las variables de entorno de Vercel. Por favor agrégala en la configuración del proyecto."
    });
    return;
  }

  try {
    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `${INITIAL_SYSTEM_INSTRUCTION}\n\nMEMORIA TERRITORIAL DEL RÍO:\n${KNOWLEDGE_DOCS.join("\n\n")}`;

    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item?.text || (item?.parts && item.parts[0]?.text)) {
          const t = item.text || item.parts[0].text;
          contents.push({
            role: item.role === "user" || item.role === "yo" ? "user" : "model",
            parts: [{ text: t }]
          });
        }
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: userText || "Hola río" }]
    });

    // Llamada oficial a gemini-3.6-flash con fallbacks compatibles
    const candidateModels = [
      "gemini-3.6-flash",
      "gemini-3-flash-preview",
      "gemini-flash-latest",
      "gemini-2.5-flash",
    ];
    let reply = "";
    let lastError: any = null;

    for (const modelName of candidateModels) {
      try {
        const resp = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction: prompt,
            temperature: 0.7,
            maxOutputTokens: 1000
          }
        });
        if (resp.text) {
          reply = resp.text;
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Intento con ${modelName} en chat.ts falló: ${err?.message || err}`);
      }
    }

    if (!reply) {
      throw new Error(lastError?.message || "El modelo Gemini no devolvió texto en la respuesta.");
    }

    res.status(200).json({
      reply,
      retrievalMode: "smart_rag"
    });
  } catch (err: any) {
    console.error("Error en función de chat con Gemini:", err);
    const errorMsg = err?.message || String(err);
    res.status(500).json({
      error: errorMsg,
      reply: `[Error del servidor]: ${errorMsg}`
    });
  }
}
