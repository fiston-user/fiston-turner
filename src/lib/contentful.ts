import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export interface BlogPostFields {
  title: string;
  content: string;
  author: string;
  slug: string;
}

export interface ProjectFields {
  title: string;
  description: string;
  slug: string;
}

async function getEntries(contentType: string, options = {}): Promise<any[]> {
  try {
    const response = await client.getEntries({
      content_type: contentType,
      ...options,
    })
    return response.items
  } catch (error) {
    console.error(`Error fetching entries for content type "${contentType}":`, error)
    return []
  }
}

export async function getProjects(): Promise<any[]> {
  return getEntries('project')
}

export async function getProject(slug: string): Promise<any | undefined> {
  const items = await getEntries('project', {
    'fields.slug': slug,
    limit: 1,
  })
  return items[0]
}

export async function getBlogPosts(): Promise<any[]> {
  return getEntries('blogPost', {
    order: ['-sys.createdAt'],
  })
}

export async function getBlogPost(slug: string): Promise<any | undefined> {
  const items = await getEntries('blogPost', {
    'fields.slug': slug,
    limit: 1,
  })
  return items[0]
}