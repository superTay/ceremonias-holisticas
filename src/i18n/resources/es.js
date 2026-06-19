// Bundle de TEXTO en español — fuente de referencia (validada en Fases 1–3).
// Solo texto: el contacto y los precios viven en src/data/shared.js (single-source).
// Estructura de claves idéntica a en.js. Voz de marca: docs/02.

export default {
  meta: {
    title: 'OOL Experiences · Ceremonias Holísticas en Mallorca',
    description:
      'OOL Experiences: ceremonias holísticas maya-contemporáneas para acompañar, celebrar y honrar los hitos que importan. Fundadas por Blanca Coutiño en Mallorca.',
    ogTitle: 'OOL Experiences · Ceremonias Holísticas en Mallorca',
    ogDescription:
      'Ceremonias diseñadas para los momentos que no se repiten. En las calas y fincas de Mallorca.',
    ogLocale: 'es_ES',
    // Label por ruta para componer el <title> (ver useDocumentMeta).
    // La ruta '/' no añade label: queda solo el title de marca.
    pages: {
      ceremonies: 'Ceremonias',
      about: 'Sobre Blanca',
      gallery: 'Galería',
      contact: 'Contacto',
    },
  },

  announcement:
    'Consulta de diseño sin compromiso · Diseñemos tu ceremonia a medida',

  nav: {
    brand: 'OOL Experiences',
    brandAria: 'Inicio · OOL Experiences',
    links: [
      { label: 'Inicio', to: '/' },
      { label: 'Sobre Blanca', to: '/about' },
      { label: 'Ceremonias', to: '/ceremonies' },
      { label: 'Galería', to: '/gallery' },
      { label: 'Contacto', to: '/contact' },
    ],
    cta: 'Consultar Disponibilidad',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    langLabel: 'Cambiar idioma',
  },

  hero: {
    eyebrow: 'CEREMONIAS HOLÍSTICAS · MALLORCA',
    headline:
      'Ceremonias que honran tus raíces, tu historia y tu energía',
    headlineHighlight: 'raíces',
    sub: 'Rituales a medida en Mallorca, donde la sabiduría ancestral se cuida con la precisión de un hotel de lujo. Un momento para volver a ti.',
    primaryCta: 'Diseñemos tu ceremonia',
    secondaryCta: 'Ver experiencias',
    badges: ['Ceremonias frente al Mediterráneo', '+22 años de trayectoria'],
    nextCeremony: {
      label: 'PRÓXIMA CEREMONIA',
      date: 'Agenda de primavera · 2026',
      desc: 'El Festín de las Alas · Cala Vinyes',
    },
    proof:
      '«Nuestra boda no fue un evento, fue un umbral.» — Lucía & Marc, Es Trenc',
  },

  // Bloque "Qué es OOL" (Home). Si falta el copy en otro idioma, el componente
  // no renderiza la sección (defensivo).
  whatIsOol: {
    eyebrow: 'QUÉ ES OOL',
    headline: 'Qué hacemos y por qué',
    paragraphs: [
      '*Ool* significa "corazón" en maya. Es la idea de la que parte todo lo que hacemos: ceremonias diseñadas para que pares, respires y vuelvas a lo que importa.',
      'No organizamos eventos al uso. Acompañamos momentos que dejan huella: una boda, la llegada de un bebé, un cierre de etapa, un nuevo comienzo. Cada ceremonia se diseña contigo, a partir de tu historia y de lo que quieres celebrar.',
      'Combinamos el cuidado y la logística de la hotelería de lujo con elementos de tradiciones ancestrales y bienestar. Lo trabajamos con criterio y cuidamos cada detalle, para que solo tengas que estar presente.',
    ],
    whyMaya: {
      title: 'Por qué lo maya',
      body: 'La herencia maya es nuestra raíz, no nuestro disfraz. El copal, los cuatro elementos, los cuarzos y el cacao no están para impresionar. Están porque tienen sentido dentro del ritual: marcan un antes y un después, te devuelven al cuerpo y a lo importante.',
    },
    takeaways: {
      title: 'Qué te llevas',
      items: [
        'Un espacio cuidado para reconectar contigo y con quienes te acompañan.',
        'Un ritual a tu medida, sin guiones prestados.',
        'La calma de que cada detalle está pensado y sostenido.',
      ],
    },
  },

  // Bloque "El símbolo OOL" (Home). Storytelling del logo.
  symbol: {
    eyebrow: 'EL SÍMBOLO',
    headline: 'El corazón de Ool',
    intro:
      'Nuestro logotipo parte del glifo maya *Ool* (corazón, centro). Es una versión actual y sencilla: se entiende a primera vista, sin necesidad de explicarlo. Cada elemento tiene su porqué:',
    parts: [
      {
        part: 'El laberinto',
        body: 'representa el camino hacia tu interior.',
      },
      {
        part: 'Las espirales',
        body: 'son los ciclos que vivimos: lo que se cierra y lo que vuelve a empezar.',
      },
      {
        part: 'La greca',
        body: 'inspirada en Chichén Itzá y Uxmal, evoca el agua y la abundancia.',
      },
      {
        part: 'La turquesa',
        body: 'piedra muy valorada en la cultura maya, representa lo esencial y valioso de cada persona.',
      },
    ],
  },

  categories: [
    'Bodas Holísticas',
    'Compromiso',
    'Baby Blessing',
    'Despedida de Soltera',
    'Pícnic & Oráculo',
    'Coaching Ritual',
    'Taller Alquímico',
  ],

  catalog: {
    caption: 'CATÁLOGO DE CEREMONIAS',
    headline: 'Siete ceremonias. Un único principio: nada genérico.',
    sub: 'Filtra por el momento que estás viviendo. Cada propuesta es un punto de partida — todo se diseña contigo.',
    filters: [
      'Todas',
      'Bodas Holísticas',
      'Compromiso',
      'Baby Blessing',
      'Despedida de Soltera',
      'Pícnic & Oráculo',
      'Coaching Ritual',
      'Taller Alquímico',
    ],
    allFilter: 'Todas',
    priceFrom: 'desde',
    priceOnRequest: 'a consultar',
    pricePer: '/pers',
    cardCta: 'Ver esta experiencia',
    // CTA por vía de reserva (ver useContent): reservable → bookCta; a medida → bespokeCta.
    bookCta: 'Reservar fecha',
    bookConsentNote:
      'Al reservar se carga el calendario de Cal.eu (cookies de terceros). Pulsa para aceptarlas y abrir la reserva.',
    bespokeCta: 'Hablemos primero',
    depositNote: 'Reservas con el 25 %. El resto, el día de tu ceremonia.',
    bespokeNote: 'Se diseña a medida, contigo. Empecemos por una conversación.',
    // {title} se sustituye por el nombre de la ceremonia en useContent.
    whatsappTemplate:
      'Hola Blanca, me encantaría hablar sobre «{title}». Estoy pensando en…',
    disclaimer:
      'Sin compromiso. Primero hablamos y vemos si encaja contigo.',
    cards: [
      {
        id: 'bodas',
        tag: 'BODAS & VOTOS',
        category: 'Bodas Holísticas',
        title: 'Unión de Almas Mayas',
        claim: 'Una boda diseñada como un viaje, no como un protocolo.',
        body: 'Una boda o renovación de votos vivida como viaje energético, no como protocolo. Selláis vuestro vínculo desde la raíz —copal blanco, los cuatro elementos y un amarre de manos tejido a mano— frente al mar o en finca mediterránea.',
        bullets: [
          'Purificación con copal y apertura de los cuatro rumbos',
          'Amarre de manos con textiles tejidos a mano',
          'Hasta 80 invitados · diseño 100% a medida',
        ],
        hue: 'from-[#8B6F4E] to-[#5C3A21]',
        image: '/card-bodas.webp',
        imageAlt:
          'Manos en gesto ritual sobre el bordado de un huipil maya, frente al mar al atardecer, en un instante de ceremonia de unión',
      },
      {
        id: 'baby',
        tag: 'BABY BLESSING',
        category: 'Baby Blessing',
        title: 'Tramuntana Baby Soul Ritual',
        claim: 'Un círculo de amor para dar la bienvenida a una nueva vida.',
        body: 'Una bienvenida consciente para el nuevo ser, alternativa serena al bautizo tradicional. Un círculo de amor con los cuatro elementos para honrar al bebé, sostener a la madre y enraizar a la familia.',
        bullets: [
          'Círculo íntimo con los cuatro elementos',
          'Ofrenda de copal, agua de rosas y flores',
          'Cerca de 2 horas de ceremonia',
        ],
        hue: 'from-[#A98A6F] to-[#7D6B3D]',
        image: '/card-baby-blessing.webp',
        imageAlt:
          'Blanca Coutiño con las manos en forma de corazón sobre el vientre, vestido de lino con bordado maya, frente al mar al atardecer',
      },
      {
        id: 'picnic',
        tag: 'PÍCNIC & ORÁCULO',
        category: 'Pícnic & Oráculo',
        title: 'El Festín de las Alas',
        claim:
          'Alta gastronomía mediterránea y una lectura de oráculo para guiarte.',
        body: 'Alta gastronomía mediterránea y un círculo angelical frente a una cala íntima. El Oráculo Angelical acompaña como guía y autoconocimiento —nunca predicción—: un espejo suave para ganar claridad y decidir desde la calma.',
        bullets: [
          'Círculo de Ángeles y lectura de Oráculo (guía, no predicción)',
          'Cristal personalizado para cada invitada',
          'Hasta 12 personas · banquete consciente incluido',
        ],
        hue: 'from-[#C9A57A] to-[#B8865B]',
        image: '/card-picnic.webp',
        imageAlt:
          'Manos de Blanca extendiendo las cartas del Oráculo Angelical sobre la arena, en un círculo de guía y autoconocimiento',
      },
      {
        id: 'lazo',
        tag: 'COMPROMISO',
        category: 'Compromiso',
        title: 'El Lazo del Destino',
        claim: 'Para dos. Una pedida en un rincón secreto de Mallorca.',
        body: "Una ceremonia íntima solo para dos: una propuesta de matrimonio o un recompromiso consciente. Romanticismo mediterráneo y la sabiduría maya del In Lak'ech, en un rincón ultraprivado de la isla.",
        bullets: [
          'Solo para vosotros dos · spot ultraprivado',
          'Intercambio de brazaletes · hilo del destino',
          'Acantilado, cala secreta o finca a elegir',
        ],
        hue: 'from-[#7D6B3D] to-[#4A3F24]',
        image: '/card-parejas.webp',
        imageAlt:
          'Un cuarzo amatista en alto entre los dedos sobre un fondo turquesa de mar, como símbolo de un vínculo que se sella',
      },
      {
        id: 'ixchel',
        tag: 'DESPEDIDA',
        category: 'Despedida de Soltera',
        title: 'El Círculo de Ixchel',
        claim:
          'Una despedida con alma: hermandad, cacao y buenos deseos.',
        body: 'Una despedida de soltera con alma, inspirada en la diosa maya Ixchel. Lejos del confeti, cerca del corazón: un contenedor de amor y empoderamiento femenino para la novia y su tribu.',
        bullets: [
          'Grupos de 6 a 14 mujeres',
          'Tejido del Destino · corona de flores · cacao sagrado',
          'Diseño según la novia',
        ],
        hue: 'from-[#9A7A5C] to-[#5C3A21]',
        image: '/card-despedidas.webp',
        imageAlt:
          'Manos ahuecadas sosteniendo cristales de los chakras a contraluz dorada, evocando la energía femenina y el cierre de ciclo',
      },
      {
        id: 'retorno',
        tag: 'COACHING',
        category: 'Coaching Ritual',
        title: 'El Retorno a la Luz',
        claim:
          'Tres encuentros para cerrar un ciclo y abrir el siguiente.',
        body: 'Un proceso privado de tres encuentros para cruzar un umbral vital: un duelo, un divorcio, un cambio de rumbo. Numerología terapéutica y rituales de tierra y fuego como acompañamiento que complementa tu bienestar, nunca como tratamiento médico.',
        bullets: [
          '3 sesiones: cierre, transición y renacimiento',
          'Numerología terapéutica + rituales mayas',
          'Online o presencial · bitácora personal',
        ],
        hue: 'from-[#B8865B] to-[#7D6B3D]',
        image: '/card-coaching.webp',
        imageAlt:
          'Blanca Coutiño de espaldas mirando el mar, vestido de lino con bordado maya, en un momento de introspección y transición',
      },
      {
        id: 'alquimia',
        tag: 'TALLER',
        category: 'Taller Alquímico',
        title: 'Alquimia de las 3 Aguas',
        claim:
          'Creas tu propia bruma: amor, abundancia o equilibrio.',
        body: 'Un taller sensorial donde cada persona alquimiza su propia bruma áurica intencionada. Eliges una de tres frecuencias —Amor, Abundancia o Equilibrio— con botánica de la isla, aguas infusionadas y cristales. Ideal para grupos y como complemento de otras ceremonias.',
        bullets: [
          'Tres frecuencias: Afrodita, Oro Maya o Tramuntana',
          'Cada asistente crea y se lleva su bruma',
          'Grupos desde 5 personas · ideal para eventos',
        ],
        hue: 'from-[#C9A57A] to-[#7D6B3D]',
        image: '/card-alquimia.webp',
        imageAlt:
          'Frasco de bruma áurica «Brisa Áurica» sobre lino blanco junto a cuarzos rosa, verde y amatista, listo para el ritual de las lociones',
      },
    ],
    ctaTitle: '¿No encuentras tu ceremonia?',
    ctaSub: 'Diseñamos rituales a medida desde la raíz. Cuéntanos tu intención.',
    ctaBtn: 'Diseñemos tu ceremonia',
  },

  about: {
    eyebrow: 'QUIÉN ESTÁ DETRÁS DE OOL',
    headline: 'Quién está detrás de OOL',
    paragraphs: [
      'Detrás de OOL está Blanca Coutiño: facilitadora, terapeuta y organizadora de eventos con veintidós años de oficio entre México, Francia y España.',
      'Su recorrido tiene dos columnas que rara vez van juntas. Por un lado, la precisión: gestión hotelera de lujo, cosmetología y cuidado corporal profesional. Por otro, la profundidad: Reiki, Flores de Bach, ayurveda y años de aprendizaje de alquimia y herbolaria con comunidades del sur de México.',
      'Tras más de una década diseñando ceremonias y bodas en la Riviera Maya —fue pionera en bodas legales LGBT en la región—, hoy trae su práctica a Mallorca.',
      'Esa doble formación es lo que distingue a OOL: la sensibilidad de lo ancestral, con el rigor de quien sabe sostener un evento de principio a fin.',
    ],
    pullQuote: 'No facilitamos un servicio. Sostenemos un umbral.',
    pillars: [
      {
        title: 'Precisión de lujo',
        body: 'Gestión hotelera (Rennes) y técnicas de cuidado corporal de bienestar: kobido, cosmetología y masaje.',
      },
      {
        title: 'Raíces certificadas',
        body: 'Master Reiki, Flores de Bach (+12 años) y alquimia aprendida con pueblos de la selva lacandona.',
      },
      {
        title: 'Un sistema propio',
        body: 'Tradición maya, azteca y céltica integrada con ayurveda y los cuatro elementos.',
      },
    ],
    primaryCta: 'Diseñemos tu ceremonia',
    secondaryCta: 'Ver ceremonias',
    badges: [
      'De Riviera Maya a Mallorca',
      '+22 años de trayectoria',
      'Pionera bodas LGBT · Riviera Maya',
    ],
  },

  testimonials: {
    eyebrow: 'TESTIMONIOS',
    headline: 'Lo que se abre después del ritual.',
    sub: 'Historias reales de quienes diseñaron su ceremonia con Blanca. Algunos nombres se han abreviado por privacidad.',
    metrics: [
      { value: '+22', label: 'años de trayectoria' },
      { value: '3', label: 'países: México, Francia y España' },
      { value: '+10', label: 'años diseñando ceremonias en Riviera Maya' },
    ],
    cards: [
      {
        quote:
          'Llegué con un nudo en el pecho. Me fui con una llave nueva. Blanca sostiene como pocas personas saben hacerlo.',
        name: 'Paulina M.',
        context: 'Coaching · Mallorca, 2025',
      },
      {
        quote:
          'Nuestra boda no fue un evento, fue un umbral. Cada invitado lo sintió. Aún hoy nos llaman para hablar de ese día.',
        name: 'Lucía & Marc',
        context: 'Boda Holística · Es Trenc',
      },
      {
        quote:
          'El Baby Blessing me devolvió a mi cuerpo. Sentí a mis ancestras y a mi hija al mismo tiempo. No tengo palabras.',
        name: 'Sofía R.',
        context: 'Baby Blessing · Santa Ponça',
      },
    ],
    press: 'TRAYECTORIA · DE RIVIERA MAYA A MALLORCA',
    outlets: ['Playa del Carmen', 'Tulum', 'Santa Ponça', 'Es Trenc'],
    cta: 'Quiero mi ceremonia',
  },

  press: {
    eyebrow: 'EN LOS MEDIOS',
    headline: 'Su trabajo, contado por la prensa.',
    sub: 'Más de una década diseñando ceremonias, bodas y eventos en la Riviera Maya — recogida por la prensa local como referente del sector.',
    items: [
      {
        outlet: 'The Playa Times',
        context: 'Riviera Maya · Entrevista',
        quote:
          'Como muchas parejas en este destino, sentimos el deseo de compartir la riqueza de nuestras culturas, que conviven en simbiosis cada día.',
        author: 'Blanca Coutiño',
        image: '/prensa-the-playa-times.webp',
        imageAlt:
          'Recorte del periódico The Playa Times con la entrevista «Pour Votre Grand Jour · TPT Rencontre Blanca Coutiño» y un retrato de Blanca',
      },
      {
        outlet: 'Novedades Quintana Roo',
        context: 'Riviera Maya · Reportaje',
        summary:
          'Reportaje sobre cómo diseñar una propuesta de matrimonio inolvidable en la Riviera Maya, donde Blanca figura entre las voces expertas consultadas.',
        image: '/prensa-novedades.webp',
        imageAlt:
          'Recorte del periódico Novedades Quintana Roo con el reportaje «5 recomendaciones para pedir matrimonio»',
      },
    ],
  },

  gallery: {
    eyebrow: 'ÁLBUM',
    headline: 'El mundo de Blanca, en imágenes.',
    sub: 'Retratos, detalles de ceremonia y momentos reales. Una década de rituales entre la Riviera Maya y el Mediterráneo — la misma presencia que sostendrá tu umbral.',
    zoomLabel: 'Ampliar foto',
    closeLabel: 'Cerrar galería',
    prevLabel: 'Foto anterior',
    nextLabel: 'Foto siguiente',
    dialogLabel: 'Galería de imágenes ampliada',
    items: [
      {
        src: '/album-02-retrato-cuarzo.webp',
        thumb: '/album-02-retrato-cuarzo-thumb.webp',
        w: 800,
        h: 1200,
        alt: 'Retrato de Blanca contemplando un cuarzo en su mano, huipil bordado a mano, junto al mar',
      },
      {
        src: '/album-03-recogimiento.webp',
        thumb: '/album-03-recogimiento-thumb.webp',
        w: 1200,
        h: 800,
        alt: 'Blanca de rodillas en la orilla con las manos sobre el vientre y los ojos cerrados, en un instante de recogimiento',
      },
      {
        src: '/album-04-espuma-cristales.webp',
        thumb: '/album-04-espuma-cristales-thumb.webp',
        w: 1200,
        h: 800,
        alt: 'Manos ahuecadas sosteniendo cristales de los chakras mientras la espuma del mar las acaricia',
      },
      {
        src: '/album-05-huipil-cuarzos.webp',
        thumb: '/album-05-huipil-cuarzos-thumb.webp',
        w: 800,
        h: 1200,
        alt: 'Manos sosteniendo cuarzos sobre el bordado geométrico de un huipil maya',
      },
      {
        src: '/album-06-corazon-cuarzo.webp',
        thumb: '/album-06-corazon-cuarzo-thumb.webp',
        w: 1200,
        h: 600,
        alt: 'Manos formando un corazón alrededor de un cuarzo verde a la luz dorada del atardecer',
      },
      {
        src: '/album-07-espiral-arena.webp',
        thumb: '/album-07-espiral-arena-thumb.webp',
        w: 1200,
        h: 800,
        alt: 'Un dedo traza una espiral en la arena, gesto de intención y apertura del ritual',
      },
      {
        src: '/album-09-agua-cuarzo.webp',
        thumb: '/album-09-agua-cuarzo-thumb.webp',
        w: 675,
        h: 1200,
        alt: 'Una mano bajo el agua cristalina sostiene un cuarzo azul, entre reflejos de luz',
      },
      {
        src: '/album-10-boda-lazo.webp',
        thumb: '/album-10-boda-lazo-thumb.webp',
        w: 1200,
        h: 776,
        alt: 'Una pareja recién casada sonríe bajo la noche, con corona de flores y el lazo rojo de la ceremonia de unión',
      },
    ],
  },

  faq: {
    eyebrow: 'PREGUNTAS FRECUENTES',
    headline: 'Resolvemos tus dudas antes de que aparezcan.',
    sub: 'Diseñamos cada ritual desde la confianza. Aquí lo que más nos preguntan antes de cruzar el umbral.',
    items: [
      {
        q: '¿Necesito experiencia previa para una ceremonia?',
        a: 'No. Cada ceremonia se diseña sosteniendo a quien llega por primera vez. Te guío paso a paso, sin tecnicismos, desde la respiración hasta el cierre.',
      },
      {
        q: '¿Cómo me preparo para mi ceremonia?',
        a: 'Llega con el estómago ligero (idealmente sin alimentos pesados 2 h antes), ropa cómoda y una intención escrita. Te enviamos un PDF de preparación 48 h antes de tu ceremonia.',
      },
      {
        q: '¿Las ceremonias son religiosas?',
        a: 'No son religiosas. Son rituales de tradición maya-contemporánea adaptados a tu sistema de creencias. Funcionan tanto si eres espiritual como si eres profundamente racional.',
      },
      {
        q: '¿El Oráculo Angelical predice el futuro?',
        a: 'No. El Oráculo Angelical es una herramienta de guía y autoconocimiento, no de adivinación. No decide por ti ni anticipa lo que vendrá: es un espejo suave que te ayuda a ver con claridad lo que tu intuición ya sabe.',
      },
      {
        q: '¿Las ceremonias sustituyen una terapia médica o psicológica?',
        a: 'No. Cada ceremonia es un acompañamiento holístico que complementa tu bienestar; nunca sustituye un tratamiento médico o psicológico. Si atraviesas un proceso clínico, lo honramos y trabajamos a su lado, no en su lugar.',
      },
      {
        q: '¿Puedo regalar una ceremonia a otra persona?',
        a: 'Sí. Entregamos certificados ceremoniales en papel artesanal con sobre lacrado. Una de las formas más bonitas de regalar presencia.',
      },
      {
        q: '¿Qué pasa si llueve el día de mi ceremonia al aire libre?',
        a: 'Mallorca nos sorprende pocas veces. Aún así, cada ceremonia tiene un plan B techado dentro de la misma finca o cala. Nunca cancelamos por clima.',
      },
      {
        q: '¿Trabajáis en otros lugares fuera de Mallorca?',
        a: 'Sí, viajamos a Ibiza, Menorca y Valencia. Para destinos requerimos un mínimo de 8 semanas de antelación.',
      },
    ],
    footerText: '¿Tu pregunta no está aquí?  Pregúntale a Blanca directamente',
    footerLink: 'Escribir por WhatsApp',
  },

  whatsapp: {
    eyebrow: 'CONCIERGE PERSONAL · WHATSAPP DIRECTO',
    headline: 'Diseña tu ceremonia en una conversación, no en un formulario.',
    sub: 'Sin formularios eternos. Blanca te responde personalmente, escucha tu intención y te propone el ritual exacto que necesitas. Una conversación breve · una decisión consciente.',
    features: [
      'Respuesta directa de Blanca (no bot).',
      'Llamada breve de 5 minutos para diseñar tu ritual.',
      'Sin compromiso. Cero presión comercial.',
    ],
    cta: 'Hablar con Blanca por WhatsApp',
    fabAria: 'Contactar con Blanca por WhatsApp',
    secondaryPrefix: 'o llámanos:',
    chat: {
      headerName: 'Ceremonias Holísticas',
      headerStatus: 'Blanca · en línea',
      dateChip: 'HOY',
      inputPlaceholder: 'Mensaje',
      sendLabel: 'Enviar',
      messages: [
        {
          from: 'her',
          text: '¡Hola! Gracias por interesarte en Ceremonias Holísticas. Soy Blanca, ¿con qué nombre tengo el gusto de saludarte? 🌿',
          time: '10:42',
        },
        {
          from: 'me',
          text: 'Hola Blanca! Soy Lucía 🌸',
          time: '10:43 ✓✓',
        },
        {
          from: 'her',
          text: 'Mucho gusto, Lucía ✨ ¿Hay alguna ceremonia que esté llamando a tu corazón? (Boda, Compromiso, Baby Blessing, Despedida, Pícnic & Oráculo…)',
          time: '10:44',
        },
        {
          from: 'me',
          text: 'Tengo despedida de soltera y soñamos con algo íntimo en una cala 🌊',
          time: '10:46 ✓✓',
        },
        {
          from: 'her',
          text: 'Te escucho, Lucía 💛  ¿Te gustaría que agendemos una llamada breve de 5 minutos para diseñar contigo tu ceremonia?',
          time: '10:46  · escribiendo…',
        },
      ],
    },
  },

  booking: {
    eyebrow: 'RESERVA · LLAMADA DE DISEÑO',
    headline: 'Elige tu momento. Diseñamos tu ceremonia juntas.',
    sub: 'Una llamada de 30 minutos, sin coste ni compromiso, para escuchar tu intención y orientarte. Reserva el hueco que mejor te encaje; recibirás la confirmación al instante.',
    altPrefix: 'O si prefieres una conversación primero,',
    altCta: 'escríbele a Blanca por WhatsApp',
    loading: 'Cargando el calendario…',
    locationNote:
      'Las ceremonias se realizan en Santa Ponça. Fuera de Santa Ponça se aplica un coste adicional por desplazamiento, que confirmamos al diseñar tu ceremonia. En la reserva te pediremos el número de personas y la ubicación deseada.',
    deposit: {
      title: 'Último paso: el depósito',
      body: 'Tu fecha queda reservada en cuanto completes el depósito del {pct} % por Bizum al {phone}, indicando tu nombre y la fecha de la ceremonia. Te enviamos también las instrucciones por email.',
      phoneFallback: 'el número que te facilitamos por email',
    },
    success: {
      title: 'Tu llamada está reservada ✨',
      body: 'Recibirás un email de confirmación con todos los detalles. Si quieres, adelántale tu intención a Blanca por WhatsApp para que prepare vuestra conversación.',
      whatsappCta: 'Escribir a Blanca por WhatsApp',
      whatsappText:
        'Hola Blanca, acabo de reservar una llamada de diseño contigo. Me gustaría contarte sobre…',
    },
  },

  footer: {
    brand: 'OOL Experiences',
    desc: 'Ceremonias holísticas maya-contemporáneas para acompañar, celebrar y honrar los hitos que importan. Más de 22 años de trayectoria entre Riviera Maya y Mallorca, fundadas por Blanca Coutiño.',
    columns: [
      {
        title: 'Ceremonias',
        // Todos los enlaces a /ceremonies (filtros internos llegan en otra fase).
        links: [
          { label: 'Bodas Holísticas', to: '/ceremonies' },
          { label: 'Compromiso', to: '/ceremonies' },
          { label: 'Baby Blessing', to: '/ceremonies' },
          { label: 'Despedida de Soltera', to: '/ceremonies' },
          { label: 'Pícnic & Oráculo', to: '/ceremonies' },
          { label: 'Coaching Ritual', to: '/ceremonies' },
          { label: 'Taller Alquímico', to: '/ceremonies' },
          { label: 'Rituales a medida', to: '/ceremonies' },
        ],
      },
      {
        title: 'Estudio',
        links: [
          { label: 'Sobre Blanca', to: '/about' },
          { label: 'Testimonios', to: '/about' },
          { label: 'Prensa & Medios', to: '/about' },
          { label: 'Galería', to: '/gallery' },
          { label: 'Contacto', to: '/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Aviso Legal', to: '/legal/aviso-legal' },
          { label: 'Política de Privacidad', to: '/legal/privacidad' },
          { label: 'Política de Cookies', to: '/legal/cookies' },
          { label: 'Términos & Cancelación', to: '/legal/terminos' },
        ],
      },
    ],
    privacy: 'Aviso Legal y Privacidad',
    cookies: 'Configurar cookies',
    lang: 'Español (ES)',
    copy: '© 2026 OOL Experiences. Hecho con copal y código en Santa Ponça, Mallorca.',
  },

  // Banner y panel de consentimiento de cookies (Guía AEPD).
  consent: {
    banner: {
      title: 'Tu privacidad',
      body: 'Usamos cookies técnicas necesarias para que el sitio funcione. Solo cargamos el calendario de reservas (Cal.eu, cookies de terceros) si tú lo aceptas. No usamos cookies de analítica ni de publicidad.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      configure: 'Configurar',
      policyLink: 'Más información en la Política de Cookies',
    },
    settings: {
      title: 'Preferencias de cookies',
      intro: 'Decide qué cookies permites. Las necesarias siempre están activas porque sin ellas el sitio no funciona. Puedes cambiar tu decisión cuando quieras desde el pie de página.',
      necessaryTitle: 'Necesarias',
      necessaryDesc: 'Imprescindibles para el funcionamiento del sitio: recuerdan tu idioma y tu decisión sobre cookies. No identifican a personas.',
      thirdPartyTitle: 'Reservas (Cal.eu)',
      thirdPartyDesc: 'Cargan el calendario de reservas de Cal.eu, un proveedor externo que puede instalar sus propias cookies. Solo se activan con tu permiso.',
      alwaysOn: 'Siempre activas',
      rejectAll: 'Rechazar todo',
      save: 'Guardar preferencias',
      close: 'Cerrar',
    },
    gate: {
      title: 'Calendario de reservas',
      body: 'Para reservar cargamos el calendario de Cal.eu, un servicio externo que puede instalar cookies de terceros. No se carga nada hasta que tú lo autorices.',
      load: 'Cargar calendario de reservas',
      privacyNote: 'Al pulsar aceptas las cookies de Cal.eu. Consulta la Política de Cookies para más detalle.',
    },
  },

  // Páginas legales. Textos MODELO conformes; los [A COMPLETAR] requieren datos
  // que solo Blanca puede aportar (ver CHECKLIST-BLANCA.md). No son dictamen jurídico.
  legal: {
    updatedLabel: 'Última actualización',
    reviewNote:
      'Este es un texto modelo orientativo. Antes de su publicación definitiva debe completarse con los datos del titular y, preferiblemente, ser revisado por un profesional jurídico.',
    aviso: {
      title: 'Aviso Legal',
      updated: 'Junio de 2026',
      intro:
        'En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ponen a disposición de los usuarios los siguientes datos de identificación del titular de este sitio web.',
      sections: [
        {
          heading: '1. Datos identificativos del titular',
          list: [
            'Titular: Blanca Coutiño Torres (nombre comercial: OOL Experiences)',
            'NIE: Z2370247-X',
            'Domicilio: Calle Ramón de Moncada 34, ps02 L, 07180 Santa Ponça, Calvià, Illes Balears, España',
            'Correo electrónico: oolexpriences@gmail.com',
            'Teléfono: +34 665 17 55 56',
            'Actividad: diseño y facilitación de ceremonias holísticas, terapias de bienestar y organización de eventos.',
          ],
        },
        {
          heading: '2. Objeto y condiciones de uso',
          paragraphs: [
            'Este sitio web tiene carácter informativo y comercial sobre los servicios de OOL Experiences. El acceso y la navegación implican la aceptación de las condiciones recogidas en este Aviso Legal.',
            'El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.',
          ],
        },
        {
          heading: '3. Propiedad intelectual e industrial',
          paragraphs: [
            'Los textos, fotografías, logotipos, diseños y demás elementos del sitio son titularidad del prestador o cuentan con la correspondiente autorización, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.',
          ],
        },
        {
          heading: '4. Responsabilidad',
          paragraphs: [
            'El titular no se responsabiliza de los daños derivados de un uso inadecuado del sitio ni de la indisponibilidad temporal por causas técnicas. Los servicios de bienestar ofrecidos tienen carácter complementario y no sustituyen ningún tratamiento médico o psicológico.',
          ],
        },
        {
          heading: '5. Enlaces y servicios de terceros',
          paragraphs: [
            'El sitio integra el servicio de reservas Cal.eu (Cal.com) y enlaza a WhatsApp (Meta Platforms). El titular no controla dichos servicios externos, que se rigen por sus propias condiciones y políticas de privacidad.',
          ],
        },
        {
          heading: '6. Alojamiento',
          paragraphs: [
            'Este sitio está alojado en Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, EE. UU.), proveedor de infraestructura web.',
          ],
        },
        {
          heading: '7. Legislación aplicable',
          paragraphs: [
            'Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del usuario cuando proceda conforme a la normativa de consumo.',
          ],
        },
      ],
    },
    privacidad: {
      title: 'Política de Privacidad',
      updated: 'Junio de 2026',
      intro:
        'Esta política describe cómo se tratan los datos personales de los usuarios conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',
      sections: [
        {
          heading: '1. Responsable del tratamiento',
          list: [
            'Responsable: Blanca Coutiño Torres (nombre comercial: OOL Experiences)',
            'NIE: Z2370247-X',
            'Domicilio: Calle Ramón de Moncada 34, ps02 L, 07180 Santa Ponça, Calvià, Illes Balears, España',
            'Correo electrónico: oolexpriences@gmail.com',
          ],
        },
        {
          heading: '2. Qué datos tratamos, con qué finalidad y con qué base legal',
          paragraphs: [
            'Reserva de citas y ceremonias (a través de Cal.eu): nombre, correo electrónico, teléfono y fecha elegida, con la finalidad de gestionar y confirmar tu reserva. Base jurídica: ejecución de un contrato o medidas precontractuales a tu solicitud (art. 6.1.b RGPD).',
            'Consultas por WhatsApp o correo electrónico: los datos que nos facilites, con la finalidad de atender tu solicitud. Base jurídica: tu consentimiento y el interés legítimo en responderte (art. 6.1.a y 6.1.f RGPD).',
            'Cookies y servicios de terceros: ver la Política de Cookies. Base jurídica: tu consentimiento (art. 6.1.a RGPD).',
          ],
        },
        {
          heading: '3. Conservación',
          paragraphs: [
            'Los datos se conservan mientras dure la relación y, después, durante los plazos legalmente exigibles para atender posibles responsabilidades. Las consultas que no deriven en contratación se conservan el tiempo necesario para gestionarlas.',
          ],
        },
        {
          heading: '4. Destinatarios y encargados del tratamiento',
          paragraphs: [
            'Para prestar el servicio recurrimos a proveedores que actúan como encargados del tratamiento:',
          ],
          list: [
            'Cal.com (reservas, instancia europea app.cal.eu) — gestión de citas.',
            'Google Ireland Ltd. (Google Calendar / email) — sincronización y confirmación de reservas.',
            'Vercel Inc. (alojamiento del sitio).',
            'Meta Platforms Ireland Ltd. (WhatsApp) — solo si decides contactar por ese canal.',
          ],
        },
        {
          heading: '5. Transferencias internacionales',
          paragraphs: [
            'Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En esos casos, las transferencias se amparan en las garantías previstas por el RGPD (cláusulas contractuales tipo de la Comisión Europea u otros mecanismos válidos).',
          ],
        },
        {
          heading: '6. Tus derechos',
          paragraphs: [
            'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a oolexpriences@gmail.com, indicando el derecho que deseas ejercer. Si consideras que el tratamiento no se ajusta a la normativa, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).',
          ],
        },
        {
          heading: '7. Seguridad y menores',
          paragraphs: [
            'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos. Los servicios se dirigen a personas mayores de edad; no recabamos conscientemente datos de menores sin consentimiento de sus representantes legales.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      updated: 'Junio de 2026',
      intro:
        'Esta política explica qué cookies y tecnologías similares utiliza este sitio, conforme al artículo 22.2 de la LSSI-CE y a la Guía sobre el uso de cookies de la AEPD.',
      sections: [
        {
          heading: '1. Qué son las cookies',
          paragraphs: [
            'Una cookie es un pequeño archivo que un sitio web almacena en tu dispositivo. También usamos almacenamiento local del navegador (localStorage) con finalidad equivalente. Las técnicas o necesarias están exentas de consentimiento; el resto solo se instalan si las aceptas.',
          ],
        },
        {
          heading: '2. Cookies que utilizamos',
          table: {
            head: ['Nombre / Proveedor', 'Finalidad', 'Duración', 'Tipo'],
            rows: [
              ['blanca-lang (propia)', 'Recordar el idioma elegido (ES/EN)', 'Persistente', 'Técnica (necesaria)'],
              ['blanca-consent (propia)', 'Guardar tu decisión sobre las cookies', 'Persistente', 'Técnica (necesaria)'],
              ['Cal.eu / Cal.com (terceros)', 'Mostrar el calendario y gestionar la reserva', 'Según el proveedor', 'Terceros (requiere consentimiento)'],
            ],
          },
        },
        {
          heading: '3. No usamos analítica ni publicidad',
          paragraphs: [
            'Este sitio no utiliza cookies de analítica (como Google Analytics) ni de publicidad o seguimiento. La única carga de terceros es el calendario de reservas Cal.eu, y solo si lo autorizas.',
          ],
        },
        {
          heading: '4. Cómo gestionar o revocar tu consentimiento',
          paragraphs: [
            'Puedes cambiar o retirar tu consentimiento en cualquier momento desde el enlace «Configurar cookies» del pie de página. También puedes bloquear o eliminar cookies desde la configuración de tu navegador.',
          ],
        },
      ],
    },
    terminos: {
      title: 'Términos, Condiciones y Política de Cancelación',
      updated: 'Junio de 2026',
      intro:
        'Estas condiciones regulan la contratación de ceremonias, terapias y experiencias de OOL Experiences. Al reservar, aceptas estos términos.',
      sections: [
        {
          heading: '1. Servicios',
          paragraphs: [
            'OOL Experiences diseña y facilita ceremonias holísticas, terapias de bienestar y eventos a medida. Cada propuesta es un punto de partida que se concreta contigo. Los servicios tienen carácter de bienestar y acompañamiento, y complementan —sin sustituir— cualquier tratamiento médico o psicológico.',
          ],
        },
        {
          heading: '2. Reservas, precios y pago',
          paragraphs: [
            'Algunas experiencias se reservan en línea a través de Cal.eu y otras se diseñan previa conversación. Para confirmar una reserva puede requerirse un depósito del 25 % del precio mediante Bizum; el importe restante se abona el día de la ceremonia.',
            'Los precios mostrados incluyen los impuestos aplicables salvo que se indique lo contrario.',
          ],
        },
        {
          heading: '3. Política de cancelación y reprogramación',
          paragraphs: [
            'Cancelación por tu parte: las condiciones concretas de cancelación y de devolución del depósito se acuerdan y se te comunican por escrito en el momento de la reserva, antes de cualquier pago.',
            'Reprogramación: dentro de la disponibilidad de la agenda, se procurará reubicar la fecha sin coste adicional con un preaviso razonable.',
            'Cancelación por parte del prestador o por causas de fuerza mayor: se ofrecerá una nueva fecha o la devolución íntegra del depósito.',
          ],
        },
        {
          heading: '4. Derecho de desistimiento',
          paragraphs: [
            'En los servicios de ocio o eventos que se prestan en una fecha determinada, el artículo 103.l del Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios (R.D.L. 1/2007) excluye el derecho de desistimiento. Para el resto de servicios sin fecha cerrada, dispones de 14 días naturales para desistir conforme a la normativa de consumo.',
          ],
        },
        {
          heading: '5. Responsabilidad y salud',
          paragraphs: [
            'Las ceremonias y terapias son experiencias de bienestar. No constituyen un tratamiento médico, psicológico ni psiquiátrico, ni prometen resultados de curación. Si atraviesas un proceso clínico, te recomendamos informar al respecto y mantener tu tratamiento profesional.',
          ],
        },
        {
          heading: '6. Ley aplicable y resolución de conflictos',
          paragraphs: [
            'Estas condiciones se rigen por la legislación española. Como consumidor, puedes acudir a la plataforma de resolución de litigios en línea de la Comisión Europea (https://ec.europa.eu/consumers/odr).',
          ],
        },
      ],
    },
  },
}
