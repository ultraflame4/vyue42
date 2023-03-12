import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "vyue42",
    description: "A collection of useful things for Vue.js",
    base:"/docs/",
    outDir:"../public/docs/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: "Features",
                link: "/features/index",
                items:[
                    {
                        text: "Directives",
                        items:[
                            {text:"v-stuck",link:"/features/v-stuck"}
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
