# UK Travels Website 🌍✈️

A professional, full-stack travel agency website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Prisma ORM**.

## ✨ Features

### Frontend
- **Modern Design**: Beautiful, responsive UI with smooth animations
- **Hero Section**: Eye-catching landing page with call-to-action
- **Destinations**: Explore popular UK travel destinations
- **Tour Packages**: Browse and book curated tour experiences
- **Photo Gallery**: Stunning image gallery with lightbox view
- **Blog**: Travel tips, guides, and inspiration
- **Contact Form**: Get in touch with the team
- **Newsletter**: Subscribe for travel updates

### Backend
- **Full-Stack Architecture**: Next.js API routes with TypeScript
- **Database**: Prisma ORM with SQLite (dev) / PostgreSQL (production)
- **Authentication**: NextAuth.js integration (ready to use)
- **Email Service**: Resend API for contact form and newsletters
- **Form Validation**: Zod schema validation
- **API Routes**: Contact, Newsletter, Bookings, and more

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/uk-travels.git
   cd uk-travels
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   RESEND_API_KEY="your-resend-api-key"
   ```

4. **Set up the database**:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
uk-travels/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── prisma/
│   └── schema.prisma       # Database schema
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/          # API routes
│   │   │   ├── contact/
│   │   │   └── newsletter/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── destinations/
│   │   ├── gallery/
│   │   └── tours/
│   └── components/        # Reusable components
├── .env.example           # Environment variables template
├── DEPLOYMENT.md          # Detailed deployment guide
└── package.json
```

## 🌐 Deployment

This application is production-ready and optimized for deployment on **Vercel**.

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/uk-travels)

### Manual Deployment

For detailed deployment instructions, including:
- Environment variable setup
- Database configuration
- Custom domain setup
- Troubleshooting

**See the comprehensive [DEPLOYMENT.md](./DEPLOYMENT.md) guide.**

### Quick Steps

1. Push your code to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Database connection string | ✅ |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | ✅ |
| `NEXTAUTH_URL` | Your app URL | ✅ |
| `RESEND_API_KEY` | Resend email API key | ✅ |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | ✅ |

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Authentication**: NextAuth.js
- **Email**: Resend
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

## 📝 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Open an issue on GitHub
- Contact the development team

---

**Built with ❤️ for UK Travels**

