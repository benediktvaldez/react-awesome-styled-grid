
export default {
  title: 'React awesome styled grid',
  description: 'A grid system layout for React using styled-components',
  port: 4000,
  protocol: 'http',
  indexHtml: 'public/index.html',
  htmlContext: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://codemirror.net/theme/dracula.css'
      }]
    },
    favicon: 'public/favicon.ico'
  },
  themeConfig: {
    codemirrorTheme: 'dracula'
  },
  propsParse: false
}
