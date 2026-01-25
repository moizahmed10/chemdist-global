# ChemDist Global - Next.js Application

A modern, professional chemical distribution website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Project Overview

This is a complete multi-page website for **ChemDist Global**, featuring:

- **Homepage** - Hero section, industries served, global logistics showcase
- **Catalog Page** - Product grid with filters, search, and pagination
- **Product Detail Page** - Detailed chemical specifications, pricing request form
- **Company Info Page** - Company timeline, certifications, sustainability initiatives
- **Contact Page** - Contact form, regional offices, emergency hotline

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** version 20.9.0 or higher ([Download here](https://nodejs.org/))
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Navigate to the project directory:**

   ```bash
   cd c:\Users\moiza\OneDrive\Desktop\stitch_chemical_product_detail\chemdist-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
chemdist-nextjs/
├── app/
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Homepage
│   ├── catalog/
│   │   └── page.tsx         # Product catalog with filters
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx     # Dynamic product detail page
│   ├── company/
│   │   └── page.tsx         # Company info & compliance
│   ├── contact/
│   │   └── page.tsx         # Contact & support
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Reusable header component
│   └── Footer.tsx           # Reusable footer component
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Color Palette

- **Primary**: `#206d7e` (Teal/Cyan)
- **Background Light**: `#f6f7f8`
- **Background Dark**: `#1a1c1d`

### Typography

- **Font Family**: Manrope (Google Fonts)
- **Weights**: 200, 300, 400, 500, 600, 700, 800

### Icons

- **Material Symbols Outlined** from Google Fonts

## 📄 Available Pages

### 1. Homepage (`/`)

- Hero section with call-to-action buttons
- Chemical search bar
- Industries served showcase
- Global logistics information
- Certification badges

### 2. Product Catalog (`/catalog`)

- Filterable product grid
- Category sidebar
- CAS number search
- Application filters
- Pagination

### 3. Product Detail (`/product/[id]`)

- Detailed chemical information
- Technical specifications
- Packaging options
- Request quote form
- Extended analysis data

### 4. Company Info (`/company`)

- Company timeline
- ISO certifications (9001:2015, 14001:2015)
- REACH compliance
- Global distribution network
- Sustainability initiatives

### 5. Contact (`/contact`)

- Contact inquiry form
- Regional office locations
- Emergency hotline
- Interactive map
- Compliance badges

## 🚢 Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🔧 Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **@tailwindcss/forms** - Form styling plugin
- **Material Symbols** - Icon library

## ⚠️ Important Notes

### Node.js Version

This project requires **Node.js version 20.9.0 or higher**. If you're running an older version:

1. Download the latest LTS version from [nodejs.org](https://nodejs.org/)
2. Or use a version manager like [nvm](https://github.com/nvm-sh/nvm):
   ```bash
   nvm install 20
   nvm use 20
   ```

### Image Optimization

External images from Googleusercontent are used for demonstration. For production:

- Host images locally in the `/public` folder
- Use Next.js `<Image>` component for optimization
- Configure `next.config.ts` for external domains if needed

## 📝 Customization

### Updating Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#206d7e",  // Change this
  "background-light": "#f6f7f8",
  "background-dark": "#1a1c1d",
}
```

### Adding New Pages

1. Create a new folder in `/app` directory
2. Add a `page.tsx` file
3. Import Header and Footer components
4. Update navigation links in `Header.tsx`

### Modifying Components

- **Header**: `components/Header.tsx`
- **Footer**: `components/Footer.tsx`

## 📞 Features Implemented

✅ Responsive design (mobile, tablet, desktop)  
✅ Dark mode support  
✅ TypeScript type safety  
✅ Component reusability  
✅ Dynamic routing  
✅ Form inputs with Tailwind styling  
✅ Material icons integration  
✅ Custom Manrope font loading  
✅ SEO-friendly metadata

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy, specify a different port:

```bash
npm run dev -- -p 3001
```

### Build Errors

Clear Next.js cache:

```bash
rm -rf .next
npm run build
```

### Style Not Loading

Ensure Tailwind is properly configured in:

- `tailwind.config.ts`
- `postcss.config.mjs`
- `app/globals.css`

## 📜 License

This project is created for demonstration purposes based on provided HTML designs.

## 👤 Author

Created from HTML designs for ChemDist Global chemical distribution website.

---

**Last Updated**: January 2026  
**Next.js Version**: 16.1.4  
**React Version**: 19.2.3

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
