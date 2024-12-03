export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: process.env.NODE_ENV !== 'production' },
    modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/fonts'],
    css: ['~/assets/css/global.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    fonts: {
        families: [{ name: 'IBM Plex Sans', provider: 'google', weights: [300, 400, 500, 600] }],
    },
})
