import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Adherlo',
          href:"https://www.adherlo.com",
          target: '_blank', // Opens in a new tab
    },
    {
      text: 'Case Studies',
          href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
          href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Login', href: 'https://setbase.ch', target: '_blank' }],
};

export const headerDataDE = {
  links: [
    {
      text: 'Adherlo',
          href:"https://www.adherlo.com",
          target: '_blank', // Opens in a new tab
    },
    {
      text: 'Fallstudien', // Case Studies
      href: getPermalink('/de/blog'), // Adjusted for German blog section
    },
    {
      text: 'Unternehmen',
      href: getPermalink('/de/about'),
    },
    {
      text: 'Kontakt', // Contact
      href: getPermalink('/de/contact'),
    },
  ],
  actions: [
    { text: 'Anmelden', href: 'https://setbase.ch', target: '_blank' }, // Login translated
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Adherlo', href: 'https://www.adherlo.com/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Articles', href: '/blog' },
        { text: 'Contact', href: '/contact' },
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
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/images/p_favicon-32x32.png" alt="Setbase logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://setbase.ch/"> Setbase</a> · 2024 - All rights reserved.
  `,
};
