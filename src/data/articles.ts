export interface Article {
  slug: string
  title: string
  subtitle: string
  category: string
  author: string
  authorRole: string
  authorPhoto: string
  editor?: string
  editorRole?: string
  date: string
  summary: string
  featured?: boolean
  readingTime?: string
}

export interface CategoryMeta {
  name: string
  slug: string
  description: string
  icon: string // SVG path data for a 24x24 viewBox
}

export const categoryMeta: CategoryMeta[] = [
  {
    name: 'Fundamentals',
    slug: 'fundamentals',
    description: 'Foundation courses in cannabis science, the endocannabinoid system, and core pharmacology.',
    icon: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20',
  },
  {
    name: 'Clinical Practice',
    slug: 'clinical-practice',
    description: 'Consultation frameworks, prescribing protocols, and patient care fundamentals.',
    icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4',
  },
  {
    name: 'Research Synthesis',
    slug: 'research-synthesis',
    description: 'Peer-reviewed research syntheses on advanced pharmacology and adaptive prescribing.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2zm4-8v2m-2-1h4',
  },
  {
    name: 'Women\'s Health',
    slug: 'womens-health',
    description: 'Menopause, hormonal transition, and endocannabinoid-mediated care.',
    icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  },
  {
    name: 'Clinical Reference',
    slug: 'clinical-reference',
    description: 'Comprehensive lookup references, databases, and clinical tools.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  },
  {
    name: 'Practice & Philosophy',
    slug: 'practice-philosophy',
    description: 'Frameworks for integrative, relational, and transformative clinical practice.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
]

// Category display order (derived from metadata)
export const categoryOrder = categoryMeta.map(c => c.name)

export const articles: Article[] = [
  // ── Fundamentals ──
  {
    slug: 'cannabis-as-medicine',
    title: 'Cannabis as Medicine',
    subtitle: 'A Foundation for Clinical Understanding',
    category: 'Fundamentals',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'An introduction to cannabis as medicine covering its history, the entourage effect, major and minor cannabinoids, terpenes, flavonoids, and the distinction between indica and sativa.',
    readingTime: '30 min',
  },
  {
    slug: 'endocannabinoid-system-fundamentals',
    title: 'Endocannabinoid System Fundamentals',
    subtitle: 'The Body\'s Master Regulatory System',
    category: 'Fundamentals',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'A comprehensive guide to the endocannabinoid system — cannabinoid receptors, endocannabinoids, enzyme pathways, clinical endocannabinoid deficiency, and the ECS role in homeostatic regulation.',
    readingTime: '40 min',
  },

  // ── Clinical Practice ──
  {
    slug: 'providing-cannabis-care',
    title: 'Providing Cannabis Care',
    subtitle: 'Fundamentals for Clinical Practice',
    category: 'Clinical Practice',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'A comprehensive clinical handbook covering eligibility, consultation, history taking, contraindications, drug interactions, product selection, dosing and titration, side effect management, and condition-specific clinical pearls.',
    readingTime: '60 min',
  },
  {
    slug: 'personalising-cannabis-care',
    title: 'Personalising Cannabis Care',
    subtitle: 'Initial Steps for Individualised Prescribing',
    category: 'Clinical Practice',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'A practical guide to history taking, eligibility assessment, contraindication screening, comorbidity evaluation, and the initial clinical steps for personalising cannabis medicine to individual patients.',
    readingTime: '25 min',
  },
  {
    slug: 'cannabis-as-a-functional-catalyst',
    title: 'Cannabis as a Functional Catalyst',
    subtitle: 'Optimising Outcomes Within a Broader Ecosystem of Care',
    category: 'Clinical Practice',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'How cannabis functions as a synchroniser and catalyst within integrative care — medication synergy, foundational building blocks, dietary insights, and lifestyle strategies for ECS support.',
    readingTime: '20 min',
  },

  // ── Research Synthesis ──
  {
    slug: 'adaptive-prescribing-ecs',
    title: 'The Endocannabinoid System Across the Hormonal Cycle',
    subtitle: 'Cycle-Dependent ECS Fluctuation as the Pharmacological Basis for Adaptive Cannabis Prescribing',
    category: 'Research Synthesis',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'A synthesis of peer-reviewed research on cycle-dependent endocannabinoid system gene expression, plasma anandamide fluctuation, FAAH enzyme kinetics, and steroid hormone regulation of cannabinoid receptor function.',
    featured: true,
    readingTime: '45 min',
  },
  {
    slug: 'cannabis-multi-target-therapeutic',
    title: 'Cannabis as a Multi-Target Therapeutic System',
    subtitle: 'A Multi-Target Modulator in Complex Systems Care',
    category: 'Research Synthesis',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'Cannabis as a modular, adaptive signal engaging the endocannabinoid system to regulate neuroimmune, endocrine, fascial, and cognitive rhythms — dose ranges, molecular targeting frameworks, and systems-based care principles.',
    readingTime: '30 min',
  },

  // ── Women's Health ──
  {
    slug: 'allostatic-overload-menopause',
    title: 'Allostatic Overload in the Menopausal Transition',
    subtitle: 'HPA Axis Dysregulation, Cortisol Diurnal Rhythm Collapse, and the Allopregnanolone-GABA Pathway',
    category: 'Women\'s Health',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'A deep synthesis mapping the mechanistic architecture of menopausal allostatic overload across neuroendocrinology, chronobiology, neurosteroid pharmacology, and stress physiology — with particular attention to the endocannabinoid system.',
    readingTime: '40 min',
  },
  {
    slug: 'cannabis-menopause-neurological-survival',
    title: 'Cannabis, Menopause, and the Neurological Survival Mode',
    subtitle: 'Hormonal Transition Through Endocannabinoid Intelligence',
    category: 'Women\'s Health',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'A research synthesis and clinical framework proposing menopausal symptomatology as allostatic overload driven by convergent estrogen and endocannabinoid signalling collapse, positioning cannabis as a regulatory intervention for autonomic coherence.',
    readingTime: '35 min',
  },

  // ── Clinical Reference ──
  {
    slug: 'terpene-bible',
    title: 'The Terpene Bible',
    subtitle: 'A Complete Reference to Cannabis Terpenes',
    category: 'Clinical Reference',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'Comprehensive guide to the therapeutic terpenes found in cannabis, their pharmacological profiles, synergistic effects, and clinical applications.',
    readingTime: '90 min',
  },

  // ── Practice & Philosophy ──
  {
    slug: 'entheogenic-stewardship',
    title: 'Entheogenic Stewardship in Cannabis Medicine',
    subtitle: 'A Research-Informed Framework for Transformative Clinical Practice',
    category: 'Practice & Philosophy',
    author: 'Cameron Rosin',
    authorRole: 'Head of Clinical Education',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    editor: 'Rhys McKay',
    editorRole: 'Director of Research Technology',
    date: 'February 2025',
    summary: 'A framework for entheogenic stewardship — an integrative, relational approach recognising cannabis as both therapeutic agent and consciousness-modifying catalyst, drawing on neuroscientific, somatic, and psychotherapeutic literature.',
    readingTime: '30 min',
  },
]

// Group articles by category in display order
export function getArticlesByCategory(): { meta: CategoryMeta; articles: Article[] }[] {
  return categoryMeta
    .map(meta => ({
      meta,
      articles: articles.filter(a => a.category === meta.name),
    }))
    .filter(group => group.articles.length > 0)
}

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categoryMeta.find(c => c.slug === slug)
}

export const categories = ['All', ...categoryOrder.filter(cat => articles.some(a => a.category === cat))]
