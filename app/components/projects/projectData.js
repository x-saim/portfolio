import BizConnectImage from 'public/assets/projects/BizConnect.png';
import TweeterGif from 'public/assets/projects/Tweeter.gif';
import SchedulerGif from 'public/assets/projects/Scheduler.gif';
import TinyURLImage from 'public/assets/projects/TinyURL.png';

export const projects = [
  {
    title: 'BizConnect',
    description: 'A full-stack professional social network',
    tech: ['Node.js', 'Express', 'React', 'Redux', 'MongoDB'],
    image: BizConnectImage,
    url: 'https://github.com/x-saim/bizconnect',
    category: 'Full Stack'
  },
  {
    title: 'Tweeter',
    description: 'A simple, single-page Twitter clone',
    tech: ['Node.js', 'Express', 'React', 'MongoDB'],
    image: TweeterGif,
    url: 'https://github.com/x-saim/tweeter',
    category: 'Full Stack'
  },
  {
    title: 'Scheduler',
    description: 'A web application that allows users to schedule appointments',
    tech: ['Node.js', 'Express', 'React', 'PostgreSQL'],
    image: SchedulerGif,
    url: 'https://github.com/x-saim/scheduler',
    category: 'Full Stack'
  },
  {
    title: 'TinyURL',
    description: 'A URL shortening service',
    tech: ['Node.js', 'Express', 'React', 'MongoDB'],
    image: TinyURLImage,
    url: 'https://github.com/x-saim/tinyurl',
    category: 'Full Stack'
  }
  // ... other projects
];

export const projectsDescription = {
  title: 'Featured Projects',
  subtitle: 'Exploring the intersection of technology and creativity through carefully crafted web applications.'
}; 