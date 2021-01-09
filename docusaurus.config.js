module.exports = {
  title: 'Vukky Limited Docs',
  tagline: 'Documentation for Vukky Ltd.',
  url: 'https://docs.vukkyltd.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Vukky Limited Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'VukkyBot',
              href: 'https://github.com/VukkyLtd/VukkyBot',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vukky Ltd. Built with Docusaurus, hosted with Netlify.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/VukkyLtd/vukkyltd.xyz/edit/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
