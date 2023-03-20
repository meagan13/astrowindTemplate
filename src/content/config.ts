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

    draft: z.boolean().optional(),

    quote: z.string().optional(),
    category: z.string().optional(),
  }),
});

const packages = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    description1: z.string().optional(),
    description2: z.string().optional(),
    button: z.string().optional(),
    video: z.string().optional(),
    vidtype: z.string().optional(),
    bgImage: z.string().optional(),
    bgImageAlt: z.string().optional(),
    benefits: z.string().optional(),
    rates: z.string().optional(),
    services: z.string().optional(),
    image: z.string().optional(),
    alt: z.string().optional(),
    draft: z.boolean().optional(),
    benefitIcons: z.array(z.string()).optional(),
    benefitIconAlts: z.array(z.string()).optional(),
    benefitTitles: z.array(z.string()).optional(),
    benefitDescriptions: z.array(z.string()).optional(),
    benefitTitleDescriptionOld: z.array(z.string()).optional(),
    benefitTitleDescription: z.array(z.array(
      z.string().optional(),
      z.string().optional(),
    )).optional(), 
    includedServices: z.array(z.string()).optional(),
    servicesImage: z.string().optional(),
    servicesImageAlt: z.string().optional(),
    servicesColor: z.string().optional(),
    // testListsObject: z.object({
    //   title: z.array(z.string()).optional(),
    //   describe: z.array(z.string()).optional(),
    // }).optional(),
  }),
});

// The name of the collection must match the name of the folder in the /src/content/collections/ directory.
export const collections = {
  'post': post,
  'case-study': post,
  'team': profile,
  'packages': packages,
};
