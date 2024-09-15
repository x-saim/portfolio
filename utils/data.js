const TechnicalSkills = {
  'Programming Languages': [
    'C#',
    'JavaScript',
    'TypeScript',
    'Python',
    'Ruby',
    'HTML',
    'EJS',
    'CSS',
    'SASS',
    'SQL',
  ],
  'Libraries/Frameworks': [
    '.NET',
    'Node.js',
    'Express.js',
    'React',
    'Redux',
    'jQuery',
    'Axios',
    'AJAX',
    'Ruby on Rails',
    'Mongoose',
    'Bootstrap',
  ],
  Testing: [
    'Mocha',
    'Chai',
    'Jest',
    'Storybook',
    'Cypress',
    'Rspec',
    'xUnit',
    'MSTest',
  ],
  'Database Management': ['PostgreSQL', 'MongoDB'],
  Development: [
    'Git',
    'Github',
    'BitBucket',
    'JIRA',
    'SourceTree',
    'Visual Studio Code',
    'Linux',
    'Postman',
    'Figma',
    'Vercel',
    'Wordpress',
  ],
};

const ProjectData = {
  project1: {
    title: 'BizConnect',
    link: 'https://github.com/x-saim/bizconnect',
    techStack: 'JavaScript, Node.js, Express, React, Redux, MongoDB',
    date: 'September 2023',
    description: [
      'Developed a full-stack professional networking application utilizing Node.js, Express, React, Redux, and MongoDB.',
      'Implemented route protection with JSON Web Tokens (JWT) and conducted thorough API testing with Postman.',
      'Utilized Redux, React Hooks, and Async/Await for efficient state management and code optimization. Designed and integrated reducers, actions, and container components for seamless Redux integration.',
    ],
  },
  project2: {
    title: 'Scheduler',
    techStack: 'JavaScript, Node.js, React, Axios, PostgreSQL, HTML/CSS',
    link: 'https://github.com/x-saim/scheduler',
    date: 'August 2023',
    description: [
      'Developed a full-stack application using Node.js and React to create an interview booking and cancellation system.',
      'Implemented asynchronous Axios requests for seamless storage, smooth data fetching, and optimized communication.',
      'Ensured application reliability and maintainability with comprehensive testing, including Jest for unit testing, Storybook for isolated component testing, and Cypress for end-to-end testing.',
    ],
  },
  project3: {
    title: 'QuizApp',
    link: 'https://github.com/stoofz/quizApp',
    techStack: 'JavaScript, Node.js, Express.js, PostgreSQL, HTML/SASS',
    date: 'July 2023',
    description: [
      'Spearheaded the development of a full-stack multi-page web application for users to create and share quizzes.',
      'Effectively collaborated in a cohesive team using Git to streamline coordination and optimize project efficiency.',
      'Prioritized data security by implementing user authentication and password encryption using bcrypt.',
    ],
  },
};

const navLinks = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
];

const skillsData = {
  'Programming Languages': [
    {
      name: 'C#',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
      alt: 'CSharp',
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript',
    },
    {
      name: 'Python',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
      alt: 'Python',
    },
    {
      name: 'TypeScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      width: 50,
      height: 50,
      alt: 'TypeScript',
    },
    {
      name: 'Ruby',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg',
      alt: 'Ruby',
    },
    {
      name: 'HTML5',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
      alt: 'HTML5',
    },
    {
      name: 'CSS3',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
      alt: 'CSS3',
    },
    {
      name: 'Sass',
      src: '/assets/skills/sass-icon.png',
      alt: 'Sass',
    },
    {
      name: 'SQL',
      src: '/assets/skills/database.png',
      alt: 'SQL',
    },
  ],
  'Frameworks & Libraries': [
    {
      name: '.NET',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg',
      alt: 'NET',
    },
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
      alt: 'Node.js',
    },
    {
      name: 'Express.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
      alt: 'Express.js',
    },
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
      alt: 'React',
    },
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
      alt: 'Next',
    },
    {
      name: 'Redux',
      src: '/assets/skills/redux-icon.png',
      alt: 'Redux',
    },
    {
      name: 'jQuery',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg',
      alt: 'jQuery',
    },
    {
      name: 'Ruby on Rails',
      src: '/assets/skills/Ruby_On_Rails_Logo.svg.png',
      alt: 'Rails',
    },
  ],
  'Database Management': [
    {
      name: 'PostgreSQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg',
      alt: 'PostgreSQL',
    },
    {
      name: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
      alt: 'MongoDB',
    },
  ],
  Testing: [
    {
      name: 'Mocha',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
      alt: 'Mocha',
    },
    {
      name: 'Jest',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      alt: 'Jest',
    },
    {
      name: 'Storybook',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
      alt: 'Storybook',
    },
    {
      name: 'Cypress',
      src: '/assets/skills/Cypress_Logo.png',
      alt: 'Cypress',
    },
    {
      name: 'Rspec',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original-wordmark.svg',
      alt: 'Rspec',
    },
  ],
  'Development/Other Tools': [
    {
      name: 'Figma',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      alt: 'Figma',
    },
    {
      name: 'VSCode',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg',
      alt: 'VSCode',
    },
    {
      name: 'Git',
      src: '/assets/skills/git-icon.png',
      alt: 'Git',
    },
    {
      name: 'Postman',
      src: '/assets/skills/postman-icon.png',
      alt: 'Postman',
    },
    {
      name: 'Photoshop',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
      alt: 'Photoshop',
    },
    {
      name: 'Linux',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
      alt: 'Linux',
    },
    {
      name: 'Vercel',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg',
      alt: 'Vercel',
    },
    {
      name: 'Jira',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg',
      alt: 'Jira',
    },
    {
      name: 'SourceTree',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sourcetree/sourcetree-original-wordmark.svg',
      alt: 'SourceTree',
    },
    {
      name: 'BitBucket',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg',
      alt: 'BitBucket',
    },
    {
      name: 'WordPress',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg',
      alt: 'WordPress',
    },
  ],
};

module.exports = {
  TechnicalSkills,
  ProjectData,
  navLinks,
  skillsData,
};
