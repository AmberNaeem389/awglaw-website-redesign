// All content below is taken from https://awglaw.com/ (verified via browser inspection).
export const SITE = 'https://awglaw.com'

export const nav = [
  { label: 'Practices', href: '#practices' },
  { label: 'Industries', href: '#industries' },
  { label: 'The Firm', href: '#firm' },
  { label: 'People', href: '#people' },
  { label: 'Recognition', href: '#recognition' },
]

export const featuredPractices = [
  {
    icon: 'flask',
    title: 'Food, Beverage, Dietary Supplement & Cosmetic Compliance',
    short: 'Food, supplement & cosmetic compliance',
    text: 'We support clients throughout the entire lifecycle of products aimed at improving the population’s health and wellness.',
    href: `${SITE}/industries/food-and-beverage/`,
  },
  {
    icon: 'bulb',
    title: 'Intellectual Property Protection',
    short: 'Intellectual property protection',
    text: 'Drawing heavily on our IP, patent, trade secret, and trademark expertise, we provide business advice and strategies that enhance product value and prevent future litigation.',
    href: `${SITE}/practices/intellectual-property/`,
  },
  {
    icon: 'gavel',
    title: 'Trial Practice, Litigation & Dispute Resolution',
    short: 'Trial practice & dispute resolution',
    text: 'A strong track record in disputes related to FDA, FTC, Proposition 65, consumer false advertising class actions, patent & trademark infringement, supply chain, technology, e-commerce and breach of contract claims.',
    href: `${SITE}/practices/litigation/`,
  },
  {
    icon: 'pill',
    title: 'Medical Device & Drug Compliance',
    short: 'Medical device & drug compliance',
    text: 'Strategic advice from the inception of drug and device products, focused on enhancing product value, gaining regulatory approvals, and ensuring compliance.',
    href: `${SITE}/industries/medical-devices/`,
  },
]

export const allPractices = [
  ['FDA & USDA Compliance', 'practices/fda-compliance/'],
  ['FTC & State Advertising Compliance', 'practices/ftc-state-advertising-compliance/'],
  ['Proposition 65', 'practices/proposition-65/'],
  ['Consumer Class Actions', 'practices/class-actions/'],
  ['Government Investigations', 'practices/government-investigations/'],
  ['Patent & Trade Secret Protection', 'practices/patent-protection-licensing/'],
  ['Trademark & Copyright Protection', 'practices/trademark-brand-logo-slogan-protection/'],
  ['Trial Practice, Litigation & Dispute Resolution', 'practices/litigation/'],
  ['Supply Chain & IP Agreements', 'practices/business-agreements/'],
  ['Technology & Supply Chain Disputes', 'practices/technology-supply-chain-disputes/'],
  ['U.S. Customs', 'practices/u-s-customs/'],
].map(([label, path]) => ({ label, href: `${SITE}/${path}` }))

export const industries = [
  { photo: 'food', label: 'Foods & Beverages', note: 'Raw juices, allergy-free foods and beyond', href: `${SITE}/industries/food-and-beverage/` },
  { photo: 'supplements', label: 'Dietary Supplements', note: 'GRAS, NDI, claim substantiation, cGMP', href: `${SITE}/industries/nutritional-supplements/` },
  { photo: 'cosmetics', label: 'Cosmetics', note: 'Including cosmeceuticals', href: `${SITE}/industries/cosmetics/` },
  { photo: 'drugs', label: 'Drugs', note: 'OTC, homeopathic and botanical drugs', href: `${SITE}/industries/drug/` },
  { photo: 'devices', label: 'Medical Devices', note: '510(k) notifications and 513(g) requests', href: `${SITE}/industries/medical-devices/` },
]

export const lifecycle = [
  { step: 'Concept', text: 'Label representations and product formulation' },
  { step: 'Development', text: 'GRAS and NDI submissions, clinical testing' },
  { step: 'Approval', text: 'Regulatory pathways, 510(k)s, monograph compliance' },
  { step: 'Launch', text: 'Labels, advertising and claim substantiation' },
  { step: 'Defense', text: 'FDA, FTC and attorney general matters; class actions' },
]

export const recognition = [
  { who: 'Chambers Spotlight Guide', what: 'Food & Beverage Law · DC Metro & Chicago', year: '2027', href: `${SITE}/news/amin-wasserman-gurnani-ranked-in-2027-chambers-spotlight-guide-for-food-beverage-law/` },
  { who: 'Best Lawyers', what: '“Best Law Firms”', year: '2027', href: `${SITE}/news/amin-wasserman-gurnani-receives-top-rankings-by-best-lawyers-in-2027-best-lawyers-guide/` },
  { who: 'Legal 500 US Elite', what: 'Inaugural U.S. City Elite rankings', year: '', href: `${SITE}/news/amin-wasserman-gurnani-earns-top-tier-ranking-in-legal-500-us-elite/` },
]

export const news = [
  {
    title: 'Amin Wasserman Gurnani Ranked in 2027 Chambers Spotlight Guide for Food & Beverage Law',
    text: 'Recognized in the Chambers Spotlight Guide for Food & Beverage Law in both the DC Metro and Chicago markets.',
    href: `${SITE}/news/amin-wasserman-gurnani-ranked-in-2027-chambers-spotlight-guide-for-food-beverage-law/`,
  },
  {
    title: 'Amin Wasserman Gurnani Receives Top Rankings by Best Lawyers in 2027 Best Lawyers Guide',
    text: 'Named to Best Lawyers – “Best Law Firms.”',
    href: `${SITE}/news/amin-wasserman-gurnani-receives-top-rankings-by-best-lawyers-in-2027-best-lawyers-guide/`,
  },
  {
    title: 'Best Lawyers in America 2027 Spotlights Amin Wasserman Gurnani Attorneys',
    text: 'The Best Lawyers in America has recognized firm attorneys in its 2027 edition, lauding their work in multiple practice areas.',
    href: `${SITE}/news/best-lawyers-in-america-2027-spotlights-amin-wasserman-gurnani-attorneys/`,
  },
  {
    title: 'Amin Wasserman Gurnani Earns Top-Tier Ranking in Legal 500 US Elite',
    text: 'Legal 500 recognized the firm in its inaugural U.S. City Elite rankings of firms and attorneys who deliver exceptional, market-leading legal work.',
    href: `${SITE}/news/amin-wasserman-gurnani-earns-top-tier-ranking-in-legal-500-us-elite/`,
  },
]

export const insightLinks = [
  { label: 'News', href: `${SITE}/insights/news/` },
  { label: 'Publications', href: `${SITE}/insights/publications/` },
  { label: 'Events', href: `${SITE}/insights/events/` },
  { label: 'Regulatory Roundup', href: `${SITE}/insights/regulatory_roundup/` },
]

export const whyChoose = [
  { n: '01', title: 'At the cutting edge', text: 'A strong reputation for work at the forefront of food, drug (FDA), advertising (FTC, NAD, DSSRC) and IP law, responding nimbly to a changing regulatory climate and marketplace.' },
  { n: '02', title: 'The full product lifecycle', text: 'From strategic development and regulatory approval to labeling, advertising, safety and manufacturing compliance after launch.' },
  { n: '03', title: 'Regulators and self-regulators', text: 'Matters before the FDA, FTC, USDA, state attorneys general, the National Advertising Division, the Direct Selling Self-Regulatory Council and the Consumer Product Safety Commission.' },
  { n: '04', title: 'Advisers and litigators', text: 'A strong track record in FDA, FTC, Proposition 65, false advertising class action, patent, trademark, supply chain and contract disputes.' },
  { n: '05', title: 'Three offices, one team', text: 'Chicago, Washington, D.C. and Los Angeles, with a team of 28 professionals listed on the firm’s site.' },
]

export const offices = [
  { photo: 'chicago', city: 'Chicago', lines: ['230 W. Monroe', 'Suite 1405', 'Chicago, IL 60606'], phone: '312.466.1033', tel: '+13124661033' },
  { photo: 'washington', city: 'Washington, D.C.', lines: ['5185 MacArthur Blvd NW', 'Suite 230', 'Washington, D.C. 20016'], phone: '202.496.4966', tel: '+12024964966' },
  { photo: 'los-angeles', city: 'Los Angeles', lines: ['515 South Flower Street', '18th Floor', 'Los Angeles, CA 90071'], phone: '213.933.2330', tel: '+12139332330' },
]

export const links = {
  contact: `${SITE}/about/contact/`,
  email: 'info@awglaw.com',
  deck: 'https://drive.google.com/file/d/1MvZKfgi_fjLHz8C_uZ6ggI-pjlipzvQ_/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/company/amin-talati-llc',
  privacy: `${SITE}/privacy-statement/`,
  terms: `${SITE}/terms-of-use/`,
  firm: `${SITE}/about/`,
  professionals: `${SITE}/professionals/`,
}

export const disclaimer =
  'The content in the Amin Wasserman Gurnani web site may constitute attorney advertising or advertising material within the meaning of applicable bar rules, and/or under the Rules of Professional Conduct governing lawyers. Nothing in this site is to be considered as either creating an attorney-client relationship between the reader and Amin Wasserman Gurnani or as the rendering of legal advice for any specific matter.'

// Recognition ledger: each entry is taken from a news item published on awglaw.com.
export const ledger = [
  { kicker: 'Chambers Spotlight Guide · 2027', line: 'Food & Beverage Law, in both the DC Metro and Chicago markets.', href: news[0].href },
  { kicker: 'Best Lawyers · 2027', line: 'Named to Best Lawyers: “Best Law Firms.”', href: news[1].href },
  { kicker: 'Best Lawyers in America · 2027', line: 'Firm attorneys recognized across multiple practice areas.', href: news[2].href },
  { kicker: 'Legal 500 US Elite', line: 'Top-tier ranking in the inaugural U.S. City Elite.', href: news[3].href },
]

// The full client statement as published on the firm's About page.
export const clientQuote = {
  lead: 'Their strength is their knowledge of the regulatory and legal hurdles and for finding the best regulatory fit for a product concept.',
  rest: 'They know the health care industry leaders and the agencies that regulate them. This firm excels at facilitating interactions with government regulatory and industry’s self regulating bodies.',
  by: 'CEO of Major Pharmaceutical Company',
}
