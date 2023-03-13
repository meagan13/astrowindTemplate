import { z, defineCollection } from 'astro:content';

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    video: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),

    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

const profile = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),

    draft: z.boolean().optional(),

    quote: z.string().optional(),
    category: z.string().optional(),
  }),
});

// The name of the collection must match the name of the folder in the /src/content/collections/ directory.
export const collections = {
  'post': post,
  'case-study': post,
  'team': profile,
};
