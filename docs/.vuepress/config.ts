import { defineUserConfig } from "@vuepress/cli";

import theme from "./themeConfig";
let basePath = "/cg-tutor/";
import searchPlugin from "vuepress2-plugin-full-text-search";
export default defineUserConfig({
    base: "/cg-tutor/",
    dest: "./dist",
    locales: {
        "/": {
            // 设置正在使用的语言
            lang: "zh-CN",
        },
    },
    head: [
        [
            "link",
            {
                rel: "icon",

                href: `/cg-tutor/images/logo.svg`,
            },
        ],

        [
            "link",
            {
                rel: "stylesheet",
                href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
            },
        ],

        [
            "script",
            {
                src: "/cg-tutor/iconfont/iconfont.js",
            },
        ],
        [
            "link",
            {
                //我的vscodeiconfont库
                rel: "stylesheet",
                href: "//at.alicdn.com/t/font_3267094_1gli0nmxpsr.css",
            },
        ],
    ],

    // site-level locales config

    lang: "zh-CN",
    title: "cg教程",
    description: "A simple computer graphic tutorial",

    theme: theme,

    plugins: [searchPlugin],
});
