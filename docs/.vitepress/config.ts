import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "vyue42",
    description: "A collection of useful things for Vue.js",
    base: "/vyue42/",
    cleanUrls:true,
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
                            {text: "v-stuck", link: "/features/v-stuck"},
                            {text: "v-iratio", link: "/features/v-iratio"}
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/ultraflame4/vyue42'}
        ],
        footer:{
            message:'Released under the <a href="https://github.com/ultraflame4/vyue42/blob/main/LICENSE">MIT License.<a/>',
            copyright:"Copyright © 2023 ultr42 | Created by <a href='https://ultraflame4.github.io'>ultraflame4<a/>"
        }
    }
})
