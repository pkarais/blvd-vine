# BLVD Vine - Deployment Guide

## Project Setup ✅
- All TypeScript errors fixed
- Git repository initialized
- Vercel configuration added

## Next Steps for Vercel Deployment

### 1. Create a GitHub Repository
Push this project to GitHub:

```bash
# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/blvd-vine.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel
**Option A: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts to connect your GitHub account and deploy.

**Option B: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Click "Deploy"

### 3. Environment Variables (if needed)
If you add any environment variables later, configure them in Vercel dashboard:
- Project Settings → Environment Variables

### 4. Deployment Details
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Dev Command:** `npm run dev`
- **Framework:** Vite + React

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Lint code
npm run lint
```

## Key Features
- ✅ React 19 with TypeScript
- ✅ React Router for navigation (HashRouter for GitHub Pages compatibility)
- ✅ Tailwind CSS for styling
- ✅ Stripe integration stub (ready for checkout)
- ✅ Mock product data with two collections (Shop & Clergy)
- ✅ Shopping cart functionality
- ✅ Product detail pages
- ✅ Search & filtering

## Notes
- Uses HashRouter (`/#/`) for routing - perfect for static hosting
- `useShop` hook provides global state for cart & products
- Mock products in `src/components/constants.ts`
- All TypeScript strict mode enabled

---

**Ready to deploy!** 🚀
