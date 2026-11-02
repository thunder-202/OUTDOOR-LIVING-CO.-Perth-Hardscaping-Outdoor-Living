import { Project, ServiceItem, BeforeAfterPair, Testimonial } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_outdoor_living_1793643019005.jpg';
export const BEFORE_IMAGE = '/src/assets/images/before_after_before_1793643020830.jpg';
export const AFTER_IMAGE = '/src/assets/images/before_after_after_1793643019886.jpg';
export const COASTAL_IMAGE = '/src/assets/images/project_coastal_retreat_1793643021897.jpg';
export const KITCHEN_IMAGE = '/src/assets/images/project_outdoor_kitchen_1793643021754.jpg';
export const DECK_IMAGE = '/src/assets/images/project_timber_deck_1793643042494.jpg';
export const COURTYARD_IMAGE = '/src/assets/images/project_modern_courtyard_1793643043132.jpg';
export const PATIO_IMAGE = '/src/assets/images/project_pergola_patio_1793643042113.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'patio-construction',
    title: 'Patio Construction',
    tagline: 'Architectural alfresco structures engineered for the WA climate',
    description: 'Custom-designed patios incorporating insulated ceiling panels, concealed drainage, and architectural steel or timber framing that extend your indoor living footprint outdoors.',
    image: PATIO_IMAGE,
    materials: ['Insulated Colorbond roofing', 'Galvanized steel beams', 'Spotted gum rafters'],
    climateBenefit: 'Shields against intense Perth summer heat while maximizing winter northern light.',
    idealFor: 'Year-round dining, covered outdoor lounges, and seamless indoor-outdoor extensions.'
  },
  {
    id: 'timber-decking',
    title: 'Timber Decking',
    tagline: 'Sustainably sourced Australian hardwoods & premium composites',
    description: 'Precision-laid timber decks using kiln-dried Australian Jarrah, Spotted Gum, and Blackbutt or high-performance marine composite boards with concealed stainless steel clip systems.',
    image: DECK_IMAGE,
    materials: ['Class 1 Australian Spotted Gum', 'WA Jarrah', 'Concealed Camo fasteners'],
    climateBenefit: 'Natural thermal comfort underfoot with UV-resistant oil finishes suited for coastal salt air.',
    idealFor: 'Pool surrounds, multi-level sloping blocks, and sunken alfresco seating.'
  },
  {
    id: 'pergola-installation',
    title: 'Pergola Installation',
    tagline: 'Motorized louvered roofs & bespoke architectural shade',
    description: 'Contemporary pergolas with motorized aluminum louvers that pivot 180 degrees at the touch of a button or automatically seal when rain sensors detect rainfall.',
    image: HERO_IMAGE,
    materials: ['Powder-coated marine-grade aluminum', 'Integrated LED extrusions', 'Rain sensor actuators'],
    climateBenefit: 'Full control of ventilation and shading throughout extreme Perth temperature shifts.',
    idealFor: 'High-exposure backyards requiring dynamic sun protection and twilight ambiance.'
  },
  {
    id: 'outdoor-kitchens',
    title: 'Outdoor Kitchens',
    tagline: 'Culinary alfresco stations with stone benchtops & gas BBQ hubs',
    description: 'Fully plumbed outdoor culinary stations featuring engineered quartz or honed granite benchtops, 316-grade stainless cabinetry, wood-fired pizza ovens, and integrated drinks fridges.',
    image: KITCHEN_IMAGE,
    materials: ['Honed Granite & Dekton stone', '316 Marine Stainless Steel', 'Gas & plumbing integration'],
    climateBenefit: 'Non-porous weather-resistant surfaces that withstand grease, red wine, and coastal humidity.',
    idealFor: 'Weekend BBQ hosts, family gatherings, and gourmet alfresco dining.'
  },
  {
    id: 'retaining-walls',
    title: 'Retaining Walls',
    tagline: 'Engineered limestone blocks, off-form concrete & terracing',
    description: 'Structural and decorative retaining solutions built to manage sloping Perth blocks, establish multi-tiered garden platforms, and add architectural texture to perimeter boundaries.',
    image: COURTYARD_IMAGE,
    materials: ['Natural Tamala WA Limestone', 'Textured charcoal render', 'Corten steel planter borders'],
    climateBenefit: 'Prevents soil erosion in sandy Perth soils and provides exceptional thermal mass.',
    idealFor: 'Terraced gardens, level lawn creation, and structural property boundary definitions.'
  },
  {
    id: 'stone-paving',
    title: 'Stone Paving',
    tagline: 'Honed travertine, bluestone & natural Perth limestone',
    description: 'Precision-cut natural stone paving laid over engineered sub-bases. We source cool-touch silver travertine, exfoliated granite, and artisanal stone for durable poolside elegance.',
    image: COASTAL_IMAGE,
    materials: ['Silver Travertine', 'Exfoliated Perth Granite', 'Permeable bedding mortar'],
    climateBenefit: 'Remains comfortable to walk on barefoot during 38°C Perth summer afternoons.',
    idealFor: 'Pool concourses, alfresco flooring, garden walkways, and private courtyards.'
  },
  {
    id: 'garden-lighting',
    title: 'Garden Lighting',
    tagline: 'Low-voltage 12V architectural lighting & tree uplighting',
    description: 'Subtle, glare-free outdoor illumination designed to reveal garden textures after sunset. We install zoned brass and copper LED fittings with smartphone app control.',
    image: HERO_IMAGE,
    materials: ['Solid aged brass fixtures', 'Warm 2700K low-voltage LEDs', 'Smart multi-zone controllers'],
    climateBenefit: 'Sealed IP68 waterproof ratings for reticulation spray and seasonal storms.',
    idealFor: 'Highlighting architectural foliage, safe stair illumination, and evening entertaining.'
  },
  {
    id: 'backyard-renovations',
    title: 'Backyard Renovations',
    tagline: 'Complete end-to-end design & turnkey site overhauls',
    description: 'Comprehensive property transformations from demolition of tired concrete and dead grass to fully integrated outdoor sanctuaries incorporating pools, pavilions, and native greenery.',
    image: AFTER_IMAGE,
    materials: ['Full turnkey coordination', 'Site engineering & council approvals', 'Integrated irrigation'],
    climateBenefit: 'Drought-tolerant Western Australian plantings paired with smart water-wise drip systems.',
    idealFor: 'Homeowners undertaking major house renovations or seeking a total lifestyle upgrade.'
  },
  {
    id: 'outdoor-entertainment-areas',
    title: 'Outdoor Entertainment Areas',
    tagline: 'Fire pits, sunken lounges, and resort-grade social zones',
    description: 'Destination-style backyard zones built around custom fire tables, built-in conversation pits, bench seating with weatherproof upholstery, and acoustic garden zoning.',
    image: COASTAL_IMAGE,
    materials: ['Custom cast concrete fire bowls', 'Sunbrella marine-grade textiles', 'Hardwood benching'],
    climateBenefit: 'Built-in wind protection and ambient heat retention for cool coastal autumn evenings.',
    idealFor: 'Social gatherings, family movie nights under the stars, and sunset wine tastings.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'modern-entertainer',
    title: 'The Modern Entertainer',
    location: 'City Beach, WA',
    category: 'alfresco',
    categoryLabel: 'Alfresco & Lounge',
    image: HERO_IMAGE,
    shortDesc: 'A panoramic multi-zone alfresco pavilion with timber decking, louvered roof, built-in gas fire table, and custom outdoor kitchen overlooking the Indian Ocean.',
    details: {
      dimensions: '14m x 9m (126m² total footprint)',
      duration: '7 Weeks Completion',
      materials: [
        'Spotted Gum 130mm hardwood decking',
        'Motorized powder-coated aluminum pergola',
        'Honed Tamala limestone retaining walls',
        'Integrated 2700K warm LED light strips'
      ],
      features: [
        'Sunken conversation lounge with custom fire table',
        'Outdoor kitchen island with stainless gas BBQ & bar seating',
        'Frameless glass balustrade preserving sunset views',
        'Architectural planters with mature olive & frangipani trees'
      ],
      challenge: 'Steeply sloping sandy block exposed to harsh coastal westerly winds.',
      solution: 'Engineered multi-level terracing with sheltered sunken seating and aerodynamic louvered ceiling.'
    }
  },
  {
    id: 'coastal-retreat',
    title: 'Coastal Backyard Retreat',
    location: 'Cottesloe, WA',
    category: 'courtyards',
    categoryLabel: 'Coastal & Poolside',
    image: COASTAL_IMAGE,
    shortDesc: 'A serene Mediterranean-inspired coastal sanctuary featuring honed travertine paving, bleached timber pergola, sunken conversation pit, and native coastal landscaping.',
    details: {
      dimensions: '16m x 8m (128m² footprint)',
      duration: '8 Weeks Completion',
      materials: [
        'Silver honed travertine paving',
        'Limewashed timber pergola beams',
        'Corten steel wood-burning fire bowl',
        'Drought-tolerant coastal succulents & agaves'
      ],
      features: [
        'Sunken U-shaped masonry lounge pit with linen cushions',
        'Flush travertine connection to lap pool coping',
        'Dimmable bistro string lights and tree uplights',
        'Outdoor hot/cold freshwater shower post-swim'
      ],
      challenge: 'Managing high salt spray and intense reflected glare from the nearby ocean.',
      solution: 'Selected low-sheen unfilled travertine and salt-resistant marine finishes throughout.'
    }
  },
  {
    id: 'timber-deck-project',
    title: 'The Timber Deck Project',
    location: 'Applecross, WA',
    category: 'decking',
    categoryLabel: 'Hardwood Decking',
    image: DECK_IMAGE,
    shortDesc: 'Multi-level Spotted Gum timber decking wrapping an existing plunge pool with integrated step illumination, custom daybeds, and lush native planting.',
    details: {
      dimensions: '11m x 10m (110m² footprint)',
      duration: '5 Weeks Completion',
      materials: [
        'Kiln-dried Australian Spotted Gum',
        'Concealed Camo edge-fastener system',
        'Frameless glass pool fence with marine spigots',
        'Recessed waterproof IP68 stair riser LED strips'
      ],
      features: [
        'Multi-tiered level changes creating distinct sun and lounge zones',
        'Flush coping line meeting the plunge pool water surface',
        'Concealed pool equipment storage hatch with hydraulic struts',
        'Kangaroo paw and grass tree architectural garden borders'
      ],
      challenge: 'Seamlessly concealing pool pump machinery while keeping step geometry code-compliant.',
      solution: 'Engineered a sub-frame deck cavity with sound-dampened access doors matching deck board alignment.'
    }
  },
  {
    id: 'contemporary-courtyard',
    title: 'Contemporary Courtyard',
    location: 'Subiaco, WA',
    category: 'courtyards',
    categoryLabel: 'Urban Courtyard',
    image: COURTYARD_IMAGE,
    shortDesc: 'An intimate urban courtyard retreat featuring a textured charcoal feature wall with a sheer water blade, floating cedar bench, and mature olive trees.',
    details: {
      dimensions: '8m x 6m (48m² footprint)',
      duration: '4 Weeks Completion',
      materials: [
        'Honed porcelain & limestone large format tiles',
        'Textured charcoal rendered acoustic feature wall',
        'Cantilevered western red cedar bench seat',
        'Artisanal terracotta urns with mature dwarf olive trees'
      ],
      features: [
        'Sheer water descent fountain providing white noise from urban traffic',
        'Warm linear LED glow under floating timber bench',
        'Low-water rosemary and lavender sensory borders',
        'Hidden perimeter drainage channels'
      ],
      challenge: 'A compact 48m² space bounded on three sides by neighbor boundary walls.',
      solution: 'Used vertical spatial layering, water acoustics, and large-format pavers to visually double the perceived width.'
    }
  },
  {
    id: 'outdoor-kitchen-haven',
    title: 'The Outdoor Kitchen & Bar',
    location: 'Dalkeith, WA',
    category: 'kitchens',
    categoryLabel: 'Outdoor Kitchen',
    image: KITCHEN_IMAGE,
    shortDesc: 'A high-end alfresco culinary destination with honed dark granite benchtops, wood-fired pizza oven, integrated stainless BBQ, and cedar slat feature ceiling.',
    details: {
      dimensions: '12m x 7m (84m² footprint)',
      duration: '6 Weeks Completion',
      materials: [
        'Honed black Zimbabwe granite benchtops',
        'Western Red Cedar ceiling lining boards',
        'Marine-grade 316 stainless cabinetry and hood',
        'Refractory brick wood-fired pizza oven'
      ],
      features: [
        'Commercial-grade outdoor rangehood and extractor',
        'Integrated beverage cooler and undercounter ice maker',
        'Seating for 10 along solid timber dining table',
        'Warm industrial pendant lighting and strip heaters'
      ],
      challenge: 'Managing high cooking heat, smoke extraction, and grease under a covered ceiling.',
      solution: 'Engineered high-flow ducted commercial extractor with heat-resistant calcium silicate ceiling insulation.'
    }
  },
  {
    id: 'garden-patio-escape',
    title: 'The Garden & Fireplace Escape',
    location: 'Mount Lawley, WA',
    category: 'alfresco',
    categoryLabel: 'Patio & Fireplace',
    image: PATIO_IMAGE,
    shortDesc: 'An architectural louvered patio pavilion featuring a dry-stacked natural limestone outdoor fireplace, travertine dining terrace, and manicured surrounding lawn.',
    details: {
      dimensions: '13m x 8m (104m² footprint)',
      duration: '7 Weeks Completion',
      materials: [
        'Dry-stacked natural limestone masonry',
        'Motorized powder-coated louver system',
        'Light silver travertine pavers in French pattern',
        'Linear stainless steel fireplace insert'
      ],
      features: [
        'Built-in log store niches flank the central hearth',
        'Overhead infrared radiant heaters for crisp winter evenings',
        'Concealed automatic blinds for wind blocking',
        'Seamless transition onto Sir Walter buffalo lawn'
      ],
      challenge: 'Heritage precinct zoning requiring traditional stone texture with contemporary engineering.',
      solution: 'Hand-chiselled local stone cladding married to a sleek minimalist aluminum structural frame.'
    }
  }
];

export const BEFORE_AFTER_STORIES: BeforeAfterPair[] = [
  {
    id: 'suburban-to-sanctuary',
    title: 'Suburban Wasteland to Resort Alfresco',
    location: 'City Beach, WA',
    beforeImage: BEFORE_IMAGE,
    afterImage: AFTER_IMAGE,
    description: 'An unloved 1980s backyard dominated by cracked concrete, dead weed-infested grass, and rusted fences transformed into a resort-grade entertainer with a louvered pergola, hardwood deck, and pool concourse.',
    transformationHighlights: [
      'Demolished 80m² of fractured concrete slab and cleared sandy rubble',
      'Engineered an elevated Spotted Gum hardwood deck connecting to kitchen sliding doors',
      'Installed an automated motorized louvered roof with integrated warm LED lighting',
      'Added a modern alfresco bar, travertine pool surrounds, and Sir Walter buffalo turf'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Initial Consultation',
    subtitle: 'Lifestyle & Vision Mapping',
    desc: 'We meet at your property to listen to your ideas, review how you love to entertain, examine orientation and breezes, and outline realistic scope and budget parameters.',
    duration: 'Week 1'
  },
  {
    step: '02',
    title: 'Site Assessment',
    subtitle: 'Technical Survey & Soil Analysis',
    desc: 'Our engineers conduct boundary checks, soil tests in Perth sandy soils, assess drainage levels, and evaluate council shire requirements (e.g. City of Nedlands, Melville, Stirling).',
    duration: 'Week 2'
  },
  {
    step: '03',
    title: 'Design and Planning',
    subtitle: '3D Photorealistic Architectural Renders',
    desc: 'You receive exact 3D models and walkthroughs of your future space, along with physical samples of stone, timber, lighting fixtures, and a transparent fixed-price contract.',
    duration: 'Weeks 3-4'
  },
  {
    step: '04',
    title: 'Construction and Installation',
    subtitle: 'Master Craftsmanship & Project Management',
    desc: 'Our licensed carpenters, stonemasons, and certified electricians execute the build. A dedicated site supervisor provides weekly video and photo updates with clean daily job site maintenance.',
    duration: 'Weeks 5-10'
  },
  {
    step: '05',
    title: 'Final Transformation',
    subtitle: 'Commissioning & Comprehensive Handover',
    desc: 'We commission lighting systems, seal all natural stone and timber surfaces, establish the garden, and present your maintenance manual and 10-year structural warranty.',
    duration: 'Completion'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    client: 'Marcus & Elena Vance',
    suburb: 'Cottesloe, WA',
    projectType: 'Coastal Alfresco Pavilion & Pool Deck',
    quote: 'Outdoor Living Co. completely revolutionized how our family spends weekends. The Spotted Gum deck and louvered pergola feel like an organic extension of our living room. Their attention to detail with the limestone walls and hidden lighting is world class.',
    rating: 5,
    completedDate: 'Completed November 2025'
  },
  {
    id: 't2',
    client: 'Sarah & Liam Jenkins',
    suburb: 'Subiaco, WA',
    projectType: 'Urban Courtyard & Water Feature',
    quote: 'We had a tight 50m² block that felt unusable during Perth summer days. The team engineered a shaded oasis with a sheer water blade and floating bench that feels twice as big. The project finished right on the promised four-week timeline.',
    rating: 5,
    completedDate: 'Completed January 2026'
  },
  {
    id: 't3',
    client: 'David & Claire Thornton',
    suburb: 'Dalkeith, WA',
    projectType: 'Outdoor Kitchen & Dining Pavilion',
    quote: 'From council permit lodgement through to the final coat of timber sealant, the communication was flawless. Our outdoor kitchen with the pizza oven has already hosted dozens of dinner parties. Truly exceptional craftsmanship.',
    rating: 5,
    completedDate: 'Completed March 2026'
  }
];

export const PERTH_SUBURBS = [
  'City Beach',
  'Cottesloe',
  'Dalkeith',
  'Nedlands',
  'Subiaco',
  'Claremont',
  'Mosman Park',
  'Swanbourne',
  'Applecross',
  'South Perth',
  'Mount Lawley',
  'Fremantle',
  'Floreat',
  'Sorrento',
  'Hillarys',
  'Karrinyup',
  'Other Perth Suburb'
];

export const MATERIAL_SHOWCASE = [
  {
    name: 'Natural WA Tamala Limestone',
    type: 'Hardscaping & Retaining',
    origin: 'Locally quarried Western Australia',
    qualities: 'Thermal acoustic dampening, classic Perth architectural character, weathered patina.'
  },
  {
    name: 'Class 1 Australian Spotted Gum',
    type: 'Architectural Decking & Louvers',
    origin: 'Sustainably certified Australian mills',
    qualities: 'Dense hardwood fire-rated to BAL-29, warm interlocked grain, extreme longevity.'
  },
  {
    name: 'Silver Honed Travertine',
    type: 'Paving & Pool Concourse',
    origin: 'High-density natural quarried stone',
    qualities: 'Heat-reflective cool touch under bare feet, non-slip honed finish, non-porous.'
  },
  {
    name: 'Marine-Grade 316 Stainless & Aluminum',
    type: 'Pergola Framing & Kitchen Hardware',
    origin: 'Perth fabrication with AkzoNobel powder coating',
    qualities: '100% rustproof against Indian Ocean salt spray, UV-stabilized, zero maintenance.'
  }
];
