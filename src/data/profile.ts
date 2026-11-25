export type Contact = {
    name: 'email' | 'github' | 'linkedin' | 'telegram';
    label: string;
    href: string;
};

export type Skill = {
    group: string;
    items: string[];
};

export type Job = {
    role: string;
    company: string;
    url?: string;
    period: string;
    summary: string;
};

export const profile = {
    name: 'Oleg Poliakov',
    handle: 'olegpolyakov',
    role: 'Senior Full-Stack Engineer',
    tagline: 'React + Node.js',
    summary: 'I design and build digital products end to end — from data models and APIs to polished interfaces. 10+ years as a founding engineer and in product teams, lately focused on AI-powered features with LLMs and RAG.',
    resumeUrl: 'https://resume.olegpoliakov.dev'
};

export const contacts: Contact[] = [
    { name: 'email', label: 'Email', href: 'mailto:olegpoliakov@outlook.com' },
    { name: 'github', label: 'GitHub', href: 'https://github.com/olegpolyakov' },
    { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/olegpoliakov-dev' },
    { name: 'telegram', label: 'Telegram', href: 'https://t.me/olegpolyakov' }
];

export const skills: Skill[] = [
    { group: 'Core', items: ['TypeScript', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'WebSocket'] },
    { group: 'AI & LLMs', items: ['LLM integrations', 'RAG', 'Vector search', 'Embeddings (Qdrant)', 'Tool calling', 'MCP', 'AI agents'] },
    { group: 'Infrastructure & testing', items: ['Docker', 'CI/CD', 'Git/GitHub', 'Jest', 'Vitest', 'Mocha', 'Puppeteer'] },
    { group: 'Practices', items: ['System design', 'Data modeling', 'Code review', 'Refactoring', 'TDD', 'Component libraries'] },
    { group: 'AI-assisted development', items: ['Claude Code', 'GitHub Copilot', 'OpenAI Codex'] },
    { group: 'Also used', items: ['Angular', 'Vue', 'C#/ASP.NET', 'PHP', 'MySQL', 'Tailwind CSS', 'Storybook'] }
];

export const experience: Job[] = [
    {
        role: 'Full-Stack Developer',
        company: 'Say Yes',
        url: 'https://sayyes.school',
        period: '2026 — Present',
        summary: 'Leading AI and modernization work: split the monolith into 11 event-driven services, set up Docker CI/CD, and shipped an LLM-assisted content editor for teachers. Now building an AI tutor and RAG-based learning plans.'
    },
    {
        role: 'Full-Stack Developer',
        company: 'Famiry',
        url: 'https://famiry.ru',
        period: '2022 — 2026',
        summary: 'Led a shared React component library adopted across products. Owned full-stack features (a Notion-style editor, real-time chat, maps, feeds and photo albums) in a 4-engineer product team, including WebSocket and async backend services.'
    },
    {
        role: 'Founder, Author & Full-Stack Developer',
        company: 'CodeDojo',
        url: 'https://codedojo.io',
        period: '2016 — 2022',
        summary: 'Founded an e-learning platform for programming used by thousands of learners — wrote the courses and built the software: course delivery, user management, content publishing, and progress tracking.'
    },
    {
        role: 'Co-Founder & Full-Stack Developer',
        company: 'Say Yes',
        url: 'https://sayyes.school',
        period: '2015 — 2022',
        summary: 'Sole engineer, then tech lead for seven years: designed and evolved a multi-module platform for learning, content management and school operations.'
    }
];
