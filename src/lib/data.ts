export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const; // Explicitly defined value, read-only

export const technologies = [
  {
    category: 'Frontend',
    items: ['HTML', 'NEXT.js', 'Vue.js', 'React', 'React Native', 'Expo'],
  },
  {
    category: 'Backend',
    items: ['Prisma', 'PHP'],
  },
  {
    category: 'Data Science & Analytics',
    items: ['KNIME', 'Power BI', 'Hadoop', 'Python'],
  },
  {
    category: 'Database(s)',
    items: ['MySQL', 'PostgreSQL', 'Oracle SQL', 'SQLite'],
  },
  {
    category: 'Cloud Services',
    items: ['AWS', 'Azure Cloud Services'],
  },
  {
    category: 'Containerization',
    items: ['Docker'],
  },
  {
    category: 'Version Control',
    items: ['Git', 'GitHub', 'GitLab'],
  },
  {
    category: 'DevOps Platform(s)',
    items: ['GitHub Actions', 'GitLab CI/CD'],
  },
  {
    category: 'Design',
    items: ['Figma', 'Draw.io', 'Eraser.io', 'Excalidraw', 'Lucidchart'],
  },
] as const;
