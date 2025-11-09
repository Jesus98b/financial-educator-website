# Financial Educator & Advisor Website

A production-ready, scalable multi-page landing website for a Financial Educator & Advisor built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏗️ Architecture Overview

This project follows a **hybrid architecture** combining:
- **Feature-based organization** for pages and routes
- **Atomic Design principles** for component structure (atoms → molecules → organisms)
- **Domain-driven design** for scalability

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel (recommended)

### Folder Structure

```
financial-educator-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── pricing/           # Pricing page
│   ├── contact/           # Contact page
│   ├── questions/         # FAQ page
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/
│   ├── atoms/             # Basic building blocks (Button, Input, Card)
│   ├── molecules/         # Composite components (ContactForm, FAQItem)
│   ├── organisms/         # Complex sections (Hero, ServicesOverview)
│   └── layout/            # Layout components (Navigation, Footer)
├── lib/                   # Utilities and helpers
│   ├── constants.ts       # App constants
│   ├── validation.ts      # Validation schemas
│   └── utils.ts           # Utility functions
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   cd financial-educator-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🧪 Testing

Run tests with:

```bash
# Run all tests
npm test

# Run tests in UI mode
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📝 Key Features

### ✅ Core Requirements Met

- [x] Multi-page structure (Home, About, Services, Pricing, Questions, Contact)
- [x] Modular, scalable architecture
- [x] TypeScript with strict typing
- [x] Tailwind CSS with design system
- [x] Form validation with security (honeypot, sanitization)
- [x] SEO optimization (meta tags, sitemap, robots.txt)
- [x] Accessibility (WCAG 2.2 AA compliance)
- [x] Performance optimization (Image optimization, lazy loading)
- [x] WhatsApp CTA integration
- [x] LinkedIn integration
- [x] Testing setup with examples

### 🎨 Design System

- **Typography**: Questrial font (Google Fonts)
- **Colors**:
  - Primary: Black (#000000)
  - Accent: Soft pastel green (#A8D5BA)
  - Background: White (#FFFFFF)
- **Spacing**: Consistent spacing scale via Tailwind
- **Components**: Reusable atomic components

### 🔒 Security Features

- Input sanitization
- Honeypot field for bot protection
- Security headers (X-Frame-Options, X-Content-Type-Options)
- Form validation with Zod
- No inline scripts

### ♿ Accessibility Features

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus visible styles
- Proper heading hierarchy
- Alt text for images (when added)

### 🚀 Performance Optimizations

- Next.js Image component for optimized images
- Font preloading
- Code splitting
- Lazy loading
- Optimized CSS (Tailwind purging)

## 📋 Pages

1. **Home** (`/`) - Hero, value proposition, services overview, CTA
2. **About** (`/about`) - Professional introduction, mission, credentials
3. **Services** (`/services`) - Detailed service descriptions with methodology
4. **Pricing** (`/pricing`) - Pricing tiers with value justification
5. **Key Questions** (`/questions`) - Expandable FAQ section
6. **Contact** (`/contact`) - Contact form, WhatsApp, LinkedIn links

## 🔧 Configuration

### Update Site Configuration

Edit `lib/constants.ts` to update:
- Site name, title, description
- LinkedIn URL
- WhatsApp number/URL
- Site URL

### Update WhatsApp Number

1. Edit `lib/constants.ts`
2. Update `whatsapp` field with your WhatsApp number
3. Format: `https://wa.me/[country code][number]` (e.g., `https://wa.me/1234567890`)

### Contact Form API

The contact form currently logs submissions to the console. To enable email notifications:

1. Create an API service (SendGrid, Resend, Nodemailer)
2. Update `app/api/contact/route.ts`
3. Add environment variables for API keys

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables (if needed)
4. Deploy

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Future Enhancements

### Phase 2
- [ ] Blog section
- [ ] Course pages
- [ ] Client testimonials
- [ ] Newsletter signup
- [ ] Dark mode support

### Phase 3
- [ ] Content Management System (CMS)
- [ ] Analytics integration
- [ ] A/B testing
- [ ] Advanced form handling with email service
- [ ] Database integration

## 🛠️ Development Guidelines

### Code Quality

- Follow TypeScript best practices
- Use ESLint rules
- Write tests for critical components
- Document complex functions with JSDoc
- Follow SRP (Single Responsibility Principle)

### Component Guidelines

- Keep components small and focused
- Use TypeScript interfaces for props
- Export components from index files (optional)
- Follow naming conventions (PascalCase for components)

### Styling Guidelines

- Use Tailwind utility classes
- Create reusable components for repeated patterns
- Use design tokens from `tailwind.config.ts`
- Maintain consistent spacing and typography

## 📄 License

This project is private and proprietary.

## 👤 Author

Victoria Andrea Espinoza Vidal

## 🤝 Support

For support, contact via:
- Email: (via contact form)
- WhatsApp: (via WhatsApp CTA)
- LinkedIn: [Victoria Andrea Espinoza Vidal](https://www.linkedin.com/in/victoria-andrea-espinoza-vidal-918853244)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

