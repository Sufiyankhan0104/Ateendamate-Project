export const BRAND_CONFIG = {
  name: "Ateendamate",
  tagline: "Smarter Attendance for Real Workflows",
  description: "Track check-in/out, location, approvals, month-end totals, and advance payments. Built for real-world contractor teams.",
  url: "https://ateendamate.com",
  ogImage: "/og/hero.png",
  twitterHandle: "@ateendamate",
} as const;

export const ATTENDANCE_TYPES = [
  "Half Day",
  "Full Day", 
  "Full Day + Half Day",
  "Full Day + Full Day",
  "Full Day + Full Day + Day",
  "Full Day + Full Day + Full Day"
] as const;

export const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about-us", label: "About Us" },
  { href: "/docs", label: "Docs" },
  { href: "/contact-us", label: "Contact" },
] as const;

export const FEATURE_FLAGS = {
  SALARY_DISTRIBUTION: process.env.NODE_ENV === "development",
} as const;