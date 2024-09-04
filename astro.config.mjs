import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon()],
    markdown: {
        shikiConfig: {
            // Choose from Shiki's built-in themes (or add your own)
            // https://shiki.style/themes
            theme: 'solarized-light',
            // Alternatively, provide multiple themes
            // See note below for using dual light/dark themes
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            // Disable the default colors
            // https://shiki.style/guide/dual-themes#without-default-color
            // (Added in v4.12.0)
            defaultColor: false,
            // Add custom languages
            // Note: Shiki has countless langs built-in, including .astro!
            // https://shiki.style/languages
            langs: ['csharp'],
            // Enable word wrap to prevent horizontal scrolling
            wrap: false,
            // Add custom transformers: https://shiki.style/guide/transformers
            // Find common transformers: https://shiki.style/packages/transformers
            transformers: [],
        },
    },
})
