import self from '../img/self.jpeg';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Davi',
  lastName: '',
  initials: 'Davi Bentim', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a WebDeveloper and an Art student',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      text: 'based in the Salt Lake City, USA',
    },
    {
      text: 'WebDeveloper and Designer',
    },
    {
      text: 'davi.bentim@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://davijaca.github.io/', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-user-circle',
      label: 'resume',
    },
    {
      link: 'https://github.com/davijaca',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/davi-bentim/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Hello there! I'm Davi, a brazilian WebDeveloper and a Design student. I'm passionate about coding and art, and I'm always looking for new opportunities to learn and grow. The opportunity to study Game Design will allow me to combine my passion for coding and art, and I'm very excited to see where it takes me.",
  skills: {
    art: ['Clip Studio Paint', 'Adobe Illustrator', 'Corel Draw'],
    coding: ['HTML/CSS', 'MERN Stack / React', 'Javascript']
  },
  hobbies: [
    {
      label: 'Coding',
    },
    {
      label: 'Video games',
    },
    {
      label: 'Guitar / Violin',
    },
    {
      label: 'Drawing',
    },
    {
      label: 'Traveling',
    },
    {
      label: 'Learning new languages (Portuguese, English, Spanish, German)',
    }
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Portfolio',
      live: 'https://Davi0126.com/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/Davi0126fx/Davi-portfolio', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://Davi0126.com/website.jpg',
    }
  ],
};
