# CareDestinations Website

A modern, responsive medical tourism website that connects patients with leading hospitals, doctors, and medical specialists worldwide.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling navigation with dropdown menus for easy access to specialties
- **Treatment Filtering**: Dynamic filtering system to browse treatments by medical specialty
- **Hospital Showcase**: Display of top partner hospitals with detailed information
- **Work Process**: Clear 5-step process visualization for patient journey
- **Testimonials**: Patient testimonials and success stories
- **Blog Section**: Latest medical tourism news and articles
- **Modern UI/UX**: Beautiful gradient designs, smooth animations, and intuitive user interface

## Structure

```
CareDestinations_website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet with responsive design
├── js/
│   └── main.js         # JavaScript for interactivity
├── logo.png            # CareDestinations logo
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup for better SEO and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (Vanilla)**: No dependencies, pure JavaScript for optimal performance
- **Font Awesome 6.4.0**: Icon library for UI elements

## Sections

1. **Hero Section**: Eye-catching banner with treatment search functionality
2. **Work Process**: 5-step visualization of the medical journey
3. **Treatments**: Filterable grid of popular medical procedures
4. **Hospitals**: Showcase of top partner hospitals
5. **Specializations**: Medical specialties offered
6. **Call-to-Action**: Prominent sections encouraging user engagement
7. **Testimonials**: Patient reviews and ratings
8. **Blog**: Latest articles and medical tourism insights
9. **Footer**: Contact information and quick links

## Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit the `:root` section in `css/style.css`:

```css
:root {
    --primary-color: #2c5282;      /* Main brand color */
    --secondary-color: #48bb78;    /* Secondary brand color */
    --accent-color: #d4a574;       /* Accent color */
    --text-dark: #2d3748;          /* Dark text */
    --text-light: #718096;         /* Light text */
    --bg-light: #f7fafc;           /* Light background */
}
```

### Adding Treatments
To add new treatments, edit the `treatments` array in `js/main.js`:

```javascript
{
    name: "Treatment Name",
    specialty: "Specialty Name",
    category: "category-slug",
    hospitalDays: 1,
    duration: "Duration"
}
```

### Adding Hospitals
Edit the hospital cards in the HTML file's hospital section to add or modify hospital listings.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Installation

1. Clone or download this repository
2. Ensure the logo.png file is in the root directory
3. Open `index.html` in a web browser
4. No build process or dependencies required!

## Deployment

This is a static website and can be deployed to any web hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder or connect via Git
- **Vercel**: Import the project and deploy
- **Traditional Hosting**: Upload all files via FTP

## Contact

For inquiries about medical tourism services:

- **Email**: info@caredestinations.com
- **Phone**: +91 92811 11724
- **Address**: 805B, Manjeera Majestic Commercial, JNTU Rd, Kukatpally Housing Board Colony, Hyderabad, Telangana - 500072, India

## License

© 2025 CareDestinations Solutions Pvt Ltd. All Rights Reserved.

---

**Note**: Make sure to replace placeholder hospital images with actual images and update contact information as needed.

