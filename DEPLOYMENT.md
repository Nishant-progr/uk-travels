# UK Travels - Deployment Guide

Welcome to the **UK Travels** deployment guide! This document will help you deploy your full-stack Next.js application to production.

## 🚀 Quick Start - Deploy to Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications with full backend support.

### Prerequisites
- A GitHub account
- A Vercel account (free tier available at [vercel.com](https://vercel.com))
- Your code pushed to a GitHub repository

### Step-by-Step Deployment

#### 1. Push Your Code to GitHub

First, initialize Git and push your code to GitHub:

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - UK Travels website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/uk-travels.git

# Push to GitHub
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Using Vercel Dashboard (Easiest)**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `uk-travels` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# For production deployment
vercel --prod
```

#### 3. Configure Environment Variables

In Vercel Dashboard:

1. Go to your project → Settings → Environment Variables
2. Add the following variables:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `DATABASE_URL` | PostgreSQL or SQLite connection string | `postgresql://user:pass@host/db` |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | Generate with: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Your production URL | `https://your-app.vercel.app` |
| `RESEND_API_KEY` | Resend email API key | `re_xxxxxxxxxxxxx` |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | `https://your-app.vercel.app` |

**Important**: Mark all variables (except `NEXT_PUBLIC_*`) as **Secret**.

#### 4. Set Up Production Database

**Option A: Use Vercel Postgres (Recommended)**

1. In Vercel Dashboard → Storage → Create Database → Postgres
2. Connect the database to your project
3. Vercel will automatically set `DATABASE_URL`

**Option B: Use External Provider**

Popular options:
- **Supabase** (PostgreSQL): [supabase.com](https://supabase.com) - Free tier available
- **PlanetScale** (MySQL): [planetscale.com](https://planetscale.com) - Free tier available
- **Railway** (PostgreSQL): [railway.app](https://railway.app) - Free tier available

After creating your database:
1. Get the connection string
2. Add it to Vercel environment variables as `DATABASE_URL`

#### 5. Run Database Migrations

After deploying, run migrations:

```bash
# Using Vercel CLI
vercel env pull .env.local

# Run migrations locally with production database
npx prisma migrate deploy

# Or use Vercel CLI to run in production
vercel exec -- npx prisma migrate deploy
```

---

## 🔧 Alternative Deployment Options

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Add environment variables in Netlify dashboard
4. Deploy

**Note**: Netlify requires the Next.js Runtime plugin for full Next.js support.

### Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects Next.js
5. Add environment variables
6. Deploy

Railway includes PostgreSQL database with one-click setup.

---

## 🌍 Environment Variables Reference

### Required Variables

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"

# Authentication
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="https://your-domain.com"

# Email Service
RESEND_API_KEY="re_your_api_key_here"

# Public Variables
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

### Generating Secrets

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## 📋 Pre-Deployment Checklist

- [ ] All code committed to Git
- [ ] `.env` file NOT committed (check `.gitignore`)
- [ ] Database schema finalized (`prisma/schema.prisma`)
- [ ] Production database created
- [ ] Environment variables configured
- [ ] API routes tested locally
- [ ] Build succeeds locally (`npm run build`)
- [ ] NextAuth.js configured with production URL

---

## 🔍 Troubleshooting

### Build Fails with Prisma Error

**Solution**: Ensure `postinstall` script runs Prisma generate:
```json
"scripts": {
  "postinstall": "prisma generate"
}
```

### Database Connection Issues

**Solutions**:
1. Verify `DATABASE_URL` is correctly set
2. Check database is publicly accessible
3. Verify SSL settings if using PostgreSQL:
   ```env
   DATABASE_URL="postgresql://...?sslmode=require"
   ```

### NextAuth.js Errors

**Solutions**:
1. Ensure `NEXTAUTH_URL` matches your production domain
2. Verify `NEXTAUTH_SECRET` is set and secure
3. Update allowed callback URLs

### Images Not Loading

**Solution**: Check `next.config.js` has correct image domains:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
},
```

---

## 🎯 Post-Deployment Steps

1. **Test All Features**
   - Contact form submission
   - Newsletter signup
   - Booking functionality
   - User authentication (if enabled)

2. **Set Up Custom Domain** (Optional)
   - In Vercel: Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - Update `NEXTAUTH_URL` and `NEXT_PUBLIC_SITE_URL`

3. **Enable Analytics** (Optional)
   - Vercel Analytics: Built-in, enable in dashboard
   - Google Analytics: Add tracking code to `app/layout.tsx`

4. **Set Up Monitoring**
   - Vercel provides built-in logging
   - Consider: Sentry for error tracking
   - Consider: LogSnag for user activity monitoring

---

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Prisma with Vercel](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)
- [NextAuth.js Deployment](https://next-auth.js.org/deployment)

---

## 🆘 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Review build logs for errors
3. Verify environment variables are set correctly
4. Test locally with production environment variables

---

**Happy Deploying! 🚀**

Your UK Travels website is now ready for the world!
