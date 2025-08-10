# Portfolio Setup Guide

Follow these steps to customize your data science portfolio:

## 1. Personal Information

Edit `config/site.config.js`:

```javascript
export const siteConfig = {
  name: "Your Name",                    // Update with your name
  title: "Data Science Portfolio",      // Update site title
  email: "your.email@example.com",      // Update your email
  
  personal: {
    name: "Your Name",                   // Your display name
    tagline: "Data Scientist & ML Engineer", // Your professional tagline
    location: "Your Location",           // Your location
    bio: "Your professional bio...",     // Brief bio about yourself
    resumeUrl: "/resume.pdf",           // Optional: link to resume
  },

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername", 
    twitter: "https://twitter.com/yourusername", // Optional
    email: "mailto:your.email@example.com",
  },

  skills: {
    languages: ["Python", "R", "SQL", "JavaScript"],    // Update your skills
    frameworks: ["TensorFlow", "PyTorch", "Scikit-learn"],
    tools: ["Jupyter", "Docker", "Git", "AWS"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
  },
};
```

## 2. Add Your Projects

### Option A: Update existing projects in `config/projects.json`

```json
[
  {
    "id": "your-project-id",
    "title": "Your Project Title",
    "description": "Brief description of your project",
    "category": "Machine Learning",
    "tags": ["Python", "Scikit-learn", "Pandas"],
    "image": "/images/projects/your-project.jpg",
    "github": "https://github.com/yourusername/your-project",
    "demo": "https://your-demo-link.com", 
    "notebook": "https://github.com/yourusername/your-project/blob/main/notebook.ipynb",
    "featured": true,
    "date": "2024-01-15",
    "slug": "your-project-slug"
  }
]
```

### Option B: Create detailed project pages

1. Create a markdown file in `content/projects/your-project-slug.md`:

```markdown
---
title: "Your Project Title"
description: "Brief description"
category: "Machine Learning"
tags: ["Python", "TensorFlow"]
image: "/images/projects/your-project.jpg"
github: "https://github.com/yourusername/your-project"
featured: true
date: "2024-01-15"
---

# Your Project Title

Detailed description of your project...

## Overview
What problem does this solve?

## Technologies Used
- Python
- TensorFlow
- Pandas

## Results
Key findings and metrics...
```

## 3. Add Project Images

1. Create project images (recommended size: 800x600px)
2. Save them in `public/images/projects/`
3. Update the `image` path in your project configuration

## 4. Customize Categories

In `config/site.config.js`, update `projectCategories`:

```javascript
projectCategories: [
  "Machine Learning",
  "Data Analysis", 
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Time Series",
  "Data Visualization",
  // Add your own categories
],
```

## 5. Run Your Portfolio

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 6. Deploy

### Quick Deploy to Vercel:
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Build for static hosting:
```bash
npm run build
# Upload the 'out' directory to your host
```

## Common Customizations

### Change Color Scheme
Edit the Tailwind classes in components to change colors:
- `bg-blue-600` → `bg-green-600` (change primary color)
- `text-blue-600` → `text-green-600`

### Add New Sections
1. Create new components in `src/components/`
2. Import and use in page files
3. Add navigation links in `config/site.config.js`

### Modify Layout
Edit `src/components/Layout.tsx` to change header/footer structure.

## Troubleshooting

**Images not loading?**
- Ensure images are in `public/images/projects/`
- Check file names match exactly in configuration
- Use forward slashes in paths: `/images/projects/file.jpg`

**Build errors?**
- Run `npm run build` to check for TypeScript errors
- Ensure all required fields are filled in configurations
- Check that all referenced files exist

**Deployment issues?**
- For static hosting, ensure `output: 'export'` in `next.config.js`
- For Vercel, remove the export configuration

Need help? Check the main README.md for more details!