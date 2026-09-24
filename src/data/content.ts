export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  image: string;
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Civil Engineering' | 'Interior Design';
  sector: 'Corporate & Workplace' | 'Civic & Community' | 'Higher Education' | 'Luxury Residential' | 'Healthcare & Wellness';
  location: string;
  year: string;
  description: string;
  client: string;
  image: string;
  tags: string[];
  stats?: { label: string; value: string }[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  category: string;
  avatar?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export const COMPANY_INFO = {
  name: 'DJAGO Design & Build Collaborative',
  primaryBrand: 'DJAGO',
  descriptor: 'ARCHITECTURE • CIVIL ENGINEERING • INTERIORS • BRANDING',
  slogan: 'Collaborative Design • People-First Architecture • Engineering Excellence',
  address: 'No. 14 Ridge Road, North Ridge, Accra, Ghana',
  phone: '0506471139 / 0599793141',
  email: 'info@djagodesignbuild.com',
  workingHours: 'Mon - Fri: 8:00 AM - 5:00 PM GMT',
  stats: [
    { label: 'Integrated Projects', value: '180+' },
    { label: 'Years of Synergy', value: '12+' },
    { label: 'Multidisciplinary Experts', value: '35+' },
    { label: 'Client Satisfaction', value: '99%' },
  ]
};

export const SECTORS = [
  {
    id: 'corporate',
    name: 'Corporate & Workplace',
    tagline: 'Empowering enterprise productivity through unified architectural branding and spatial flow.',
    image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1200&auto=format&fit=crop&q=80',
    count: '42 Projects'
  },
  {
    id: 'civic',
    name: 'Civic & Community',
    tagline: 'Public landmarks engineered for enduring cultural resonance, accessibility, and resilience.',
    image: 'https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=1200&auto=format&fit=crop&q=80',
    count: '28 Projects'
  },
  {
    id: 'education',
    name: 'Higher Education & STEM',
    tagline: 'Adaptable learning environments and structural research facilities designed for innovation.',
    image: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=1200&auto=format&fit=crop&q=80',
    count: '31 Projects'
  },
  {
    id: 'residential',
    name: 'Luxury Residential',
    tagline: 'Bespoke private estates engineered with tropical structural innovation and warm minimalism.',
    image: 'https://images.unsplash.com/photo-1760072513367-55182245e76c?w=1200&auto=format&fit=crop&q=80',
    count: '55 Projects'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    tagline: 'Human-centric healing spaces with advanced structural MEP precision and acoustic comfort.',
    image: 'https://images.unsplash.com/photo-1763485956292-7b9bed7b3c10?w=1200&auto=format&fit=crop&q=80',
    count: '24 Projects'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design & Brand Architecture',
    subtitle: 'Visual Identity, Signage & Strategy',
    tagline: 'Crafting unforgettable visual assets and spatial brand systems that define markets.',
    badge: 'Branding & Media',
    description: 'We blend strategic storytelling with contemporary typography, package design, environmental graphics, and digital media to give your enterprise a distinct global competitive edge.',
    features: [
      'Corporate Identity & Brand Guidelines',
      'Packaging & Print Production Collateral',
      'Environmental Graphics & Wayfinding Systems',
      'Digital Media & UI/UX Design Systems',
      'Executive Rebranding & Market Positioning'
    ],
    deliverables: ['Brand Manual', 'Vector Logo Suite', 'Environmental Signage', 'Digital Asset Library'],
    image: 'https://images.unsplash.com/photo-1609605348579-3123e3d40eb8?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'civil-engineering',
    title: 'Civil & Structural Engineering',
    subtitle: 'Infrastructure, Structural Design & Build',
    tagline: 'Engineering sustainable, high-precision structures that stand the test of time.',
    badge: 'Build & Infrastructure',
    description: 'From soil analysis and BIM structural modeling to heavy concrete construction management, our civil engineering team delivers robust, compliant, and cost-optimized infrastructure.',
    features: [
      'BIM Structural Analysis & Foundation Design',
      'Commercial High-Rise & Residential Construction',
      'Site Supervision & On-site Quality Assurance',
      'Stormwater Drainage & Environmental Civil Works',
      'Feasibility Studies & Value Engineering'
    ],
    deliverables: ['BIM Structural Drawings', 'BOM & Material Specifications', 'Civil Audit Reports', 'Turnkey Construction'],
    image: 'https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'interior-design',
    title: 'Interior Design & Space Planning',
    subtitle: 'Bespoke Luxury Interiors & Workplace Strategy',
    tagline: 'Transforming interior spaces into a harmonious balance of elegance, warmth, and utility.',
    badge: 'Interiors & Fit-Out',
    description: 'We curate high-end residential, corporate office, and hospitality interiors that elevate human experience through tactile natural materials, custom timber millwork, and ambient lighting.',
    features: [
      '3D Photorealistic Interior Renderings',
      'Workplace Space Planning & Ergonomics',
      'Custom Millwork & Architectural Cabinetry',
      'Material Sourcing & Luxury Furniture Procurement',
      'Acoustic Baffling & Turnkey Fit-Out'
    ],
    deliverables: ['3D Photorealistic Renderings', 'Material Swatch Boards', 'Furniture Schedule', 'Fit-out Management'],
    image: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1200&auto=format&fit=crop&q=80'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Ridge Heights Luxury Penthouse',
    category: 'Interior Design',
    sector: 'Luxury Residential',
    location: 'North Ridge, Accra',
    year: '2024',
    client: 'Private Executive',
    description: 'Full interior concept, custom walnut cabinetry, Italian marble paneling, and automated smart lighting installation.',
    image: 'https://images.unsplash.com/photo-1760072513367-55182245e76c?w=1200&auto=format&fit=crop&q=80',
    tags: ['Luxury Residence', 'Millwork', 'Smart Lighting'],
    stats: [
      { label: 'Area', value: '450 sqm' },
      { label: 'Duration', value: '6 Months' }
    ]
  },
  {
    id: 'proj-2',
    title: 'Apex Financial Center',
    category: 'Civil Engineering',
    sector: 'Corporate & Workplace',
    location: 'Airport Residential Area, Accra',
    year: '2023',
    client: 'Apex Capital Partners',
    description: 'Structural engineering design, reinforced concrete core framing, and glass curtain wall structural integrity validation.',
    image: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=1200&auto=format&fit=crop&q=80',
    tags: ['Commercial High-Rise', 'Concrete Core', 'Structural Validation'],
    stats: [
      { label: 'Floors', value: '14 Storeys' },
      { label: 'Concrete Used', value: '12,000 m³' }
    ]
  },
  {
    id: 'proj-3',
    title: 'Volta Green Energy Rebrand',
    category: 'Graphic Design',
    sector: 'Corporate & Workplace',
    location: 'Accra / International',
    year: '2024',
    client: 'Volta Green Energy Ltd',
    description: 'Comprehensive brand architecture, environmental signage system, sustainability report layout, and digital media guidelines.',
    image: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=1200&auto=format&fit=crop&q=80',
    tags: ['Corporate Rebrand', 'Packaging', 'Environmental Signage'],
    stats: [
      { label: 'Touchpoints', value: '45 Assets' },
      { label: 'Reach', value: 'West Africa' }
    ]
  },
  {
    id: 'proj-4',
    title: 'Cantonments Eco Villa',
    category: 'Civil Engineering',
    sector: 'Luxury Residential',
    location: 'Cantonments, Accra',
    year: '2024',
    client: 'Private Residence',
    description: 'Structural design & earthworks for a modern tropical minimalist villa featuring cantilevered concrete decks and infinity pool.',
    image: 'https://images.unsplash.com/photo-1614595737476-42487331b8a1?w=1200&auto=format&fit=crop&q=80',
    tags: ['Residential', 'Cantilever Steel', 'Site Drainage'],
    stats: [
      { label: 'Site Footprint', value: '800 sqm' },
      { label: 'Completion', value: '100%' }
    ]
  },
  {
    id: 'proj-5',
    title: 'Kojo Bentsi Corporate Headquarters',
    category: 'Interior Design',
    sector: 'Corporate & Workplace',
    location: 'Osu, Accra',
    year: '2023',
    client: 'Kojo Bentsi Group',
    description: 'Executive suite redesign, acoustic timber baffling, open plan workstations, and executive boardroom fitout.',
    image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1200&auto=format&fit=crop&q=80',
    tags: ['Office Interiors', 'Acoustic Panels', 'Executive Boardroom'],
    stats: [
      { label: 'Workstations', value: '120 Units' },
      { label: 'Style', value: 'Warm Modern' }
    ]
  },
  {
    id: 'proj-6',
    title: 'Accra Innovation Hub & Library',
    category: 'Civil Engineering',
    sector: 'Civic & Community',
    location: 'Central Accra, Ghana',
    year: '2023',
    client: 'Municipal Development Board',
    description: 'Integrated civil structure, public courtyard, thermal facade modeling, and community learning spaces.',
    image: 'https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=1200&auto=format&fit=crop&q=80',
    tags: ['Civic Center', 'Public Library', 'Thermal Facade'],
    stats: [
      { label: 'Capacity', value: '1,500 Visitors' },
      { label: 'Rating', value: 'Green Building Certified' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'DJAGO operates with the collaborative integration of a top global firm. Having their structural engineers, brand designers, and interior specialists in the same room saved us months of coordination and millions in change orders.',
    author: 'Kofi Mensah-Addo',
    role: 'Managing Director',
    company: 'Apex Capital Ghana',
    category: 'Civil & Interiors'
  },
  {
    id: 't-2',
    quote: 'Their collaborative process puts people and purpose first. They listened to our company culture and created a headquarters identity and interior that inspires our entire team every day.',
    author: 'Ama Serwaa Darko',
    role: 'Head of Brand & Marketing',
    company: 'Volta Green Energy',
    category: 'Graphic Design'
  },
  {
    id: 't-3',
    quote: 'Extremely professional delivery on our Cantonments villa. DJAGO brought our vision to life with cantilevered structural concrete and breathtaking interior minimalism.',
    author: 'Dr. Michael Baah',
    role: 'Homeowner & Surgeon',
    company: 'Private Client',
    category: 'Interiors & Civil'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ing. Kwabena Djago',
    role: 'Managing Partner & Principal Civil Engineer',
    specialty: 'Structural BIM Engineering & Infrastructure',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80'
  },
  {
    name: 'Abena Osei-Djago',
    role: 'Partner & Creative Director',
    specialty: 'Brand Identity, Environmental Graphics & Media',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80'
  },
  {
    name: 'Emmanuel Ampofo',
    role: 'Director of Interior Architecture',
    specialty: 'Spatial Workplace Strategy & Custom Furnishings',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80'
  }
];
