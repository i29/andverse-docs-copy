// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Andverse Doc',
  tagline: 'document',
  url: 'https://doc.newb.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'andverse-core', // Usually your GitHub org/user name.
  projectName: 'pony doc', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  plugins: [
    'docusaurus-plugin-sass',

    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // whether to index docs pages

      indexDocs: true,
      // must start with "/" and correspond to the routeBasePath configured for the docs plugin
      // use "/" if you use docs-only-mode
      // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/docs-introduction#docs-only-mode)
      docsRouteBasePath: '/',

      // Whether to also index the titles of the parent categories in the sidebar of a doc page.
      // 0 disables this feature.
      // 1 indexes the direct parent category in the sidebar of a doc page
      // 2 indexes up to two nested parent categories of a doc page
      // 3...
      //
      // Do _not_ use Infinity, the value must be a JSON-serializable integer.
      indexDocSidebarParentCategories: 3,

      // whether to index blog pages
      // indexBlog: false,
      
      // must start with "/" and correspond to the routeBasePath configured for the blog plugin
      // use "/" if you use blog-only-mode
      // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/blog#blog-only-mode)
      // blogRouteBasePath: '/blog',

      // whether to index static pages
      // /404.html is never indexed
      indexPages: true,

      // language of your documentation, see next section
      language: ["en", "zh"],

      // setting this to "none" will prevent the default CSS to be included. The default CSS
      // comes from autocomplete-theme-classic, which you can read more about here:
      // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
      style: undefined,

      lunr: {
        // When indexing your documents, their content is split into "tokens".
        // Text entered into the search box is also tokenized.
        // This setting configures the separator used to determine where to split the text into tokens.
        // By default, it splits the text at whitespace and dashes.
        //
        // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
        tokenizerSeparator: /[\s\-]+/
      }
    }]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/andverse-core/docs/edit/main/blog/andverse/index.md',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/andverse-core/docs/edit/main/blog/andverse/index.md',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Andverse ',
        logo: {
          alt: 'Andverse Logo',
          src: '/img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'start',
            position: 'left',
            label: 'Let\'s Start',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/andverse-core/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Let\'s Start',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/@andverse',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/andverseoffical',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/6GrtYCvY',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/andromedametaverse',
              },
              {
                label: 'Telegram Global',
                href: 'https://t.me/andverseGlobal',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/andverse-core',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Andverse.org`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      hideableSidebar: true,
    }),
};

module.exports = config;
