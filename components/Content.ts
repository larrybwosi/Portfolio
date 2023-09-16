import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const content = {
  home: {
    name:'Larry Bwosi',
    title: 'Welcome to my portfolio',
    subtitle: 'I am a web developer based in...',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    iconImage:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    image1:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    image2:"https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=400",
    image3:"https://media.istockphoto.com/id/1279133399/photo/top-above-high-angle-view-portrait-of-his-he-nice-attractive-focused-skilled-geek-guy-typing.jpg?b=1&s=612x612&w=0&k=20&c=q8dpsBilnHCNzkXSATjowbV6jLnV55fiPmxwWZQX8aU="

  },
  about: {
    title: 'About me',
    subtitle: 'I have been working as a web developer for...',
    description: "Hi, I'm [Your Name], a software developer with experience in building web and mobile applications using modern technologies. I specialize in the following areas Frontend development using Next.js 13, React, and Figma for design. Backend development using Firebase and Redux Toolkit for state management. Mobile development using Expo and React Native." 
  },
  projects: {
    title: 'My projects',
    subtitle: 'Here are some of the projects I have worked on...',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  contact: {
    title: 'Contact me',
    subtitle: 'Feel free to reach out to me...',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }, 
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blog Post Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Next Js",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  }, 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }, 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dean proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Birder.io",
    description:[
    "The mobile app I developed allows users to connect with friends, send messages",
    " create and join groups, create posts, and customize their profiles. Users can ",
    "interact through profiles, activity feeds, text posts, video or photo posts, shared ",
    "links, and more. The app prioritizes features that give users the ability to react and ",
    "comment on users' posts, share each other's posts, and start conversations."],
    tags: [
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Snapscape",
    description:[
      "Snapscape is a web app that allows users to post, share, and download ",
      "images, describe images, and tag friends. Users can create posts with text ",
      "and images, customize their profiles, and connect with friends. With features ",
      "similar to social networking apps, Snapscape allows users to interact through activity ",
      "feeds, shared links, and more."
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const overview =[
  " I'm a software developer, I have extensive experience in Next.js, React, Redux,",
  "Firebase, Redux Toolkit, Expo, Sanity, MongoDB, and Git. With these skills, I am",
  " able to build scalable and efficient web applications using Next.js and React, manage",
  " state using Redux and Redux Toolkit, integrate Firebase for authentication and real-time",
  " database, and use Expo for building cross-platform mobile apps. I am also proficient",
  " in managing content using Sanity and MongoDB, and using Git for version control. With my",
  " skills and experience, I am confident in my ability to contribute to any team building modern web applications."
]

export { services, technologies, experiences, testimonials, projects,overview };
 