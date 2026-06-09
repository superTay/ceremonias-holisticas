// English TEXT bundle — transcreated, not translated. Brand voice: docs/02
// (scientific not mystical · holistic not esoteric · elegant, never fairground).
// Tone: an Aman spa / Swiss wellness clinic. Red lines hold in EN too: no magic,
// no prediction, no medical promises. Maya commercial names are kept as proper names;
// their body/bullets are transcreated. The Playa Times quote (FR/ES) is kept verbatim.
// Key structure is identical to es.js. Non-text data (prices, contact) lives in shared.js.

export default {
  meta: {
    title: 'OOL Experiences · Holistic Ceremonies in Mallorca',
    description:
      'OOL Experiences: Maya-contemporary holistic ceremonies to heal, celebrate and honour the milestones that matter. Founded by Blanca Coutiño in Mallorca.',
    ogTitle: 'OOL Experiences · Holistic Ceremonies in Mallorca',
    ogDescription:
      'Ceremonies designed for the moments that never come twice. In the coves and fincas of Mallorca.',
    ogLocale: 'en_GB',
    // Per-route label for the document <title> (see useDocumentMeta).
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
    brand: 'OOL Experiences',
    brandAria: 'Home · OOL Experiences',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Ceremonies', to: '/ceremonies' },
      { label: 'About Blanca', to: '/about' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Contact', to: '/contact' },
    ],
    cta: 'Check Availability',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langLabel: 'Change language',
  },

  hero: {
    eyebrow: 'HOLISTIC CEREMONIES · MALLORCA & DESTINATION',
    headline:
      'Ceremonies for the moments that never come twice. Designed as a threshold, before the Mallorcan sea.',
    headlineHighlight: 'threshold',
    sub: 'Weddings, blessings and intimate rituals in the coves and fincas of Mallorca. More than 22 years between luxury hospitality and ancestral traditions — each one designed entirely around you by Blanca Coutiño.',
    primaryCta: 'Book my design call',
    secondaryCta: 'Explore Ceremonies',
    badges: ['Ceremonies by the Mediterranean', '22+ years of practice'],
    nextCeremony: {
      label: 'NEXT CEREMONY',
      date: 'Spring calendar · 2026',
      desc: 'El Festín de las Alas · Cala Vinyes',
    },
    proof:
      '“Our wedding wasn’t an event — it was a threshold.” — Lucía & Marc, Es Trenc',
  },

  categories: [
    'Holistic Weddings',
    'Engagement',
    'Baby Blessing',
    'Bridal Farewell',
    'Picnic & Oracle',
    'Ritual Coaching',
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
      'Picnic & Oracle',
      'Ritual Coaching',
      'Alchemy Workshop',
    ],
    allFilter: 'All',
    priceFrom: 'from',
    priceOnRequest: 'on request',
    pricePer: '/person',
    cardCta: 'Check Availability',
    // CTA por vía de reserva (ver useContent): reservable → bookCta; a medida → bespokeCta.
    bookCta: 'Book a date',
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
        tag: 'PICNIC & ORACLE',
        category: 'Picnic & Oracle',
        title: 'El Festín de las Alas',
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
        title: 'El Lazo del Destino',
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
        tag: 'BRIDAL',
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
        tag: 'COACHING',
        category: 'Ritual Coaching',
        title: 'El Retorno a la Luz',
        body: 'A private process of three encounters to cross a life threshold: a loss, a divorce, a change of course. Therapeutic numerology and rituals of earth and fire as an accompaniment that complements your wellbeing, never as medical treatment.',
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
        title: 'Alquimia de las 3 Aguas',
        body: 'A sensory workshop where each person alchemises their own intentioned auric mist. You choose one of three frequencies — Love, Abundance or Balance — with island botanicals, infused waters and crystals. Ideal for groups and as a complement to other ceremonies.',
        bullets: [
          'Three frequencies: Aphrodite, Maya Gold or Tramuntana',
          'Each guest creates and takes home their own mist',
          'Groups from 5 people · ideal for events',
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
    pullQuote: 'I don’t provide a service. I hold a threshold.',
    pillars: [
      {
        title: 'Luxury precision',
        body: 'Hotel management (Rennes) and body therapies: lymphatic drainage, kobido, cosmetology.',
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
    sub: 'Real stories from those who designed their ceremony with Blanca.',
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
          'Our wedding wasn’t an event, it was a threshold. Every guest felt it. To this day people still call us to talk about that day.',
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
    sub: 'Portraits, ceremony details and real moments. A decade of rituals between the Riviera Maya and the Mediterranean — the same presence that will hold your threshold.',
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
    sub: 'We design every ritual from trust. Here is what people most often ask before crossing the threshold.',
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
          text: 'Lovely to meet you, Lucía ✨ Is there a ceremony calling to your heart? (Wedding, Engagement, Baby Blessing, Bridal Farewell, Picnic & Oracle…)',
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
    success: {
      title: 'Your call is booked ✨',
      body: 'You’ll receive a confirmation email with all the details. If you like, share your intention with Blanca on WhatsApp so she can prepare for your conversation.',
      whatsappCta: 'Message Blanca on WhatsApp',
      whatsappText:
        'Hi Blanca, I’ve just booked a design call with you. I’d love to tell you about…',
    },
  },

  footer: {
    brand: 'OOL Experiences',
    desc: 'Maya-contemporary holistic ceremonies to heal, celebrate and honour the milestones that matter. More than 22 years of practice between the Riviera Maya and Mallorca, founded by Blanca Coutiño.',
    columns: [
      {
        title: 'Ceremonies',
        links: [
          { label: 'Holistic Weddings', to: '/ceremonies' },
          { label: 'Engagement', to: '/ceremonies' },
          { label: 'Baby Blessing', to: '/ceremonies' },
          { label: 'Bridal Farewell', to: '/ceremonies' },
          { label: 'Picnic & Oracle', to: '/ceremonies' },
          { label: 'Ritual Coaching', to: '/ceremonies' },
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
        title: 'Legal & Tax',
        links: [
          'Privacy Notice',
          'Terms & Conditions',
          'Cookie Policy',
          'Cancellation Policy',
        ],
      },
    ],
    gdpr: 'Data protected · GDPR',
    lang: 'English (EN)',
    copy: '© 2026 OOL Experiences. Made with copal and code in Santa Ponça, Mallorca.',
  },
}
