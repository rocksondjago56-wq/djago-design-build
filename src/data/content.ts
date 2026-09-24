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
  social: [
    { label: 'Instagram', handle: '@mr.djago', url: 'https://www.instagram.com/mr.djago', icon: 'instagram' },
    { label: 'TikTok', handle: '@rocksonadebi', url: 'https://www.tiktok.com/@rocksonadebi', icon: 'tiktok' },
    { label: 'LinkedIn', handle: 'Rockson Djago', url: 'https://www.linkedin.com/in/rockson-djago-204969425', icon: 'linkedin' },
  ],
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

// ==========================================
// 1. BEFORE & AFTER TRANSFORMATION DATA
// ==========================================
export interface TransformationProject {
  id: string;
  name: string;
  location: string;
  category: 'Interior Design' | 'Civil Engineering' | 'Graphic Design' | 'Space Transformation' | 'Renovation' | 'Concept Development';
  filterGroup: 'INTERIOR' | 'ENGINEERING' | 'GRAPHIC DESIGN' | 'RENOVATION';
  description: string;
  servicesProvided: string[];
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  metrics?: { label: string; value: string }[];
}

export const BEFORE_AFTER_PROJECTS: TransformationProject[] = [
  {
    id: 'trans-1',
    name: 'North Ridge Executive Boardroom',
    location: 'North Ridge, Accra',
    category: 'Interior Design',
    filterGroup: 'INTERIOR',
    description: 'Conversion of an unfinished, echoing high-rise concrete shell with exposed wiring into an acoustically isolated executive boardroom featuring fluted walnut millwork and concealed ambient lighting.',
    servicesProvided: ['Acoustic Engineering', 'Custom Cabinetry', 'Turnkey Fit-Out', 'Smart Lighting'],
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1600&auto=format&fit=crop&q=80',
    beforeLabel: 'BEFORE: Unfinished High-Rise Shell',
    afterLabel: 'AFTER: DJAGO Turnkey Executive Boardroom',
    metrics: [
      { label: 'Area', value: '180 sqm' },
      { label: 'Turnaround', value: '8 Weeks' },
      { label: 'Acoustic Rating', value: 'NRC 0.85' }
    ]
  },
  {
    id: 'trans-2',
    name: 'Cantonments Minimalist Eco Villa',
    location: 'Cantonments, Accra',
    category: 'Civil Engineering',
    filterGroup: 'ENGINEERING',
    description: 'Progression from deep structural soil excavation, reinforced concrete foundation rebar cages, and site drainage to a breathtaking cantilevered minimalist tropical villa.',
    servicesProvided: ['BIM Structural Design', 'Foundation Earthworks', 'Post-Tensioned Concrete', 'Civil QA/QC'],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1600&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1614595737476-42487331b8a1?w=1600&auto=format&fit=crop&q=80',
    beforeLabel: 'BEFORE: Deep Foundation & Rebar Framework',
    afterLabel: 'AFTER: Delivered Cantilevered Minimalist Villa',
    metrics: [
      { label: 'Footprint', value: '650 sqm' },
      { label: 'Build Cycle', value: '14 Months' },
      { label: 'Concrete Core', value: '100% Verified' }
    ]
  },
  {
    id: 'trans-3',
    name: 'Tema Heavy Industrial Logistics Facility',
    location: 'Heavy Industrial Area, Tema',
    category: 'Renovation',
    filterGroup: 'RENOVATION',
    description: 'Transformation of a degraded, waterlogged unpaved brownfield yard into a heavy-duty 40-tonne axle rated logistics hub with precision fabricated portal frames and stormwater management.',
    servicesProvided: ['Subgrade Soil Stabilization', '40-Tonne Apron Pavement', 'Steel Portal Construction', 'Storm Drainage'],
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1600&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=1600&auto=format&fit=crop&q=80',
    beforeLabel: 'BEFORE: Waterlogged Brownfield Yard',
    afterLabel: 'AFTER: Precision Engineered Steel Logistics Hub',
    metrics: [
      { label: 'Covered Area', value: '3,200 sqm' },
      { label: 'Axle Load', value: '40 Tonnes' },
      { label: 'Drainage Flow', value: 'Zero Standing Water' }
    ]
  },
  {
    id: 'trans-4',
    name: 'Volta Energy Headquarters Rebrand & Environmental Signage',
    location: 'Airport City, Accra',
    category: 'Graphic Design',
    filterGroup: 'GRAPHIC DESIGN',
    description: 'Complete corporate visual identity overhaul and architectural wayfinding transition from outdated legacy signage to a contemporary, laser-cut backlit brass and sustainable environmental graphic system.',
    servicesProvided: ['Brand Architecture', 'Laser-Cut Backlit Signage', 'Wayfinding Systems', 'Spatial Brand Strategy'],
    beforeImage: 'https://images.unsplash.com/photo-1572945753563-8049567821c4?w=1600&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=1600&auto=format&fit=crop&q=80',
    beforeLabel: 'BEFORE: Fragmented Legacy Brand Assets',
    afterLabel: 'AFTER: Integrated Architectural Brand System',
    metrics: [
      { label: 'Touchpoints', value: '48 Systems' },
      { label: 'Material', value: 'Brushed Brass & Acrylic' },
      { label: 'Brand Unity', value: '100% Cohesive' }
    ]
  },
  {
    id: 'trans-5',
    name: 'Osu Creative Studio Adaptive Reuse',
    location: 'Osu Heritage District, Accra',
    category: 'Space Transformation',
    filterGroup: 'RENOVATION',
    description: 'Adaptive reuse of a dilapidated 1960s commercial warehouse into an open-plan multidisciplinary architecture and digital agency studio with preserved exposed brick and modern steel mezzanine.',
    servicesProvided: ['Adaptive Reuse Architecture', 'Structural Timber Retrofitting', 'Interior Spatial Ergonomics', 'Ambient Lighting'],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80',
    beforeLabel: 'BEFORE: Derelict Mid-Century Warehouse',
    afterLabel: 'AFTER: Transformed Collaborative Creative Studio',
    metrics: [
      { label: 'Area', value: '520 sqm' },
      { label: 'Heritage Preservation', value: 'Original Timber Restored' },
      { label: 'Natural Light', value: '+140% Increase' }
    ]
  },
  {
    id: 'trans-6',
    name: 'East Legon Contemporary Residence',
    location: 'East Legon, Accra',
    category: 'Concept Development',
    filterGroup: 'INTERIOR',
    description: 'From 3D CAD schematic sketches and wireframes to photorealistic turnkey interior realization, featuring imported terrazzo flooring and integrated acoustic ceiling baffles.',
    servicesProvided: ['3D Photorealistic Modeling', 'Material Specification', 'Turnkey Furnishing', 'Lighting Design'],
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1600&auto=format&fit=crop&q=80',
    beforeLabel: 'BEFORE: Architectural Concept Blueprint',
    afterLabel: 'AFTER: Delivered Luxury Living Space',
    metrics: [
      { label: 'Render Accuracy', value: '99% Match' },
      { label: 'Custom Millwork', value: 'Walnut & Terrazzo' },
      { label: 'Completion', value: 'On Schedule' }
    ]
  }
];

// ==========================================
// 2. GHANA MAP & REGIONAL DATA
// ==========================================
export interface GhanaCityMarker {
  id: string;
  name: string;
  region: string;
  coords: { x: number; y: number }; // SVG percentage
  latitude: string;
  longitude: string;
  projectCount: string;
  project: {
    name: string;
    type: string;
    thumbnail: string;
    description: string;
    year: string;
    disciplines: string[];
  };
}

export const GHANA_MAP_DATA = {
  heading: 'DESIGNING ACROSS GHANA',
  supportingText: 'From concept to construction, DJAGO creates design solutions that respond to place, people and purpose.',
  stats: [
    { label: 'PROJECTS ACROSS GHANA', value: '180+' },
    { label: 'CITIES', value: '8 Cities' },
    { label: 'DISCIPLINES', value: '5 Disciplines' },
    { label: 'YEARS OF EXPERIENCE', value: '12+ Years' }
  ],
  cities: [
    {
      id: 'accra',
      name: 'Accra',
      region: 'Greater Accra',
      coords: { x: 67, y: 81 },
      latitude: '5.6037° N',
      longitude: '0.1870° W',
      projectCount: '85+ Delivered',
      project: {
        name: 'Apex Financial Center & Ridge Penthouse',
        type: 'Commercial High-Rise & Luxury Interiors',
        thumbnail: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=800&auto=format&fit=crop&q=80',
        description: '14-storey reinforced concrete core framing, facade structural engineering, and executive acoustic interiors in North Ridge.',
        year: '2023 - 2024',
        disciplines: ['Civil Engineering', 'Interior Design', 'Branding']
      }
    },
    {
      id: 'kumasi',
      name: 'Kumasi',
      region: 'Ashanti Region',
      coords: { x: 44, y: 58 },
      latitude: '6.6885° N',
      longitude: '1.6244° W',
      projectCount: '28+ Delivered',
      project: {
        name: 'Ashanti STEM Research Facility',
        type: 'Higher Education & Structural Engineering',
        thumbnail: 'https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=800&auto=format&fit=crop&q=80',
        description: 'Multi-tiered structural engineering, research laboratories, and passive cooling architectural design along the KNUST corridor.',
        year: '2023',
        disciplines: ['Architecture', 'Civil Engineering']
      }
    },
    {
      id: 'takoradi',
      name: 'Takoradi',
      region: 'Western Region',
      coords: { x: 33, y: 86 },
      latitude: '4.8872° N',
      longitude: '1.7583° W',
      projectCount: '18+ Delivered',
      project: {
        name: 'Atlantic Maritime Logistics Complex',
        type: 'Industrial Civil & Marine Grade Infrastructure',
        thumbnail: 'https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=800&auto=format&fit=crop&q=80',
        description: 'Heavy portal frame warehousing, coastal soil remediation, and marine-grade reinforced concrete pavement for shipping logistics.',
        year: '2022',
        disciplines: ['Civil Engineering', 'Turnkey Construction']
      }
    },
    {
      id: 'cape-coast',
      name: 'Cape Coast',
      region: 'Central Region',
      coords: { x: 48, y: 84 },
      latitude: '5.1053° N',
      longitude: '1.2466° W',
      projectCount: '12+ Delivered',
      project: {
        name: 'Central Heritage Cultural Center',
        type: 'Civic Architecture & Heritage Preservation',
        thumbnail: 'https://images.unsplash.com/photo-1763485956292-7b9bed7b3c10?w=800&auto=format&fit=crop&q=80',
        description: 'Civic landmark uniting indigenous timber construction with climate-resilient open-air amphitheater design.',
        year: '2021',
        disciplines: ['Architecture', 'Branding & Wayfinding']
      }
    },
    {
      id: 'tamale',
      name: 'Tamale',
      region: 'Northern Region',
      coords: { x: 52, y: 26 },
      latitude: '9.4008° N',
      longitude: '0.8393° W',
      projectCount: '8+ Delivered',
      project: {
        name: 'Savannah Renewable Logistics Enclave',
        type: 'Sustainable Civic Infrastructure',
        thumbnail: 'https://images.unsplash.com/photo-1609605348579-3123e3d40eb8?w=800&auto=format&fit=crop&q=80',
        description: 'Passive solar shaded administrative facilities and sub-Sahelian water capture systems engineered for climate resilience.',
        year: '2024',
        disciplines: ['Civil Engineering', 'Architecture']
      }
    },
    {
      id: 'ho',
      name: 'Ho',
      region: 'Volta Region',
      coords: { x: 79, y: 64 },
      latitude: '6.6111° N',
      longitude: '0.4786° E',
      projectCount: '10+ Delivered',
      project: {
        name: 'Volta Mountain Eco-Resort & Spa',
        type: 'Hospitality Architecture & Interiors',
        thumbnail: 'https://images.unsplash.com/photo-1760072513367-55182245e76c?w=800&auto=format&fit=crop&q=80',
        description: 'Topographical stepped villa architecture nestled in mountain slopes with panoramic ridge-line glass facades.',
        year: '2023',
        disciplines: ['Architecture', 'Interior Design']
      }
    },
    {
      id: 'koforidua',
      name: 'Koforidua',
      region: 'Eastern Region',
      coords: { x: 62, y: 72 },
      latitude: '6.0784° N',
      longitude: '0.2592° W',
      projectCount: '11+ Delivered',
      project: {
        name: 'Eastern Wellness & Specialist Clinic',
        type: 'Healthcare Spatial Design & MEP',
        thumbnail: 'https://images.unsplash.com/photo-1763485956292-7b9bed7b3c10?w=800&auto=format&fit=crop&q=80',
        description: 'Acoustic medical consulting suites, sterile MEP ventilation planning, and human-centric natural lighting courtyards.',
        year: '2023',
        disciplines: ['Civil MEP', 'Interior Design']
      }
    },
    {
      id: 'sunyani',
      name: 'Sunyani',
      region: 'Bono Region',
      coords: { x: 30, y: 52 },
      latitude: '7.3400° N',
      longitude: '2.3268° W',
      projectCount: '8+ Delivered',
      project: {
        name: 'Bono Agro-Industrial Innovation Center',
        type: 'Agricultural Processing & Civil Works',
        thumbnail: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=80',
        description: 'Structural steel agro-processing warehouse, reinforced vehicular ramps, and environmental drainage infrastructure.',
        year: '2024',
        disciplines: ['Civil Engineering', 'Structural Design']
      }
    }
  ] as GhanaCityMarker[]
};

// ==========================================
// 3. WORKFLOW STAGES DATA (6 EXACT STAGES)
// ==========================================
export interface WorkflowStage {
  number: string;
  name: string;
  tagline: string;
  summary: string;
  inDepth: string;
  deliverables: string[];
  clientInvolvement: string[];
  relevantServices: string[];
  image: string;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    number: '01',
    name: 'DISCOVER',
    tagline: 'Understanding the client’s needs, site, goals, budget, and vision.',
    summary: 'Every enduring project starts with deep diagnostic listening. We analyze your spatial requirements, examine local site conditions, and benchmark financial parameters.',
    inDepth: 'During Discovery, our interdisciplinary leads (Architecture, Civil Engineering, Interiors, Branding) conduct concurrent stakeholder interviews and on-site assessments across Ghana. We examine topographical surveys, soil bearings, municipal zoning laws, sunlight paths, and brand touchpoints before a single line is drawn.',
    deliverables: [
      'Comprehensive Project Brief & Objectives Matrix',
      'Topographical & Geotechnical Site Feasibility Report',
      'Preliminary Budget & Cost-Bracket Estimation',
      'Regulatory & Municipal Zoning Clearance Strategy'
    ],
    clientInvolvement: [
      'Initial Discovery Visioning Workshop',
      'Sharing site title documents & municipal survey records',
      'Budget scope alignment & timeline confirmation'
    ],
    relevantServices: [
      'Site Feasibility & Soil Analysis',
      'Multidisciplinary Project Scoping',
      'Brand & Vision Workshop'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&auto=format&fit=crop&q=80'
  },
  {
    number: '02',
    name: 'DEFINE',
    tagline: 'Developing the project direction, requirements, concept, and strategy.',
    summary: 'Translating research into a decisive spatial and engineering framework with clear architectural massing, structural logic, and brand hierarchy.',
    inDepth: 'We synthesize the findings from Discovery into concrete spatial narratives. The architectural team establishes massing and orientation for optimal tropical airflow; the civil team models primary structural grids and foundation options; while the interior and brand designers craft color, materiality, and ergonomic guidelines.',
    deliverables: [
      'Design Concept Direction & Moodboards',
      'Spatial Relationship & Flow Adjacency Diagrams',
      'Structural System Feasibility Comparison (Steel vs Concrete)',
      'Brand Architecture & Signage Strategy Document'
    ],
    clientInvolvement: [
      'Review of 2-3 conceptual direction options',
      'Sign-off on spatial flow & programmatic zoning',
      'Selection of preferred architectural and interior design language'
    ],
    relevantServices: [
      'Conceptual Architecture',
      'Structural System Selection',
      'Spatial Workplace Strategy'
    ],
    image: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=1000&auto=format&fit=crop&q=80'
  },
  {
    number: '03',
    name: 'DESIGN',
    tagline: 'Creating drawings, concepts, 3D visualizations, graphics, layouts, material selections, and technical solutions.',
    summary: 'Bringing the vision into vivid reality with photorealistic 3D renderings, coordinated BIM models, structural frame calculations, and material swatch boards.',
    inDepth: 'This is where DJAGO’s multidisciplinary integration shines brightest. While our architects sculpt facades and spatial volumes, our civil engineers simultaneously run finite element load calculations in BIM to ensure aesthetic decisions are structurally sound from day one. Concurrently, our interior designers source luxury timbers, stones, and fixtures.',
    deliverables: [
      'Photorealistic 3D Exterior & Interior Architectural Renderings',
      'Architectural Floor Plans, Elevations & Sections (1:100 / 1:50)',
      'BIM 3D Integrated Coordinated Model (LOD 300)',
      'Material Finishes, Swatch Boards & Lighting Schedules'
    ],
    clientInvolvement: [
      'Interactive 3D design presentation & walkthrough',
      'Physical tactile review of material samples (timber, marble, textiles)',
      'Formal architectural & aesthetic milestone approval'
    ],
    relevantServices: [
      'Photorealistic 3D Architectural Visualizations',
      'Integrated BIM Modeling',
      'Bespoke Interior & Millwork Design'
    ],
    image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1000&auto=format&fit=crop&q=80'
  },
  {
    number: '04',
    name: 'DEVELOP',
    tagline: 'Refining the design and developing technical documentation and details.',
    summary: 'Engineering every junction, rebar schedule, mechanical duct, and millwork connection into contract-grade working drawings ready for statutory permits and tender.',
    inDepth: 'The approved design is advanced into millimeter-precise construction documentation. Our civil engineers produce full reinforcement bar-bending schedules (BBS), structural foundation calculations, and MEP coordinated drawings. Every custom cabinet, stair railing, and signage anchor is detailed to eliminate guesswork on the construction site.',
    deliverables: [
      'Statutory Building Permit Documentation (Local Municipal Authority)',
      'Detailed Structural Civil Engineering Drawings & Rebar Schedules',
      'Comprehensive Bill of Quantities (BOQ) & Tender Package',
      'Joinery, Millwork & Technical Fabrication Details'
    ],
    clientInvolvement: [
      'Review of Bill of Quantities (BOQ) & itemized cost breakdown',
      'Statutory permit application signing',
      'Approval of construction procurement and contractor schedule'
    ],
    relevantServices: [
      'Civil & Structural Engineering Calculations',
      'Bill of Quantities & Value Engineering',
      'Statutory Authority Permitting Support'
    ],
    image: 'https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=1000&auto=format&fit=crop&q=80'
  },
  {
    number: '05',
    name: 'DELIVER',
    tagline: 'Moving from approved design into production, construction, implementation, or final delivery.',
    summary: 'Translating blueprints into physical reality through turnkey construction management, structural quality assurance, and bespoke interior installation.',
    inDepth: 'DJAGO transitions to on-site project execution. Our resident civil engineers and site supervisors oversee excavation, concrete batching, rebar placement, and steel erection. Our interior craftspeople install custom hardwood slat baffles, marble surfaces, and integrated lighting systems under continuous quality audits.',
    deliverables: [
      'On-Site Civil Supervision & Weekly Progress Milestone Reports',
      'Material Batch Quality Certifications (Cube crush testing, steel tensile tests)',
      'Turnkey Structural Build & Architectural Finishes',
      'Complete Interior Fit-Out & Environmental Signage Installation'
    ],
    clientInvolvement: [
      'Bi-weekly or monthly on-site walkthroughs with lead engineers',
      'Milestone payment verifications upon QA sign-off',
      'Snag list joint walkthrough prior to final commissioning'
    ],
    relevantServices: [
      'Turnkey Construction Management',
      'On-Site Quality Assurance & Civil Audits',
      'Turnkey Fit-Out & Millwork Installation'
    ],
    image: 'https://images.unsplash.com/photo-1614595737476-42487331b8a1?w=1000&auto=format&fit=crop&q=80'
  },
  {
    number: '06',
    name: 'REVIEW',
    tagline: 'Evaluating the completed work and ensuring the final result meets the intended design objectives.',
    summary: 'Post-occupancy evaluation, comprehensive as-built documentation, facility handover, and long-term structural warranty support.',
    inDepth: 'Our relationship does not end at key handover. We perform rigorous post-occupancy acoustic, lighting, and HVAC airflow audits to verify that the space performs exactly as engineered. We hand over complete As-Built drawings, maintenance manuals for mechanical/electrical installations, and provide warranty support.',
    deliverables: [
      'Complete As-Built Architectural & Structural CAD/BIM Drawings',
      'Operation & Maintenance (O&M) Manuals for MEP Systems',
      'Certificate of Practical Completion & Statutory Occupancy Permits',
      'Defects Liability Period Warranty & Structural Guarantee'
    ],
    clientInvolvement: [
      'Official facility key handover and operational orientation',
      'Signing Certificate of Practical Completion',
      'Post-occupancy 90-day satisfaction review'
    ],
    relevantServices: [
      'Post-Occupancy Performance Audits',
      'As-Built Technical Documentation',
      'Ongoing Architectural & Structural Advisory'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop&q=80'
  }
];
