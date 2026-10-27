// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// when you move to TypeScript v5 and above. This is a Docusaurus feature.

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "tianyulai",
  tagline: '记录HPC学习笔记&旅行见闻&兴趣爱好&生活感悟',
  favicon: 'img/avatar.svg',

  // 线上部署地址（GitHub Pages：https://victor-Garcia-v.github.io/Personal-Blog/）
  // 以后绑定自己的域名时，把 url 改成域名、baseUrl 改成 '/' 即可
  url: 'https://victor-Garcia-v.github.io',
  baseUrl: '/Personal-Blog/',

  organizationName: 'victor-Garcia-v', // GitHub 用户名
  projectName: 'Personal-Blog', // GitHub 仓库名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // 本地插件：扫描 blog 目录，把文章按 section 字段提供给各板块页
  plugins: [require.resolve('./plugins/blog-sections')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/victor-Garcia-v/Personal-Blog/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: "tianyulai",
          blogDescription: '记录HPC学习笔记&旅行见闻&兴趣爱好&生活感悟',
          feedOptions: {
            type: ['rss', 'atom'],
            title: "tianyulai",
            description: '记录HPC学习笔记&旅行见闻&兴趣爱好&生活感悟',
            copyright: `Copyright © ${new Date().getFullYear()} tianyulai`,
            language: 'zh-Hans',
          },
          editUrl:
            'https://github.com/victor-Garcia-v/Personal-Blog/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/cover.svg',
      navbar: {
        title: 'tianyulai',
        logo: {
          alt: 'tianyulai 头像',
          src: 'img/avatar.svg',
        },
        items: [
          { to: '/', label: '首页', position: 'left' },
          {
            type: 'dropdown',
            label: '博客',
            position: 'left',
            items: [
              { to: '/blog', label: '全部文章' },
              { to: '/hpc', label: 'HPC 学习笔记' },
              { to: '/travel', label: '旅行见闻' },
              { to: '/hobbies', label: '随心记' },
            ],
          },
          { to: '/docs/intro', label: '知识库', position: 'left' },
          { to: '/awards', label: '闪亮时刻', position: 'left' },
          { to: '/journey', label: '人生历程', position: 'left' },
          { to: '/about', label: '关于', position: 'left' },
          {
            href: 'https://github.com/victor-Garcia-v/Personal-Blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} tianyulai. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'python'],
      },
    }),
};

module.exports = config;
