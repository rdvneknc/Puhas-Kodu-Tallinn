export const LOCALES = [
  { code: "et", label: "Eesti", short: "ET", flag: "🇪🇪" },
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
];

export const translations = {
  et: {
    nav: {
      home: "Avaleht",
      about: "Meist",
      services: "Teenused",
      prices: "Hinnakiri",
      contact: "Kontakt",
      cta: "Küsige pakkumist",
    },
    hero: {
      titleLine1: "Puhas kodu.",
      titleLine2: "Värske mööbel.",
      subtitle: "Diivanite, madratsite ja toolide professionaalne puhastus Tallinnas.",
      selectService: "Valige teenus",
      location: "Teie asukoht",
      cta: "Küsige pakkumist",
      services: {
        sofas: "Diivanite puhastus",
        mattresses: "Madratsite puhastus",
        chairs: "Toolide puhastus",
      },
    },
    trust: {
      clean: "Värskem ja hügieenilisem kodu",
      reliable: "Professionaalne süvapuhastus",
      daily: "Selged hinnad Tallinnas",
    },
    homeServices: {
      title: "Puhas mööbel algab õigest hooldusest.",
    },
    homeAbout: {
      eyebrow: "Meist",
      title: "Puhas Kodu Tallinn — teie kodu heaks.",
      text: "Puhas Kodu Tallinn pakub professionaalset diivanite, madratsite ja toolide puhastust. Kasutame tõhusaid meetodeid, et eemaldada mustus, lõhnad ja allergeenid — et teie kodu tunduks taas värske.",
      cta: "Lugege lähemalt",
    },
    process: {
      title: "Kuidas see käib?",
      steps: [
        {
          title: "Kirjeldage vajadust",
          text: "Valige teenus ja jagage oma asukohta.",
        },
        {
          title: "Saage pakkumine",
          text: "Anname selge hinna vastavalt mööblile ja määrdumisele.",
        },
        {
          title: "Nautige puhtust",
          text: "Puhastame kokkulepitud ajal — hoolikalt ja professionaalselt.",
        },
      ],
    },
    services: {
      sofas: {
        title: "Diivanite puhastus",
        short: "Värskendav või süvapuhastus diivanitele — vastavalt teie vajadusele.",
        long: "Puhastame ühe-, kahe- ja kolmekohalisi diivaneid. Valida saate värskendava puhastuse või põhjalikuma süvapuhastuse, mis eemaldab sügavamad plekid ja lõhnad.",
        includes: [
          "Ühekohaline istekoht",
          "Kahekohaline diivan",
          "Kolmekohaline diivan",
          "Värskendav või süvapuhastus",
        ],
      },
      mattresses: {
        title: "Madratsite puhastus",
        short: "Ühe või mõlema poole puhastus erinevatele madratsimõõtudele.",
        long: "Madratsi puhastus aitab vähendada tolmulestasid, plekke ja lõhnu. Pakume puhastust ühele või mõlemale poolele — sobib erinevatele mõõtudele alates 90/160 cm kuni 200/220 cm.",
        includes: ["90/160 cm", "160/200 cm", "200/220 cm", "Üks või mõlemad pooled"],
      },
      chairs: {
        title: "Toolide puhastus",
        short: "Pehme istmega ja täielikult polsterdatud toolide puhastus.",
        long: "Puhastame pehme istmega toole ning täielikult polsterdatud toole. Sobib kodusesse ja kontorikeskkonda — kiire, korralik ja selge hinnaga.",
        includes: ["Pehme istmega tool", "Täielikult polsterdatud tool", "Plekkide eemaldamine", "Värske ja puhas tulemus"],
      },
    },
    servicesPage: {
      eyebrow: "Teenused",
      title: "Diivanid, madratsid ja toolid.",
      subtitle: "Professionaalne pehme mööbli puhastus — selged teenused ja hinnad.",
      ask: "Küsige selle teenuse kohta",
    },
    aboutPage: {
      eyebrow: "Meist",
      title: "Puhas kodu, meeldiv igapäev.",
      subtitle: "Puhas Kodu Tallinn pakub professionaalset diivanite, madratsite ja toolide puhastust Tallinnas.",
      whoTitle: "Kes me oleme",
      whoP1:
        "Oleme Tallinnas tegutsev pehme mööbli puhastusele keskendunud ettevõte. Meie eesmärk on lihtne: värskem kodu, puhtamad diivanid, madratsid ja toolid.",
      whoP2:
        "Töötame hoolikalt erineva määrdumisastmega — alates igapäevasest värskendusest kuni sügavamate plekkide ja lõhnade eemaldamiseni.",
      valuesTitle: "Mille eest seisame",
      values: [
        {
          title: "Selged hinnad",
          text: "Hinnakiri on arusaadav — teate ette, mida oodata.",
        },
        {
          title: "Hoolikas töö",
          text: "Kaitseme teie mööblit ja kodu, töötades korrektselt ning professionaalselt.",
        },
        {
          title: "Aus suhtlus",
          text: "Kui määrdumine on tugevam, ütleme selle ausalt ja selgitame hinnaerinevust.",
        },
      ],
      teamTitle: "Kuidas töö käib",
      team: [
        {
          name: "Planeerimine",
          role: "Aeg ja pakkumine",
          text: "Lepime kokku sobiva aja ning anname selge ülevaate teenusest ja hinnast.",
        },
        {
          name: "Puhastustiim",
          role: "Töö objektil",
          text: "Professionaalne puhastus diivanitele, madratsitele ja toolidele.",
        },
        {
          name: "Klienditugi",
          role: "Küsimused ja järeltegevus",
          text: "Vastame päringutele kiiresti ning aitame valida sobiva teenuse.",
        },
      ],
    },
    pricesPage: {
      eyebrow: "Hinnakiri",
      title: "Selged hinnad pehmele mööblile.",
      subtitle: "Allpool olevad alghinnad — lõplik hind võib sõltuda määrdumisest.",
      categories: [
        {
          id: "sofas",
          title: "Diivanid",
          colA: "Värskendav puhastus",
          colB: "Süvapuhastus",
          rows: [
            { item: "Ühekohaline istekoht", a: "alates 15 €", b: "alates 20 €" },
            { item: "Kahekohaline diivan", a: "alates 30 €", b: "alates 40 €" },
            { item: "Kolmekohaline diivan", a: "alates 45 €", b: "alates 60 €" },
          ],
        },
        {
          id: "mattresses",
          title: "Madratsid",
          colA: "Üks pool",
          colB: "Mõlemad pooled",
          rows: [
            { item: "90/160 cm", a: "alates 25 €", b: "alates 50 €" },
            { item: "160/200 cm", a: "alates 40 €", b: "alates 80 €" },
            { item: "200/220 cm", a: "alates 50 €", b: "alates 100 €" },
          ],
        },
        {
          id: "chairs",
          title: "Toolid",
          colA: "Hind",
          singleColumn: true,
          rows: [
            { item: "Pehme istmega tool", a: "alates 5 €" },
            { item: "Täielikult polsterdatud tool", a: "alates 10 €" },
          ],
        },
      ],
      warning:
        "Hind võib olla kõrgem sõltuvalt määrdumisest (veri, uriin, viltpliiatsijäljed, loomakarvad).",
      footnote: "Kõik hinnad on alates-hinnad. Täpse pakkumise saamiseks kirjeldage oma mööblit või võtke meiega ühendust.",
      faqTitle: "Korduma kippuvad küsimused",
      faqs: [
        {
          q: "Kas vahendid on hinna sees?",
          a: "Jah — toome kaasa pehme mööbli puhastuseks vajalikud vahendid ja seadmed.",
        },
        {
          q: "Kui kaua mööbel kuivab?",
          a: "Tavaliselt mõnest tunnist ühe päevani, sõltuvalt materjalist ja teenuse mahust.",
        },
        {
          q: "Kas tulete kohale Tallinnas?",
          a: "Jah. Teenindame Tallinnas ja lähiümbruses — küsige sobivat aega.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Rääkige meile oma mööblist.",
      subtitle: "Kirjeldage diivanit, madratsit või toole — koostame teile pakkumise.",
      asideEyebrow: "Võtke ühendust",
      asideTitle: "Aitame leida sobiva puhastuslahenduse.",
      asideText:
        "Eelistate otse suhelda? Kirjutage või helistage — või saatke vorm ja võtame peagi ühendust.",
      email: "E-post",
      phone: "Telefon",
      area: "Piirkond",
      areaValue: "Tallinn ja ümbrus",
      hours: "Tööaeg",
      hoursValue: "E–R, 9:00–17:00",
      formTitle: "Küsige pakkumist",
      formHint: "* märgitud väljad on kohustuslikud.",
      name: "Täisnimi *",
      namePh: "Teie nimi",
      emailLabel: "E-post *",
      emailPh: "teie@email.com",
      phoneLabel: "Telefon",
      phonePh: "+372 …",
      service: "Teenus *",
      selectService: "Valige teenus",
      other: "Muu / kombineeritud",
      location: "Asukoht *",
      locationPh: "Tänav, linnaosa või aadress",
      message: "Sõnum",
      messagePh: "Mööbli tüüp, suurus, määrdumine, erisoovid…",
      send: "Saatke päring",
      replyNote: "Vastame tavaliselt ühe tööpäeva jooksul.",
    },
    footer: {
      tagline: "Diivanite, madratsite ja toolide puhastus Tallinnas.",
    },
    common: {
      requestQuote: "Küsige pakkumist",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      prices: "Prices",
      contact: "Contact",
      cta: "Request a quote",
    },
    hero: {
      titleLine1: "A cleaner home.",
      titleLine2: "Fresher furniture.",
      subtitle: "Professional sofa, mattress, and chair cleaning in Tallinn.",
      selectService: "Select service",
      location: "Your location",
      cta: "Request a quote",
      services: {
        sofas: "Sofa cleaning",
        mattresses: "Mattress cleaning",
        chairs: "Chair cleaning",
      },
    },
    trust: {
      clean: "A fresher, more hygienic home",
      reliable: "Professional deep cleaning",
      daily: "Clear pricing in Tallinn",
    },
    homeServices: {
      title: "Clean furniture starts with proper care.",
    },
    homeAbout: {
      eyebrow: "About us",
      title: "Puhas Kodu Tallinn — for your home.",
      text: "Puhas Kodu Tallinn provides professional cleaning for sofas, mattresses, and chairs. We use effective methods to remove dirt, odors, and allergens — so your home feels fresh again.",
      cta: "Read more",
    },
    process: {
      title: "How does it work?",
      steps: [
        {
          title: "Describe your needs",
          text: "Select a service and share your location.",
        },
        {
          title: "Get a quote",
          text: "We give a clear price based on the furniture and soiling level.",
        },
        {
          title: "Enjoy the cleanliness",
          text: "We clean at the agreed time — carefully and professionally.",
        },
      ],
    },
    services: {
      sofas: {
        title: "Sofa cleaning",
        short: "Refreshing or deep cleaning for sofas — based on your needs.",
        long: "We clean one-, two-, and three-seater sofas. Choose a refreshing clean or a deeper treatment that targets tougher stains and odors.",
        includes: [
          "Single seat",
          "Two-seater sofa",
          "Three-seater sofa",
          "Refreshing or deep cleaning",
        ],
      },
      mattresses: {
        title: "Mattress cleaning",
        short: "One-side or both-sides cleaning for different mattress sizes.",
        long: "Mattress cleaning helps reduce dust mites, stains, and odors. We offer cleaning for one or both sides — for sizes from 90/160 cm up to 200/220 cm.",
        includes: ["90/160 cm", "160/200 cm", "200/220 cm", "One or both sides"],
      },
      chairs: {
        title: "Chair cleaning",
        short: "Cleaning for soft-seat and fully upholstered chairs.",
        long: "We clean chairs with soft seats as well as fully upholstered chairs. Suitable for home and office — fast, careful, and clearly priced.",
        includes: ["Soft-seat chair", "Fully upholstered chair", "Stain treatment", "Fresh, clean result"],
      },
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Sofas, mattresses, and chairs.",
      subtitle: "Professional upholstery cleaning — clear services and prices.",
      ask: "Ask about this service",
    },
    aboutPage: {
      eyebrow: "About us",
      title: "A cleaner home for everyday comfort.",
      subtitle: "Puhas Kodu Tallinn provides professional sofa, mattress, and chair cleaning in Tallinn.",
      whoTitle: "Who we are",
      whoP1:
        "We are a Tallinn-based company focused on soft furniture cleaning. Our goal is simple: a fresher home with cleaner sofas, mattresses, and chairs.",
      whoP2:
        "We work carefully with different soiling levels — from everyday refreshing cleans to deeper stain and odor removal.",
      valuesTitle: "What we stand for",
      values: [
        {
          title: "Clear pricing",
          text: "Our price list is easy to understand — you know what to expect.",
        },
        {
          title: "Careful work",
          text: "We protect your furniture and home while working professionally on site.",
        },
        {
          title: "Honest communication",
          text: "If soiling is heavier, we say so clearly and explain any price difference.",
        },
      ],
      teamTitle: "How we work behind the scenes",
      team: [
        {
          name: "Planning",
          role: "Scheduling & quotes",
          text: "We agree on a suitable time and give a clear overview of the service and price.",
        },
        {
          name: "Cleaning team",
          role: "On-site work",
          text: "Professional cleaning for sofas, mattresses, and chairs.",
        },
        {
          name: "Client support",
          role: "Questions & follow-up",
          text: "We reply quickly and help you choose the right service.",
        },
      ],
    },
    pricesPage: {
      eyebrow: "Price list",
      title: "Clear prices for soft furniture.",
      subtitle: "Starting prices below — the final price may depend on soiling level.",
      categories: [
        {
          id: "sofas",
          title: "Sofas",
          colA: "Refreshing clean",
          colB: "Deep clean",
          rows: [
            { item: "Single seat", a: "from €15", b: "from €20" },
            { item: "Two-seater sofa", a: "from €30", b: "from €40" },
            { item: "Three-seater sofa", a: "from €45", b: "from €60" },
          ],
        },
        {
          id: "mattresses",
          title: "Mattresses",
          colA: "One side",
          colB: "Both sides",
          rows: [
            { item: "90/160 cm", a: "from €25", b: "from €50" },
            { item: "160/200 cm", a: "from €40", b: "from €80" },
            { item: "200/220 cm", a: "from €50", b: "from €100" },
          ],
        },
        {
          id: "chairs",
          title: "Chairs",
          colA: "Price",
          singleColumn: true,
          rows: [
            { item: "Soft-seat chair", a: "from €5" },
            { item: "Fully upholstered chair", a: "from €10" },
          ],
        },
      ],
      warning:
        "Price may be higher depending on soiling (blood, urine, felt-tip marks, pet hair).",
      footnote: "All prices are starting prices. For an exact quote, describe your furniture or contact us.",
      faqTitle: "Common questions",
      faqs: [
        {
          q: "Is equipment included?",
          a: "Yes — we bring the tools and products needed for soft furniture cleaning.",
        },
        {
          q: "How long does drying take?",
          a: "Usually from a few hours up to one day, depending on the material and service scope.",
        },
        {
          q: "Do you come on site in Tallinn?",
          a: "Yes. We serve Tallinn and nearby areas — ask us for a suitable time.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Tell us about your furniture.",
      subtitle: "Describe your sofa, mattress, or chairs — and we will prepare an offer.",
      asideEyebrow: "Get in touch",
      asideTitle: "We’ll help you choose the right clean.",
      asideText:
        "Prefer to talk directly? Reach us by email or phone — or send the form and we’ll get back to you shortly.",
      email: "Email",
      phone: "Phone",
      area: "Area",
      areaValue: "Tallinn & nearby",
      hours: "Hours",
      hoursValue: "Mon–Fri, 9:00–17:00",
      formTitle: "Request a quote",
      formHint: "Fields marked with * are required.",
      name: "Full name *",
      namePh: "Your name",
      emailLabel: "Email *",
      emailPh: "you@email.com",
      phoneLabel: "Phone",
      phonePh: "+372 …",
      service: "Service *",
      selectService: "Select service",
      other: "Other / combined",
      location: "Location *",
      locationPh: "Street, district, or address",
      message: "Message",
      messagePh: "Furniture type, size, soiling, special notes…",
      send: "Send request",
      replyNote: "We usually reply within one business day.",
    },
    footer: {
      tagline: "Sofa, mattress, and chair cleaning in Tallinn.",
    },
    common: {
      requestQuote: "Request a quote",
    },
  },
};

export const SERVICE_IDS = ["sofas", "mattresses", "chairs"];

export const SERVICE_IMAGES = {
  sofas: "/images/service-common.jpg",
  mattresses: "/images/service-stairwell.jpg",
  chairs: "/images/service-windows.jpg",
};

export const TEAM_IMAGES = [
  "/images/team-operations.jpg",
  "/images/team-specialists.jpg",
  "/images/team-support.jpg",
];

export const IMAGES = {
  aboutTeam: "/images/about-team.jpg",
  aboutStory: "/images/about-story.jpg",
};
