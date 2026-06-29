// English TEXT bundle — transcreated, not translated. Brand voice: docs/02
// (scientific not mystical · holistic not esoteric · elegant, never fairground).
// Tone: an Aman spa / Swiss wellness clinic. Red lines hold in EN too: no magic,
// no prediction, no medical promises. Maya commercial names are kept as proper names;
// their body/bullets are transcreated. The Playa Times quote (FR/ES) is kept verbatim.
// Key structure is identical to es.js. Non-text data (prices, contact) lives in shared.js.

export default {
  meta: {
    title: 'OoL Experiences · Holistic Ceremonies in Mallorca',
    description:
      'OoL Experiences: Maya-contemporary holistic ceremonies to accompany, celebrate and honour the milestones that matter. Founded by Blanca Coutiño in Mallorca.',
    ogTitle: 'OoL Experiences · Holistic Ceremonies in Mallorca',
    ogDescription:
      'Ceremonies designed for the moments that never come twice. In the coves and fincas of Mallorca.',
    ogLocale: 'en_GB',
    // Per-route label for the document <title> (see Seo.jsx).
    // Route '/' adds no label: only the brand title is shown.
    pages: {
      ceremonies: 'Ceremonies',
      about: 'About Blanca',
      gallery: 'Gallery',
      contact: 'Contact',
    },
  },

  announcement:
    'No-obligation design consultation · Let’s design your bespoke ceremony',

  nav: {
    brand: 'OoL Experiences',
    brandAria: 'Home · OoL Experiences',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Blanca', to: '/about' },
      { label: 'Ceremonies', to: '/ceremonies' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Contact', to: '/contact' },
    ],
    cta: 'Check Availability',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langLabel: 'Change language',
  },

  hero: {
    eyebrow: 'HOLISTIC CEREMONIES · MALLORCA',
    headline:
      'Ceremonies that honour your roots, your story and your energy.',
    headlineHighlight: 'roots',
    sub: 'Weddings, blessings and intimate rituals in the coves and fincas of Mallorca. More than 22 years between luxury hospitality and ancestral traditions — each one designed entirely around you by Blanca Coutiño.',
    primaryCta: 'Book my design call',
    secondaryCta: 'Explore Ceremonies',
    badges: ['Ceremonies by the Mediterranean', '22+ years of practice'],
    nextCeremony: {
      label: 'NEXT CEREMONY',
      date: 'Spring calendar · 2026',
      desc: 'Oráculo de Ángeles · Cala Vinyes',
    },
    proof:
      '“Our wedding wasn’t an event — it was a journey.” — Lucía & Marc, Es Trenc',
  },

  // "What is OoL" block (Home).
  whatIsOol: {
    eyebrow: 'WHAT IS OoL',
    headline: 'What we do, and why',
    paragraphs: [
      '*Ool* means "heart" in Maya. It is the idea everything we do starts from: ceremonies designed so you can pause, breathe and return to what matters.',
      'We don’t put on ordinary events. We accompany the moments that leave a mark: a wedding, the arrival of a baby, the close of a chapter, a new beginning. Every ceremony is designed with you, from your own story and what you want to celebrate.',
      'We bring together the care and logistics of luxury hospitality with elements of ancestral traditions and wellbeing. We do it with judgement and look after every detail, so all you have to do is be present.',
    ],
    whyMaya: {
      title: 'Why the Maya thread',
      body: 'Maya heritage is our root, not a costume. Copal, the four elements, the quartz and the cacao aren’t there to impress. They’re there because they make sense within the ritual: they mark a before and an after, and bring you back to your body and to what counts.',
    },
    takeaways: {
      title: 'What you take with you',
      items: [
        'A carefully held space to reconnect with yourself and with those beside you.',
        'A ritual made to measure, with no borrowed scripts.',
        'The calm of knowing every detail is considered and taken care of.',
      ],
    },
  },

  // "The OoL symbol" block (Home). Logo storytelling.
  symbol: {
    eyebrow: 'THE SYMBOL',
    headline: 'The heart of Ool',
    intro:
      'Our logo starts from the Maya glyph *Ool* (heart, centre). It’s a contemporary, simple take: you grasp it at a glance, with no need for explanation. Each element has its reason:',
    parts: [
      {
        part: 'The labyrinth',
        body: 'stands for the path inward, towards yourself.',
      },
      {
        part: 'The spirals',
        body: 'are the cycles we live: what closes and what begins again.',
      },
      {
        part: 'The fret pattern',
        body: 'inspired by Chichén Itzá and Uxmal, evokes water and abundance.',
      },
      {
        part: 'The turquoise',
        body: 'a stone highly prized in Maya culture, represents what is essential and precious in each person.',
      },
    ],
  },

  categories: [
    'Holistic Weddings',
    'Engagement',
    'Baby Blessing',
    'Bridal Farewell',
    'Angel Oracle',
    '1:1 Coaching',
    'Alchemy Workshop',
  ],

  catalog: {
    caption: 'CEREMONY CATALOGUE',
    headline: 'Seven ceremonies. One principle: nothing generic.',
    sub: 'Filter by the moment you are living. Each proposal is a starting point — everything is designed with you.',
    filters: [
      'All',
      'Holistic Weddings',
      'Engagement',
      'Baby Blessing',
      'Bridal Farewell',
      'Angel Oracle',
      '1:1 Coaching',
      'Alchemy Workshop',
    ],
    allFilter: 'All',
    priceFrom: 'From',
    priceOnRequest: 'on request',
    priceToAgree: 'By arrangement',
    pricePer: ' / person',
    cardCta: 'Check Availability',
    // CTA por vía de reserva (ver useContent): reservable → bookCta; a medida → bespokeCta.
    bookCta: 'Book a date',
    bookConsentNote:
      'Booking loads the Cal.eu calendar (third-party cookies). Tap to accept them and open the booking.',
    bespokeCta: "Let's talk first",
    depositNote: 'Reserve with 25%. The rest, on your ceremony day.',
    bespokeNote: 'Tailored end to end, with you. Let’s start with a conversation.',
    // {title} se sustituye por el nombre de la ceremonia en useContent.
    whatsappTemplate:
      'Hi Blanca, I’d love to talk about «{title}». I’m thinking about…',
    cards: [
      {
        id: 'bodas',
        tag: 'WEDDINGS & VOWS',
        category: 'Holistic Weddings',
        title: 'Unión de Almas Mayas',
        body: 'A wedding or vow renewal lived as an energetic journey, not a protocol. You seal your bond from its roots — white copal, the four elements and a hand-tied binding of hands — before the sea or in a Mediterranean finca.',
        bullets: [
          'Purification with copal and the opening of the four directions',
          'Handfasting with hand-woven textiles',
          'Up to 80 guests · designed entirely around you',
        ],
        hue: 'from-[#8B6F4E] to-[#5C3A21]',
        image: '/card-bodas.webp',
        imageAlt:
          'Hands in a ritual gesture over the embroidery of a Maya huipil, before the sea at sunset, in a moment of a union ceremony',
      },
      {
        id: 'baby',
        tag: 'BABY BLESSING',
        category: 'Baby Blessing',
        title: 'Tramuntana Baby Soul Ritual',
        body: 'A conscious welcome for the new being — a serene alternative to a traditional christening. A circle of love with the four elements to honour the baby, hold the mother and root the family.',
        bullets: [
          'An intimate circle with the four elements',
          'An offering of copal, rose water and flowers',
          'Around 2 hours of ceremony',
        ],
        hue: 'from-[#A98A6F] to-[#7D6B3D]',
        image: '/card-baby-blessing.webp',
        imageAlt:
          'Blanca Coutiño with her hands in a heart shape over her belly, in a linen dress with Maya embroidery, before the sea at sunset',
      },
      {
        id: 'picnic',
        tag: 'ANGEL ORACLE',
        category: 'Angel Oracle',
        title: 'Oráculo de Ángeles',
        body: 'Fine Mediterranean cuisine and an angelic circle beside an intimate cove. The Angelic Oracle accompanies you as guidance and self-knowledge — never prediction: a gentle mirror to find clarity and decide from a place of calm.',
        bullets: [
          'A Circle of Angels and an Oracle reading (guidance, not prediction)',
          'A personalised crystal for each guest',
          'Up to 12 people · conscious banquet included',
        ],
        hue: 'from-[#C9A57A] to-[#B8865B]',
        image: '/card-picnic.webp',
        imageAlt:
          'Blanca’s hands laying out the Angelic Oracle cards on the sand, in a circle of guidance and self-knowledge',
      },
      {
        id: 'lazo',
        tag: 'ENGAGEMENT',
        category: 'Engagement',
        title: 'El Lazo del Compromiso',
        body: 'An intimate ceremony for the two of you alone: a marriage proposal or a conscious recommitment. Mediterranean romance and the Maya wisdom of In Lak’ech, in an ultra-private corner of the island.',
        bullets: [
          'For the two of you alone · an ultra-private spot',
          'An exchange of bracelets · the thread of destiny',
          'Clifftop, hidden cove or finca of your choosing',
        ],
        hue: 'from-[#7D6B3D] to-[#4A3F24]',
        image: '/card-parejas.webp',
        imageAlt:
          'An amethyst quartz held aloft between the fingers against a turquoise sea, a symbol of a bond being sealed',
      },
      {
        id: 'ixchel',
        tag: 'BRIDAL FAREWELL',
        category: 'Bridal Farewell',
        title: 'El Círculo de Ixchel',
        body: 'A hen ceremony with soul, inspired by the Maya goddess Ixchel. Far from the confetti, close to the heart: a vessel of love and feminine empowerment for the bride and her tribe.',
        bullets: [
          'Groups of 6 to 14 women',
          'Weaving of Destiny · flower crown · sacred cacao',
          'Designed around the bride',
        ],
        hue: 'from-[#9A7A5C] to-[#5C3A21]',
        image: '/card-despedidas.webp',
        imageAlt:
          'Cupped hands holding the chakra crystals against golden backlight, evoking feminine energy and the closing of a cycle',
      },
      {
        id: 'retorno',
        tag: '1:1 COACHING',
        category: '1:1 Coaching',
        title: 'Coaching 1 a 1 · El Retorno a la Luz',
        body: 'A private, one-to-one accompaniment of three encounters to move through a turning point in your life: a loss, a divorce, a change of course. Therapeutic numerology and rituals of earth and fire as an accompaniment that complements your wellbeing, never as medical treatment.',
        bullets: [
          '3 sessions: closure, transition and rebirth',
          'Therapeutic numerology + Maya rituals',
          'Online or in person · a personal journal',
        ],
        hue: 'from-[#B8865B] to-[#7D6B3D]',
        image: '/card-coaching.webp',
        imageAlt:
          'Blanca Coutiño seen from behind looking out to sea, in a linen dress with Maya embroidery, in a moment of introspection and transition',
      },
      {
        id: 'alquimia',
        tag: 'WORKSHOP',
        category: 'Alchemy Workshop',
        title: 'Alquimia de las Aguas',
        body: 'A sensory workshop, brunch-style, where each person alchemises and takes home their own intentioned lotion with island botanicals, infused waters and crystals. It includes a short Angel Oracle reading — one to three cards — as guidance. Ideal for private or open groups, in hotels, beaches or forests across Mallorca.',
        bullets: [
          'Create and take home your lotion + harmonised quartz',
          'A short Angel Oracle reading (1 to 3 cards)',
          'Private or open groups · 1 h 30 – 2 h',
        ],
        hue: 'from-[#C9A57A] to-[#7D6B3D]',
        image: '/card-alquimia.webp',
        imageAlt:
          'A bottle of auric mist “Brisa Áurica” on white linen beside rose, green and amethyst quartz, ready for the lotion ritual',
      },
    ],
    ctaTitle: 'Can’t find your ceremony?',
    ctaSub: 'We design bespoke rituals from the root. Tell us your intention.',
    ctaBtn: 'Talk to Blanca',
  },

  about: {
    eyebrow: 'ABOUT BLANCA',
    headline:
      'More than two decades between Mexico, France and Spain. Now, in Mallorca. The same obsession: that the moment leaves its mark on you.',
    paragraphs: [
      'I am Blanca Coutiño. I arrived in Mallorca with more than 22 years of practice and over a decade designing ceremonies and weddings in the Riviera Maya — first as a wedding planner in Playa del Carmen, then as a holistic facilitator for women, couples and families.',
      'My work unites two worlds that rarely meet: the precision of international luxury hospitality and the depth of certified ancestral traditions. I am a cosmetologist and body therapist, a Reiki Master and a Bach Flower therapist; trained between hotel management in France and the herbalism I learned with the peoples of the Lacandon jungle.',
      'I was a pioneer of legal LGBT weddings in the Riviera Maya, accompanying couples from all over the world. I design every ritual with you: your intention, your body and your story are the map.',
    ],
    pullQuote: 'I don’t provide a service. I hold a sacred moment.',
    pillars: [
      {
        title: 'Luxury precision',
        body: 'Hotel management (Rennes) and wellness body-care techniques: kobido, cosmetology and massage.',
      },
      {
        title: 'Certified roots',
        body: 'Reiki Master, Bach Flowers (12+ years) and alchemy learned with the peoples of the Lacandon jungle.',
      },
      {
        title: 'A system of my own',
        body: 'Maya, Aztec and Celtic tradition integrated with ayurveda and the four elements.',
      },
    ],
    primaryCta: 'Let’s design your ceremony',
    secondaryCta: 'View ceremonies',
    badges: [
      'From Riviera Maya to Mallorca',
      '22+ years of practice',
      'LGBT wedding pioneer · Riviera Maya',
    ],
  },

  testimonials: {
    eyebrow: 'TESTIMONIALS',
    headline: 'What opens after the ritual.',
    sub: 'Real stories from those who designed their ceremony with Blanca. Some names have been shortened for privacy.',
    metrics: [
      { value: '+22', label: 'years of practice' },
      { value: '3', label: 'countries: Mexico, France and Spain' },
      { value: '+10', label: 'years designing ceremonies in the Riviera Maya' },
    ],
    cards: [
      {
        quote:
          'I arrived with a knot in my chest. I left with a new key. Blanca holds space as few people know how to.',
        name: 'Paulina M.',
        context: 'Coaching · Mallorca, 2025',
      },
      {
        quote:
          'Our wedding wasn’t an event, it was a journey. Every guest felt it. To this day people still call us to talk about that day.',
        name: 'Lucía & Marc',
        context: 'Holistic Wedding · Es Trenc',
      },
      {
        quote:
          'The Baby Blessing returned me to my body. I felt my ancestors and my daughter at the same time. I have no words.',
        name: 'Sofía R.',
        context: 'Baby Blessing · Santa Ponça',
      },
    ],
    press: 'A JOURNEY · FROM RIVIERA MAYA TO MALLORCA',
    outlets: ['Playa del Carmen', 'Tulum', 'Santa Ponça', 'Es Trenc'],
    cta: 'I want my ceremony',
  },

  press: {
    eyebrow: 'IN THE MEDIA',
    headline: 'Her work, told by the press.',
    sub: 'More than a decade designing ceremonies, weddings and events in the Riviera Maya — recognised by the local press as a reference in the field.',
    prevLabel: 'Previous clipping',
    nextLabel: 'Next clipping',
    items: [
      {
        outlet: 'The Playa Times',
        context: 'Riviera Maya · Interview',
        quote:
          'Como muchas parejas en este destino, sentimos el deseo de compartir la riqueza de nuestras culturas, que conviven en simbiosis cada día.',
        author: 'Blanca Coutiño',
        image: '/prensa-the-playa-times.webp',
        imageAlt:
          'Clipping from The Playa Times newspaper with the interview “Pour Votre Grand Jour · TPT Rencontre Blanca Coutiño” and a portrait of Blanca',
      },
      {
        outlet: 'Novedades Quintana Roo',
        context: 'Riviera Maya · Feature',
        summary:
          'A feature on how to design an unforgettable marriage proposal in the Riviera Maya, in which Blanca appears among the expert voices consulted.',
        image: '/prensa-novedades.webp',
        imageAlt:
          'Clipping from the Novedades Quintana Roo newspaper with the feature “5 recommendations for proposing marriage”',
      },
    ],
  },

  gallery: {
    eyebrow: 'ALBUM',
    headline: 'Blanca’s world, in images.',
    sub: 'Portraits, ceremony details and real moments. A decade of rituals between the Riviera Maya and the Mediterranean — the same presence that will hold your ceremony.',
    zoomLabel: 'Enlarge photo',
    closeLabel: 'Close gallery',
    prevLabel: 'Previous photo',
    nextLabel: 'Next photo',
    dialogLabel: 'Enlarged image gallery',
    items: [
      {
        src: '/album-02-retrato-cuarzo.webp',
        thumb: '/album-02-retrato-cuarzo-thumb.webp',
        w: 800,
        h: 1200,
        alt: 'Portrait of Blanca contemplating a quartz in her hand, in a hand-embroidered huipil, beside the sea',
      },
      {
        src: '/album-03-recogimiento.webp',
        thumb: '/album-03-recogimiento-thumb.webp',
        w: 1200,
        h: 800,
        alt: 'Blanca kneeling on the shore with her hands over her belly and her eyes closed, in a moment of inward stillness',
      },
      {
        src: '/album-04-espuma-cristales.webp',
        thumb: '/album-04-espuma-cristales-thumb.webp',
        w: 1200,
        h: 800,
        alt: 'Cupped hands holding the chakra crystals as the sea foam brushes over them',
      },
      {
        src: '/album-05-huipil-cuarzos.webp',
        thumb: '/album-05-huipil-cuarzos-thumb.webp',
        w: 800,
        h: 1200,
        alt: 'Hands holding quartz crystals over the geometric embroidery of a Maya huipil',
      },
      {
        src: '/album-06-corazon-cuarzo.webp',
        thumb: '/album-06-corazon-cuarzo-thumb.webp',
        w: 1200,
        h: 600,
        alt: 'Hands forming a heart around a green quartz in the golden light of sunset',
      },
      {
        src: '/album-07-espiral-arena.webp',
        thumb: '/album-07-espiral-arena-thumb.webp',
        w: 1200,
        h: 800,
        alt: 'A finger traces a spiral in the sand, a gesture of intention and the opening of the ritual',
      },
      {
        src: '/album-09-agua-cuarzo.webp',
        thumb: '/album-09-agua-cuarzo-thumb.webp',
        w: 675,
        h: 1200,
        alt: 'A hand beneath the crystal-clear water holds a blue quartz, among reflections of light',
      },
      {
        src: '/album-10-boda-lazo.webp',
        thumb: '/album-10-boda-lazo-thumb.webp',
        w: 1200,
        h: 776,
        alt: 'A newlywed couple smiles under the night, with a flower crown and the red cord of the union ceremony',
      },
    ],
  },

  faq: {
    eyebrow: 'FREQUENTLY ASKED QUESTIONS',
    headline: 'We answer your questions before they arise.',
    sub: 'We design every ritual from trust. Here is what people most often ask before taking the step.',
    items: [
      {
        q: 'Do I need previous experience for a ceremony?',
        a: 'No. Every ceremony is designed to hold whoever arrives for the first time. I guide you step by step, without jargon, from the breath to the closing.',
      },
      {
        q: 'How do I prepare for my ceremony?',
        a: 'Arrive with a light stomach (ideally no heavy food 2 hours before), comfortable clothing and a written intention. We send you a preparation PDF 48 hours before your ceremony.',
      },
      {
        q: 'Are the ceremonies religious?',
        a: 'They are not religious. They are rituals of Maya-contemporary tradition, adapted to your belief system. They work whether you are spiritual or deeply rational.',
      },
      {
        q: 'Does the Angelic Oracle predict the future?',
        a: 'No. The Angelic Oracle is a tool for guidance and self-knowledge, not divination. It does not decide for you or foretell what is to come: it is a gentle mirror that helps you see clearly what your intuition already knows.',
      },
      {
        q: 'Do the ceremonies replace medical or psychological care?',
        a: 'No. Each ceremony is a holistic accompaniment that complements your wellbeing; it never replaces medical or psychological treatment. If you are in clinical care, we honour it and work alongside it, never in its place.',
      },
      {
        q: 'Can I gift a ceremony to someone else?',
        a: 'Yes. We provide ceremonial certificates on handcrafted paper with a wax-sealed envelope. One of the most beautiful ways to give presence.',
      },
      {
        q: 'What happens if it rains on the day of my outdoor ceremony?',
        a: 'Mallorca rarely surprises us. Even so, every ceremony has a covered plan B within the same finca or cove. We never cancel because of the weather.',
      },
      {
        q: 'Do you work in places beyond Mallorca?',
        a: 'Yes, we travel to Ibiza, Menorca and Valencia. For destination ceremonies we require a minimum of 8 weeks’ notice.',
      },
    ],
    footerText: 'Your question isn’t here?  Ask Blanca directly',
    footerLink: 'Message on WhatsApp',
  },

  whatsapp: {
    eyebrow: 'PERSONAL CONCIERGE · DIRECT WHATSAPP',
    headline: 'Design your ceremony in a conversation, not a form.',
    sub: 'No endless forms. Blanca replies to you personally, listens to your intention and proposes the exact ritual you need. A brief conversation · a conscious decision.',
    features: [
      'A direct reply from Blanca (no bot).',
      'A brief 5-minute call to design your ritual.',
      'No obligation. Zero sales pressure.',
    ],
    cta: 'Talk to Blanca on WhatsApp',
    fabAria: 'Contact Blanca on WhatsApp',
    secondaryPrefix: 'or call us:',
    chat: {
      headerName: 'Holistic Ceremonies',
      headerStatus: 'Blanca · online',
      dateChip: 'TODAY',
      inputPlaceholder: 'Message',
      sendLabel: 'Send',
      messages: [
        {
          from: 'her',
          text: 'Hello! Thank you for your interest in Holistic Ceremonies. I’m Blanca — may I ask your name? 🌿',
          time: '10:42',
        },
        {
          from: 'me',
          text: 'Hi Blanca! I’m Lucía 🌸',
          time: '10:43 ✓✓',
        },
        {
          from: 'her',
          text: 'Lovely to meet you, Lucía ✨ Is there a ceremony calling to your heart? (Wedding, Engagement, Baby Blessing, Bridal Farewell, Angel Oracle…)',
          time: '10:44',
        },
        {
          from: 'me',
          text: 'It’s a hen celebration, and we dream of something intimate in a cove 🌊',
          time: '10:46 ✓✓',
        },
        {
          from: 'her',
          text: 'I hear you, Lucía 💛  Shall we set up a brief 5-minute call to design your ceremony together?',
          time: '10:46  · typing…',
        },
      ],
    },
  },

  booking: {
    eyebrow: 'BOOK · DESIGN CALL',
    headline: 'Choose your moment. We design your ceremony together.',
    sub: 'A 30-minute call, free and with no obligation, to hear your intention and guide you. Pick the slot that suits you best; you’ll get your confirmation right away.',
    altPrefix: 'Or if you’d rather talk first,',
    altCta: 'message Blanca on WhatsApp',
    loading: 'Loading the calendar…',
    locationNote:
      'Ceremonies take place in Santa Ponça. Outside Santa Ponça a travel surcharge applies, confirmed when we design your ceremony. During booking we’ll ask for the number of guests and your preferred location.',
    deposit: {
      title: 'Last step: the deposit',
      body: 'Your date is held as soon as you complete the {pct}% deposit by Bizum to {phone}, stating your name and the ceremony date. We’ll also send the instructions by email.',
      phoneFallback: 'the number we send you by email',
    },
    success: {
      title: 'Your call is booked ✨',
      body: 'You’ll receive a confirmation email with all the details. If you like, share your intention with Blanca on WhatsApp so she can prepare for your conversation.',
      whatsappCta: 'Message Blanca on WhatsApp',
      whatsappText:
        'Hi Blanca, I’ve just booked a design call with you. I’d love to tell you about…',
    },
  },

  footer: {
    brand: 'OoL Experiences',
    desc: 'Maya-contemporary holistic ceremonies to accompany, celebrate and honour the milestones that matter. More than 22 years of practice between the Riviera Maya and Mallorca, founded by Blanca Coutiño.',
    columns: [
      {
        title: 'Ceremonies',
        links: [
          { label: 'Holistic Weddings', to: '/ceremonies' },
          { label: 'Engagement', to: '/ceremonies' },
          { label: 'Baby Blessing', to: '/ceremonies' },
          { label: 'Bridal Farewell', to: '/ceremonies' },
          { label: 'Angel Oracle', to: '/ceremonies' },
          { label: '1:1 Coaching', to: '/ceremonies' },
          { label: 'Alchemy Workshop', to: '/ceremonies' },
          { label: 'Bespoke rituals', to: '/ceremonies' },
        ],
      },
      {
        title: 'Studio',
        links: [
          { label: 'About Blanca', to: '/about' },
          { label: 'Testimonials', to: '/about' },
          { label: 'Press & Media', to: '/about' },
          { label: 'Gallery', to: '/gallery' },
          { label: 'Contact', to: '/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Legal Notice', to: '/legal/aviso-legal' },
          { label: 'Privacy Policy', to: '/legal/privacidad' },
          { label: 'Cookie Policy', to: '/legal/cookies' },
          { label: 'Terms & Cancellation', to: '/legal/terminos' },
        ],
      },
    ],
    privacy: 'Legal Notice & Privacy',
    cookies: 'Cookie settings',
    lang: 'English (EN)',
    copy: '© 2026 OoL Experiences. Made with copal and code in Santa Ponça, Mallorca.',
  },

  // Cookie consent banner and panel (AEPD guidance).
  consent: {
    banner: {
      title: 'Your privacy',
      body: 'We use necessary technical cookies so the site works. We only load the booking calendar (Cal.eu, third-party cookies) if you accept. We use no analytics or advertising cookies.',
      accept: 'Accept',
      reject: 'Reject',
      configure: 'Configure',
      policyLink: 'Learn more in our Cookie Policy',
    },
    settings: {
      title: 'Cookie preferences',
      intro: 'Choose which cookies you allow. Necessary ones are always on because the site cannot work without them. You can change your decision anytime from the footer.',
      necessaryTitle: 'Necessary',
      necessaryDesc: 'Essential for the site to work: they remember your language and your cookie decision. They do not identify individuals.',
      thirdPartyTitle: 'Booking (Cal.eu)',
      thirdPartyDesc: 'These load the Cal.eu booking calendar, an external provider that may set its own cookies. They are only enabled with your permission.',
      alwaysOn: 'Always on',
      rejectAll: 'Reject all',
      save: 'Save preferences',
      close: 'Close',
    },
    gate: {
      title: 'Booking calendar',
      body: 'To book, we load the Cal.eu calendar, an external service that may set third-party cookies. Nothing loads until you allow it.',
      load: 'Load booking calendar',
      privacyNote: 'By tapping you accept Cal.eu cookies. See the Cookie Policy for details.',
    },
  },

  // Legal pages. MODEL texts; [TO COMPLETE] items need data only Blanca can provide
  // (see CHECKLIST-BLANCA.md). Not legal advice. Spanish law governs; kept in EN for users.
  legal: {
    updatedLabel: 'Last updated',
    reviewNote:
      'This is an indicative model text. Before final publication it must be completed with the owner’s details and, ideally, reviewed by a legal professional.',
    aviso: {
      title: 'Legal Notice',
      updated: 'June 2026',
      intro:
        'In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and E-Commerce (LSSI-CE), the following identification details of the owner of this website are provided.',
      sections: [
        {
          heading: '1. Owner identification',
          list: [
            'Owner: Blanca Coutiño Torres (trading as OoL Experiences)',
            'Tax ID (NIE): Z2370247-X',
            'Address: Calle Ramón de Moncada 34, ps02 L, 07180 Santa Ponça, Calvià, Balearic Islands, Spain',
            'Email: oolexperiences@gmail.com',
            'Phone: +34 665 17 55 56',
            'Activity: design and facilitation of holistic ceremonies, wellness therapies and event organisation.',
          ],
        },
        {
          heading: '2. Purpose and terms of use',
          paragraphs: [
            'This website is informational and commercial in nature regarding the services of OoL Experiences. Access and browsing imply acceptance of the terms set out in this Legal Notice.',
            'The user agrees to make appropriate use of the content and not to use it for unlawful purposes or purposes contrary to good faith.',
          ],
        },
        {
          heading: '3. Intellectual and industrial property',
          paragraphs: [
            'The texts, photographs, logos, designs and other elements of the site are owned by the provider or duly licensed, and are protected by intellectual and industrial property law. Their reproduction, distribution or transformation without express authorisation is prohibited.',
          ],
        },
        {
          heading: '4. Liability',
          paragraphs: [
            'The owner is not liable for damages arising from improper use of the site or from temporary unavailability for technical reasons. The wellness services offered are complementary and do not replace any medical or psychological treatment.',
          ],
        },
        {
          heading: '5. Third-party links and services',
          paragraphs: [
            'The site integrates the Cal.eu (Cal.com) booking service and links to WhatsApp (Meta Platforms). The owner does not control these external services, which are governed by their own terms and privacy policies.',
          ],
        },
        {
          heading: '6. Hosting',
          paragraphs: [
            'This site is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA), a web infrastructure provider.',
          ],
        },
        {
          heading: '7. Governing law',
          paragraphs: [
            'These terms are governed by Spanish law. For any dispute, the parties submit to the courts of the user’s domicile where applicable under consumer regulations.',
          ],
        },
      ],
    },
    privacidad: {
      title: 'Privacy Policy',
      updated: 'June 2026',
      intro:
        'This policy describes how users’ personal data is processed in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
      sections: [
        {
          heading: '1. Data controller',
          list: [
            'Controller: Blanca Coutiño Torres (trading as OoL Experiences)',
            'Tax ID (NIE): Z2370247-X',
            'Address: Calle Ramón de Moncada 34, ps02 L, 07180 Santa Ponça, Calvià, Balearic Islands, Spain',
            'Email: oolexperiences@gmail.com',
          ],
        },
        {
          heading: '2. What data we process, why, and on what legal basis',
          paragraphs: [
            'Booking of calls and ceremonies (via Cal.eu): name, email, phone and chosen date, in order to manage and confirm your booking. Legal basis: performance of a contract or pre-contractual measures at your request (Art. 6.1.b GDPR).',
            'Enquiries via WhatsApp or email: the data you provide, in order to handle your request. Legal basis: your consent and the legitimate interest in replying to you (Art. 6.1.a and 6.1.f GDPR).',
            'Cookies and third-party services: see the Cookie Policy. Legal basis: your consent (Art. 6.1.a GDPR).',
          ],
        },
        {
          heading: '3. Retention',
          paragraphs: [
            'Data is kept for the duration of the relationship and, afterwards, for the periods legally required to address possible liabilities. Enquiries that do not lead to a contract are kept only as long as necessary to handle them.',
          ],
        },
        {
          heading: '4. Recipients and processors',
          paragraphs: [
            'To provide the service we rely on providers acting as data processors:',
          ],
          list: [
            'Cal.com (bookings, European instance app.cal.eu) — appointment management.',
            'Google Ireland Ltd. (Google Calendar / email) — booking sync and confirmation.',
            'Vercel Inc. (website hosting).',
            'Meta Platforms Ireland Ltd. (WhatsApp) — only if you choose to use that channel.',
          ],
        },
        {
          heading: '5. International transfers',
          paragraphs: [
            'Some providers may process data outside the European Economic Area. In such cases, transfers rely on the safeguards provided by the GDPR (European Commission Standard Contractual Clauses or other valid mechanisms).',
          ],
        },
        {
          heading: '6. Your rights',
          paragraphs: [
            'You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to oolexperiences@gmail.com, stating the right you wish to exercise. If you believe the processing does not comply with the law, you may lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).',
          ],
        },
        {
          heading: '7. Security and minors',
          paragraphs: [
            'We apply reasonable technical and organisational measures to protect your data. The services are aimed at adults; we do not knowingly collect data from minors without the consent of their legal guardians.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      updated: 'June 2026',
      intro:
        'This policy explains which cookies and similar technologies this site uses, in accordance with Article 22.2 of the LSSI-CE and the AEPD Guidance on the use of cookies.',
      sections: [
        {
          heading: '1. What cookies are',
          paragraphs: [
            'A cookie is a small file a website stores on your device. We also use browser local storage (localStorage) for an equivalent purpose. Technical or necessary ones are exempt from consent; the rest are only installed if you accept them.',
          ],
        },
        {
          heading: '2. Cookies we use',
          table: {
            head: ['Name / Provider', 'Purpose', 'Duration', 'Type'],
            rows: [
              ['blanca-lang (first-party)', 'Remember your chosen language (ES/EN)', 'Persistent', 'Technical (necessary)'],
              ['blanca-consent (first-party)', 'Store your cookie decision', 'Persistent', 'Technical (necessary)'],
              ['Cal.eu / Cal.com (third party)', 'Display the calendar and manage the booking', 'Per provider', 'Third party (requires consent)'],
            ],
          },
        },
        {
          heading: '3. No analytics or advertising',
          paragraphs: [
            'This site uses no analytics cookies (such as Google Analytics) and no advertising or tracking cookies. The only third-party load is the Cal.eu booking calendar, and only if you allow it.',
          ],
        },
        {
          heading: '4. How to manage or withdraw consent',
          paragraphs: [
            'You can change or withdraw your consent at any time from the “Cookie settings” link in the footer. You can also block or delete cookies from your browser settings.',
          ],
        },
      ],
    },
    terminos: {
      title: 'Terms, Conditions and Cancellation Policy',
      updated: 'June 2026',
      intro:
        'These terms govern the booking of ceremonies, therapies and experiences from OoL Experiences. By booking, you accept these terms.',
      sections: [
        {
          heading: '1. Services',
          paragraphs: [
            'OoL Experiences designs and facilitates holistic ceremonies, wellness therapies and bespoke events. Each proposal is a starting point shaped with you. The services are of a wellness and accompaniment nature and complement — without replacing — any medical or psychological treatment.',
          ],
        },
        {
          heading: '2. Bookings, prices and payment',
          paragraphs: [
            'Some experiences are booked online via Cal.eu and others are designed after a conversation. To confirm a booking, a deposit of 25% of the price may be required via Bizum; the remaining amount is paid on the ceremony day.',
            'Prices shown include applicable taxes unless stated otherwise.',
          ],
        },
        {
          heading: '3. Cancellation and rescheduling policy',
          paragraphs: [
            'Cancellation by you: the specific cancellation and deposit-refund terms are agreed and communicated to you in writing at the time of booking, before any payment.',
            'Rescheduling: subject to calendar availability, we will aim to move the date at no extra cost with reasonable notice.',
            'Cancellation by the provider or due to force majeure: a new date or a full refund of the deposit will be offered.',
          ],
        },
        {
          heading: '4. Right of withdrawal',
          paragraphs: [
            'For leisure services or events provided on a specific date, Article 103.l of the Spanish Consumer Protection Act (R.D.L. 1/2007) excludes the right of withdrawal. For other services without a fixed date, you have 14 calendar days to withdraw under consumer regulations.',
          ],
        },
        {
          heading: '5. Liability and health',
          paragraphs: [
            'Ceremonies and therapies are wellness experiences. They do not constitute medical, psychological or psychiatric treatment, nor do they promise healing results. If you are in clinical care, we recommend informing us and maintaining your professional treatment.',
          ],
        },
        {
          heading: '6. Governing law and dispute resolution',
          paragraphs: [
            'These terms are governed by Spanish law. As a consumer, you may use the European Commission’s online dispute resolution platform (https://ec.europa.eu/consumers/odr).',
          ],
        },
      ],
    },
  },
}
