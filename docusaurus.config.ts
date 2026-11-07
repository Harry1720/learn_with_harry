import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'HarryHub',
  tagline: 'Học tập công nghệ với Harry',
  favicon: 'img/devlearn-mark.svg',

  markdown: { format: 'detect' },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
      type: 'text/css',
    },
  ],


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'HarryHub',
      logo: {
        alt: 'HarryHub Logo',
        src: 'img/devlearn-mark.svg',
      },
      items: [
        {
          to: '/docs/category/toan-roi-rac',
          position: 'left',
          label: 'Toán rời rạc',
        },
        {
          to: '/docs/category/an-toan-thong-tin',
          label: 'An toàn thông tin',
          position: 'left',
        },
        {to: '/blog', label: 'Bài viết', position: 'left'},
        {to: '/docs/category/toan-roi-rac', label: 'Bắt đầu học', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Môn học',
          items: [
            {
              label: 'Toán rời rạc',
              to: '/docs/category/toan-roi-rac',
            },
            {
              label: 'An toàn thông tin',
              to: '/docs/category/an-toan-thong-tin',
            },
          ],
        },
        {
          title: 'Khám phá',
          items: [
            {
              label: 'Bài viết',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} HarryHub · Học tập công nghệ với Harry.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
