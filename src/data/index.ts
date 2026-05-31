export const PROJECTS = [
  {
    id: 1,
    tag: 'AI',
    tagColor: 'bg-violet text-white',
    accentBorder: 'border-violet',
    accentText: 'text-violet',
    date: 'Dec 2025 – Feb 2026',
    title: 'AI Examination & Interviewing Platform',
    desc: 'End-to-end AI proctoring platform with real-time webcam & mic monitoring. Behavioral telemetry pipeline generates live confidence scores. Led a team of 4.',
    stack: ['React', 'Computer Vision', 'Python', 'WebRTC', 'Ollama', 'Claude API'],
  },
  {
    id: 2,
    tag: 'ML',
    tagColor: 'bg-lime text-ink',
    accentBorder: 'border-lime',
    accentText: 'text-lime',
    date: 'Jun 2025 – Jul 2025',
    title: 'Brain Tumor Detection',
    desc: '97%+ accuracy MRI classification across 4 tumor types using early fusion of InceptionV3, Xception & VGG16 with a custom ANN classifier and cross-validation.',
    stack: ['TensorFlow', 'Transfer Learning', 'Deep Learning', 'Python', 'NumPy'],
  },
  {
    id: 3,
    tag: 'Full Stack',
    tagColor: 'bg-coral text-white',
    accentBorder: 'border-coral',
    accentText: 'text-coral',
    date: 'Jan 2025 – Mar 2025',
    title: 'AI Powered Farmer\'s Marketplace',
    desc: 'D2C platform connecting farmers to buyers via Django + React + PostgreSQL. AI crop recommendation and Blockchain-based contract system.',
    stack: ['Django', 'React', 'PostgreSQL', 'Blockchain', 'Odoo'],
  },
  {
    id: 4,
    tag: 'ML',
    tagColor: 'bg-lime text-ink',
    accentBorder: 'border-lime',
    accentText: 'text-lime',
    date: 'Jul – Aug 2024',
    title: 'Diamond Price Prediction',
    desc: 'Regression model with EDA on a cleaned dataset. Deployed interactively via Streamlit with feature importance visualization.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
  },
  {
    id: 5,
    tag: 'Full Stack',
    tagColor: 'bg-coral text-white',
    accentBorder: 'border-coral',
    accentText: 'text-coral',
    date: 'Apr – Jun 2024',
    title: 'Dental Management System',
    desc: 'Multi-user clinic portal using MERN stack — patient records, appointment bookings, and admin dashboard with role-based access control.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
]

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer Intern',
    company: 'The Perfume Paradise',
    location: 'Remote',
    period: 'Apr 2026 – May 2026',
    color: 'lime',
    dot: 'bg-lime',
    bullets: [
      'Built a mobile-first customer feedback platform using React, Vite, and Tailwind CSS, integrating Supabase for real-time data storage, deployed on Vercel with CI/CD via GitHub.',
      'Engineered a QR-code based review system with dynamic per-product note tagging and multi-dimension ratings.',
      'Automated post-review coupon delivery using Supabase Edge Functions and Resend API.',
    ],
    stack: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'Vercel'],
  },
  {
    role: 'ML Developer Intern',
    company: 'Bharati Vidyapeeth',
    location: 'Navi Mumbai',
    period: 'Aug 2025 – Oct 2025',
    color: 'violet',
    dot: 'bg-violet',
    bullets: [
      'Developed a Multi-Modal Early-Fusion system using Transfer Learning for brain tumor classification from T2 and T1 MRI scans with 97%+ accuracy.',
      'Fine-tuned InceptionV3, Xception, and VGG16 architectures with early fusion techniques to train a robust ANN classifier.',
      'Research paper based on this work is currently in the pipeline for publication.',
    ],
    stack: ['TensorFlow', 'Transfer Learning', 'InceptionV3', 'VGG16', 'Python'],
  },
]

export const SKILLS = {
  Languages:              { color: 'bg-violet/10 text-violet border-violet/20',   items: ['C', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  'Frameworks':           { color: 'bg-coral/10 text-coral border-coral/20',      items: ['React', 'Express', 'Flask', 'Node.js', 'Django', 'NumPy', 'Pandas', 'TensorFlow'] },
  'Technologies':         { color: 'bg-lime/10 text-lime border-lime/20',         items: ['Docker', 'WebSockets', 'Redis', 'PostgreSQL', 'REST APIs', 'Deep Learning', 'Webhooks'] },
  'Tools & Platforms':    { color: 'bg-sky/10 text-sky border-sky/20',            items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'GCP', 'Netlify', 'Vercel', 'Supabase', 'Ollama'] },
}

export const STATS = [
  { n: '8.9',  label: 'CGPA',        color: 'text-lime' },
  { n: '5+',   label: 'Projects',    color: 'text-coral' },
  { n: '2',    label: 'Internships', color: 'text-violet' },
  { n: '1',    label: 'Paper',       color: 'text-sky' },
]

export const MARQUEE_ITEMS = [
  'React', 'Python', 'TensorFlow', 'PostgreSQL', 'Docker',
  'Node.js', 'TypeScript', 'Supabase', 'Deep Learning', 'WebSockets',
  'Django', 'Redis', 'Computer Vision', 'Transfer Learning', 'REST APIs',
  'React', 'Python', 'TensorFlow', 'PostgreSQL', 'Docker',
  'Node.js', 'TypeScript', 'Supabase', 'Deep Learning', 'WebSockets',
  'Django', 'Redis', 'Computer Vision', 'Transfer Learning', 'REST APIs',
]