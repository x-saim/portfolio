import RubyOnRails from 'public/assets/skills/Ruby_On_Rails_Logo.svg.png';
import CypressLogo from 'public/assets/skills/Cypress_Logo.png';
import ReduxLogo from 'public/assets/skills/redux-icon.png';
import SassLogo from 'public/assets/skills/sass-icon.png';
import GitLogo from 'public/assets/skills/git-icon.png';
import PostmanLogo from 'public/assets/skills/postman-icon.png';
import SQLLogo from 'public/assets/skills/database.png';

const TechnicalSkills = {
  'Programming Languages': [
    'JavaScript',
    'Python',
    'TypeScript',
    'Ruby',
    'HTML',
    'EJS',
    'CSS',
    'SASS',
    'SQL',
  ],
  'Libraries/Frameworks': [
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
  Testing: ['Mocha', 'Chai', 'Jest', 'Storybook', 'Cypress', 'Rspec'],
  'Database Management': ['PostgreSQL', 'MongoDB'],
  Development: [
    'Git',
    'Github',
    'Visual Studio Code',
    'Linux',
    'Postman',
    'Heroku',
    'Vercel',
    'Netlify',
    'Figma',
  ],
};
const ExperienceSections = {
  exp1: {
    company: 'Engineering Link Inc.',
    companyURL: 'https://www.engineeringlink.ca/',
    logo: '/assets/resume/EngLink.png',
    title: 'Engineer-in-Training',
    date: 'May 2021 - March 2023',
    description: [
      'Effectively managed up to 20 diverse projects simultaneously, with budgets ranging from $100,000 to $10 million, in various sectors such as commercial, institutional, industrial, and residential.',
      ' Managed full project life cycles with meticulous oversight, encompassing site investigations, comprehensive condition assessments, design and tender processes, as well as construction review and contract administration.',
      'Utilized Python for data processing and in-depth analysis, achieving a 90% time reduction and $2000 cost savings for a curtain wall glazing survey. This analysis contributed to a comprehensive repairs strategy plan summary',
      'Proactively addressed potential project challenges, leading to significant cost savings of $100,000 in repairs and preventing a 3-month extension to the project schedule, successfully meeting   client expectations.',
      'Effectively engineered and developed project scope and design requirements for diverse restoration projects, including roofing systems, reinforced concrete parking garages, waterproofing, exterior walls, and windows.',
    ],
  },
  exp2: {
    company: 'Sobotec Ltd.',
    companyURL: 'https://sobotec.com/',
    logo: '/assets/resume/Sobotec_Logo.png',
    title: 'Structural Engineering Intern',
    date: 'May 2018 - August 2019',
    description: [
      'Demonstrated expertise in design codes and standards, including ASD, IBC, ASCE 7, ADM, LSD, NBCC, OBC, and NASPEC, to conduct connection design of aluminum exterior wall cladding panel systems in the USA and Canada.',
      'Demonstrated expertise in design codes and standards, including ASD, IBC, ASCE 7, ADM, LSD, NBCC, OBC, and NASPEC, to conduct connection design of aluminum exterior wall cladding panel systems in the USA and Canada.',
      'Managed a portfolio of up to 15 projects, effectively prioritizing tasks, adhering to project timelines, and consistently delivering on all project requirements.',
      'Proactively addressed potential project challenges, leading to significant cost savings of $100,000 in repairs and preventing a 3-month extension to the project schedule, successfully meeting   client expectations.',
      'Reviewed and revised structural drawings with meticulous attention to detail using AutoCAD, ensuring precise accuracy and adherence to project specifications.',
    ],
  },
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
    name: 'Resume',
    hash: 'resume',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
];

const skillsData = {
  'Programming Languages': [
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      width: 50,
      height: 50,
      alt: 'JavaScript',
    },
    {
      name: 'Python',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'Python',
    },
    // {
    //   name: 'TypeScript',
    //   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    //   width: 50,
    //   height: 50,
    //   alt: 'TypeScript',
    // },
    {
      name: 'Ruby',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'Ruby',
    },
    {
      name: 'HTML5',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'HTML5',
    },
    {
      name: 'CSS3',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'CSS3',
    },
    {
      name: 'Sass',
      src: { SassLogo },
      width: 50,
      height: 50,
      alt: 'Sass',
    },
    {
      name: 'SQL',
      src: { SQLLogo },
      width: 50,
      height: 50,
      alt: 'SQL',
    },
  ],
  'Client & Server Side - Frameworks & Libraries': [
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'Node.js',
    },
    {
      name: 'Express.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'Express.js',
    },
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'React',
    },
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'Next',
    },
    {
      name: 'Redux',
      src: { ReduxLogo },
      width: 50,
      height: 50,
      alt: 'Redux',
    },
    {
      name: 'jQuery',
      src: 'assets/skills/jquery-icon.png',
      width: 50,
      height: 50,
      alt: 'jQuery',
    },
    {
      name: 'Ruby on Rails',
      src: { RubyOnRails },
      width: 50,
      height: 50,
      alt: 'Rails',
    },
  ],
  'Database Management': [
    {
      name: 'PostgreSQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'PostgreSQL',
    },
    {
      name: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'MongoDB',
    },
  ],
  Testing: [
    {
      name: 'Mocha',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
      width: 50,
      height: 50,
      alt: 'Mocha',
    },
    {
      name: 'Jest',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      width: 50,
      height: 50,
      alt: 'Jest',
    },
    {
      name: 'Storybook',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
      width: 50,
      height: 50,
      alt: 'Storybook',
    },
    {
      name: 'Cypress',
      src: { CypressLogo },
      width: 50,
      height: 50,
      alt: 'Cypress',
    },
    {
      name: 'Rspec',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'Rspec',
    },
  ],
  'Development/Other Tools': [
    {
      name: 'Figma',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      width: 50,
      height: 50,
      alt: 'Figma',
    },
    {
      name: 'VSCode',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg',
      width: 50,
      height: 50,
      alt: 'VSCode',
    },
    {
      name: 'Git',
      src: { GitLogo },
      width: 50,
      height: 50,
      alt: 'Git',
    },
    {
      name: 'Postman',
      src: { PostmanLogo },
      width: 50,
      height: 50,
      alt: 'Postman',
    },
    {
      name: 'Photoshop',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg',
      width: 50,
      height: 50,
      alt: 'Photoshop',
    },
  ],
};

module.exports = {
  TechnicalSkills,
  ExperienceSections,
  ProjectData,
  navLinks,
};
