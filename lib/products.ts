export type Category = {
  slug: string;
  label: string;
  description: string;
};

export type Product = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  level: string;
  includes: string[];
  tags: string[];
  priceLabel: string;
  buyUrl: string;
  featured: boolean;
  previewBullets: string[];
  sampleText: string;
};

export const categories: Category[] = [
  {
    slug: 'math',
    label: 'Math',
    description: 'Concept-first packs for algebra, geometry, and calculus confidence.'
  },
  {
    slug: 'science',
    label: 'Science',
    description: 'Clear revision systems with visual diagrams and exam-style practice.'
  },
  {
    slug: 'writing',
    label: 'Writing',
    description: 'Frameworks and templates to plan, draft, and polish quickly.'
  }
];

export const products: Product[] = [
  {
    slug: 'trig-starter-pack',
    title: 'Trig Starter Pack',
    tagline: 'Master sine, cosine, and tangent with visual-first worksheets.',
    category: 'math',
    level: 'High school',
    includes: ['24-page quickstart guide', 'Formula cheat sheet', 'Timed mixed drills'],
    tags: ['trigonometry', 'exam prep', 'worksheets'],
    priceLabel: '$19',
    buyUrl: 'https://gumroad.com/l/trig-starter-pack',
    featured: true,
    previewBullets: [
      'Triangle labeling shortcuts to avoid common sign errors.',
      'A unit-circle flowchart for choosing the right identity.',
      'Two timed mini-mocks with answer-walkthroughs.'
    ],
    sampleText:
      'Sample excerpt: "When an angle sits in Quadrant II, sine stays positive while cosine flips negative. Write the sign first, then the value."'
  },
  {
    slug: 'microscope-revision-pack',
    title: 'Microscope Revision Pack',
    tagline: 'Cell biology revision maps with retrieval questions and answer keys.',
    category: 'science',
    level: 'GCSE / Intro college',
    includes: ['Printable concept maps', 'Labelling drills', 'End-of-topic quiz bank'],
    tags: ['biology', 'revision', 'active recall'],
    priceLabel: '$24',
    buyUrl: 'https://lemonsqueezy.com/buy/microscope-revision-pack',
    featured: true,
    previewBullets: [
      'Blank-and-filled diagrams for organelles and tissue types.',
      'High-yield vocabulary checks for exam command terms.',
      'One-page checkpoints to track weak topics.'
    ],
    sampleText:
      'Sample excerpt: "Mitochondria are best remembered as ATP factories; pair each structure with one precise job and one exam keyword."'
  },
  {
    slug: 'dbq-structure-kit',
    title: 'DBQ Structure Kit',
    tagline: 'Build stronger evidence-driven essays with repeatable paragraph systems.',
    category: 'writing',
    level: 'AP / IB / First-year college',
    includes: ['Thesis templates', 'Evidence integration matrix', 'Annotated sample responses'],
    tags: ['history', 'essay writing', 'dbq'],
    priceLabel: '$29',
    buyUrl: 'https://gumroad.com/l/dbq-structure-kit',
    featured: false,
    previewBullets: [
      'Step-by-step planning sheet from prompt to outline in 12 minutes.',
      'Sentence stems for sourcing and contextualization.',
      'Rubric alignment checklist before submission.'
    ],
    sampleText:
      'Sample excerpt: "Each body paragraph should open with a claim, integrate one document, and explain why that evidence proves your argument."'
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
