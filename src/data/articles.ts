export interface Article {
  slug: string
  title: string
  subtitle: string
  category: string
  author: string
  authorRole: string
  authorPhoto: string
  summary: string
  featured?: boolean
  readingTime?: string
}

// Category display order
export const categoryOrder = [
  'Fundamentals',
  'Clinical Practice',
  'Research Synthesis',
  'Women\'s Health',
  'Clinical Reference',
  'Practice & Philosophy',
]

export const articles: Article[] = [
  // ── Fundamentals ──
  {
    slug: 'cannabis-as-medicine',
    title: 'Cannabis as Medicine',
    subtitle: 'A Foundation for Clinical Understanding',
    category: 'Fundamentals',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'An introduction to cannabis as medicine covering its history, the entourage effect, major and minor cannabinoids, terpenes, flavonoids, and the distinction between indica and sativa.',
    readingTime: '30 min',
  },
  {
    slug: 'endocannabinoid-system-fundamentals',
    title: 'Endocannabinoid System Fundamentals',
    subtitle: 'The Body\'s Master Regulatory System',
    category: 'Fundamentals',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'A comprehensive guide to the endocannabinoid system — cannabinoid receptors, endocannabinoids, enzyme pathways, clinical endocannabinoid deficiency, and the ECS role in homeostatic regulation.',
    readingTime: '40 min',
  },

  // ── Clinical Practice ──
  {
    slug: 'providing-cannabis-care',
    title: 'Providing Cannabis Care',
    subtitle: 'Fundamentals for Clinical Practice',
    category: 'Clinical Practice',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'A comprehensive clinical handbook covering eligibility, consultation, history taking, contraindications, drug interactions, product selection, dosing and titration, side effect management, and condition-specific clinical pearls.',
    readingTime: '60 min',
  },
  {
    slug: 'personalising-cannabis-care',
    title: 'Personalising Cannabis Care',
    subtitle: 'Initial Steps for Individualised Prescribing',
    category: 'Clinical Practice',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'A practical guide to history taking, eligibility assessment, contraindication screening, comorbidity evaluation, and the initial clinical steps for personalising cannabis medicine to individual patients.',
    readingTime: '25 min',
  },
  {
    slug: 'cannabis-as-a-functional-catalyst',
    title: 'Cannabis as a Functional Catalyst',
    subtitle: 'Optimising Outcomes Within a Broader Ecosystem of Care',
    category: 'Clinical Practice',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'How cannabis functions as a synchroniser and catalyst within integrative care — medication synergy, foundational building blocks, dietary insights, and lifestyle strategies for ECS support.',
    readingTime: '20 min',
  },

  // ── Research Synthesis ──
  {
    slug: 'adaptive-prescribing-ecs',
    title: 'The Endocannabinoid System Across the Hormonal Cycle',
    subtitle: 'Cycle-Dependent ECS Fluctuation as the Pharmacological Basis for Adaptive Cannabis Prescribing',
    category: 'Research Synthesis',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'A synthesis of peer-reviewed research on cycle-dependent endocannabinoid system gene expression, plasma anandamide fluctuation, FAAH enzyme kinetics, and steroid hormone regulation of cannabinoid receptor function.',
    featured: true,
    readingTime: '45 min',
  },
  {
    slug: 'cannabis-multi-target-therapeutic',
    title: 'Cannabis as a Multi-Target Therapeutic System',
    subtitle: 'A Multi-Target Modulator in Complex Systems Care',
    category: 'Research Synthesis',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'Cannabis as a modular, adaptive signal engaging the endocannabinoid system to regulate neuroimmune, endocrine, fascial, and cognitive rhythms — dose ranges, molecular targeting frameworks, and systems-based care principles.',
    readingTime: '30 min',
  },

  // ── Women's Health ──
  {
    slug: 'allostatic-overload-menopause',
    title: 'Allostatic Overload in the Menopausal Transition',
    subtitle: 'HPA Axis Dysregulation, Cortisol Diurnal Rhythm Collapse, and the Allopregnanolone-GABA Pathway',
    category: 'Women\'s Health',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'A deep synthesis mapping the mechanistic architecture of menopausal allostatic overload across neuroendocrinology, chronobiology, neurosteroid pharmacology, and stress physiology — with particular attention to the endocannabinoid system.',
    readingTime: '40 min',
  },
  {
    slug: 'cannabis-menopause-neurological-survival',
    title: 'Cannabis, Menopause, and the Neurological Survival Mode',
    subtitle: 'Hormonal Transition Through Endocannabinoid Intelligence',
    category: 'Women\'s Health',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'A research synthesis and clinical framework proposing menopausal symptomatology as allostatic overload driven by convergent estrogen and endocannabinoid signalling collapse, positioning cannabis as a regulatory intervention for autonomic coherence.',
    readingTime: '35 min',
  },

  // ── Clinical Reference ──
  {
    slug: 'terpene-bible',
    title: 'The Terpene Bible',
    subtitle: 'A Complete Reference to Cannabis Terpenes',
    category: 'Clinical Reference',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'Comprehensive guide to the therapeutic terpenes found in cannabis, their pharmacological profiles, synergistic effects, and clinical applications.',
    readingTime: '90 min',
  },

  // ── Practice & Philosophy ──
  {
    slug: 'entheogenic-stewardship',
    title: 'Entheogenic Stewardship in Cannabis Medicine',
    subtitle: 'A Research-Informed Framework for Transformative Clinical Practice',
    category: 'Practice & Philosophy',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'A framework for entheogenic stewardship — an integrative, relational approach recognising cannabis as both therapeutic agent and consciousness-modifying catalyst, drawing on neuroscientific, somatic, and psychotherapeutic literature.',
    readingTime: '30 min',
  },
]

// Group articles by category in display order
export function getArticlesByCategory(): { category: string; articles: Article[] }[] {
  return categoryOrder
    .map(cat => ({
      category: cat,
      articles: articles.filter(a => a.category === cat),
    }))
    .filter(group => group.articles.length > 0)
}

export const categories = ['All', ...categoryOrder.filter(cat => articles.some(a => a.category === cat))]
