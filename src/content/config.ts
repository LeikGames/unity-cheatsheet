import { defineCollection } from 'astro:content'

export const collections = {
    topics: defineCollection({
        type: 'content',
    }),
}
