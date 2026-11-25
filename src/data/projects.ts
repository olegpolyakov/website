export type ProjectType = 'Platform' | 'Product' | 'Library' | 'Service';

export type Project = {
    slug: string;
    name: string;
    type: ProjectType;
    summary: string;
    highlights: string[];
    stack: string[];
    image?: string;
    links?: {
        live?: string;
        code?: string;
    };
    featured?: boolean;
};

// TODO: add `links.live` / `links.code` and `image` (screenshots in /public) where public.
const projects: Project[] = [
    {
        slug: 'product-suite',
        name: 'Personal Product Suite',
        type: 'Platform',
        summary: 'A monorepo of eight full-stack apps — tasks, finance, habits, documents, files, media, AI — built on shared core, database, backend, and UI layers with a single auth service.',
        highlights: [
            'Layered architecture: core → db → backend / frontend, enforced per package',
            'Shared auth service with sessions, JWT, and CSRF protection',
            'Docker images and CI/CD pipelines for every deployable'
        ],
        stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
        featured: true
    },
    {
        slug: 'ai-assistant',
        name: 'AI Assistant',
        type: 'Product',
        summary: 'A provider-agnostic AI chat app that connects to tools through the Model Context Protocol, so the assistant can act on data from the other apps in the suite.',
        highlights: [
            'Pluggable LLM providers: Anthropic, OpenAI, and local models via Ollama',
            'MCP client and server — the Tasks backend exposes its API as tools',
            'Streaming chat UI built on the shared component library'
        ],
        stack: ['TypeScript', 'React', 'Node.js', 'MCP', 'Claude API', 'Ollama'],
        featured: true
    },
    {
        slug: 'tasks',
        name: 'Tasks',
        type: 'Product',
        summary: 'Task and project manager with tags, rich-text notes, and localization — plus an MCP server so AI agents can read and manage tasks.',
        highlights: [
            'MCP server exposes the Tasks API as Zod-validated tools for AI agents',
            'Rich-text task notes powered by my reusable editor package',
            'Localized UI with i18next and automatic language detection'
        ],
        stack: ['React', 'Node.js', 'MCP', 'Zod', 'i18next'],
        featured: true,
        links: {
            code: 'https://github.com/olegpolyakov/tasks',
            live: 'https://tasks.olegpoliakov.dev'
        }
    },
    {
        slug: 'ui',
        name: 'UI Components',
        type: 'Library',
        summary: 'An accessible, themeable React component library with 40+ components, used by every app in the suite — including this site.',
        highlights: [
            'Polymorphic, typed components with a consistent props API',
            'Light and dark themes driven by CSS custom properties',
            'Popovers, drag-and-drop, and transitions built on Floating UI and dnd-kit'
        ],
        stack: ['React', 'TypeScript', 'Sass', 'Floating UI', 'Vite'],
        featured: true,
        links: {
            code: 'https://github.com/olegpolyakov/ui',
            live: 'https://olegpolyakov.github.io/ui'
        }
    },
    {
        slug: 'editor',
        name: 'Rich Text Editor',
        type: 'Library',
        summary: 'A rich content editor package built on Lexical, with toolbar, code highlighting, lists, links, and optional collaborative mode.',
        highlights: [],
        stack: ['React', 'Lexical', 'Yjs', 'Prism']
    },
    {
        slug: 'documents',
        name: 'Documents',
        type: 'Product',
        summary: 'A Notion-style document editor with real-time collaboration, drag-and-drop blocks, and server-side document processing.',
        highlights: [
            'Real-time multi-user editing with Yjs CRDTs over WebSockets',
            'Headless Lexical on the server for rendering and indexing',
            'Built on my reusable rich-text editor package'
        ],
        stack: ['React', 'Lexical', 'Yjs', 'WebSocket', 'Node.js']
    },
    {
        slug: 'finance',
        name: 'Finance',
        type: 'Product',
        summary: 'Personal finance tracker with multi-currency accounts, live exchange rates, and precise money arithmetic.',
        highlights: [],
        stack: ['React', 'Jotai', 'Node.js', 'MongoDB']
    },
    {
        slug: 'files',
        name: 'Files',
        type: 'Product',
        summary: 'Cloud file storage backed by S3 with in-browser previews for PDFs and media.',
        highlights: [],
        stack: ['React', 'Node.js', 'AWS S3', 'react-pdf']
    },
    {
        slug: 'media',
        name: 'Media',
        type: 'Product',
        summary: 'Media catalog with an authorized ingestion service that streams content into S3 and serves it with presigned URLs.',
        highlights: [],
        stack: ['React', 'Node.js', 'Express', 'AWS S3']
    },
    {
        slug: 'auth',
        name: 'Auth Service',
        type: 'Service',
        summary: 'Central authentication service shared by all apps: accounts, password hashing, sessions, and token issuing.',
        highlights: [],
        stack: ['Node.js', 'Express', 'MongoDB', 'JWT']
    }
];

export default projects;
