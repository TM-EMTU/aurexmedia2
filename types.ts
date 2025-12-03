export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  stats: string;
  image: string;
  videoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}
