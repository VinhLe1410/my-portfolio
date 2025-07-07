export const links = [
  {
    name: 'Intro',
    hash: '#intro',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
] as const; // Explicitly defined value, read-only

export const skills = [
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
    items: ['Git', 'GitHub'],
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
