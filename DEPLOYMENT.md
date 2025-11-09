# Deployment Guide

This guide covers deployment options and best practices for the Financial Educator website.

## 🚀 Vercel Deployment (Recommended)

Vercel is the recommended platform for Next.js applications, offering optimal performance and seamless integration.

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure settings:
     - Framework Preset: Next.js
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required variables:
     - `NEXT_PUBLIC_SITE_URL` (optional)
     - Email service API keys (if using)

4. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Vercel Configuration

Create `vercel.json` for additional configuration:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

## 🌐 Alternative Deployment Options

### Netlify

1. **Connect Repository**
   - Sign in to Netlify
   - Import from Git
   - Select your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18.x`

3. **Deploy**

### AWS Amplify

1. **Connect Repository**
   - Sign in to AWS Amplify Console
   - Connect repository
   - Select branch

2. **Build Settings**
   - Use Next.js preset
   - Build command: `npm run build`
   - Output directory: `.next`

3. **Deploy**

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t financial-educator-website .
docker run -p 3000:3000 financial-educator-website
```

## 📋 Pre-Deployment Checklist

- [ ] Update `SITE_CONFIG.url` in `lib/constants.ts`
- [ ] Update WhatsApp number in `lib/constants.ts`
- [ ] Test all forms and links
- [ ] Verify SEO metadata
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Check accessibility (WCAG compliance)
- [ ] Verify all external links work
- [ ] Test contact form submission
- [ ] Set up analytics (optional)
- [ ] Configure error tracking (optional)

## 🔧 Environment Variables

Create `.env.production` for production-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add other environment variables as needed
```

## 📊 Performance Optimization

### Before Deployment

1. **Run Build Analysis**
   ```bash
   npm run build
   ```

2. **Check Bundle Size**
   - Review `.next` output
   - Optimize large dependencies

3. **Image Optimization**
   - Use Next.js Image component
   - Optimize image formats (WebP, AVIF)
   - Lazy load images

4. **Lighthouse Audit**
   - Run Chrome DevTools Lighthouse
   - Target scores:
     - Performance: 90+
     - Accessibility: 100
     - Best Practices: 90+
     - SEO: 100

## 🔒 Security Checklist

- [ ] Security headers configured
- [ ] HTTPS enabled
- [ ] Form validation implemented
- [ ] Input sanitization active
- [ ] Honeypot field working
- [ ] No sensitive data in code
- [ ] Environment variables secured

## 📈 Post-Deployment

1. **Monitor Performance**
   - Set up Vercel Analytics
   - Monitor Core Web Vitals
   - Track error rates

2. **Set Up Monitoring**
   - Error tracking (Sentry, LogRocket)
   - Uptime monitoring
   - Performance monitoring

3. **SEO Verification**
   - Submit sitemap to Google Search Console
   - Verify robots.txt
   - Check meta tags
   - Test structured data

## 🆘 Troubleshooting

### Build Failures

- Check Node.js version (18+)
- Verify all dependencies installed
- Check for TypeScript errors
- Review build logs

### Runtime Errors

- Check environment variables
- Verify API routes
- Check browser console
- Review server logs

### Performance Issues

- Optimize images
- Check bundle size
- Enable caching
- Use CDN for static assets

## 📞 Support

For deployment issues, refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Examples](https://github.com/vercel/next.js/tree/canary/examples)

