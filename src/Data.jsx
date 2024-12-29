import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Custom Websites',
    description:
      'Building scalable and user-friendly websites tailored to your needs using modern frameworks and tools.',
  },
  {
    id: 2,
    name: 'Mobile Development',
    title: 'iOS & Android Apps',
    description:
      'Developing intuitive mobile applications to enhance user experience on both Android and iOS platforms.',
  },
  {
    id: 3,
    name: 'Backend Development',
    title: 'Server-Side Solutions',
    description:
      'Creating robust backend systems using technologies like Node.js, NestJS, and PostgreSQL.',
  },
  {
    id: 4,
    name: 'E-commerce Solutions',
    title: 'Online Stores',
    description:
      'Designing and developing e-commerce platforms to streamline online shopping experiences.',
  },
  {
    id: 5,
    name: 'Open Source Contribution',
    title: 'Collaborative Projects',
    description:
      'Engaging in open-source initiatives to contribute to community-driven projects and tools.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Python',
    percentage: 90,
    description:
      'Proficient in Python for backend development, competitive programming, and data structures.',
  },
  {
    id: 2,
    name: 'JavaScript',
    percentage: 80,
    description:
      'Skilled in modern JavaScript frameworks such as React and Next.js for frontend development.',
  },
  {
    id: 3,
    name: 'Go',
    percentage: 75,
    description:
      'Experience in building efficient and scalable backend services with Go.',
  },
  {
    id: 4,
    name: 'React',
    percentage: 85,
    description:
      'Building interactive UIs and single-page applications using React.',
  },
  {
    id: 5,
    name: 'PostgreSQL',
    percentage: 70,
    description:
      'Developing relational database solutions with PostgreSQL and MySQL.',
  },
  {
    id: 6,
    name: 'Git & GitHub',
    percentage: 95,
    description:
      'Expertise in version control and collaborative software development workflows.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'E-commerce',
    title: 'Online Marketplace',
    description:
      'Developed a scalable e-commerce platform using the MERN stack, enabling seamless online transactions.',
  },
  {
    id: 2,
    img: Project2,
    category: 'UI/UX Design',
    title: 'Home Rental System',
    description:
      'Led a team to build a rental system with admin controls and reporting features, improving accessibility for 70% of Addis Ababa residents.',
  },
  {
    id: 3,
    img: Project3,
    category: 'Development',
    title: 'Mobile Application',
    description:
      'Built a cross-platform mobile application for enhanced user engagement and functionality.',
  },
  {
    id: 4,
    img: Project4,
    category: 'Branding',
    title: 'Kana Design Studio',
    description:
      'Contributed to the branding and UI/UX design for a modern design studio.',
  },
  {
    id: 5,
    img: Project5,
    category: 'Open Source',
    title: 'Community Tool',
    description:
      'Collaborated on an open-source project to build a community-focused software tool.',
  }
];

export const cv = [
  {
    id: 1,
    title: 'Software Engineering',
    subtitle: 'Addis Ababa University',
    date: '2019 - 2025',
    description:
      'Pursuing a B.Sc. in Software Engineering, with coursework in algorithms, data structures, and operating systems.',
    category: 'education',
  },
  {
    id: 2,
    title: 'Competitive Programming',
    subtitle: 'A2SV | Africa to Silicon Valley',
    date: '2023 - Present',
    description:
      'Active member of the A2SV Group54, solving algorithmic challenges and contributing to open-source projects.',
    category: 'education',
  },
  {
    id: 3,
    title: 'WordPress Developer',
    subtitle: 'PSYANN Graphics',
    date: '2022 - 2023',
    description:
      'Developed scalable WordPress websites to enhance online presence and user engagement.',
    category: 'experience',
  },
  {
    id: 4,
    title: 'Website & Software Developer',
    subtitle: 'CDHI',
    date: '2023 - 2024',
    description:
      'Built websites and software tools to streamline operations and improve user experiences.',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Kyle LeSueur',
    author: 'Founder/CEO, Tap to Sign',
    description:
      '“I am really glad to have Enyew on the team! He is productive and helps get the job done!”',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Paulo Coghi',
    author: 'Senior Backend developer @aladia',
    description:
      '“Thank you Enyew for being part of our QA Team. Enyew has good knowledge on end-to-end testing and Cypress, and he is a promising professional”',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Pam Obasa',
    author: 'Founder of Lucrative Lady',
    description:
      '“Enyew is an exceptional virtual assistant specializing in tech-related development.”',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Sigid Vigani',
    author: 'Founder, Aladia',
    description:
      '“Enyew is a very good developer. We are continuing to work with him on a new contract”',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Professor Biniyam C.Tilahun',
    author: 'Founder, Center for Digital Health and Implementation Science (CDHi)',
    description:
      '“Enyew is an exceptionally talented developer , his skills and professionalism go beyond that of an intern, and we are truly happy with his contributions”',
  },
];
