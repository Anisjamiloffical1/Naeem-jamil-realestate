export const COMPANY = {
  name: "Naeem Jamil Associates",
  ceo: "Naeem Jamil",
  tagline: "Building Trust, Creating Excellence",
  description:
    "Naeem Jamil Associates is Islamabad's trusted Real Estate Consultant & Construction Company helping clients buy, sell, rent and build premium properties.",
  phone: "+92 344 9224107",
  phoneHref: "tel:+923449224107",
  whatsapp: "https://wa.me/923449224107",
  email: "info@naeemjamilassociates.com",
  address: {
    line1: "Plot #17, E-11/3 Markaz Islamabad",
    line2: "Flat #1, 2nd Floor",
    line3: "Black Lounge Plaza",
    city: "Islamabad, Pakistan",
    full: "Plot #17, E-11/3 Markaz Islamabad, Flat #1, 2nd Floor, Black Lounge Plaza, Islamabad, Pakistan",
  },
  googleReviews: "100+ Five Star Reviews",
  year: 2026,
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    title: "Real Estate Sales",
    description: "Residential and Commercial Properties",
    icon: "Building2",
  },
  {
    title: "Property Purchase",
    description: "Best Investment Opportunities",
    icon: "Key",
  },
  {
    title: "Rental Services",
    description: "Luxury Apartments and Houses",
    icon: "Home",
  },
  {
    title: "Construction Services",
    description: "Residential & Commercial Projects",
    icon: "HardHat",
  },
  {
    title: "Property Development",
    description: "Modern Infrastructure Solutions",
    icon: "Landmark",
  },
  {
    title: "Investment Consultancy",
    description: "Market Insights & ROI Planning",
    icon: "TrendingUp",
  },
  {
    title: "Renovation Services",
    description: "Property Improvement & Upgrades",
    icon: "Paintbrush",
  },
  {
    title: "Property Valuation",
    description: "Professional Assessment",
    icon: "BadgeDollarSign",
  },
] as const;

export const WHY_CHOOSE_US = [
  { title: "100+ Five Star Reviews", icon: "Star" },
  { title: "Trusted Local Experts", icon: "ShieldCheck" },
  { title: "Prime Islamabad Locations", icon: "MapPin" },
  { title: "Construction Excellence", icon: "Award" },
  { title: "Transparent Transactions", icon: "Eye" },
  { title: "Personalized Consultation", icon: "Users" },
  { title: "Market Expertise", icon: "BarChart3" },
  { title: "End-to-End Solutions", icon: "Layers" },
] as const;

export const AREAS = [
  { name: "E-11", description: "Premium commercial & residential hub" },
  { name: "D-12", description: "Modern family-friendly community" },
  { name: "B-17", description: "Growing investment destination" },
  { name: "Bahria Town", description: "Luxury gated community living" },
  { name: "DHA Islamabad", description: "Elite defense housing authority" },
  { name: "All CDA Sectors", description: "Complete capital coverage" },
] as const;

export const PROJECT_CATEGORIES = [
  "Residential Homes",
  "Commercial Buildings",
  "Renovation Projects",
  "Development Projects",
] as const;

export const PROJECTS = [
  { id: 1, title: "Luxury Villa E-11", category: "Residential Homes", image: "/images/projects/project-1.jpg" },
  { id: 2, title: "Modern Apartment Complex", category: "Residential Homes", image: "/images/projects/project-2.jpg" },
  { id: 3, title: "Corporate Office Tower", category: "Commercial Buildings", image: "/images/projects/project-3.jpg" },
  { id: 4, title: "Retail Plaza DHA", category: "Commercial Buildings", image: "/images/projects/project-4.jpg" },
  { id: 5, title: "Heritage Home Renovation", category: "Renovation Projects", image: "/images/projects/project-5.jpg" },
  { id: 6, title: "Kitchen & Bath Upgrade", category: "Renovation Projects", image: "/images/projects/project-6.jpg" },
  { id: 7, title: "Bahria Town Development", category: "Development Projects", image: "/images/projects/project-7.jpg" },
  { id: 8, title: "B-17 Infrastructure", category: "Development Projects", image: "/images/projects/project-8.jpg" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ahmed Hassan",
    role: "Property Investor",
    text: "Professional and trustworthy service. Highly recommended for anyone looking to invest in Islamabad real estate.",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    role: "Home Buyer",
    text: "Naeem Jamil Associates made our dream home purchase seamless. Their expertise and transparency exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    role: "Commercial Client",
    text: "Outstanding construction quality and project management. They delivered our commercial building on time and within budget.",
    rating: 5,
  },
  {
    name: "Sara Malik",
    role: "Rental Client",
    text: "Found the perfect luxury apartment through their rental services. Professional, responsive, and genuinely caring team.",
    rating: 5,
  },
  {
    name: "Bilal Ahmed",
    role: "Developer Partner",
    text: "Their market analysis and investment consultancy helped us make informed decisions that yielded excellent returns.",
    rating: 5,
  },
  {
    name: "Zainab Sheikh",
    role: "Renovation Client",
    text: "The renovation team transformed our property beautifully. Attention to detail and craftsmanship at the highest level.",
    rating: 5,
  },
] as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Satisfied Clients" },
  { value: 100, suffix: "+", label: "Five Star Reviews" },
  { value: 500, suffix: "+", label: "Properties Sold" },
  { value: 50, suffix: "+", label: "Construction Projects" },
] as const;

export const TIMELINE = [
  { year: "2010", title: "Foundation", description: "Naeem Jamil Associates established in Islamabad" },
  { year: "2014", title: "Expansion", description: "Expanded into commercial construction projects" },
  { year: "2018", title: "Growth", description: "500+ successful property transactions completed" },
  { year: "2022", title: "Excellence", description: "Recognized as top-rated real estate consultants" },
  { year: "2026", title: "Leadership", description: "Leading premium real estate & construction firm" },
] as const;
