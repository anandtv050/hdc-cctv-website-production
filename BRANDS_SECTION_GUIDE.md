# Brands Section - Setup Guide

## What Was Added

A professional **Brands/Partners section** has been added to your CCTV website, displaying all the security brands you work with.

### Location
- **Position**: Just above the Footer section
- **Page**: Home page (page.tsx)

### Features
✅ Responsive grid layout (2 columns on mobile, up to 5 on desktop)
✅ Smooth animations and hover effects
✅ Professional card design matching your website theme
✅ Trust badges showing "16+ Premium Brands", "100% Authentic Products", "Certified Installation Team"
✅ Grayscale to color effect on hover (when logos are added)

---

## Current Brands Included

The following 16 brands are configured:

1. **MILESIGHT**
2. **BOSCH**
3. **HIKVISION**
4. **CP PLUS**
5. **DAHUA** (corrected spelling from "DAUHA")
6. **UNV**
7. **HONEYWELL**
8. **TP-LINK**
9. **PRAMA**
10. **HI-FOCUS**
11. **SPARSH**
12. **PANASONIC**
13. **NETGEAR**
14. **TENDA**
15. **D-LINK**
16. **FINOLEX**

**Note**: ZION, FOX-TECK UK, and RAVOZ were not included in the initial setup but can be easily added.

---

## How to Add Brand Logos (Important!)

### Current Display
Right now, the brands show as **placeholder cards** with:
- First letter of the brand name
- Full brand name text
- Professional styling

### To Add Real Logos:

#### Step 1: Prepare Logo Images
- **Format**: PNG (with transparent background) or SVG
- **Size**: Recommended 200x200px or larger
- **Background**: Transparent or white
- **Quality**: High resolution for crisp display

#### Step 2: Add Logo Files
1. Place all brand logo images in the folder: `/public/brands/`
2. Name them exactly as shown:
   - `milesight.png`
   - `bosch.png`
   - `hikvision.png`
   - `cpplus.png`
   - `dahua.png`
   - (and so on...)

#### Step 3: Enable Logos in Code
1. Open file: `src/components/sections/Brands.tsx`
2. Find the section marked: `{/* ========== PLACEHOLDER VERSION (Currently Active) ========== */}`
3. **Comment out** or **delete** that entire placeholder section
4. Find the section marked: `{/* ========== LOGO VERSION (Enable when logos are ready) ========== */}`
5. **Uncomment** the Image component code inside

---

## How to Add/Remove Brands

### To Add More Brands:
1. Open `src/components/sections/Brands.tsx`
2. Find the `brands` array at the top
3. Add new entries like this:
```typescript
{ name: "ZION", logo: "/brands/zion.png" },
{ name: "FOX-TECK", logo: "/brands/foxteck.png" },
```

### To Remove Brands:
Simply delete the corresponding line from the `brands` array.

---

## Customization Options

### Change Section Title
Edit line ~45 in `Brands.tsx`:
```typescript
Authorized Dealer for
<span className="gradient-text ml-2">Premium Brands</span>
```

### Change Trust Badge Numbers
Edit lines ~121-136 in `Brands.tsx` to update:
- "16+ Premium Brands" → Change to your actual count
- "100% Authentic Products"
- "Certified Installation Team"

### Change Grid Layout
Edit line ~58 in `Brands.tsx`:
```typescript
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
```
- `grid-cols-2` = 2 columns on mobile
- `sm:grid-cols-3` = 3 columns on small tablets
- `md:grid-cols-4` = 4 columns on medium screens
- `lg:grid-cols-5` = 5 columns on large screens

---

## Preview the Changes

Run your development server:
```bash
npm run dev
```

Then open: `http://localhost:3000`

Scroll down to see the Brands section just above the footer.

---

## Need Help?

### Files Modified:
1. **Created**: `src/components/sections/Brands.tsx` - Main brands component
2. **Modified**: `src/app/page.tsx` - Added Brands to page layout
3. **Created**: `public/brands/` - Folder for brand logos
4. **Created**: `public/brands/README.md` - Logo setup instructions

### Tips:
- The section is fully responsive and mobile-friendly
- Hover effects work automatically
- Animation timings are staggered for a professional reveal
- The design matches your existing website style perfectly

---

## Quick Checklist

- [ ] Review the brands section on the website
- [ ] Collect high-quality logo images for all 16 brands
- [ ] Add logo files to `/public/brands/` folder
- [ ] Enable logo display in `Brands.tsx` (follow Step 3 above)
- [ ] Test on mobile and desktop
- [ ] Deploy to production

---

**That's it!** Your professional brands section is ready to showcase your partnerships. 🎉
