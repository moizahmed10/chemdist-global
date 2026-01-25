# Arabic & English Language Support - Setup Guide

## Overview
The application now supports both Arabic (العربية) and English languages with full RTL support for Arabic.

## What's Been Implemented

### 1. Language Infrastructure
- ✅ Installed `next-intl` for internationalization
- ✅ Created middleware for locale routing (`/en` and `/ar`)
- ✅ Restructured app to use `[locale]` folder structure
- ✅ Configured Arabic RTL layout support

### 2. Translation Files
- ✅ Created `messages/en.json` - English translations
- ✅ Created `messages/ar.json` - Arabic translations
- ✅ All UI text is ready for translation (nav, home, catalog, product, quote, contact, careers, company, shipping, footer)

### 3. Components
- ✅ Language Switcher component added to header
- ✅ Supports switching between English and Arabic
- ✅ Preserves current page when switching languages

### 4. Google Sheets Multi-Language Support
- ✅ Updated `lib/googleSheets.ts` to accept `locale` parameter
- ✅ **Sheet1 = Arabic products** (ar)
- ✅ **Sheet2 = English products** (en)
- ✅ API routes pass locale from URL query params

### 5. Sample Data
- ✅ `sample-products-arabic.csv` - 20 products in Arabic for Sheet1
- ✅ `sample-products-english.csv` - 20 products in English for Sheet2

### 6. RTL Support
- ✅ Arabic pages automatically use `dir="rtl"`
- ✅ Tailwind CSS configured for RTL
- ✅ Layout adapts direction based on locale

## Google Sheets Setup

### Step 1: Import Data to Google Sheets
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1WmHCpR83TmD8SVLiUj53aBLhShKjVcmYIsPsBjboZbw
2. Make sure **Sheet1** exists (rename if needed) - this will be for **Arabic**
3. Create **Sheet2** - this will be for **English**

### Sheet1 (Arabic):
1. Open Sheet1
2. Import `sample-products-arabic.csv`
3. Go to File → Import → Upload
4. Choose "Replace current sheet"
5. Verify headers: id, name, category, cas, application, stock, description, packaging, fullDescription, specifications

### Sheet2 (English):
1. Create a new sheet and name it "Sheet2"
2. Import `sample-products-english.csv`
3. Go to File → Import → Upload
4. Choose "Replace current sheet"
5. Verify same headers as Sheet1

### Step 2: Verify Permissions
- Ensure the service account email `mirzachem@chemdis.iam.gserviceaccount.com` has **Viewer** access to both sheets

## How It Works

### Language Routing
- Default (English): `https://yourdomain.com/` or `https://yourdomain.com/en`
- Arabic: `https://yourdomain.com/ar`
- All routes support both languages: `/en/catalog`, `/ar/catalog`, etc.

### Data Fetching
- When user visits `/en/catalog` → API fetches from Sheet2 (English)
- When user visits `/ar/catalog` → API fetches from Sheet1 (Arabic)
- API automatically includes `?locale=en` or `?locale=ar` query parameter

### Language Switcher
- Click the language dropdown in header (shows current locale)
- Select English (🇬🇧) or Arabic (🇦🇪)
- Page reloads with new language
- All product data updates to selected language

## Next Steps (Remaining Work)

### Update Pages to Use Translations
The translation files are ready, but pages need to be updated to use them. Example:

```tsx
import { useTranslations } from 'next-intl';

export default function CatalogPage() {
  const t = useTranslations('catalog');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}
```

### Pages That Need Translation Updates:
1. `app/[locale]/page.tsx` - Home page
2. `app/[locale]/catalog/page.tsx` - Product catalog
3. `app/[locale]/product/[id]/page.tsx` - Product details
4. `app/[locale]/quote/page.tsx` - Quote form
5. `app/[locale]/contact/page.tsx` - Contact page
6. `app/[locale]/careers/page.tsx` - Careers page
7. `app/[locale]/company/page.tsx` - Company info
8. `app/[locale]/shipping/page.tsx` - Shipping page
9. `components/Header.tsx` - Navigation links
10. `components/Footer.tsx` - Footer content

### Update API Calls in Pages
Pages that fetch products need to pass locale:

```tsx
// Before
const res = await fetch('/api/products');

// After
const locale = useLocale();
const res = await fetch(`/api/products?locale=${locale}`);
```

## Testing

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Test English version:**
   - Visit `http://localhost:3000` or `http://localhost:3000/en`
   - Should load English content
   - Products from Sheet2

3. **Test Arabic version:**
   - Visit `http://localhost:3000/ar`
   - Should load Arabic content with RTL layout
   - Products from Sheet1

4. **Test Language Switcher:**
   - Click language dropdown in header
   - Switch between EN and AR
   - Verify page content and product data changes

## Environment Variables
No changes needed to `.env.local`. The same credentials work for both sheets:

```env
GOOGLE_SHEET_ID=1WmHCpR83TmD8SVLiUj53aBLhShKjVcmYIsPsBjboZbw
GOOGLE_CLIENT_EMAIL=mirzachem@chemdis.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
```

## Troubleshooting

### Products not loading in Arabic
- Check Sheet1 exists and has data
- Verify Sheet1 is shared with service account
- Check browser console for API errors

### Products not loading in English
- Check Sheet2 exists and has data
- Verify Sheet2 is shared with service account

### Language switcher not working
- Clear browser cache
- Check middleware.ts is configured correctly
- Verify [locale] folder structure exists

### RTL not working for Arabic
- Check `<html dir="rtl">` in page source when on Arabic pages
- Verify locale layout sets direction correctly

## File Structure
```
app/
  [locale]/           # Locale-specific pages
    layout.tsx        # Locale layout with dir attribute
    page.tsx          # Home page
    catalog/          # Catalog pages
    product/          # Product pages
    quote/            # Quote form
    contact/          # Contact page
    careers/          # Careers page
    company/          # Company info
    shipping/         # Shipping info
  api/
    products/         # Product APIs (locale-aware)
  layout.tsx          # Root layout
  globals.css
messages/
  en.json            # English translations
  ar.json            # Arabic translations
components/
  LanguageSwitcher.tsx  # Language dropdown
  Header.tsx         # Updated with language switcher
lib/
  googleSheets.ts    # Updated with locale support
middleware.ts        # Locale routing
i18n.ts             # i18n configuration
```

## Notes

- The language switcher preserves the current page path when switching
- All routes automatically support both languages
- Google Sheets data is completely separate per language (Sheet1 for Arabic, Sheet2 for English)
- Static UI text uses translation JSON files
- Dynamic product data comes from appropriate Google Sheet based on locale
