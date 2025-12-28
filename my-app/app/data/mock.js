// Mock data for Tugsu's portfolio

export const personalInfo = {
  name: "TUGSU",
  title: "Programming Student & Web Developer",
  grade: "12th Grade Student",
  bio: "12th-grade student passionate about software development and technology. Skilled in HTML, CSS, JS and Next.JS with hands-on project experience. Focused on web development, wireframe creation, and problem-solving.",
  profileImage: "jj/jpg",
  location: "Ulaanbaatar, Mongolia",
  email: "tugsjargal256@gmail.com",
  socialLinks: {
    github: "https://github.com/hiremos376",
    facebook: "https://www.facebook.com/uchiha.tugsu",
    instagram: "https://www.instagram.com/god_of_6",
    website: "https://realportfolio.com"
  }
};

export const skills = {
  programming: [
    { name: "HTML/CSS", level: 100, category: "Web Development" },
    { name: "JavaScript", level: 75, category: "Programming" },
    { name: "Next.JS", level: 90, category: "Web Development" },
    { name: "Front End Coding", level: 90, category: "Web Development" },
    { name: "Git/GitHub", level: 65, category: "Tools" },
    { name: "Project Management Tools", level: 80, category: "Tools" }
  ],
  creative: [
    { name: "Web Design", level: 85, category: "Design" },
    { name: "Wireframe Creation", level: 80, category: "Design" },
    { name: "Design Thinking", level: 75, category: "Design" },
    { name: "Problem-Solving", level: 90, category: "Skills" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Mindoly Web Application",
    description: "Designed and developed a web application for Mindoly, enhancing user interaction for a school project. Collaborated with a team to implement core features.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Next.JS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    featured: false,
    year: "2024-2025",
    client: "Amjilt Cyber School"
  },
  {
    id: 2,
    title: "Altai Resort Website",
    description: "Created a custom website for Altai Resort, improving online visibility for a rural hotel. Implemented responsive design ensuring accessibility on mobile and desktop devices.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
    featured: false,
    year: "2024-2025",
    client: "Altai Resort"
  },
  {
    id: 3,
    title: "Tridum Development Tasks",
    description: "Contributed to small-scale development tasks, supporting team projects at Tridum. Assisted in code reviews and documentation, gaining hands-on experience with web technologies.",
    category: "Web Development",
    technologies: ["JavaScript", "HTML", "CSS", "Project Management"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/turbold/tridum-tasks",
    featured: false,
    year: "2024-2025",
    client: "Tridum"
  },
  {
    id: 4,
    title: "Personal Portfolio Wireframes",
    description: "Created detailed wireframes and prototypes for various web projects using design thinking methodology. Focus on user experience and interface design principles.",
    category: "Design",
    technologies: ["Wireframing", "Design Thinking", "UX/UI", "Prototyping"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
    behanceUrl: "https://behance.net/turbold/wireframes",
    featured: false,
    year: "2024"
  },
  {
    id: 5,
    title: "School Project Management",
    description: "Led multiple school projects using project management tools and methodologies. Coordinated team efforts and ensured timely delivery of web development assignments.",
    category: "Management",
    technologies: ["Project Management", "Team Collaboration", "Planning"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    featured: false,
    year: "2024"
  }
];

export const achievements = [
  {
    title: "Junior High School Excellence",
    description: "Graduated from 82th School with focus on technology and programming",
    year: "2020-2023",
    type: "Education"
  },
  {
    title: "Web Development Experience",
    description: "Successfully completed multiple client projects including Altai Resort website",
    year: "2024-2025",
    type: "Professional"
  },
  {
    title: "Team Collaboration",
    description: "Contributed to development teams at both Tridum and Amjilt Cyber School",
    year: "2024-2025",
    type: "Experience"
  }
];

export const testimonials = [
  {
    name: "Amjilt Cyber School",
    role: "Project Supervisor",
    text: "Tugsu demonstrated excellent technical skills and teamwork in developing the Mindoly web application. His problem-solving approach and attention to detail were outstanding.",
    image: "https://images.unsplash.com/photo-1494790108755-2616c98a4505?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Altai Resort Management",
    role: "Client",
    text: "Tugsu delivered our website project on time and exceeded our expectations. The responsive design and professional approach enhanced our online presence significantly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

// Education and Language information
export const education = [
  {
    level: "Junior High School",
    school: "82th School",
    period: "2020-2023",
    status: "Graduated"
  },
  {
    level: "High School",
    school: "Amjilt Cyber School",
    period: "2023-2026",
    status: "Current"
  }
];

export const languages = [
  {
    language: "English",
    level: "Intermediate",
    proficiency: 70
  },
  {
    language: "Mongolian",
    level: "Fluent",
    proficiency: 100
  }
];

// Mock form submission handler
export const handleContactSubmission = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  });
};