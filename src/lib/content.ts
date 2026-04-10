export const missionPillars = [
  {
    id: "growth",
    title: "Growth",
    blurb: "Room to rise — personally and together.",
    icon: "growth",
    story:
      "Everest Allegiance exists so young people can grow without ceilings. We build programs and mentorship that meet youth where they are, then stretch what feels possible — in school, in health, and in leadership.",
  },
  {
    id: "learning",
    title: "Learning",
    blurb: "Curiosity-first education that opens doors.",
    icon: "learning",
    story:
      "We remove financial friction around learning. Tutoring, workshops, and peer-led sessions help students build confidence, sharpen skills, and see education as a path they own — not a gate someone else holds.",
  },
  {
    id: "community",
    title: "Community",
    blurb: "Belonging you can feel in the room.",
    icon: "community",
    story:
      "Community is more than a word on a poster. It is introductions, shared meals, collaborative projects, and networks of care. We bring people together across backgrounds to support one another in Edmonton and beyond.",
  },
  {
    id: "impact",
    title: "Impact",
    blurb: "Initiatives designed to last.",
    icon: "impact",
    story:
      "Impact means outcomes you can trace: a student who sticks with a goal, a team that runs its own event, a partnership that multiplies good. We aim for work that compounds — for individuals and for the city we call home.",
  },
] as const;

export const storyLines = [
  {
    text: "Everest Allegiance was founded with a clear north star — to create opportunities for youth to grow, learn, and thrive.",
    keywords: ["grow", "learn", "thrive"] as const,
  },
  {
    text: "We believe financial barriers should never decide who gets support, education, or a seat at the table.",
    keywords: [] as const,
  },
  {
    text: "Beyond free programs, we help young people find their mark — exploring potential, building skills, and stepping into leadership.",
    keywords: ["empower", "leadership"] as const,
  },
  {
    text: "This is a team-led movement: passionate, diverse, and committed to positive change in Edmonton.",
    keywords: [] as const,
  },
] as const;

export const coreValues = [
  {
    id: "empowerment",
    title: "Empowerment",
    summary: "Opportunities that help youth lead with confidence.",
    detail:
      "We design experiences that build agency — so young people don't just participate, they steer. From facilitation training to project ownership, empowerment shows up in what we hand over, not just what we deliver.",
    example:
      "Example: peer-led workshops where students co-create the agenda and run the room.",
    icon: "bolt",
  },
  {
    id: "community",
    title: "Community",
    summary: "Networks of support that feel human and dependable.",
    detail:
      "Community is built in small moments: introductions that stick, teams that show up, and spaces where people feel seen. We invest in relationships because movements are carried by trust.",
    example:
      "Example: cross-neighborhood collaborations that connect mentors, families, and youth orgs.",
    icon: "people",
  },
  {
    id: "innovation",
    title: "Innovation",
    summary: "Creative problem-solving with heart and rigor.",
    detail:
      "We experiment thoughtfully — testing new formats, partnerships, and storytelling — while staying grounded in the real needs of young people. Innovation here is not novelty for its own sake; it is better outcomes, faster learning loops, and braver ideas.",
    example:
      "Example: hybrid programming that meets students where they are — in person and online.",
    icon: "bulb",
  },
] as const;

export type TeamMember = {
  id: string;
  name: string;
  roleLabel: "President" | "Team Lead";
  focus?: string;
  short: string;
  intro: string;
  vibe: string;
  initials: string;
  accent: string;
};

export const team: TeamMember[] = [
  {
    id: "arju",
    name: "Arju Baniya",
    roleLabel: "President",
    focus: "Leadership & strategy",
    short: "Sets vision and keeps the mission honest.",
    intro:
      "Arju leads with clarity and care — aligning teams, partners, and programs around what youth actually need.",
    vibe: "Calm under pressure · Big-picture · People-first",
    initials: "AB",
    accent: "from-sky-400 to-cyan-300",
  },
  {
    id: "neha",
    name: "Neha Bharati",
    roleLabel: "Team Lead",
    focus: "Operations & culture",
    short: "Builds the systems that keep us moving.",
    intro:
      "Neha makes the work sustainable — refining processes, supporting teammates, and ensuring quality stays high as we scale impact.",
    vibe: "Organized · Thoughtful · Detail-obsessed (in a good way)",
    initials: "NB",
    accent: "from-indigo-400 to-violet-400",
  },
  {
    id: "adi",
    name: "Adi Patel",
    roleLabel: "Team Lead",
    focus: "Programs & partnerships",
    short: "Connects ideas to real-world outcomes.",
    intro:
      "Adi bridges people and projects — helping initiatives land cleanly and partnerships feel mutual, not transactional.",
    vibe: "Collaborative · Practical · Energizing",
    initials: "AP",
    accent: "from-blue-400 to-indigo-500",
  },
  {
    id: "pranov",
    name: "Pranov Lama",
    roleLabel: "Team Lead",
    focus: "Marketing & storytelling",
    short: "Makes the mission impossible to ignore.",
    intro:
      "Pranov shapes how Everest Allegiance shows up online and in the community — clear voice, compelling visuals, and campaigns that invite people in.",
    vibe: "Creative · Curious · Audience-aware",
    initials: "PL",
    accent: "from-teal-400 to-emerald-400",
  },
  {
    id: "sanskar",
    name: "Sanskar Subadi",
    roleLabel: "Team Lead",
    focus: "Executive outreach",
    short: "Opens doors and builds bridges.",
    intro:
      "Sanskar focuses on relationships beyond our walls — conversations, collaborations, and introductions that expand what we can do together.",
    vibe: "Warm · Connector · Persistent (the good kind)",
    initials: "SS",
    accent: "from-amber-400 to-orange-400",
  },
  {
    id: "trisha",
    name: "Trisha Sanil",
    roleLabel: "Team Lead",
    focus: "Administration",
    short: "Keeps the engine humming.",
    intro:
      "Trisha keeps schedules, documents, and logistics aligned so the team can focus on people — not paperwork chaos.",
    vibe: "Reliable · Kind · Ridiculously on top of it",
    initials: "TS",
    accent: "from-rose-400 to-fuchsia-400",
  },
  {
    id: "divya",
    name: "Divya Chaudhari",
    roleLabel: "Team Lead",
    focus: "Internal affairs",
    short: "Protects culture and cohesion inside the team.",
    intro:
      "Divya ensures internal processes, communication, and team health stay strong — so collaboration feels smooth even when the work is complex.",
    vibe: "Grounded · Diplomatic · Team guardian",
    initials: "DC",
    accent: "from-cyan-400 to-blue-500",
  },
];

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    gradient: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    gradient: "from-[#0a66c2] to-[#004182]",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com",
    gradient: "from-zinc-900 to-zinc-700",
  },
  {
    id: "linktree",
    label: "Linktree",
    href: "https://linktr.ee",
    gradient: "from-emerald-500 to-teal-600",
  },
] as const;
