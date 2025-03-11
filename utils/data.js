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

export const skillsData = {
  'Frontend Development': [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Next.js', level: 85 }
  ],
  'Backend Development': [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 75 },
    { name: 'Express', level: 80 },
    { name: 'REST APIs', level: 85 }
  ],
  'Development Tools': [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Linux', level: 80 },
    { name: 'VS Code', level: 90 },
    { name: 'Jest', level: 75 }
  ]
};

module.exports = {
  TechnicalSkills,
  ProjectData,
  navLinks,
  skillsData,
};
