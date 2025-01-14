import { getPermalink, getBlogPermalink } from './utils/permalinks';

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
          href: getPermalink('/services/prototyping'),
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
          //href: getPermalink('/products/bravy'),
          href:"https://www.bravy.ch",
          target: '_blank', // Opens in a new tab
        },
        {
          text: 'Adhero',
          href: getPermalink('/products/adherlo'),
        },
        {
          text: 'Lightbase',
          href: 'https://lightbase.ch', // External URL
          target: '_blank', // Opens in a new tab
        },
      ],
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
      text: 'Dienstleistungen', // Services
      links: [
        {
          text: 'Softwareentwicklung', // Software Engineering
          href: getPermalink('/de/services/software'),
        },
        {
          text: 'Produktentwicklung', // Product Development
          href: getPermalink('/de/services/product'),
        },
        {
          text: 'Consulting', // Consulting
          href: getPermalink('/de/services/consulting'),
        },
        {
          text: 'Prototyping & MVP', // Prototyping & MVP (no change)
          href: getPermalink('/de/services/prototyping'),
        },
        {
          text: 'Innovation & Forschung', // Innovation & Research
          href: getPermalink('/de/services/innovation'),
        },
        {
          text: 'Smart Home & Beleuchtung', // Smarthome & Lighting
          href: getPermalink('/de/services/smarthome'),
        },
      ],
    },
    {
      text: 'Produkte', // Products
      links: [
        {
          text: 'Bravy',
          href: 'https://www.bravy.ch', // External URL
          target: '_blank', // Opens in a new tab
        },
        {
          text: 'Adherlo',
          href: getPermalink('/products/adherlo'),
        },
        {
          text: 'Lightbase',
          href: 'https://lightbase.ch', // External URL
          target: '_blank', // Opens in a new tab
        },
      ],
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
        { text: 'Bravy', href: 'https://www.bravy.ch' },
        { text: 'Lightbase', href: 'https://www.lightbase.ch' },
        { text: 'Adhero', href: '/de/adherlo' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Articles', href: '/blog' },
        { text: 'Contact', href: '/contact' },
        { text: 'Shop', href: 'https://www.lightbase.ch' },
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
