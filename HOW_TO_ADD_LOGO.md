# How to Add Your Logo

## Quick Instructions

I can see you have the CareDestinations logo with the lotus flower design. Here's how to add it to the website:

### Step 1: Save Your Logo
1. Take the logo image file you have
2. Save it as `logo.png` 
3. Place it in the root directory: `/Users/dhirajtandon/CareDestinations_website/logo.png`

### Step 2: Logo Specifications
Your logo appears to have:
- **Design**: Pink lotus flower with "CD" letters and geometric elements
- **Background**: Appears to be on a light/transparent background
- **Circle border**: Gold/yellow circular border

**Recommended specs for web:**
- **Format**: PNG (with transparent background preferred)
- **Size**: 200-300px width
- **File size**: Under 100KB
- **Resolution**: 72 DPI (web standard)

### Step 3: Verify Logo Placement
After adding the logo file, open `index.html` in your browser and check:
- [ ] Logo appears in the top navigation bar
- [ ] Logo appears in the footer
- [ ] Logo is properly sized (not too large or small)
- [ ] Logo looks clear on both desktop and mobile

### Step 4: Adjust Logo Size (If Needed)
If the logo is too large or small, edit `css/style.css` at line 58:

```css
.logo img {
    height: 60px;    /* Change this value */
    width: auto;
}
```

Try these values:
- **Small**: `height: 50px;`
- **Medium**: `height: 60px;` (default)
- **Large**: `height: 80px;`

### Alternative: Different Logo Format
If you have your logo in a different format (JPG, SVG, etc.):

1. **For JPG**: Save as `logo.jpg` and update `index.html`:
   ```html
   <img src="logo.jpg" alt="CareDestinations Logo">
   ```

2. **For SVG** (recommended for best quality): Save as `logo.svg` and update `index.html`:
   ```html
   <img src="logo.svg" alt="CareDestinations Logo">
   ```

### Troubleshooting

**Logo not showing?**
- Make sure the filename is exactly `logo.png` (lowercase)
- Make sure it's in the root directory (same level as index.html)
- Try hard-refreshing your browser (Ctrl+Shift+R or Cmd+Shift+R)

**Logo looks blurry?**
- Use a higher resolution image
- Try SVG format for perfect scaling
- Ensure the image is at least 200px wide

**Logo has white background?**
- Use a PNG with transparency
- Or edit the logo in an image editor to remove the background

---

Once your logo is added, you can delete this file and the `PLACE_LOGO_HERE.txt` file.

Happy branding! 🎨

