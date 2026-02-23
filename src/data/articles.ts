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

export const articles: Article[] = [
  {
    slug: 'adaptive-prescribing-ecs',
    title: 'The Endocannabinoid System Across the Hormonal Cycle',
    subtitle: 'Cycle-Dependent ECS Fluctuation as the Pharmacological Basis for Adaptive Cannabis Prescribing',
    category: 'Clinical Protocols',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'A synthesis of peer-reviewed research on cycle-dependent endocannabinoid system gene expression, plasma anandamide fluctuation, FAAH enzyme kinetics, and steroid hormone regulation of cannabinoid receptor function.',
    featured: true,
    readingTime: '45 min',
  },
  {
    slug: 'providing-cannabis-care',
    title: 'Providing Cannabis Care',
    subtitle: 'Fundamentals for Clinical Practice',
    category: 'Clinical Fundamentals',
    author: 'Cameron Rosin, RN',
    authorRole: 'Specialist Cannabis Nurse Educator',
    authorPhoto: '/images/team/cam-rosin-portrait.jpg',
    summary: 'A comprehensive clinical handbook covering eligibility, consultation, history taking, contraindications, drug interactions, product selection, dosing and titration, side effect management, and condition-specific clinical pearls.',
    readingTime: '60 min',
  },
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
]

export const categories = ['All', ...new Set(articles.map(a => a.category))]
