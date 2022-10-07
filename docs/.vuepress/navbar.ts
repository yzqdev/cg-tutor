import { navbar } from 'vuepress-theme-hope'

export default navbar([
  {
    text: 'blender',
    icon: 'blender',
    activeMatch: '^/blender/',
    link: '/blender/',
  },
  {
    text: 'maya',
    icon: 'DsMax',
    activeMatch: '^/maya/',
    link: '/maya/',
  },
  {
    text: 'ae',
    icon: 'Adobe-AfterEffects',
    activeMatch: '^/ae/',
    link: '/ae/',
  },
  {
    text: 'ps',
    icon: 'Adobe-Photoshop',
    activeMatch: '^/ps/',
    link: '/ps/',
  },
  {
    text: 'tutor',
    icon: 'operate',
    activeMatch: '^/cg-tutor/',
    link: '/cg-tutor/',
  },
])
