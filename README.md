# Ateendamate - Smarter Attendance Management

A production-ready, SEO-optimized marketing website for Ateendamate built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router and Server Components
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Framer Motion** for smooth animations
- **shadcn/ui** component library
- **PWA** capabilities with offline support
- **SEO optimized** with dynamic metadata and JSON-LD
- **Analytics ready** with Google Analytics integration
- **Contact form** with server actions and validation
- **Multi-theme** support (light/dark)
- **Responsive design** for all devices
- **Accessibility** focused with ARIA support

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ateendamate-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

## 🛠 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run postbuild` - Generate sitemap after build

## 📁 Project Structure

```
app/                    # App Router pages
├── actions.ts         # Server actions
├── globals.css        # Global styles
├── layout.tsx         # Root layout
├── page.tsx          # Homepage
├── features/         # Features page
├── pricing/          # Pricing page
├── about-us/         # About page
├── contact-us/       # Contact page
├── docs/             # Documentation
├── legal/            # Legal pages
└── changelog/        # Changelog

components/             # Reusable components
├── ui/               # shadcn/ui components
├── providers.tsx     # Context providers
├── main-nav.tsx      # Navigation
├── footer.tsx        # Footer
├── hero-section.tsx  # Hero component
├── feature-grid.tsx  # Features grid
├── contact-form.tsx  # Contact form
└── ...

lib/                   # Utilities
├── constants.ts      # App constants
├── seo.ts           # SEO helpers
├── analytics.ts     # Analytics setup
├── validations.ts   # Form schemas
└── utils.ts         # Utility functions

data/                  # Static data
├── pricing.json     # Pricing plans
└── features.json    # Feature data

public/               # Static assets
├── manifest.json    # PWA manifest
├── robots.txt       # SEO robots
└── icons/          # App icons
```

## 🎨 Design System

### Colors
- **Brand**: `#0a161e` (Ink)
- **Accent**: `#1da1f2` (Blue)
- **Warm**: `#f5b041` (Amber)

### Typography
- **Font**: Inter
- **Headings**: 120% line height
- **Body**: 150% line height

### Spacing
- **System**: 8px base unit
- **Breakpoints**: Mobile-first responsive design

## 🔧 Environment Variables

Required environment variables:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=https://ateendamate.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL for sitemap
SITE_URL=https://ateendamate.com
```

## 📱 PWA Support

The application includes PWA capabilities:
- Offline shell for marketing pages
- Installable on mobile devices
- Service worker for caching
- Web app manifest

## 🎯 SEO Features

- Dynamic metadata generation
- JSON-LD structured data
- Automatic sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card support
- Semantic HTML structure
- Optimized Core Web Vitals

## 🧪 Performance

Target Lighthouse scores:
- **Performance**: ≥95
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: ≥95

## 📧 Contact Form

The contact form uses Next.js server actions with:
- Zod validation
- Honeypot spam protection
- Toast notifications
- Server-side processing

To configure email sending, update the `submitContactForm` action in `app/actions.ts`.

## 🌍 Internationalization

The project is i18n ready:
- English default
- Easy extension to Hindi
- Locale-based routing support
- Translation-friendly component structure

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Static Export
```bash
npm run build
```

The build output will be in the `out/` directory.

## 📝 Content Management

### Adding New Features
1. Update `data/features.json`
2. Add corresponding icons and descriptions
3. Update the features page components

### Modifying Pricing
1. Edit `data/pricing.json`
2. Update plan features and pricing
3. Modify comparison tables

### Content Updates
- Hero copy: `components/hero-section.tsx`
- About content: `app/about-us/page.tsx`
- Legal pages: `app/legal/*/page.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software for Ateendamate.

## 📞 Support

For technical issues or questions:
- Email: dev@ateendamate.com
- Documentation: `/docs`
- Contact form: `/contact-us`