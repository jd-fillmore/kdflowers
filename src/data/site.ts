export const site = {
  name: "KD Flowers",
  url: "https://www.kdflowers.ca",
  title: "KD Flowers",
  description:
    "Niagara wedding florist KD Flowers creates affordable wedding flowers and bridal bouquets for couples in Niagara and St. Catharines. Book a free consultation.",
  author: "JD Fillmore",
  owner: "Kylee Danielle",
  instagram: "https://instagram.com/kdflowersniagara",
  booking: "https://calendly.com/kdflowers/free-consult",
  logo: "/logo.png",
  image: "/og-image.jpg",
  region: "Niagara Region, Ontario, Canada",
  locale: "en_CA",
} as const

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Contact", href: "/contact/" },
] as const

export type ServiceArea = {
  slug: string
  name: string
  navLabel: string
}

export const serviceAreas: ServiceArea[] = [
  { slug: "beamsville", name: "Beamsville", navLabel: "Beamsville" },
  { slug: "fonthill", name: "Fonthill", navLabel: "Fonthill" },
  { slug: "fort-erie", name: "Fort Erie", navLabel: "Fort Erie" },
  { slug: "grimsby", name: "Grimsby", navLabel: "Grimsby" },
  {
    slug: "jordan-ontario",
    name: "Jordan, Ontario",
    navLabel: "Jordan",
  },
  { slug: "pelham", name: "Pelham", navLabel: "Pelham" },
  {
    slug: "port-colborne",
    name: "Port Colborne",
    navLabel: "Port Colborne",
  },
  {
    slug: "port-dalhousie",
    name: "Port Dalhousie",
    navLabel: "Port Dalhousie",
  },
  { slug: "smithville", name: "Smithville", navLabel: "Smithville" },
  { slug: "thorold", name: "Thorold", navLabel: "Thorold" },
  { slug: "vineland", name: "Vineland", navLabel: "Vineland" },
  { slug: "virgil", name: "Virgil", navLabel: "Virgil" },
  { slug: "wainfleet", name: "Wainfleet", navLabel: "Wainfleet" },
  { slug: "welland", name: "Welland", navLabel: "Welland" },
]

export const testimonial = {
  title: "Client Testimonial",
  text: "Kylee did an amazing job on your flowers! They turned out stunning! She was always answering my silly questions I might have and is amazing to work with. Amazing prices for what we requested. Thank you Kylee for our beautiful flowers!!",
  author: "Denice V.",
  imageAlt: "KD Flowers Testimonial",
} as const

export const aboutCopy = [
  "Growing up, I never thought I would appreciate the beauty in floral as much as I do now. My name is Kylee Danielle, I am from Niagara, Ontario and I have a passion for floral design, and all things beautiful.",
  "My daughter Iris has become a new inspiration for me. Being a new mom has only given me even more ambition to grow my business and help to make more dreams come true!",
  "For over ten years, I have been helping brides create their vision for the most important day of their lives. I strive to put the love and passion into my designs to make your special day blossom! If you are looking for affordable wedding flowers or inexpensive bridal bouquets in Niagara, that are of amazing quality, I would love to meet with you to discuss your vision for your special day. Please feel free to book a consultation with me through the link in the upper right hand corner. I look forward to meeting you!",
] as const

export const cta = {
  title: "Need affordable wedding flowers or a bridal bouquet?",
  text: "Click on the 'book a consult' button to book your free consultation.",
  button: "Book a consult",
  areasTitle: "Areas served",
} as const

export const home = {
  seoTitle: "Wedding Florist Niagara | Affordable Wedding Flowers",
  metaDescription:
    "Looking for a Niagara wedding florist? KD Flowers creates beautiful, affordable bridal bouquets and wedding flowers for couples across Niagara and St. Catharines.",
  heroEyebrow: "Wedding Florist Serving Niagara & St. Catharines",
  heroTitle: "Niagara Wedding Florist for Affordable Wedding Flowers",
  heroTitleLead: "Niagara Wedding Florist for",
  heroTitleAccent: "Affordable Wedding Flowers",
  heroSubtitle:
    "Beautiful wedding flowers, bridal bouquets and floral arrangements, personally designed by Kylee Danielle for couples across Niagara, St. Catharines and surrounding communities.",
  heroNote: "Over ten years of wedding floristry · Complimentary consultation",
  introTitle: "Wedding Flowers Designed Around Your Day",
  introText:
    "At KD Flowers, every wedding is personal. I'm Kylee Danielle, a Niagara wedding florist with over ten years of experience creating beautiful, affordable wedding flowers for couples across the Niagara Region.\n\nFrom bridal bouquets and bridesmaid flowers to boutonnières and wedding floral arrangements, I work closely with each couple to bring their vision to life. Whether you're planning an intimate celebration or a larger wedding, I'll help create flowers that complement your style, colours and special day.",
  introAlt: "affordable wedding flowers niagara",
  aboutTitle: "Kylee Danielle",
  aboutSubtitle: "Owner of KD Flowers",
  aboutAlt: "cheap bridal bouquets niagara and st. catharines",
  services: {
    eyebrow: "What I create",
    title: "From your bouquet to the last boutonnière.",
    intro:
      "Every piece is designed as part of the whole—so the flowers in your hands, on the people beside you and in the room all feel unmistakably yours.",
    items: [
      {
        title: "Bridal bouquets",
        text: "Your bouquet sets the tone for everything else. It is designed around your dress, your colours and the way you want to feel walking down the aisle.",
      },
      {
        title: "Wedding party flowers",
        text: "Bouquets for bridesmaids and flower girls, finished to sit beautifully alongside yours—in person, in photographs and throughout the day.",
      },
      {
        title: "Boutonnières & corsages",
        text: "Personal flowers for the people closest to you, designed to match the day and made to hold up from the first look to the last dance.",
      },
      {
        title: "Wedding Ceremony & Reception Flowers",
        text: "From beautiful table centrepieces to ceremony arrangements and reception details, every floral element is designed to complement your wedding and create a cohesive look throughout your day.",
      },
    ],
  },
  why: {
    eyebrow: "Why KD Flowers",
    title:
      "A Personal Niagara Wedding Florist With Over 10 Years of Experience",
    items: [
      {
        title: "Over 10 Years of Wedding Floristry",
        text: "Kylee has been helping Niagara brides bring their wedding flower vision to life for more than a decade.",
      },
      {
        title: "Personally Designed by Kylee",
        text: "From your first consultation to the final bouquet, your flowers are designed and created by the same hands.",
      },
      {
        title: "Wedding Flowers That Reflect Your Style",
        text: "No two weddings are alike. Your colours, dress and story shape every decision, from the first stem to the last detail.",
      },
      {
        title: "Beautiful Wedding Flowers at an Affordable Price",
        text: "Beautiful wedding flowers at an affordable price, with a clear estimate covering flowers, labour and delivery.",
      },
    ],
  },
  process: {
    mainTitle:
      "Your Wedding Flower Journey, From First Consultation to Wedding Day",
    mainSubtitle: "How I can help you",
    steps: [
      {
        title: "Free Consultation",
        text: "Every wedding begins with a conversation. We'll discuss your wedding date, venue, colours, preferred flowers and the overall vision for your day. Consultations are complimentary and can take place in person, over the phone or online.",
      },
      {
        title: "Floral Design & Planning",
        text: "Based on your vision, I'll help bring your ideas together and recommend flowers and arrangements that complement your wedding style. You'll receive a personalized estimate outlining the flowers, design, labour and delivery.",
      },
      {
        title: "Flower Selection & Ordering",
        text: "Once your floral plan is finalized, I'll coordinate the flower selection and ordering process to ensure everything is prepared for your wedding. I work with trusted local floral suppliers to source the flowers needed for your arrangements.",
      },
      {
        title: "Wedding Flower Design & Creation",
        text: "This is where everything comes together. I'll personally design and create your bridal bouquet, wedding party flowers and other arrangements, making sure every detail is ready for your special day.",
      },
    ],
  },
  finalCta: {
    title: "Ready to Bring Your Wedding Flower Vision to Life in Niagara?",
    text: "Let's talk about your wedding, your ideas and the flowers that will make your day special. Book a complimentary consultation with Kylee to get started.",
    button: "Book a consult",
  },
  areas: {
    eyebrow: "Proudly Serving the Niagara Region",
    title: "Wedding Flowers Across Niagara",
    intro:
      "KD Flowers provides personalized wedding floral design for couples throughout Niagara, including St. Catharines, Niagara Falls, Niagara-on-the-Lake and surrounding communities.",
    areaNote: "Serving Niagara & St. Catharines, including these communities.",
    items: [
      { label: "Welland", href: "/wedding-flowers-welland/" },
      { label: "Grimsby", href: "/wedding-flowers-grimsby/" },
      { label: "Fort Erie", href: "/wedding-flowers-fort-erie/" },
      { label: "Beamsville", href: "/wedding-flowers-beamsville/" },
      { label: "Fonthill", href: "/wedding-flowers-fonthill/" },
      { label: "Thorold", href: "/wedding-flowers-thorold/" },
      { label: "Port Colborne", href: "/wedding-flowers-port-colborne/" },
      { label: "Port Dalhousie", href: "/wedding-flowers-port-dalhousie/" },
      { label: "Smithville", href: "/wedding-flowers-smithville/" },
      { label: "Vineland", href: "/wedding-flowers-vineland/" },
      { label: "Virgil", href: "/wedding-flowers-virgil/" },
      { label: "Wainfleet", href: "/wedding-flowers-wainfleet/" },
      { label: "Pelham", href: "/wedding-flowers-pelham/" },
      { label: "Jordan", href: "/wedding-flowers-jordan-ontario/" },
    ],
  },
} as const

export function getCityContent(area: ServiceArea) {
  return {
    seoTitle: `Wedding Flowers & Florist in ${area.name} | Affordable Bridal Bouquets`,
    heroTitle: `Wedding Flowers & Florist in ${area.name} | Affordable Bridal Bouquets`,
    heroSubtitle: `Quality wedding flowers & bridal bouquets serving ${area.name} at an affordable price`,
    introTitle: `${area.name} Wedding Flowers & Bridal Bouquets`,
    introText: `KD Flowers wedding floral design focuses on one goal - creating lasting beautiful memories by designing personalized, elegant and lavish wedding flowers for brides and grooms all over ${area.name}. Designing and creating wedding flowers is my passion and I do my best to make sure your wedding flowers reflect your style and love for each other. I work to capture all your wedding fantasies and make them a dream come true!`,
    introAlt: `wedding flowers ${area.name}, ${area.name} florist`,
    aboutTitle: "Kylee Danielle",
    aboutSubtitle: "Owner of KD Flowers",
    aboutAlt: "affordable cheap bridal bouquets",
    process: {
      mainTitle: "My Process",
      mainSubtitle: "How I can help you",
      steps: [
        {
          title: "Consultation",
          text: `Generally I prefer to meet my ${area.name} bride in person to discuss their vision for their big day! If that is not a possibility, I have no problem connecting via e-mail, phone call or text.`,
        },
        {
          title: "Plan",
          text: `Once I have an idea of your vision, I do my best to put it into perspective. Collecting all of your thoughts and imaginative ideas helps me give suggestions and envision what you are dreaming for your special day! Once I know what flowers, design, and style you fantasize about, I process an estimate which includes cost of flowers, labour and delivery for your ${area.name} wedding.`,
        },
        {
          title: "Ordering Process",
          text: `I work out of my home, therefore I do not have my own warehouse full of flowers (as much as I would love that!). I always tell my ${area.name} brides they are welcome to have their flowers purchased from wherever they prefer. If there is no preference, I order from a local ${area.name} florist who has been very helpful and accommodating.`,
        },
        {
          title: "Design & Create",
          text: `Once I have everything in order, I put my heart and soul into designing and creating your ${area.name} wedding flowers!`,
        },
      ],
    },
  } as const
}

export const faqs = [
  {
    question: "How do I book a wedding flower consultation?",
    answer:
      "Book a free consultation through the KD Flowers Calendly page at https://calendly.com/kdflowers/free-consult.",
  },
  {
    question: "What is included in a wedding flower estimate?",
    answer:
      "Once the flowers, design and style are confirmed, KD Flowers prepares an estimate that includes the cost of flowers, labour and delivery.",
  },
  {
    question: "Does KD Flowers serve my city?",
    answer:
      "KD Flowers serves Niagara and St. Catharines, including Beamsville, Fonthill, Fort Erie, Grimsby, Jordan, Pelham, Port Colborne, Port Dalhousie, Smithville, Thorold, Vineland, Virgil, Wainfleet and Welland.",
  },
  {
    question: "Can I choose where the wedding flowers are purchased?",
    answer:
      "Yes. Brides are welcome to have their flowers purchased from wherever they prefer. If there is no preference, KD Flowers orders from a local florist.",
  },
  {
    question: "Does KD Flowers have a public storefront?",
    answer:
      "KD Flowers works out of the owner's home. No public storefront address or walk-in hours are published on the website; consultations are booked in advance.",
  },
  {
    question: "How much experience does KD Flowers have?",
    answer:
      "Kylee Danielle has been helping brides create their wedding flower vision for over ten years.",
  },
] as const

export const homeFaqs = [
  {
    question: "How much do wedding flowers cost in Niagara?",
    answer:
      "Wedding flower costs depend on the types of arrangements, flowers, wedding party size and overall design. KD Flowers provides personalized estimates based on your wedding vision and budget.",
  },
  {
    question: "Do you offer affordable wedding flower packages?",
    answer:
      "KD Flowers works with couples to create beautiful wedding flowers that suit their style and budget. Contact Kylee to discuss your wedding flower requirements.",
  },
  {
    question: "What wedding flowers do you create?",
    answer:
      "From bridal bouquets and bridesmaid flowers to boutonnières, corsages and wedding arrangements, KD Flowers creates personalized floral designs for your wedding day.",
  },
  {
    question: "Do you serve areas outside St. Catharines?",
    answer:
      "Yes! KD Flowers serves couples throughout Niagara, including Niagara Falls, Niagara-on-the-Lake, Welland, Grimsby, Fort Erie and surrounding communities.",
  },
  {
    question: "How far in advance should I book my wedding florist?",
    answer:
      "It's best to get in touch as early as possible, particularly for popular wedding dates. Contact Kylee to discuss your date and availability.",
  },
  {
    question: "Can I request a custom bridal bouquet?",
    answer:
      "Absolutely! Each bridal bouquet is designed around your wedding colours, personal preferences, dress and overall vision for the day.",
  },
] as const
