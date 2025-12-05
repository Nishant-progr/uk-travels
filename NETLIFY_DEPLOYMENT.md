# Deploy UK Travels to Netlify 🚀

Complete step-by-step guide to deploy your UK Travels website to Netlify.

---

## 📋 Prerequisites

✅ GitHub account with your code pushed
✅ Netlify account (free) - Sign up at [netlify.com](https://netlify.com)
✅ Project configured (already done!)

---

## 🚀 Deployment Steps

### **Step 1: Push Your Latest Changes to GitHub**

```bash
# Add all changes
git add .

# Commit
git commit -m "feat: configure for Netlify deployment"

# Push to GitHub
git push origin main
```

---

### **Step 2: Sign Up / Log In to Netlify**

1. Go to [netlify.com](https://app.netlify.com)
2. Click **"Sign up"** or **"Log in"**
3. Choose **"Continue with GitHub"**
4. Authorize Netlify to access your GitHub repositories

---

### **Step 3: Import Your Project**

1. Click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. Authorize Netlify (if prompted)
4. **Search** for `uk-travels` repository
5. Click on your repository to select it

---

### **Step 4: Configure Build Settings**

Netlify will show the build configuration. Verify these settings:

| Setting | Value |
|---------|-------|
| **Branch to deploy** | `main` |
| **Build command** | `npm run build` |
| **Publish directory** | `.next` |
| **Functions directory** | (leave empty) |

**✅ These are auto-detected from your `netlify.toml` file!**

---

### **Step 5: Add Environment Variables** ⚠️ IMPORTANT!

**Before clicking Deploy**, scroll down to **"Environment variables"** section:

Click **"New variable"** and add each of these:

#### Required Variables:

| Variable Name | Value | How to Get |
|--------------|-------|------------|
| `DATABASE_URL` | `file:./prod.db` | For SQLite (temporary) |
| `NEXTAUTH_SECRET` | `[generated key]` | Generate below ⬇️ |
| `NEXTAUTH_URL` | Leave empty for now | Will update after deployment |
| `NEXT_PUBLIC_SITE_URL` | Leave empty for now | Will update after deployment |
| `RESEND_API_KEY` | Leave empty | Optional - for emails |

#### Generate NEXTAUTH_SECRET:

**Option 1 - PowerShell (Windows):**
```powershell
[Convert]::ToBase64String((1..32|%{Get-Random -Min 0 -Max 255}))
```

**Option 2 - Online Generator:**
Go to: https://generate-secret.vercel.app/

**Option 3 - Git Bash / Terminal:**
```bash
openssl rand -base64 32
```

Copy the generated key and paste it as the value for `NEXTAUTH_SECRET`.

---

### **Step 6: Deploy! 🎉**

1. Click **"Deploy [your-site-name]"** button
2. Wait 3-5 minutes for the build to complete
3. Watch the deploy logs (you can click on the deploying indicator)

**What Happens:**
```
✅ Cloning repository from GitHub
✅ Installing dependencies (npm install)
✅ Generating Prisma Client (postinstall)
✅ Building Next.js app (npm run build)
✅ Deploying to Netlify's CDN
✅ Site is live!
```

---

### **Step 7: Update Environment Variables with Your Site URL**

After deployment completes:

1. **Copy your Netlify site URL** (e.g., `https://uk-travels-abc123.netlify.app`)
2. Go to **Site settings** → **Environment variables**
3. **Edit** these variables:
   - `NEXTAUTH_URL` = `https://your-site.netlify.app` (your actual URL)
   - `NEXT_PUBLIC_SITE_URL` = `https://your-site.netlify.app`
4. Click **"Save"**
5. Go to **Deploys** tab → Click **"Trigger deploy"** → **"Clear cache and deploy"**

---

### **Step 8: Set Up Custom Domain (Optional)**

1. Go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow the instructions to update your domain's DNS records
5. Netlify will automatically provision an SSL certificate

---

## ✅ Deployment Checklist

- [ ] Step 1: Latest code pushed to GitHub
- [ ] Step 2: Signed up for Netlify
- [ ] Step 3: Imported GitHub repository
- [ ] Step 4: Verified build settings
- [ ] Step 5: Added environment variables
- [ ] Step 6: Deployed site
- [ ] Step 7: Updated URLs in environment variables
- [ ] Step 8: (Optional) Set up custom domain

---

## 🔧 Understanding the Configuration

### **netlify.toml File**

```toml
[build]
  command = "npm run build"        # Builds your Next.js app
  publish = ".next"                # Directory to publish

[[plugins]]
  package = "@netlify/plugin-nextjs"  # Enables Next.js features

[build.environment]
  NODE_VERSION = "20"              # Uses Node.js 20
```

This configuration:
- ✅ Enables Next.js App Router support
- ✅ Supports API routes as serverless functions
- ✅ Enables server-side rendering (SSR)
- ✅ Optimizes builds with caching

---

## 🎯 Common Issues & Solutions

### Issue 1: Build Fails with Prisma Error

**Solution**: The Prisma generation will work on Netlify! The local error is a Windows/environment issue.

If it still fails:
1. Check if `DATABASE_URL` is set in Environment Variables
2. Verify `prisma` is in `devDependencies` in `package.json`
3. Check build logs for specific error

### Issue 2: API Routes Return 404

**Solution**: 
- Netlify converts API routes to serverless functions automatically
- Make sure `@netlify/plugin-nextjs` is installed (already done!)
- Redeploy after adding the plugin

### Issue 3: Images Not Loading

**Solution**: 
- Check `next.config.js` has correct image domains
- Already configured for `images.unsplash.com`

### Issue 4: Environment Variables Not Working

**Solution**:
1. Go to Site settings → Environment variables
2. Make sure variables are set for "Production" context
3. Redeploy after adding variables

---

## 📊 Monitoring Your Deployment

### Build Logs
- Go to **Deploys** → Click on a deploy → View logs
- Shows: Install, Build, Deploy steps

### Function Logs
- Go to **Functions** tab
- Shows API route executions
- Great for debugging

### Analytics (Optional)
- Go to **Analytics** tab
- Enable Netlify Analytics to track visitors

---

## 🚀 Continuous Deployment

**Good news!** After initial setup, Netlify will:

✅ Automatically deploy when you push to GitHub
✅ Build previews for pull requests
✅ Rollback to previous deployments with one click
✅ Email you on successful/failed deployments

Every time you run:
```bash
git push origin main
```

Netlify will automatically rebuild and deploy! 🎉

---

## 🌐 Your Deployment URLs

After deployment, you'll have:

- **Production URL**: `https://your-site-name.netlify.app`
- **Deploy Preview URLs**: Unique URL for each branch/PR
- **Custom Domain**: (if you add one)

---

## 🆘 Need Help?

1. **Check Build Logs**: Deploys → Latest deploy → View logs
2. **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
3. **Netlify Support**: [answers.netlify.com](https://answers.netlify.com)

---

## 🎉 Quick Deploy Commands

```bash
# Complete deployment in 3 commands:

# 1. Add changes
git add .

# 2. Commit
git commit -m "feat: ready for Netlify deployment"

# 3. Push (triggers auto-deploy on Netlify)
git push origin main
```

Then just watch it deploy on Netlify! 🚀

---

**Ready to deploy? Follow the steps above and your site will be live in minutes!** 🌟
