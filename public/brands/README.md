# Brand Logos Setup Guide

This folder contains brand logos displayed in the Brands section of the website.

## How to Add Brand Logos

1. **Image Format**: Use PNG or SVG format for best quality
   - PNG: Transparent background recommended
   - SVG: Vector format for crisp scaling

2. **Image Specifications**:
   - Recommended size: 200x200px or larger
   - Aspect ratio: Square or wide rectangle
   - Background: Transparent or white
   - File format: PNG with transparency preferred

3. **File Naming**:
   - Use lowercase names matching the brand
   - Replace spaces with hyphens
   - Examples:
     - milesight.png
     - bosch.png
     - hikvision.png
     - cpplus.png
     - dahua.png
     - etc.

4. **Add Your Logos**:
   - Place brand logo files in this `/public/brands/` folder
   - The website will automatically display them

5. **Update the Component** (if you add/remove brands):
   - Edit `/src/components/sections/Brands.tsx`
   - Update the `brands` array with your brand names and logo paths

## Current Brand List

The following brands are currently configured:

1. MILESIGHT → milesight.png
2. BOSCH → bosch.png
3. HIKVISION → hikvision.png
4. CP PLUS → cpplus.png
5. DAHUA → dahua.png
6. UNV → unv.png
7. HONEYWELL → honeywell.png
8. TP-LINK → tplink.png
9. PRAMA → prama.png
10. HI-FOCUS → hifocus.png
11. SPARSH → sparsh.png
12. PANASONIC → panasonic.png
13. NETGEAR → netgear.png
14. TENDA → tenda.png
15. D-LINK → dlink.png
16. FINOLEX → finolex.png

## To Enable Logo Images

Once you add the logo files, edit the Brands component:

1. Open `/src/components/sections/Brands.tsx`
2. Find the commented section that says: `{/* Uncomment when you have actual brand logos */}`
3. Uncomment the `<Image>` component
4. Comment or remove the placeholder div above it

## Current Display

Currently, the brands display with:
- First letter of brand name as placeholder
- Brand name text
- Hover effects and animations
- Professional card layout

Once logos are added, they will display as:
- Grayscale by default
- Full color on hover
- Smooth transitions
