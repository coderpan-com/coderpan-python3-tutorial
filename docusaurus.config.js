// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '潘哥 Python 教程',
    tagline: '潘哥为您精心制作的 Python3 入门、进阶、数据结构&算法教程',
    favicon: 'img/favicon.svg',

    // Set the production url of your site here
    url: 'https://python.coderpan.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'coderpan-com', // Usually your GitHub org/user name.
    projectName: 'coderpan-python3-tutorial', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/coderpan-com/coderpan-python3-tutorial/blob/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/coderpan-com/coderpan-python3-tutorial/blob/main/',
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
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: '潘哥 Python 教程',
                logo: {
                    alt: '潘哥 Python 教程',
                    src: 'img/logo.svg',
                },
                items: [
                    {to: '/quickstart/', label: '快速入门', position: 'left'},
                    {to: '/start/', label: '入门详解', position: 'left'},
                    {to: '/advance/', label: '进阶实践', position: 'left'},
                    {to: '/datastructures-and-algorithms/', label: '数据结构&算法', position: 'left'},
                    {to: '/about', label: '关于', position: 'right'},
                    {
                        href: 'https://github.com/coderpan-com/coderpan-python3-tutorial/',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                /*links: [
                  {
                    title: 'Docs',
                    items: [
                      {
                        label: '快速入门',
                        to: '/docs/start/readme',
                      },
                    ],
                  },
                  {
                    title: 'Community',
                    items: [
                      {
                        label: 'Stack Overflow',
                        href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                      },
                      {
                        label: 'Discord',
                        href: 'https://discordapp.com/invite/docusaurus',
                      },
                      {
                        label: 'Twitter',
                        href: 'https://twitter.com/docusaurus',
                      },
                    ],
                  },
                  {
                    title: 'More',
                    items: [
                      {
                        label: 'Blog',
                        to: '/blog',
                      },
                      {
                        label: 'GitHub',
                        href: 'https://github.com/facebook/docusaurus',
                      },
                    ],
                  },
                ],*/
                copyright: `Copyright © ${new Date().getFullYear()} CoderPan.com`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                // additionalLanguages: ['sh', 'bash', 'python'],
            },
        }),
    plugins: [
        [
            require.resolve("@cmfcmf/docusaurus-search-local"),
            {
                language: "zh",
            }
        ]
    ],
};

module.exports = config;
