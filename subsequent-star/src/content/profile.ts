// src/content/profile.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all portfolio copy.
// Do NOT hardcode any resume facts inside .astro components — edit here only.
// ─────────────────────────────────────────────────────────────────────────────

export interface Meta {
  name: string;
  title: string;
  description: string;
  url: string;
}

export interface ContactLink {
  label: string;
  href: string;
  display: string;
}

export interface Hero {
  name: string;
  title: string;
  framing: string;
  cta: { text: string; href: string };
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  expectedGraduation: string;
  coursework: string[];
}

export interface About {
  bio: string;
  education: Education;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Project {
  name: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  description: string;
}

export interface Hackathon {
  event: string;
  year: string;
  projectName: string;
  stack?: string[];
  description: string;
}

// ─── Meta ────────────────────────────────────────────────────────────────────

export const meta: Meta = {
  name: 'Arpan Barik',
  title: 'Blockchain & Web3 Developer — Portfolio',
  description:
    'Blockchain-focused CS undergraduate building full-stack Web3 systems: smart contracts, zero-knowledge proofs, and AI-integrated applications.',
  url: 'https://arpanbarik.dev',
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contact: ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/arpan2006hub',
    display: '\u00A0\u00A0github.com/arpan2006hub',
  },
  {
    label: 'X', // Adds padding spaces after X
    href: 'https://x.com/arpan_barik_06',
    display: '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0@arpan_barik_06',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arpan-barik-75156a325/',
    display: 'arpan-barik-75156a325',
  },
  {
    label: 'Email',
    href: 'mailto:arpanbarik2966@gmail.com',
    display: '\u00A0\u00A0\u00A0arpanbarik2966@gmail.com',
  },
];

// ─── Hero ────────────────────────────────────────────────────────────────────

export const hero: Hero = {
  name: 'Arpan Barik',
  title: 'Computer Science Undergraduate — Blockchain & Web3 Developer',
  framing:
    'Builds full-stack Web3 systems — smart contracts, zero-knowledge proofs, and AI-integrated applications.',
  cta: {
    text: 'Building for ETHMumbai 2026 →',
    href: '#projects',
  },
};

// ─── About ───────────────────────────────────────────────────────────────────

export const about: About = {
  bio: 'Blockchain-focused Computer Science undergraduate who builds full-stack Web3 systems — smart contracts, zero-knowledge proofs, and AI-integrated applications. Fluent in modern AI-assisted/vibe-coding workflows (Claude Code, Codex, Antigravity, Copilot Pro, Cursor, Google AI Studio) to design, build, and ship production-grade software fast. Proven track record across national hackathons and academic/personal capstone projects, with a problem-first mindset and strong fundamentals in cryptocurrencies, decentralized systems, and Web3.',
  education: {
    degree: 'B.Tech, Computer Science Engineering — Specialization in Blockchain',
    institution: 'Bennett University',
    location: 'Greater Noida',
    year: '3rd Year',
    expectedGraduation: '2028',
    coursework: [
      'Blockchain Engineering',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
    ],
  },
};

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      'Python',
      'C++',
      'Solidity',
      'Java',
      'JavaScript',
      'TypeScript',
      'Go',
    ],
  },
  {
    label: 'Blockchain & Web3',
    items: [
      'Foundry',
      'Hardhat',
      'web3.js',
      'ethers.js',
      'OpenZeppelin',
      'Hyperledger Fabric',
    ],
  },
  {
    label: 'Frameworks & Tools',
    items: ['React', 'Node.js', 'Tailwind CSS', 'Git', 'Docker'],
  },
  {
    label: 'AI-Assisted Development',
    items: [
      'Cursor',
      'Claude Code',
      'Opencode',
      'Codex',
      'Antigravity',
      'GitHub Copilot Pro',
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    name: 'measuringTape',
    stack: ['TypeScript', 'Solidity', 'Ethereum (Sepolia)', 'IPFS'],
    githubUrl: 'https://github.com/arpan2006hub/measuringTape',
    liveUrl: 'https://measuringtape-842872571231.asia-southeast1.run.app/',
    description:
      'Full-stack decentralized platform for reporting civic issues (potholes, broken streetlights, garbage dumps) with every report stored on IPFS. Issues verified by the local community via real-time on-chain consensus, then received by authorities/municipality; all actions taken are updated on-chain and re-verified via community consensus. Solidity smart contract deployed on Sepolia for immutable, tamper-proof reports, consensus results, and reputations, enabling verification and user accountability.',
  },
  {
    name: 'Dermalyze',
    stack: ['TensorFlow', 'Solidity', 'Ethereum (Sepolia)', 'IPFS'],
    githubUrl:
      'https://github.com/Apratim14112/derma-ai/tree/feature/derma-updates',
    description:
      'Co-built a full-stack AI-powered skin-disease detection platform pairing deep-learning diagnostics with blockchain-verified medical reports. Designed and deployed Solidity smart contracts on Ethereum Sepolia for immutable, tamper-proof verification of medical reports. Engineered IPFS-based decentralized storage for secure, persistent report data.',
  },
  {
    name: 'zkAttend',
    stack: ['Solidity', 'TypeScript', 'Tailwind CSS', 'Ethereum (Sepolia)'],
    githubUrl: 'https://github.com/arpan2006hub/zkAttend',
    description:
      'Full-stack, proxy-proof attendance verification system using zero-knowledge proofs on Ethereum Sepolia, with an NFT-based reward mechanism to incentivize verified attendance, built end to end.',
  },
];

// ─── Hackathons ───────────────────────────────────────────────────────────────

export const hackathons: Hackathon[] = [
  {
    event: 'Google × CodingNinjas: Vibe2Ship Hackathon',
    year: '2026',
    projectName: 'measuringTape',
    description:
      'Built measuringTape — see Projects above.',
  },
  {
    event: 'Smart India Hackathon',
    year: '2025',
    projectName: 'Medi-Link',
    stack: [
      'Cloudflare Workers',
      'Hono',
      'Prisma',
      'PostgreSQL',
      'DeepSeek LLM',
      'FHIR R4',
    ],
    description:
      'Built an interoperability bridge connecting India\'s NAMASTE traditional-medicine coding system with global ICD-11 standards. Developed a bulk CSV ingestion pipeline generating instant FHIR CodeSystems & ConceptMaps from NAMASTE datasets.',
  },
];
