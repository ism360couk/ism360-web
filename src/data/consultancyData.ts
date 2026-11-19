export interface PdcaStage {
  id: 'plan' | 'do' | 'check' | 'act';
  label: string;
  headline: string;
  summary: string;
  deliverables: string[];
  accentClass: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  metaLine: string;
  description: string;
  outcomes: string[];
  inquiryValue: string;
  featured?: boolean;
}

export interface AccreditationTrack {
  id: 'ce' | 'ce-plus' | 'iso-27001' | 'audit-dpo';
  tabLabel: string;
  title: string;
  typicalTimeline: string;
  idealFor: string;
  overview: string;
  softwareFocus: string[];
  deliverables: string[];
  inquiryValue: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const CONTACT_INFO = {
  company: 'ISM360 Ltd',
  consultant: 'Thomas Jones',
  role: 'Principal Information Security Consultant',
  email: 'tom.jones@ism360.co.uk',
  phoneDisplay: '07776 238250',
  phoneHref: 'tel:+447776238250',
  linkedinUrl: 'https://www.linkedin.com/in/thomasajones/',
  logoSrc: './assets/aistudio/image_9854f9cc.png',
  region: 'United Kingdom',
};

export const HERO_METRICS = [
  {
    value: '2–4 Weeks',
    label: 'Cyber Essentials Readiness',
    context: 'Scoped to cloud & remote teams',
  },
  {
    value: '8–14 Weeks',
    label: 'ISO 27001:2022 ISMS Build',
    context: 'Stage 1 & Stage 2 audit-ready',
  },
  {
    value: 'Zero Bloat',
    label: 'Developer-First Policies',
    context: 'Built for Git, CI/CD & SaaS stacks',
  },
  {
    value: 'Direct',
    label: 'Senior Consultant Access',
    context: 'Delivered personally by Thomas Jones',
  },
];

export const PDCA_STAGES: PdcaStage[] = [
  {
    id: 'plan',
    label: 'Plan',
    headline: 'Scope, Gap Analysis & Risk Baseline',
    summary:
      'Define a pragmatic boundary around your SaaS platform, cloud infrastructure, and developer endpoints before writing a single policy.',
    deliverables: [
      'Current-state posture review against CE, CE+, or ISO 27001:2022',
      'Asset, cloud environment, and third-party supplier mapping',
      'Prioritised remediation roadmap aligned with sales deadlines',
    ],
    accentClass: 'bg-sky-500',
  },
  {
    id: 'do',
    label: 'Do',
    headline: 'Lean Controls & Policy Engineering',
    summary:
      'Implement technical and governance controls that fit how software engineers actually work—without slowing down product releases.',
    deliverables: [
      'MFA, endpoint MDM, patching, and firewall hardening',
      'Concise, plain-English ISMS policies & Statement of Applicability',
      'UK GDPR records of processing (RoPA) and DPIA workflows',
    ],
    accentClass: 'bg-sky-700',
  },
  {
    id: 'check',
    label: 'Check',
    headline: 'Internal Audits & Pre-Assessment Testing',
    summary:
      'Verify every technical and procedural requirement with objective internal audits and mock vulnerability checks prior to external assessment.',
    deliverables: [
      'Independent ISO 27001 internal audit & Annex A sampling',
      'Mock CE+ device & external perimeter vulnerability verification',
      'Clear, prioritised non-conformity and evidence register',
    ],
    accentClass: 'bg-blue-800',
  },
  {
    id: 'act',
    label: 'Act',
    headline: 'Certification Sign-Off & Continuous Governance',
    summary:
      'Close out findings cleanly, support your external assessor interviews, and maintain compliance effortlessly across surveillance cycles.',
    deliverables: [
      'Assessor liaison through Stage 1, Stage 2 & CE+ verification',
      'Management review facilitation & corrective action tracking',
      'Ongoing external DPO oversight and annual renewal readiness',
    ],
    accentClass: 'bg-[#0E3B6E]',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'cyber-essentials',
    number: '01',
    title: 'Cyber Essentials & Cyber Essentials Plus (CE+)',
    metaLine: 'Technical Accreditation · UK NCSC-Backed Scheme',
    description:
      'Practical support to harden cloud-connected laptops, developer machines, firewalls, and SaaS admin accounts so your team passes self-assessment and hands-on CE+ technical verification first time.',
    outcomes: [
      'Clear boundary scoping for remote and hybrid engineering teams',
      'Patch cadence, MFA, and least-privilege access remediation guidance',
      'Pre-assessment vulnerability checks before your CE+ assessor test',
    ],
    inquiryValue: 'Cyber Essentials & CE+',
    featured: true,
  },
  {
    id: 'iso-27001',
    number: '02',
    title: 'ISO 27001:2022 Implementation & ISMS Support',
    metaLine: 'Enterprise Readiness · Information Security Management System',
    description:
      'A right-sized Information Security Management System engineered for small software houses. Satisfy enterprise vendor security questionnaires without drowning engineers in heavyweight corporate bureaucracy.',
    outcomes: [
      'Tailored Risk Register & Statement of Applicability (Annex A)',
      'SDLC, change management & cloud security controls that match your stack',
      'Full walkthrough preparation for UKAS-accredited Stage 1 & Stage 2 audits',
    ],
    inquiryValue: 'ISO 27001:2022 Implementation',
    featured: true,
  },
  {
    id: 'internal-audits',
    number: '03',
    title: 'Independent Internal Audits',
    metaLine: 'Objective Assurance · Pre-Certification & Surveillance',
    description:
      'Impartial ISO 27001 internal audits that satisfy Clause 9.2 requirements and uncover evidence gaps early—giving founders and CTOs complete confidence ahead of external certification visits.',
    outcomes: [
      'Documented Clause 4–10 & Annex A evidence sampling',
      'Actionable audit report with plain-English remediation steps',
      'Suitable for initial certification or annual surveillance cycles',
    ],
    inquiryValue: 'Internal Audits',
  },
  {
    id: 'external-dpo',
    number: '04',
    title: 'External Data Protection Officer (DPO)',
    metaLine: 'UK GDPR Governance · Fractional Compliance Leadership',
    description:
      'Dedicated external DPO representation for software businesses processing customer or employee data—covering DPIAs, Data Processing Agreements, SAR handling, and ICO correspondence.',
    outcomes: [
      'Named External DPO listed in privacy notices & customer DPAs',
      'Data Protection Impact Assessments for new product & AI features',
      'Practical incident response & breach notification guidance',
    ],
    inquiryValue: 'External DPO Service',
  },
];

export const ACCREDITATION_TRACKS: AccreditationTrack[] = [
  {
    id: 'ce',
    tabLabel: 'Cyber Essentials',
    title: 'Cyber Essentials Readiness',
    typicalTimeline: '2–4 weeks',
    idealFor: 'Software startups bidding on UK public sector, G-Cloud, or mid-market B2B contracts',
    overview:
      'Establishes five foundational technical controls across firewalls, secure configuration, user access, malware protection, and security update management.',
    softwareFocus: [
      'Clarifying scope across cloud-hosted SaaS vs. developer laptops',
      'Enforcing MFA across GitHub, AWS/Azure/GCP, Microsoft 365 & Google Workspace',
      'Aligning macOS, Windows, and Linux developer patching within 14-day windows',
    ],
    deliverables: [
      'Gap assessment & plain-English remediation checklist',
      'Questionnaire drafting & evidence verification',
      'Submission support with an IASME Certification Body',
    ],
    inquiryValue: 'Cyber Essentials & CE+',
  },
  {
    id: 'ce-plus',
    tabLabel: 'Cyber Essentials Plus',
    title: 'Cyber Essentials Plus (CE+) Verification',
    typicalTimeline: '3–6 weeks',
    idealFor: 'Software vendors needing independently tested proof of technical security controls',
    overview:
      'Builds on Cyber Essentials with an independent hands-on technical audit—including internal/external vulnerability scans and workstation configuration sampling.',
    softwareFocus: [
      'Pre-audit device sampling checks across Windows, macOS, and mobile endpoints',
      'Remediating high/critical CVEs on browsers, runtimes, and OS builds',
      'Testing email attachment & browser download malware defences',
    ],
    deliverables: [
      'Mock technical verification before the external assessor books in',
      'Prioritised CVE & configuration fix list for your IT/DevOps lead',
      'Live support during the assessor’s sample device testing session',
    ],
    inquiryValue: 'Cyber Essentials & CE+',
  },
  {
    id: 'iso-27001',
    tabLabel: 'ISO 27001:2022',
    title: 'ISO 27001:2022 Certification Support',
    typicalTimeline: '8–14 weeks',
    idealFor: 'Growing SaaS companies unblocking enterprise procurement and international RFPs',
    overview:
      'Builds a complete, auditable Information Security Management System (ISMS) aligned to the 2022 standard—structured around your real engineering workflows.',
    softwareFocus: [
      'Secure SDLC, peer code review, secret management & CI/CD governance',
      'Cloud access control, backup testing & incident response playbooks',
      'Supplier due diligence for subprocessors and third-party APIs',
    ],
    deliverables: [
      'Complete ISMS policy suite, Risk Register & Statement of Applicability',
      'Staff security awareness onboarding & evidence collection structure',
      'Clause 9.2 Internal Audit, Management Review & Stage 1/2 support',
    ],
    inquiryValue: 'ISO 27001:2022 Implementation',
  },
  {
    id: 'audit-dpo',
    tabLabel: 'Internal Audit & DPO',
    title: 'Internal Audits & External DPO Retainer',
    typicalTimeline: '1–2 weeks (Audit) / Ongoing (DPO)',
    idealFor: 'Certified teams maintaining compliance or SaaS firms needing independent GDPR oversight',
    overview:
      'Combines impartial internal audit assurance for ISO 27001 with practical, fractional Data Protection Officer support under UK GDPR.',
    softwareFocus: [
      'Independent review of Annex A controls and operational security logs',
      'DPIA reviews for new analytics, telemetry, or third-party integrations',
      'Customer DPA redline guidance to accelerate legal & procurement sign-off',
    ],
    deliverables: [
      'Audit schedule, interview notes & clear non-conformity action plan',
      'Named External DPO contact & quarterly privacy governance reviews',
      'Direct support for Subject Access Requests & security incidents',
    ],
    inquiryValue: 'Internal Audits',
  },
];

export const SOFTWARE_PROOF_POINTS = [
  {
    title: 'Unblock Enterprise Security Questionnaires',
    detail:
      'Stop losing weeks of CTO and engineering time to 200-row spreadsheets. An accredited ISMS and CE+ badge answer procurement teams directly.',
    metric: '1–2 Days',
    metricLabel: 'Typical questionnaire turnaround once accredited',
  },
  {
    title: 'Engineered for Cloud & Remote Teams',
    detail:
      'No legacy server-room assumptions. Controls are mapped cleanly to AWS, Azure, GCP, GitHub, MDM-managed laptops, and distributed UK teams.',
    metric: '100%',
    metricLabel: 'Aligned to modern SaaS & remote-first architectures',
  },
  {
    title: 'Fixed-Scope, Transparent Consultancy',
    detail:
      'Clear milestones and fixed deliverables agreed upfront—so small software companies know the exact investment and timeline before starting.',
    metric: 'Direct',
    metricLabel: 'Senior consultant delivery from scoping to sign-off',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-timeline',
    question: 'How long does it take a small software company to achieve Cyber Essentials or CE+?',
    answer:
      'Most small software teams complete Cyber Essentials within 2 to 4 weeks. Adding Cyber Essentials Plus typically takes an additional 2 to 4 weeks to verify patching, MFA, and device configurations across a representative sample before the external assessor test.',
  },
  {
    id: 'faq-ce-vs-iso',
    question: 'Should our software company start with Cyber Essentials or go straight to ISO 27001?',
    answer:
      'If you need rapid proof of baseline technical controls for UK public sector or mid-market buyers, Cyber Essentials and CE+ provide the fastest return. If enterprise procurement requires formal governance, risk management, and an ISMS, ISO 27001:2022 is the right standard—and the technical controls from Cyber Essentials map directly into ISO 27001.',
  },
  {
    id: 'faq-dpo',
    question: 'What does an External DPO service cover for a SaaS business?',
    answer:
      'An External Data Protection Officer provides independent UK GDPR oversight, Data Protection Impact Assessments (DPIAs) for new product features, customer DPA reviews, breach response guidance, and ICO liaison without the overhead of a full-time executive hire.',
  },
  {
    id: 'faq-audit',
    question: 'Do you handle ISO 27001 internal audits even if we built our own ISMS?',
    answer:
      'Yes. ISO 27001 Clause 9.2 requires an impartial internal audit prior to certification and across annual surveillance cycles. ISM360 Ltd conducts pragmatic, evidence-based internal audits that uncover gaps early and prepare your team for external UKAS-accredited assessments.',
  },
  {
    id: 'faq-engagement',
    question: 'Who actually delivers the consultancy work at ISM360 Ltd?',
    answer:
      'Every engagement is scoped and delivered directly by Principal Consultant Thomas Jones. There is no hand-off to junior analysts—you work directly with an experienced information security consultant from initial gap analysis through certification.',
  },
];
