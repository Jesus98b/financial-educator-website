# Quick Start Guide

Get your Financial Educator website up and running in minutes!

## 🚀 Installation

```bash
# 1. Navigate to project directory
cd financial-educator-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

### 1. Update Site Configuration

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Victoria Andrea Espinoza Vidal',
  title: 'Financial Educator & Advisor',
  url: 'https://your-domain.com', // ⬅️ Update this
  linkedIn: 'https://www.linkedin.com/in/victoria-andrea-espinoza-vidal-918853244',
  whatsapp: 'https://wa.me/1234567890', // ⬅️ Update with your WhatsApp number
};
```

### 2. Update WhatsApp Number

Format: `https://wa.me/[country code][number]`

Example: `https://wa.me/1234567890` (for US number +1 (234) 567-8900)

### 3. Environment Variables (Optional)

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update with your configuration if needed.

## 📝 Next Steps

1. **Customize Content**
   - Edit `lib/constants.ts` for services, pricing, FAQ
   - Update page content in `app/*/page.tsx` files
   - Add your professional photo (when ready)

2. **Set Up Contact Form**
   - Currently logs to console
   - To enable email: Update `app/api/contact/route.ts`
   - Add email service (SendGrid, Resend, etc.)

3. **Test Everything**
   - Test all forms and links
   - Verify WhatsApp and LinkedIn links
   - Check mobile responsiveness
   - Run accessibility audit

4. **Deploy**
   - See `DEPLOYMENT.md` for detailed instructions
   - Recommended: Vercel (easiest for Next.js)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📚 Documentation

- **README.md** - Full project documentation
- **ARCHITECTURE.md** - Architecture details
- **DEPLOYMENT.md** - Deployment guide
- **UX_DESIGN.md** - Design system documentation

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors

```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## ✅ Checklist

Before going live:

- [ ] Update `SITE_CONFIG` in `lib/constants.ts`
- [ ] Update WhatsApp number
- [ ] Test all pages
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Test accessibility
- [ ] Set up email service (optional)
- [ ] Deploy to production

## 🆘 Need Help?

- Check the main **README.md** for detailed documentation
- Review **ARCHITECTURE.md** for system architecture
- See **DEPLOYMENT.md** for deployment options

---

Happy coding! 🎉

