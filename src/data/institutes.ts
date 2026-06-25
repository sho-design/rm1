// The Apple Method: one institution, many worlds of care. Each institute is a
// self-contained experience (its own accent, hero, content, team, booking
// funnel) that lives under the single restorationmedical.ca domain so all SEO
// authority consolidates here.
//
// Two institutes already exist as standalone sites (Medical Aesthetics, Infusion
// Therapy) and will be merged in under their subdirectory once source access is
// granted. The rest are scaffolded here and grow into full ~40–80 page worlds.

export type Accent = 'injectables' | 'skin' | 'energy' | 'body' | 'health' | 'clinical';

export interface Pillar {
  name: string;
  line: string;
}

export interface Institute {
  /** URL slug → /{slug} */
  slug: string;
  /** Short label, e.g. "Medical Aesthetics" */
  name: string;
  /** Full institute name, e.g. "Institute of Medical Aesthetics" */
  formalName: string;
  /** Design-system accent token that themes this institute's world. */
  accent: Accent;
  /** One-line essence for cards and meta. */
  essence: string;
  /** Hero headline (lead clause). */
  heroLead: string;
  /** Hero headline (emphasised clause, rendered italic). */
  heroEmphasis: string;
  /** Hero supporting paragraph. */
  lead: string;
  /** 3–4 pillars that define this institute. */
  pillars: Pillar[];
  /** 'live' institutes have a working standalone site to link to / merge. */
  status: 'live' | 'planned';
  /** Live standalone deployment, if any (interim link until merge). */
  liveUrl?: string;
}

export const institutes: Institute[] = [
  {
    slug: 'family-medicine',
    name: 'Family Medicine',
    formalName: 'Institute of Family Medicine',
    accent: 'body',
    essence: 'Continuous, whole-person primary care for every stage of life.',
    heroLead: 'Care that knows you',
    heroEmphasis: 'over time.',
    lead: 'A medical home for the whole family — preventive care, chronic-condition management, and a clinician who actually knows your history.',
    pillars: [
      { name: 'Primary care', line: 'A consistent clinician for check-ups, screening, and everyday health.' },
      { name: 'Chronic care', line: 'Structured, monitored management of long-term conditions.' },
      { name: 'Prevention', line: 'Screening and lifestyle guidance, grounded in the evidence.' },
    ],
    status: 'planned',
  },
  {
    slug: 'pain-medicine',
    name: 'Pain Medicine',
    formalName: 'Institute of Pain Medicine',
    accent: 'clinical',
    essence: 'A measured, multidisciplinary path through persistent pain.',
    heroLead: 'Understand the pain.',
    heroEmphasis: 'Then quiet it.',
    lead: 'Diagnosis first, then a considered plan — interventional, medical, and rehabilitative options held to one clinical standard.',
    pillars: [
      { name: 'Assessment', line: 'A thorough diagnostic work-up before any treatment is proposed.' },
      { name: 'Interventional', line: 'Targeted, image-guided procedures where the evidence supports them.' },
      { name: 'Whole-person', line: 'Coordinated care across movement, medicine, and mental load.' },
    ],
    status: 'planned',
  },
  {
    slug: 'medical-aesthetics',
    name: 'Medical Aesthetics',
    formalName: 'Institute of Medical Aesthetics',
    accent: 'injectables',
    essence: 'Physician-led aesthetics — subtle by design, honest about results.',
    heroLead: 'Look like yourself,',
    heroEmphasis: 'refined.',
    lead: 'Injectables, skin and resurfacing, energy and laser, body, and medical-grade skin health. We screen first, tailor to you, and treat with restraint.',
    pillars: [
      { name: 'Injectables', line: 'Expression softening and subtle contour — never overfilled.' },
      { name: 'Skin & resurfacing', line: 'Peels and microneedling to refine tone and texture.' },
      { name: 'Energy & laser', line: 'IPL, RF microneedling, and resurfacing for clarity and lift.' },
    ],
    status: 'live',
    liveUrl: 'https://ma1-indol.vercel.app',
  },
  {
    slug: 'rehabilitation',
    name: 'Rehabilitation',
    formalName: 'Institute of Rehabilitation',
    accent: 'energy',
    essence: 'Restoring movement and function, one measured step at a time.',
    heroLead: 'Move well.',
    heroEmphasis: 'Recover fully.',
    lead: 'Physiotherapy, manual therapy, and structured recovery programs — built around your goals and tracked against real milestones.',
    pillars: [
      { name: 'Assessment', line: 'A movement and function baseline before the plan begins.' },
      { name: 'Hands-on therapy', line: 'Manual and exercise therapy from experienced clinicians.' },
      { name: 'Progression', line: 'Programs that adapt as you recover, with measured milestones.' },
    ],
    status: 'planned',
  },
  {
    slug: 'performance-medicine',
    name: 'Performance Medicine',
    formalName: 'Institute of Performance Medicine',
    accent: 'skin',
    essence: 'Evidence-led optimisation for how you train, recover, and live.',
    heroLead: 'Built to',
    heroEmphasis: 'perform.',
    lead: 'For athletes and the everyday driven — assessment, recovery, and longevity programs grounded in physiology, not hype.',
    pillars: [
      { name: 'Assessment', line: 'Physiology and biomarkers measured, not guessed at.' },
      { name: 'Recovery', line: 'Structured recovery protocols matched to your load.' },
      { name: 'Longevity', line: 'Programs aimed at durable health, honestly framed.' },
    ],
    status: 'planned',
  },
  {
    slug: 'infusion-therapy',
    name: 'Infusion Therapy',
    formalName: 'Institute of Infusion Therapy',
    accent: 'health',
    essence: 'IV drips, the injection bar, and iron therapy — under oversight.',
    heroLead: 'Come as you are.',
    heroEmphasis: 'Leave restored.',
    lead: 'IV drips, the injection bar, iron therapy, and a metabolic program — screened first and delivered under physician oversight.',
    pillars: [
      { name: 'IV drips', line: 'Tailored infusions for hydration, recovery, and wellbeing.' },
      { name: 'The injection bar', line: 'Quick, targeted vitamin and nutrient shots.' },
      { name: 'Iron therapy', line: 'Physician-supervised IV iron for diagnosed deficiency.' },
    ],
    status: 'live',
    liveUrl: 'https://it-1-gold.vercel.app',
  },
];

export const instituteBySlug = (slug: string) => institutes.find((i) => i.slug === slug);
