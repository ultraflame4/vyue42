import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "vyue42",
    description: "A collection of useful things for Vue.js",
    base: "/vyue42/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Features', link: '/features/index'}
        ],

        sidebar: [
            {
                text: "Getting Started",
                items: [
                    {text: "Installation", link: "/installation"},
                    {text: "Quick Start", link: "/quickstart"},
                ]
            },
            {
                text: "Features",
                link: "/features/index",
                items: [
                    {
                        text: "Directives",
                        items: [
                            {text: "v-stuck", link: "/features/v-stuck"}
                        ]
                    }
                ]
            },
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/ultraflame4/vyue42'}
        ]
    }
})
