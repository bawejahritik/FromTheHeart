import {
    mobile,
    backend,
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
    starbucks,
    tesla,
    autoserv,
    threejs,
    tennis,
    creator,
    nike
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id:"work",
      title: "Work Experience"
    },
    {
      id: "tech",
      title: "Skills"
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "https://bawejahritik.github.io/hritikblog.github.io/",
      title: "Blog"
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Developer",
      icon: creator
    }
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
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
      name: "Go",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
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
      name: "Postman",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "APIs",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "SQL",
      icon : docker
    },
    {
      name : "Wireshark",
      icon : "docker"
    },
    {
      name: "Generative AI",
      icon : "docker"
    }
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Neovatic Technologies Pvt Ltd",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "EY",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2021 - July 2021",
      points: [
        "Proposed an architecture to improve data anaysis felxibility and efficiency.",
        "Improved runtime speed with an 8-9x improvement in runtime speed as compared to convetional SQL queries in place.",
        "Encrypted source code with 256-bit AES encrytpion to secure source code",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];

  const educations = [
    {
      title: "Masters in Computer Science",
      company_name: "University of Florida",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2022 - December 2023",
      points: [
        "Coursework : Software Engineering, Computer Networks, Analysis of Algorithms, Programming Language Principles, Distributed Operating Systems Principles, Maths for Intelligent Systems Malware Reverse Engineering, Human-Centered Input Recognition Algorithm, Advance Data Structures."
      ],
    },
    {
      title: "Bachelors in Technology in Computer Science",
      company_name: "Amity University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2018 - June 2022",
      points: [
        "Coursework: Introduction to Computers and Programming in C, Data Structures Using C, Object Oriented Programming Using C++, Database Management Systems, 	Java Programming, Operating Systems, Analysis and Design of Algorithms, 	Exploring the Networks, 	Compiler Construction, Artificial Intelligence, Software Project Management, Object Oriented System Design, Cyber Security",
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "AutoServ",
      description:
        "Web-based Automobile Service Management System that revolutionizes the way motor services are scheduled ,tracked, managed, and remunerated.",
      tags: [
        {
          name: "go",
          color: "blue-text-gradient",
        },
        {
          name: "angular",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        },
      ],
      image: autoserv,
      source_code_link: "https://github.com/bawejahritik/AutoServ",
    },
    {
      name: "Tennis Twitter Bot",
      description:
        "The Tennis Twitter Bot is an automated system developed to retrieve live tennis match data and post the results on Twitter to ensure a tennis fan remains updated.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "APIs",
          color: "green-text-gradient",
        },
        {
          name: "GithubActions",
          color: "pink-text-gradient",
        },
      ],
      image: tennis,
      source_code_link: "https://github.com/bawejahritik/TennisTwitterBot",
      web_link: "https://twitter.com/TennisScoreFeed"
    },
    {
      name: "Nike Shoes",
      description:
        "Designed and developed a dynamic e-commerce website, replicating the user experience and aesthetics of Nike's official website.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/bawejahritik/NikeWebsite",
      web_link: "https://bawejahritik.github.io/NikeWebsite/"
    },
  ];
  
  export { services, technologies, experiences, projects, educations };