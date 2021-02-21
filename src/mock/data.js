import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profileimg.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://mariabyler.github.io/Portfolio/assets/MariaBylerResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Get it Write',
    info: '',
    info2: '',
    url: 'https://getitwrite.herokuapp.com/',
    repo: 'https://github.com/MStuart90/Get-it-Write', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'NoBrainerTrainer.png',
    title: 'No Brainer Trainer',
    info: 'The No Brainer Trainer was a group project for the UNC-RAL Full Stack Coding Bootcamp. Our team of six worked together to create an intuitive, easy-to-use workout app that takes makes choosing a workout easy.',
    info2: '',
    url: 'https://nobrainertrainer.herokuapp.com/',
    repo: 'https://github.com/pmhagwood/no-brainertrainer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Wander+Plus.png',
    title: 'Wander + Plus',
    info: 'Wander + Plus was a group project for the UNC-RAL Full Stack Coding Bootcamp. Together with my three teammates, we created an app to help users find travel information for their destination countries.',
    info2: '',
    url: 'https://jamescbaldwin.github.io/WANDER-PLUS/',
    repo: 'https://github.com/jamescbaldwin/WANDER-PLUS', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mariabyler98@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MariaByler',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mariabyler/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mariabyler',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
