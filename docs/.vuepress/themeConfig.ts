import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  logo: '/images/logo.svg',

  repo: 'yzqdev/cg-tutor',

  docsDir: 'docs',
  iconPrefix: 'iconfont icon-',
  // theme-level locales config

  // navbar
  navbar: navbar,

  // sidebar
  //https://vuepress-theme-hope.github.io/v2/
  sidebar: sidebar,
  footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-hope </a>`,

  displayFooter: true,

  plugins: {
    mdEnhance: {
      tabs: true,
      codetabs: true,
      lazyLoad: true,
      demo: true,
    },
  },
})
