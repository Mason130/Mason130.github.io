import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Cheng Yu',
  subtitle: 'Blog',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: true,
    src: 'assets/images/banner.png',
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/favicon-dark-128.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '128x128',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // },
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'CV',
      url: 'https://portfolio-rho-kohl-16.vercel.app/static/media/Cheng_Yu_Resume.014ee7a516b995da9ca4.pdf',
      external: true,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Mason130',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/me.png',
  name: 'Cheng(Mason) Yu',
  bio: 'MCS @ UVA, He/Him',
  links: [
    // {
    //   name: 'User',
    //   icon: 'fa6-regular:user',
    //   url: 'https://portfolio-rho-kohl-16.vercel.app/static/media/Cheng_Yu_Resume.014ee7a516b995da9ca4.pdf',
    // },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Mason130',
    },
    {
      name: 'Linkedin',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/chengyu-130hz/',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
