export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'alfresco' | 'decking' | 'kitchens' | 'courtyards' | 'full-renovation';
  categoryLabel: string;
  image: string;
  shortDesc: string;
  details: {
    dimensions: string;
    duration: string;
    materials: string[];
    features: string[];
    challenge: string;
    solution: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  materials: string[];
  climateBenefit: string;
  idealFor: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  transformationHighlights: string[];
}

export interface Testimonial {
  id: string;
  client: string;
  suburb: string;
  projectType: string;
  quote: string;
  rating: number;
  completedDate: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  suburb: string;
  projectTypes: string[];
  budget: string;
  timeframe: string;
  description: string;
}
