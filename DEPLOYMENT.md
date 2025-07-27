# Deployment Guide for Village UMKM Marketplace

## Deploying to Vercel

### Prerequisites

1. Make sure you have a [Vercel account](https://vercel.com)
2. Install Vercel CLI globally: `npm i -g vercel`

### Method 1: Deploy via Vercel CLI

1. Build your project first:

   ```bash
   npm run build
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy:

   ```bash
   vercel
   ```

4. Follow the prompts:

   - Set up and deploy? **Y**
   - Which scope? **Select your account**
   - Link to existing project? **N** (for first deployment)
   - What's your project's name? **website-umkm** (or your preferred name)
   - In which directory is your code located? **./**

5. For production deployment:
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Custom 404 Page Configuration

Your project is already configured with:

- Custom 404 component at `src/pages/NotFound.tsx`
- Proper routing setup in `src/main.tsx` with catch-all route (`path="*"`)
- Vercel SPA configuration in `vercel.json` for client-side routing

### Environment Variables (if needed)

If you need to add environment variables:

1. Create `.env.local` for local development
2. Add environment variables in Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add your variables

### Post-Deployment

After deployment, Vercel will provide you with:

- **Production URL**: Your live website URL
- **Preview URLs**: For branch deployments
- **Analytics**: Performance and usage metrics

### Domain Configuration

To use a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- ✅ Custom 404 page for unmatched routes
- ✅ SPA routing configuration
- ✅ Optimized build settings
- ✅ Asset optimization
- ✅ Mobile-responsive design
- ✅ SEO-friendly structure
