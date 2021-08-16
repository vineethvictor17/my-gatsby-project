import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vineeth Victor', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vineeth Victor',
  subtitle: 'I am a Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'Hello, My name is Vineeth Victor. I am a tech lover, currently pursuing my BTech in Computer Science at Vellore Institute of Technology,Chennai.',
  paragraphTwo: 'I am an ambitious person who has developed a mature and calculated approach to any task that I undertake,or situation that I am presented with.I enjoy challenges and solving problems.I am a quick learner and my passion for technology never quenches.I aspire to become part of a leading technical company.',
  paragraphThree: 'Some of my hobbies include playing chess,tennis and reading.',
  resume: ''
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'image.jpg',
    title: 'Employee Research Management System',
    info: 'It is a platform where the faculty under an authorised ID can provide the progress of their research status. On addition to this final year students are provided a portal where they can choose the faculty as their research guides and can also register under them.',
    info2: '',
    url: 'https://github.com/vineethvictor17/Employee-Research-Management-System',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'agrogenie.jpg',
    title: 'Agrogenie',
    info: 'It serves as an all-in-one platform for farmers with many options like weather report, latest tool & technologies available, loan schemes for farmers, information on crops, negotiating the price with buyers for their final yield and many more unique features. For efficient growth and development of the agricultural sector, there is a need to familiarize with new technologies like biotechnology, nanotechnology etc. Usage of technology would enhance sustainable livelihood opportunities for the farmers.',
    info2: '',
    url: 'https://github.com/vineethvictor17/agrogenie.github.io',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react.png',
    title: 'React Portfolio Website',
    info: 'An elegant portfolio website built using React.Explored styled components and framer motion while building this website.',
    info2: '',
    url: 'https://vineethvictor1.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'song.png',
    title: 'SongKingdom',
    info: 'A simple music player built using React.Functionalities include play,pause forward,backward,selecting songs from library and adjusting volume',
    info2: '',
    url: 'https://songkingdom.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'vineethvictor1517@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/vineethvictor17/',
    },
  
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vineethvictor17/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vineethvictor17',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
