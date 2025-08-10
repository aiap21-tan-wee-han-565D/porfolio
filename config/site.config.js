export const siteConfig = {
  name: "Tan Wee Han's Portfolio",
  title: "Data Science Portfolio",
  description: "Showcasing data science projects, machine learning models, and analytics insights",
  email: "weehan@live.com.sg",
  
  // Personal Information
  personal: {
    name: "Tan Wee Han",
    tagline: "Data Scientist & Machine Learning Engineer",
    taglines: [
      "Data Scientist & ML Engineer",
      "Analytics Expert",
      "AI Enthusiast",
      "Problem Solver"
    ],
    location: "Your Location",
    bio: "Data scientist with a mastery in machine learning and statistics, blending deep technical skills with real-world business impact.",
    profileImage: "/images/profile.jpg", // Path to your profile image
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

  // Statistics for hero section
  stats: {
    experience: { value: 3, suffix: "+", label: "Years Experience" },
    projects: { value: 15, suffix: "+", label: "Projects Completed" },
    technologies: { value: 10, suffix: "+", label: "Technologies" },
    departments: { value: 5, suffix: "", label: "Departments served with Analytics" }
  },

  // Animation settings
  animations: {
    enableParticles: true,
    typingSpeed: 50,
    typingPause: 1500,
    reduceMotion: false // Set to true to disable animations for accessibility
  },

  // SEO and Meta
  seo: {
    keywords: ["data science", "machine learning", "analytics", "python", "portfolio"],
    author: "Tan Wee Han",
    twitterHandle: "@weehan299", // Optional
  },
};