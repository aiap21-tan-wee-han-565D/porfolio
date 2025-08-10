export const siteConfig = {
  name: "Your Name",
  title: "Data Science Portfolio",
  description: "Showcasing data science projects, machine learning models, and analytics insights",
  email: "your.email@example.com",
  
  // Personal Information
  personal: {
    name: "Your Name",
    tagline: "Data Scientist & Machine Learning Engineer",
    location: "Your Location",
    bio: "Passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. I love turning data into actionable insights.",
    resumeUrl: "/resume.pdf", // Optional: link to your resume
  },

  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername", // Optional
    email: "mailto:your.email@example.com",
  },

  // Skills Configuration
  skills: {
    languages: ["Python", "R", "SQL", "JavaScript"],
    frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    tools: ["Jupyter", "Docker", "Git", "AWS", "Tableau"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
  },

  // Navigation Menu
  navigation: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  // Project Categories for filtering
  projectCategories: [
    "Machine Learning",
    "Data Analysis",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Time Series",
    "Data Visualization",
  ],

  // SEO and Meta
  seo: {
    keywords: ["data science", "machine learning", "analytics", "python", "portfolio"],
    author: "Your Name",
    twitterHandle: "@yourusername", // Optional
  },
};