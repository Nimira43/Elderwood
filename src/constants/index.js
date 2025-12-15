const navLinks = [
  {
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
]

const words = [
  { text: 'Innovative', imgPath: '/images/ideas.svg' },
  { text: 'Cutting-edge', imgPath: '/images/concepts.svg' },
  { text: 'Elegant', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Robust', imgPath: '/images/ideas.svg' },
  { text: 'User-focused', imgPath: '/images/concepts.svg' },
  { text: 'Seamless', imgPath: '/images/designs.svg' },
  { text: 'Versatile', imgPath: '/images/code.svg' }
]

const counterItems = [
  { value: 12, suffix: '+', label: 'Years of Experience'},
  { value: 57, suffix: '+', label: 'Satisfied Clients'},
  { value: 79, suffix: '+', label: 'Projects Completed'},
  { value: 95, suffix: '%', label: 'Client Retention Rate'},
]

const logoIconsList = [
  {
    imgPath: '/images/logos/logo-01.png',
  },
  {
    imgPath: '/images/logos/logo-02.png',
  },
  {
    imgPath: '/images/logos/logo-03.png',
  },
  {
    imgPath: '/images/logos/logo-04.png',
  },
  {
    imgPath: '/images/logos/logo-05.png',
  },
  {
    imgPath: '/images/logos/logo-06.png',
  },
  {
    imgPath: '/images/logos/logo-07.png',
  },
  {
    imgPath: '/images/logos/logo-08.png',
  },
  {
    imgPath: '/images/logos/logo-09.png',
  },
  {
    imgPath: '/images/logos/logo-10.png',
  },
  {
    imgPath: '/images/logos/logo-11.png',
  },
]

const projects = [
  {
    imgPath: '/images/utility-img.png',
    title: 'Knight Coders',
    desc: 'Discover programming opportunities with Knight Coders, a streamlined job listing hub for developers worldwide.',
  },
  {
    imgPath: '/images/progamers.png',
    title: 'Pro Gamers',
    desc: 'Connect, form teams, and collaborate with Pro Gamers — a social platform built for cooperative gaming adventures.',
  },
  {
    imgPath: '/images/thalassia.png',
    title: 'Thalassia',
    desc: 'Shop quickly and efficiently with Thalassia, an e-commerce store offering fast delivery and mythic branding touches.',
  },
  {
    imgPath: '/images/utility-img.png',
    title: 'Claros',
    desc: 'Claros delivers a lightweight WebSocket server, fully compliant with RFC 6455, enabling seamless real-time communication.',
  },
]

const expCards = [
  {
    review:
      "A remarkably polished authentication system that showcases Elderwood’s precision engineering. Nick’s team delivered seamless security, intuitive workflows and reliability that feels enterprise‑grade from the first interaction.",
    imgPath: '/images/exp1.png',
    logoPath: '/images/logo1.png',
    title: 'Gnosis',
    releasedDate: 'March 2024',
    description: [
      'Secure authentication flows designed for seamless integration across applications.',
      'Lightweight architecture ensuring rapid performance under heavy concurrent load.',
      'Robust auditing tools providing clear insights into user access patterns.',
    ],
  },
  {
    review:
      "Claros demonstrates Elderwood’s technical discipline, offering stable real‑time performance and clean tooling. Lenny’s influence is clear in its thoughtful architecture and developer‑friendly design.",
    imgPath: '/images/exp2.png',
    logoPath: '/images/logo2.png',
    title: 'Claros',
    date: 'December 2024',
    description: [
      'High performance WebSocket engine supporting scalable real time communication.',
      'Standards compliant protocol handling ensuring consistent behaviour across clients.',
      'Developer focused utilities simplifying debugging, monitoring and connection management.',
    ],
  },
  {
    review:
      "Albion blends refined aesthetics with flawless performance. You can see Elderwood’s hallmarks throughout, and Chris’s attention to detail elevates the entire shopping experience.",
    imgPath: '/images/exp3.png',
    logoPath: '/images/logo3.png',
    title: 'Albion',
    date: 'September 2025',
    description: [
      'Premium storefront layout showcasing luxury fashion with refined visual styling.',
      'Optimised checkout flow delivering fast secure transactions for global customers.',
      'Dynamic product management tools enabling effortless updates and seasonal collections.',
    ],
  },
]


export {
  navLinks,
  words,
  counterItems,
  logoIconsList,
  projects,
  expCards
}