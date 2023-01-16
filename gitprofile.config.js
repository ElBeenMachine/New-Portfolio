// gitprofile.config.js

const config = {
  github: {
    username: 'ElBeenMachine', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ["New-Portfolio", "elbeenmachine"], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'BeenhamO',
    twitter: 'ElBeenMachine',
    facebook: 'BeenhamOW',
    instagram: 'BeenhamOW',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'ElBeenMachine',
    stackoverflow: '', // format: userid/username
    website: 'www.beenhamow.co.uk',
    phone: '',
    email: 'ollie@beenhamow.co.uk',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'Git',
    'Docker',
    'HTML5',
    'CSS',
    'Python',
  ],
  experiences: [
    {
      company: 'Flip Out UK',
      position: 'Contact Centre Agent and IT Advisor',
      from: 'February 2022',
      to: 'Present',
      companyLink: 'https://www.flipout.co.uk',
    }
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  // education: [
  //   {
  //     institution: 'Institution Name',
  //     degree: 'Degree',
  //     from: '2015',
  //     to: '2019',
  //   },
  //   {
  //     institution: 'Institution Name',
  //     degree: 'Degree',
  //     from: '2012',
  //     to: '2014',
  //   },
  // ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Apache Bot',
      description: 'Apache is an all-purpose Discord bot created for my computer science A-Level coursework.',
      imageUrl: 'https://www.apachebot.net/img/logo.png',
      link: 'https://www.apachebot.net',
    },
    {
      title: '472 Squadron Website',
      description: 'A website created for my local Air Cadet Squadron in order to help attract new cadets and to promote the squadron.',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
      link: 'https://www.472squadron.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'ElBeenMachine', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-NCDDJ1GR78', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3324674',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
