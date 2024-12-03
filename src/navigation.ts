import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Software Engineering',
          href: getPermalink('/services/software'),
        },
        {
          text: 'Product Development',
          href: getPermalink('/services/product'),
        },
        {
          text: 'Consulting',
          href: getPermalink('/services/consulting'),
        },
        {
          text: 'Prototyping & MVP',
          href: getPermalink('/services/consulting'),
        },
        {
          text: 'Innovation & Research',
          href: getPermalink('/services/innovation'),
        },
        {
          text: 'Smarthome & Lighting',
          href: getPermalink('/services/smarthome'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'Bravy',
          href: getPermalink('/products/bravy'),
        },
        {
          text: 'Adhero',
          href: getPermalink('/products/pricing'),
        },
        {
          text: 'Lightbase',
          href: 'https://lightbase.ch', // External URL
          target: '_blank', // Opens in a new tab
          rel: 'noopener noreferrer', // Ensures security for external links
        },
      ],
    },
    {
      text: 'Case Studies',
          href: getBlogPermalink(),
    },
    {
      text: 'Contact',
          href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Login', href: 'https://setbase.ch', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Setbase_' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/setbase_/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61569193274670' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/setbase' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/src/assets/favicons/favicon-32x32.png" alt="Setbase logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://setbase.ch/"> Setbase</a> · 2024 - All rights reserved.
  `,
};
