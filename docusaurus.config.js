// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// when you move to TypeScript v5 and above. This is a Docusaurus feature.

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NeverGpDzy's Blog",
  tagline: '记录HPC学习笔记&旅行见闻&兴趣爱好&生活感悟',
  favicon: 'img/avatar.webp',

  // 线上部署地址（阿里云 OSS + ESA）
  url: 'https://nevergpdzy.com',
  baseUrl: '/',

  organizationName: 'victor-Garcia-v', // GitHub 用户名
  projectName: 'Personal-Blog', // GitHub 仓库名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

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
          blogTitle: "NeverGpDzy's Blog",
          blogDescription: '记录HPC学习笔记&旅行见闻&兴趣爱好&生活感悟',
          feedOptions: {
            type: ['rss', 'atom'],
            title: "NeverGpDzy's Blog",
            description: '记录HPC学习笔记&旅行见闻&兴趣爱好&生活感悟',
            copyright: `Copyright © ${new Date().getFullYear()} NeverGpDzy`,
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
      image: 'img/cover.webp',
      navbar: {
        title: 'NeverGpDzy',
        logo: {
          alt: 'NeverGpDzy 头像',
          src: 'img/avatar.webp',
        },
        items: [
          { to: '/', label: '首页', position: 'left' },
          { to: '/blog', label: '博客', position: 'left' },
          { to: '/docs/intro', label: '知识库', position: 'left' },
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
        copyright: `Copyright © ${new Date().getFullYear()} NeverGpDzy. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'python'],
      },
    }),
};

module.exports = config;
