import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string().default('战略思考'),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default('5分钟'),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const cases = defineCollection({
  schema: z.object({
    title: z.string(),
    industry: z.string(),
    icon: z.string().default('🏢'),
    situation: z.string(),
    strategy: z.string(),
    result: z.string(),
    resultLabel: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

const videos = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.enum(['布道', '拆招', '论剑', '演练']),
    url: z.string().optional(),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles, cases, videos };
