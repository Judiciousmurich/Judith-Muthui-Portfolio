import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'My Projects',
  projects: [
    {
      id: getId(),
      name: 'Trendyhub',
      url: 'https://trendyhub.vercel.app/',
      repo: 'https://github.com/Judiciousmurich/trendyhub',
      img: 'https://user-images.githubusercontent.com/68834718/258852895-df5c6da7-a698-40fb-97c3-a5474314cb85.png',
      year: 2023,
      tags: ['React', 'Tailwind', 'Node.js', 'MySQL', 'RESTful API'],
      description: 'A modern e-commerce platform where users can explore and shop the latest trends in fashion and technology, powered by React and Node.js.',
    },
    {
      id: getId(),
      name: 'Dream-House-App',
      url: 'https://beautiful-animations-kv.vercel.app/',
      repo: 'https://github.com/Judiciousmurich/Dream-House-App',
      img: 'https://user-images.githubusercontent.com/68834718/265277125-da2a6e07-7cf6-411c-b55f-94e372aa6dc8.png',
      year: 2023,
      tags: ['React', 'Node.js', 'RESTful API'],
      description: 'An intuitive app for finding your dream house by browsing through property listings, complete with smooth animations and detailed views.',
    },
    {
      id: getId(),
      name: 'chat-app',
      url: 'https://github.com/Judiciousmurich/chat-app/',
      repo: 'https://github.com/Judiciousmurich/chat-app',
      img: 'https://buttons-animations-kv.vercel.app/og.png',
      year: 2023,
      tags: ['React', 'Tailwind', 'Node.js', 'MySQL', 'RESTful API'],
      description: 'A dynamic chat app built to help users connect and find remote job opportunities, featuring real-time messaging and responsive design.',
    },
    {
      id: getId(),
      name: 'online-qr-code attendance',
      url: 'https://github.com/Judiciousmurich/online-qr-attendance',
      repo: 'https://github.com/Judiciousmurich/online-qr-attendance',
      img: 'https://user-images.githubusercontent.com/68834718/189035104-aa71647e-33e4-442a-a2f9-c0d50bba2db1.png',
      year: 2022,
      tags: ['Typescript', 'React', 'Node.js', 'MySQL', 'QR Code'],
      description: 'A web-based attendance system that leverages QR codes to simplify the process of marking attendance. Users can scan a unique QR code to register their presence, with automatic updates and real-time tracking.',
    },
    {
      id: getId(),
      name: 'Portfolio',
      url: 'https://judith-muthui-portfolio.netlify.app/',
      repo: 'https://github.com/Judiciousmurich/Judith-Muthui-Portfolio',
      img: 'https://user-images.githubusercontent.com/68834718/258852895-df5c6da7-a698-40fb-97c3-a5474314cb85.png',
      year: 2023,
      tags: ['React', 'Tailwind', 'Node.js', 'MySQL', 'RESTful API'],
      description: 'This portfolio showcases my expertise as a Node.js developer, featuring skills, projects, and certifications. Built with NextJs, TypeScript & Tailwindcss.',
    },
    {
      id: getId(),
      name: 'notes-nest',
      url: 'https://buttons-animations-kv.vercel.app/',
      repo: 'https://github.com/Judiciousmurich/notes-nest',
      img: 'https://buttons-animations-kv.vercel.app/og.png',
      year: 2023,
      tags: ['React', 'Tailwind', 'Node.js', 'MySQL', 'RESTful API'],
      description: 'A user-friendly note-taking app where you can manage your notes with ease, featuring a clean interface and smooth animations.',
    },
    
    
    
   
    {
      id: getId(),
      name: 'vroom-master',
      url: 'https://image-animations.vercel.app/',
      repo: 'https://github.com/Judiciousmurich/vroom-master',
      img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/68834718/252267106-857c5341-1106-4e84-b7e6-80a668a20ba8.png',
      year: 2023,
      tags: ['Typescript'],
      description: 'A type-safe application to manage car-related data efficiently, built with TypeScript to ensure high performance and reliability.',
    },
    {
      id: getId(),
      name: 'chat-bot',
      url: 'https://remotive-jobs.vercel.app/',
      repo: 'https://github.com/Judiciousmurich/chat-bot',
      img: 'https://user-images.githubusercontent.com/68834718/189035104-aa71647e-33e4-442a-a2f9-c0d50bba2db1.png',
      year: 2022,
      tags: ['Typescript'],
      description: 'A smart and interactive chatbot designed to assist users in finding remote job listings, built using TypeScript for optimal performance and scalability.',
    },    // Add more projects here as needed.
  ],
};
