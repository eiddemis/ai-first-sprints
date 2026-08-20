import { AgendaItem, ResourceItem, SurveyStat, ParticipantQuote } from '../types';

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: 'agenda-1',
    time: '09:00 - 09:30',
    title: 'Welcome & Tool Setup',
    subtitle: 'Onboarding & Platform Access Verification',
    description: 'Registration, security onboarding, and ensuring all DSTA officers successfully authenticate into the required enterprise AI platforms, sandbox environments, and vibe-coding suites.',
    category: 'Morning',
    keyTakeaways: [
      'Verify dual-factor enterprise SSO and secure sandbox connectivity',
      'Initialize DSTA developer AI workspace and custom IDE extensions',
      'Briefing on security boundaries, classification guidelines, and safe testing data'
    ],
    toolsUsed: ['DSTA Secure AI Sandbox', 'VS Code / AI Studio', 'Enterprise SSO Portal'],
    trainerNotes: 'Ensure all participants have active credentials before 09:15 to maintain agenda momentum.'
  },
  {
    id: 'agenda-2',
    time: '09:30 - 10:30',
    title: '"I Can Do It Too!" (Enterprise AI)',
    subtitle: 'Prompting, Skills, Custom Connectors & Custom GPTs',
    description: 'Deep dive into advanced prompting strategies, building reusable Skills, integrating enterprise connectors, and assembling tailored Custom GPTs for everyday defence office workflows.',
    category: 'Morning',
    humanFirstBadge: {
      text: 'Liberating Human Expertise',
      description: 'Automating administrative work gives officers more time for important, mission-centric duties.'
    },
    keyTakeaways: [
      'Design structured prompts with role, context, constraints, and target outputs',
      'Configure enterprise connectors to query internal knowledge bases safely',
      'Create custom workflow GPTs for contract review, technical summarization, and log analysis'
    ],
    toolsUsed: ['Enterprise AI Skills Library', 'Custom GPT Builder', 'DSTA Prompt Cheat Sheet'],
    trainerNotes: 'Highlight privacy-preserving prompt techniques for internal defence documentation.'
  },
  {
    id: 'agenda-3',
    time: '10:45 - 11:30',
    title: '"I Can Do It Too!" (Vibe-Coding)',
    subtitle: 'Guided Live Demonstration on Rapid AI-Assisted Crafting',
    description: 'A hands-on, follow-along live coding demonstration showing how officers with zero software background can build custom interactive utilities, internal tools, and dashboards using natural language vibe-coding.',
    category: 'Morning',
    keyTakeaways: [
      'Master prompt-driven component generation and rapid iterative loops',
      'Transform requirements into working web interfaces in under 20 minutes',
      'Understand basic debugging techniques using conversational AI feedback'
    ],
    toolsUsed: ['Vibe-Coding Assistant', 'AI Studio', 'Tailwind & React Component Snippets'],
    trainerNotes: 'Demonstrate building an automated document classifier from scratch in real time.'
  },
  {
    id: 'agenda-4',
    time: '11:30 - 12:45',
    title: 'Problem Statement Framing',
    subtitle: 'Root Cause Analysis with 5 Whys & 4Cs Framework',
    description: 'Participants dissect real workplace bottlenecks using structured problem-framing methods (5 Whys and 4Cs) to pinpoint operational pain points before attempting technical solutions.',
    category: 'Morning',
    humanFirstBadge: {
      text: 'Human-First Problem Framing',
      description: 'Clearly identify actual human or workplace problems first before trying to build an AI solution.'
    },
    keyTakeaways: [
      'Apply 5 Whys to peel back surface symptoms to core friction points',
      'Utilize 4Cs (Context, Problem/Challenge, Core Impact, Capability Required) to map mission value',
      'Isolate high-friction administrative tasks from strategic engineering decisions'
    ],
    toolsUsed: ['5 Whys & 4Cs Framing Template', 'Miro / Digital Whiteboard', 'DSTA Workflow Map'],
    trainerNotes: 'Emphasize that AI should never be a solution searching for a problem. Start with human friction.'
  },
  {
    id: 'agenda-5',
    time: '13:45 - 15:45',
    title: '"We Can Do It!" (Rapid Prototyping)',
    subtitle: 'Collaborative Group Sprint & Hands-on Build',
    description: 'Cross-functional team sprint where participants build functional prototypes addressing their own department bottlenecks. Mentors provide real-time guidance on UI, logic, and output validation.',
    category: 'Afternoon',
    humanFirstBadge: {
      text: 'Human Oversight & Accountability',
      description: 'Trainers guide teams to critically check AI outputs, reinforcing that human oversight and accountability are always needed.'
    },
    keyTakeaways: [
      'Collaborate in 4-person teams to assemble a working MVP',
      'Implement human-in-the-loop validation checkpoints for all AI recommendations',
      'Test edge cases, hallucinations, and safety constraints on synthetic test data'
    ],
    toolsUsed: ['Starter Sandbox Repo', 'Rapid Prototyping Kit', 'Human Checkpoint Matrix'],
    trainerNotes: 'Roam tables actively. Challenge teams on how they verify AI outputs against ground truth.'
  },
  {
    id: 'agenda-6',
    time: '15:45 - 17:30',
    title: 'Showcase & Closing ("Human ROI" Peer Showcase)',
    subtitle: 'Team Pitches, Leadership Panel & Action Commitments',
    description: 'Teams pitch their working prototypes to peers and senior leaders. Pitches are evaluated on "Human ROI"—the quantifiable administrative hours saved and how those hours are reinvested into defence innovation.',
    category: 'Closing',
    humanFirstBadge: {
      text: 'Human ROI Evaluation',
      description: 'Evaluated on "Human ROI"—pitching saved administrative hours and how that time is reinvested into strategic work.'
    },
    keyTakeaways: [
      '3-minute live prototype demonstration + 2-minute Q&A per team',
      'Articulate Human ROI: Hours saved per officer and strategic engineering impact',
      'Commitment roadmap for deploying prototype to internal pilot trial'
    ],
    toolsUsed: ['Pitch Deck Template', 'Human ROI Metric Calculator', 'Peer Voting Portal'],
    trainerNotes: 'Award trophies for Best Human ROI, Most Innovative Prototype, and Best Security & Governance Guardrails.'
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    title: '5 Whys & 4Cs Problem Framing Template (.pdf)',
    format: 'PDF Document',
    fileSize: '1.4 MB',
    icon: 'FileText',
    description: 'A structured worksheet designed for DSTA officers to diagnose workplace bottlenecks, isolate root causes using 5 Whys, and define Context, Challenge, Core Impact & Capabilities (4Cs) before writing code or prompts.',
    filename: 'DSTA_5Whys_4Cs_Problem_Framing_Template.pdf',
    tags: ['Problem Framing', 'Worksheet', 'Root Cause Analysis'],
    downloadContent: `DSTA AI Sprint - PROBLEM FRAMING WORKSHEET

1. THE 5 WHYS ROOT CAUSE METHODOLOGY
--------------------------------------------------
Problem Statement: [State the initial workplace bottleneck]
Why #1: Why does this bottleneck occur?
Why #2: Why does that happen?
Why #3: Why is that constraint in place?
Why #4: Why haven't we automated or streamlined this?
Why #5: Root Cause Identified: [Core systemic or administrative issue]

2. THE 4CS FRAMEWORK FOR AI SPRINT SOLUTIONS
--------------------------------------------------
- CONTEXT: What is the operational or administrative environment?
- CHALLENGE: What specific delay, manual error, or cognitive load exists?
- CORE IMPACT: How many human hours per week are lost?
- CAPABILITY REQUIRED: What specific AI skill or vibe-code tool bridges the gap?

HUMAN-FIRST CHECK:
[ ] Does this solution keep a human officer in the decision loop?
[ ] How are AI outputs verified for accuracy and compliance?
[ ] What strategic defence project will reclaimed time be allocated to?`
  },
  {
    id: 'res-2',
    title: 'Vibe-Coding & Prompting Cheat Sheet (.pdf)',
    format: 'PDF Guide',
    fileSize: '2.8 MB',
    icon: 'Zap',
    description: 'Handy reference guide for DSTA engineers and officers featuring system prompt recipes, context-window optimization, error recovery formulas, and natural language layout instructions.',
    filename: 'DSTA_VibeCoding_Prompting_CheatSheet.pdf',
    tags: ['Prompting', 'Vibe-Coding', 'Cheatsheet'],
    downloadContent: `DSTA VIBE-CODING & PROMPTING CHEAT SHEET

1. THE SYSTEM PROMPT ANCHOR FORMULA
--------------------------------------------------
ROLE: "You are a senior DSTA systems engineer assisting with..."
CONTEXT: "We are processing weekly procurement logs where..."
TASK: "Extract key deadlines, identify risk flags, and present in a clean table..."
CONSTRAINTS: "Never fabricate data. Mark uncertain items with [NEEDS HUMAN REVIEW]."

2. VIBE-CODING INTERACTION TIPS
--------------------------------------------------
- Start small: Build visual structure first, then wire dynamic logic.
- Specify design rules: "Use deep navy background #0A192F with electric cyan accents #06B6D4."
- Request modular components: "Keep state clean and break cards into separate reusable files."
- Always verify: Include human verification buttons for critical outputs.

3. DSTA ENTERPRISE AI SAFETY CONSTRAINTS
--------------------------------------------------
- Do NOT input classified operational assets into public sandboxes.
- Always validate numerical or regulatory compliance outputs against official sources.`
  },
  {
    id: 'res-3',
    title: 'Starter Code & Sandbox Repo (.zip)',
    format: 'ZIP Archive',
    fileSize: '5.2 MB',
    icon: 'Archive',
    description: 'Pre-configured developer repository containing Tailwind CSS setups, React component templates, Lucide icons, and pre-built DSTA UI theme elements for instant prototyping.',
    filename: 'DSTA_AI_Sprint_Starter_Sandbox.zip',
    tags: ['Developer Starter', 'React', 'Tailwind', 'Templates'],
    downloadContent: `DSTA AI SPRINT STARTER REPOSITORY

Contents:
/src
  /components
    Header.tsx
    HumanRoiCalculator.tsx
    AgendaCard.tsx
    Badge.tsx
  /styles
    dsta-theme.css
  App.tsx
  main.tsx
package.json
README.md

Quickstart:
1. Extract ZIP to your local workspace
2. Run 'npm install'
3. Run 'npm run dev' to launch local sandbox on port 3000.`
  }
];

export const SURVEY_STATS: SurveyStat[] = [
  {
    id: 'stat-1',
    stat: '54%',
    title: 'Admin Bandwidth Drain',
    description: 'DSTA officers report that repetitive administrative tasks, manual reporting, and log consolidation consume the majority of daily bandwidth.',
    insight: 'Reclaiming this time unlocks over 20+ hours per officer each month for high-value defence tech innovation.',
    icon: 'Clock',
    highlightColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'stat-2',
    stat: '76%',
    title: 'Experimentation Sandboxes Needed',
    description: 'Highlight the critical need for protected time, enterprise AI sandboxes, and low-friction environments to safely experiment with AI workflows.',
    insight: 'Structured 1-day AI Sprints give officers the confidence and permissions to build practical solutions safely.',
    icon: 'ShieldCheck',
    highlightColor: 'from-teal-400 to-cyan-500'
  },
  {
    id: 'stat-3',
    stat: 'Human ROI',
    title: 'Focus on Strategic Value',
    description: 'Focus on reinvesting saved administrative hours back into strategic defence engineering, threat analysis, and high-impact systems work.',
    insight: 'Success is measured not by replacing humans, but by multiplying the strategic capability of every DSTA officer.',
    icon: 'TrendingUp',
    highlightColor: 'from-blue-500 to-indigo-600'
  }
];

export const PARTICIPANT_QUOTES: ParticipantQuote[] = [
  {
    id: 'quote-1',
    quote: 'Before the sprint, I spent 8 hours every week manually cross-referencing vendor specs. In one day, I vibe-coded a parser prototype that reduced that to 30 minutes with human approval steps. Game changer!',
    name: 'Tan Wei Ming',
    role: 'Senior Systems Engineer',
    department: 'Naval Systems Programme Centre'
  },
  {
    id: 'quote-2',
    quote: 'The 5 Whys framing stopped us from building a complex AI tool for a non-problem. We pivoted to a simple prompt skill that automates 70% of routine briefing deck drafts while keeping full human oversight.',
    name: 'Priya Ramasamy',
    role: 'Lead Project Manager',
    department: 'Cybersecurity Programme Centre'
  },
  {
    id: 'quote-3',
    quote: 'As a non-coder, I thought AI building was only for software devs. The AI First Sprint proved anyone with defence domain knowledge can build real, practical workplace utilities in hours.',
    name: 'Lt Col Marcus Chen',
    role: 'Head of Operations Logistics',
    department: 'Land Systems & Enterprise IT'
  }
];
