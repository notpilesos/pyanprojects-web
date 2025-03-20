// Data types for teams and projects

// Site configuration
export interface SiteConfig {
  logo: {
    text: string;
    imagePath?: string;
    darkImagePath?: string;
  };
  social: {
    github: string;
    telegram?: string;
    discord?: string;
  };
}

export const siteConfig: SiteConfig = {
  logo: {
    text: "Pyan Inc.",
    imagePath: "/logo.svg",
    darkImagePath: "/logo-dark.svg"
  },
  social: {
    github: "https://github.com/PyanProject",
    telegram: "https://t.me/pyan_inc"
  }
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  githubUrl: string;
  avatarUrl: string;
  avatarFallback: string;
  skills: string[];
  teams: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  team: string;
  teamName: string;
  teamIds?: string[];
  repoUrl: string;
  imageUrl: string;
  demoUrl?: string;
  featured?: boolean;
  screenshots?: string[];
  technologies?: string[];
  features?: string[];
}

export interface Team {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  color: string;
  headerColor: string;
  expertise: string[];
  lead: {
    name: string;
    avatar: string;
    position: string;
  };
  members: Array<{
    name: string;
    avatar: string;
    position: string;
  }>;
  skills: string[];
  githubUrl: string;
}

// Teams
export const teams: Team[] = [
  {
    id: "unreal",
    name: "Unreal Engine",
    description: "Game development with focus on Unreal Engine",
    longDescription: 
      "Our Unreal Engine team specializes in creating immersive gaming experiences using the latest Unreal Engine tools and technologies. From concept to deployment, we handle all aspects of game development with a focus on performance, visual fidelity, and engaging gameplay mechanics.",
    color: "bg-blue-500/10 dark:bg-blue-500/20",
    headerColor: "bg-blue-800",
    expertise: [
      "Unreal Engine 5",
      "Game Design",
      "3D Modeling",
      "Animation",
      "Performance Optimization",
      "Game Project Testing"
    ],
    lead: {
      name: "Vadim A.",
      avatar: "/teams/vadim.jpg",
      position: "Team Lead / Backend Developer / Composer"
    },
    members: [
      {
        name: "Nikita K.",
        avatar: "/teams/nikita.jpg",
        position: "Python Developer / Unreal Engine Developer / System Administrator"
      },
      {
        name: "Maxim Sh.",
        avatar: "/teams/maxim-sh.jpg",
        position: "3D Modeling / Frontend and Backend Developer"
      },
      {
        name: "Maxim L.",
        avatar: "/teams/maxim-l.jpg",
        position: "3D Modeling / Unreal Engine Developer"
      },
      {
        name: "Alexander P.",
        avatar: "/teams/alexander-p.jpg",
        position: "Frontend Developer / Backend Developer / System Administrator"
      },
      {
        name: "Artem R.",
        avatar: "/teams/artem.jpg",
        position: "Graphic Designer / UI/UX Specialist"
      },
      {
        name: "Alexander Zh.",
        avatar: "/teams/alexander-zh.jpg",
        position: "Tester / QA Engineer"
      }
    ],
    skills: ["Python", "Unreal Engine", "3D Modeling", "Frontend Development", "Backend Development", "System Administration", "Game Development", "Music Composition", "UX/UI Design", "Responsive Layout", "Animations and Interactivity", "Performance Optimization", "Game Project Testing"],
    githubUrl: "https://github.com/PyanProject"
  },
  {
    id: "python",
    name: "Python Fullstack",
    description: "Python-based solutions for web and data science",
    longDescription: 
      "Our Python team excels in delivering full-stack applications and solutions powered by Python's versatility. From web applications using Django and Flask to data processing with NumPy and Pandas, we leverage Python's ecosystem to build robust, scalable solutions for diverse needs.",
    color: "bg-yellow-500/10 dark:bg-yellow-500/20",
    headerColor: "bg-yellow-600",
    expertise: [
      "Python Development",
      "Machine Learning",
      "Computer Vision",
      "Neural Networks",
      "Data Processing"
    ],
    lead: {
      name: "Vadim A.",
      avatar: "/teams/vadim.jpg",
      position: "Team Lead / Backend Developer / Composer"
    },
    members: [
      {
        name: "Nikita K.",
        avatar: "/teams/nikita.jpg",
        position: "Python Developer / Unreal Engine Developer / System Administrator"
      },
      {
        name: "Maxim Sh.",
        avatar: "/teams/maxim-sh.jpg",
        position: "3D Modeling / Frontend and Backend Developer"
      },
      {
        name: "Maxim L.",
        avatar: "/teams/maxim-l.jpg",
        position: "3D Modeling / Unreal Engine Developer"
      },
      {
        name: "Alexander P.",
        avatar: "/teams/alexander-p.jpg",
        position: "Frontend Developer / Backend Developer / System Administrator"
      },
      {
        name: "Artem R.",
        avatar: "/teams/artem.jpg",
        position: "Graphic Designer / UI/UX Specialist"
      },
      {
        name: "Alexander Zh.",
        avatar: "/teams/alexander-zh.jpg",
        position: "Tester / QA Engineer"
      }
    ],
    skills: ["Python", "Machine Learning", "Computer Vision", "Neural Networks", "Data Processing", "Web Application Development"],
    githubUrl: "https://github.com/PyanProject"
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Modern web interfaces with focus on user experience",
    longDescription: 
      "Our Frontend team crafts visually stunning and highly functional user interfaces using the latest web technologies. We prioritize responsive design, accessibility, and performance to create seamless user experiences across devices. From simple landing pages to complex web applications, we deliver frontend solutions that delight users and drive engagement.",
    color: "bg-green-500/10 dark:bg-green-500/20",
    headerColor: "bg-green-600",
    expertise: [
      "User Interface Development",
      "UX/UI Design",
      "Responsive Layout",
      "Animations and Interactivity",
      "Performance Optimization"
    ],
    lead: {
      name: "Vadim A.",
      avatar: "/teams/vadim.jpg",
      position: "Team Lead / Backend Developer / Composer"
    },
    members: [
      {
        name: "Maxim Sh.",
        avatar: "/teams/maxim-sh.jpg",
        position: "3D Modeling / Frontend and Backend Developer"
      },
      {
        name: "Maxim L.",
        avatar: "/teams/maxim-l.jpg",
        position: "3D Modeling / Unreal Engine Developer"
      },
      {
        name: "Alexander P.",
        avatar: "/teams/alexander-p.jpg",
        position: "Frontend Developer / Backend Developer / System Administrator"
      },
      {
        name: "Artem R.",
        avatar: "/teams/artem.jpg",
        position: "Graphic Designer / UI/UX Specialist"
      }
    ],
    skills: ["User Interface Development", "UX/UI Design", "Responsive Layout", "Animations and Interactivity", "Performance Optimization"],
    githubUrl: "https://github.com/PyanProject"
  }
];

// Team members
export const teamMembers: TeamMember[] = [
  {
    id: "vadim-a",
    name: "Vadim A.",
    role: "Team Lead / Backend Developer / Composer",
    bio: "Team leader for all projects, composes music for games, and handles Python backend development. Specializes in software architecture and team coordination.",
    githubUrl: "https://github.com/aLvttt",
    avatarUrl: "/teams/vadim.jpg",
    avatarFallback: "VA",
    skills: ["Python", "Software Architecture", "Music Composition", "Team Management"],
    teams: ["python", "unreal"]
  },
  {
    id: "nikita-k",
    name: "Nikita K.",
    role: "Python Developer / Unreal Engine Developer / System Administrator",
    bio: "Full-stack developer with experience in Python and Unreal Engine. Also handles system administration and project security.",
    githubUrl: "https://github.com/keus1337",
    avatarUrl: "/teams/nikita.jpg",
    avatarFallback: "NK",
    skills: ["Python", "Unreal Engine", "System Administration", "Fullstack Development"],
    teams: ["python", "unreal", "devops"]
  },
  {
    id: "maxim-sh",
    name: "Maxim Sh.",
    role: "3D Modeling / Frontend and Backend Developer",
    bio: "Works on 3D modeling and Python development. Specializes in creating visual components and integrating them with backend systems.",
    githubUrl: "https://github.com/shisu-desu",
    avatarUrl: "/teams/maxim-sh.jpg",
    avatarFallback: "MS",
    skills: ["3D Modeling", "Python", "Frontend Development", "Backend Development"],
    teams: ["frontend", "python", "unreal"]
  },
  {
    id: "maxim-l",
    name: "Maxim L.",
    role: "3D Modeling / Unreal Engine Developer",
    bio: "Works on 3D modeling and Unreal Engine development. Creates visual assets and integrates them into game projects.",
    githubUrl: "https://github.com/Lex1k0n",
    avatarUrl: "/teams/maxim-l.jpg",
    avatarFallback: "ML",
    skills: ["3D Modeling", "Unreal Engine", "Game Development"],
    teams: ["unreal"]
  },
  {
    id: "alexander-p",
    name: "Alexander P.",
    role: "Frontend Developer / Backend Developer / System Administrator",
    bio: "Frontend developer with Node.js and React, also handles backend development with Python and project system administration.",
    githubUrl: "https://github.com/notpilesos",
    avatarUrl: "/teams/alexander-p.jpg",
    avatarFallback: "AP",
    skills: ["Frontend", "Node.js", "Python", "System Administration"],
    teams: ["frontend", "python", "devops"]
  },
  {
    id: "artem-r",
    name: "Artem R.",
    role: "Graphic Designer / UI/UX Specialist",
    bio: "Graphic designer focused on UI/UX. Creates user interfaces, visual elements, and ensures high-quality user experience.",
    githubUrl: "https://github.com/wraithsoul",
    avatarUrl: "/teams/artem.jpg",
    avatarFallback: "AR",
    skills: ["UI/UX Design", "Graphic Design", "Prototyping"],
    teams: ["frontend"]
  },
  {
    id: "alexander-j",
    name: "Alexander J.",
    role: "Tester / QA Engineer",
    bio: "Tester with experience in software quality assurance. Works on identifying bugs and improving product quality.",
    githubUrl: "https://github.com/jestelf",
    avatarUrl: "/teams/alexander-j.jpg",
    avatarFallback: "AZ",
    skills: ["Software Testing", "QA", "Test Automation"],
    teams: ["python", "unreal"]
  }
];

// Team projects
export const projects: Project[] = [
  {
    id: "survansion",
    title: "Survansion",
    description: "A horror game set in an atmospheric environment",
    tags: ["Unreal Engine", "Game", "3D"],
    team: "unreal",
    teamName: "Unreal Engine",
    imageUrl: "/projects/survansion.jpg",
    repoUrl: "https://github.com/PyanProject/survansion",
    demoUrl: "",
    featured: true,
    technologies: ["Unreal Engine", "Blueprint", "C++", "3D Modeling"],
    features: [
      "Unique atmosphere of fear",
      "Engaging gameplay",
      "Atmospheric sound design",
      "High-quality graphics"
    ]
  },
  {
    id: "face-recognition",
    title: "Face Recognition",
    description: "Advanced facial recognition using machine learning",
    longDescription: "Desktop application that uses machine learning for facial recognition with a clean and modern UI. This cross-platform app demonstrates our integration capabilities between Python backend and modern frontend.",
    tags: ["Python", "ML", "Computer Vision", "Desktop UI"],
    team: "python",
    teamName: "Python Fullstack",
    teamIds: ["python"],
    imageUrl: "/projects/face-recognition.jpg",
    repoUrl: "https://github.com/PyanProject/face-recognizer",
    demoUrl: "",
    featured: true,
    technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "Qt"],
    features: [
      "High accuracy face recognition",
      "Modern user interface",
      "Cross-platform desktop application",
      "Real-time processing"
    ]
  },
  {
    id: "website",
    title: "Pyan Inc Website",
    description: "Modern company website built with Next.js and React",
    tags: ["Frontend", "Web", "UI/UX"],
    team: "frontend",
    teamName: "Frontend",
    imageUrl: "/projects/website.png",
    repoUrl: "https://github.com/notpilesos/pyanprojects-web",
    demoUrl: "https://pyaninc.com",
    featured: true,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Modern animations",
      "Dark/light mode",
      "Optimized performance"
    ]
  },
  {
    id: "structo",
    title: "Structo",
    description: "3D structure generation from textual descriptions",
    tags: ["Python", "AI", "3D Modeling"],
    team: "python",
    teamName: "Python Fullstack",
    imageUrl: "/projects/structo.png",
    repoUrl: "https://github.com/PyanProject/structo",
    demoUrl: "https://structo.space/",
    featured: true,
    technologies: ["Python", "PyTorch", "Transformers", "3D Rendering"],
    features: [
      "Unique project for creating three-dimensional models",
      "Utilizing modern artificial intelligence technologies",
      "Ability to create 3D models from text descriptions"
    ]
  }
]; 