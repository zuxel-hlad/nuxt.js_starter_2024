import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: false,
    modules: ['@nuxt/eslint', 'nuxt-marquee'],
    app: {
        pageTransition: { name: 'slide', mode: 'out-in' },
    },
    css: ['~/assets/css/global.css', '~/assets/css/font/GrtskGiga.css'],
    vite: {
        plugins: [tailwindcss()],
    },
})
