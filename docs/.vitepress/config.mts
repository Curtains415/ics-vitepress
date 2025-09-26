import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ICS组件文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'hooks', link: '/markdown-examples' },
      { text: '业务组件', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'hooks',
        items: [
          { text: 'usePreviewImg(图片预览)', link: '/markdown-examples' },
          { text: 'useTableValidation(表格校验)', link: '/api-examples' }
        ]
      },
      {
        text: '业务组件',
        items: [
          { text: 'WorkFlow(流程审批)', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    }
  }
})
