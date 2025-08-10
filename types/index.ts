export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  notebook?: string;
  featured: boolean;
  date: string;
  slug: string;
}

export interface ProjectMetadata {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  notebook?: string;
  featured: boolean;
  date: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  personal: {
    name: string;
    tagline: string;
    location: string;
    bio: string;
    resumeUrl?: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
  };
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    databases: string[];
  };
  navigation: {
    name: string;
    href: string;
  }[];
  projectCategories: string[];
  seo: {
    keywords: string[];
    author: string;
    twitterHandle?: string;
  };
}