# CareDestinations Website - Setup Instructions

## Quick Start Guide

### 1. Logo Setup
The website is configured to use `logo.png` in the root directory. 

**To add your logo:**
- Save your CareDestinations logo as `logo.png` in the root directory of this project
- Recommended size: 200-300px width, transparent background (PNG format)
- The logo will automatically appear in the navigation bar and footer

### 2. Open the Website
Simply open `index.html` in your web browser:
- **Double-click** `index.html`, or
- **Right-click** → Open with → Your preferred browser

### 3. Testing
The website should display with:
- ✅ Responsive navigation menu
- ✅ Hero section with search functionality
- ✅ 5-step work process
- ✅ Treatment cards with filtering
- ✅ Hospital listings
- ✅ Testimonials
- ✅ Blog articles
- ✅ Contact footer

### 4. Customization Quick Tips

#### Update Contact Information
Edit the footer section in `index.html` (around line 600):
```html
<li><i class="fas fa-envelope"></i> info@caredestinations.com</li>
<li><i class="fas fa-phone"></i> +91 92811 11724</li>
```

#### Change Colors
Edit `css/style.css` (lines 2-10):
```css
:root {
    --primary-color: #2c5282;      /* Change this for main brand color */
    --secondary-color: #48bb78;    /* Change this for buttons/accents */
    --accent-color: #d4a574;       /* Change this for highlights */
}
```

#### Add More Treatments
Edit `js/main.js` (lines 2-140) - Add to the `treatments` array:
```javascript
{
    name: "Your Treatment Name",
    specialty: "Specialty",
    category: "category-name",
    hospitalDays: 1,
    duration: "1-2 hours"
}
```

### 5. Deployment Options

#### Option A: GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```
Then enable GitHub Pages in repository settings.

#### Option B: Netlify (Free)
1. Drag and drop the entire folder to Netlify.com
2. Your site will be live instantly!

#### Option C: Traditional Web Hosting
1. Connect via FTP
2. Upload all files to your public_html or www directory
3. Done!

### 6. Browser Testing Checklist
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile Chrome (iOS/Android)
- [ ] Mobile Safari (iOS)
- [ ] Tablet view

### 7. Performance Tips
- Compress images before adding them to the `images/` folder
- Keep the logo file under 100KB for fast loading
- Use WebP format for hospital images when possible

### 8. Common Issues & Solutions

**Issue**: Logo not showing
- **Solution**: Make sure `logo.png` exists in the root directory

**Issue**: Mobile menu not working
- **Solution**: Clear browser cache and reload

**Issue**: Treatment cards not appearing
- **Solution**: Check browser console (F12) for JavaScript errors

**Issue**: Styles not loading
- **Solution**: Verify the `css/` folder contains `style.css`

### Need Help?
Check the main `README.md` file for detailed documentation.

---

## File Structure
```
CareDestinations_website/
├── index.html              ← Main page
├── logo.png               ← Place your logo here!
├── css/
│   └── style.css          ← All styling
├── js/
│   └── main.js            ← Interactivity
├── images/                ← Optional: Place additional images here
├── README.md              ← Full documentation
└── SETUP.md              ← This file
```

**Ready to go!** 🚀

