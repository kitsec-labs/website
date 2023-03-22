// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kitsec",
  tagline: "Ethical Hacking, made easy.",
  url: "https://kitsec.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  deploymentBranch:"gh-deploy",
  organizationName: "kitsec-labs", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  stylesheets: [
    // "https://fonts.google.com/specimen/Montserrat",
    // "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=block",
  ],
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
        sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/kitsec-labs/kitsec-core",
          breadcrumbs: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/kitsec-labs/kitsec-core",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-4JL0CD3631",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: [
    () => ({
      name: "postcss-tailwindcss-loader",
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.unshift(require("tailwindcss"));
        return postcssOptions;
      },
    }),
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "Kitsec Logo Logo",
          src: "img/logo_light.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          { to: "/docs", label: "Docs", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/kitsec-labs/kitsec-core",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      algolia: {
        appId: "SEF0873F05",
        apiKey: "1689963ef663f7ce1a5071ba90f0fc5b",
        indexName: "kitsec",
        contextualSearch: false,
        searchPagePath: false,
      },
      footer: {
        // style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Kitsec.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"],
      },
    }),
};


module.exports = config;