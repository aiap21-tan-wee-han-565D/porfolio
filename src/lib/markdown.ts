import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { ProjectMetadata } from '../../types';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  
  return fs.readdirSync(projectsDirectory)
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.md$/, ''));
}

export function getProjectBySlug(slug: string): {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
} | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      metadata: data as ProjectMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export function getAllProjects(): Array<{
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}> {
  const slugs = getProjectSlugs();
  return slugs
    .map(slug => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => project !== null)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
}

export async function markdownToHtml(markdown: string): Promise<string> {
  return marked(markdown);
}

export function getRelatedProjects(currentSlug: string, category: string, limit: number = 3): Array<{
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}> {
  return getAllProjects()
    .filter(project => 
      project.slug !== currentSlug && 
      project.metadata.category === category
    )
    .slice(0, limit);
}