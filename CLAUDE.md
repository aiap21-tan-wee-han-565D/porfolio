# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev          # Start development server with Turbopack at http://localhost:3000
npm run build        # Build for production (generates static export in 'out/' directory)
npm run start        # Start production server (only works without static export)
npm run lint         # Run ESLint checks

# Key files to validate build
npm run build        # Must pass before deployment - configured for static export
```

## Architecture Overview

This is a **data science portfolio website** built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. The architecture is designed for easy content management through configuration files rather than a CMS.

### Configuration-Driven Content System

The site uses a two-tier content system:
1. **`config/site.config.js`** - Central configuration for personal info, skills, social links, navigation, SEO, and project categories
2. **`config/projects.json`** - Array of project metadata (titles, descriptions, links, categories, featured status)
3. **`content/projects/*.md`** - Optional detailed project pages with YAML frontmatter + markdown content

### Key Data Flow

1. **Homepage** (`src/app/page.tsx`) reads from `site.config.js` and filters `projects.json` for featured projects
2. **Projects Gallery** (`src/app/projects/page.tsx`) implements client-side filtering/search of `projects.json`
3. **Project Detail Pages** (`src/app/projects/[slug]/page.tsx`) combine `projects.json` metadata with markdown content from `content/projects/`
4. **Static Generation** - All content is pre-rendered at build time using `generateStaticParams()`

### Markdown Processing

The `src/lib/markdown.ts` module handles:
- Reading markdown files with YAML frontmatter using `gray-matter`
- Converting markdown to HTML using `marked`
- Generating static params for dynamic routes
- Related projects logic based on categories

### Component Architecture

- **`src/components/Layout.tsx`** - Site-wide layout with header/footer, reads from `site.config.js`
- **`src/components/ProjectCard.tsx`** - Reusable project preview cards used on homepage and projects page
- All pages are in `src/app/` following Next.js App Router conventions

## Configuration Management

### Adding New Projects
1. Add metadata entry to `config/projects.json` with required fields (id, title, description, category, tags, image, featured, date, slug)
2. Optionally create detailed markdown file in `content/projects/{slug}.md`
3. Add project image to `public/images/projects/`

### Personal Information Updates
All personal data is centralized in `config/site.config.js`:
- Personal details, bio, tagline, location
- Social media links
- Skills categorized by type (languages, frameworks, tools, databases)
- Navigation menu items
- Project categories for filtering
- SEO metadata

### Static Export Configuration
The site is configured for static export in `next.config.js`:
- `output: 'export'` - Generates static HTML/CSS/JS
- `images.unoptimized: true` - Required for static hosting
- `trailingSlash: true` - Ensures proper routing on static hosts

## TypeScript Integration

Type definitions in `types/index.ts` cover:
- `Project` interface matching `projects.json` structure
- `ProjectMetadata` for markdown frontmatter
- `SiteConfig` for configuration file structure
- `ContactForm` for contact form state

## Important Notes

- **Static Export**: The site builds to static files in `out/` directory, ready for deployment to any static host
- **Dynamic Routes**: Project detail pages use `generateStaticParams()` to pre-render all project pages
- **Image Handling**: All images must be placed in `public/` directory and referenced with absolute paths starting with `/`
- **Async Params**: In Next.js 15, route params are async and must be awaited: `const { slug } = await params`