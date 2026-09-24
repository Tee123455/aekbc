# Agape Ebenezer Karen Baptist Church Website

A modern, responsive website for Agape Ebenezer Karen Baptist Church built with HTML5, CSS3, and JavaScript.

## Project Structure

```
aekbc/
├── index.html                      # Main homepage
├── leadership-ministries.html      # Leadership & ministries page
├── src/
│   ├── css/
│   │   └── styles.css              # Global stylesheet
│   └── js/
│       └── main.js                 # Main functionality (navigation, smooth scroll, filters)
├── README.md                       # This file
└── .gitignore                      # Git ignore configuration
```

## Features

- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI**: Dark theme with indigo and teal accents
- **Smooth Navigation**: Anchor-based navigation with smooth scrolling
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Events Filter**: Filter events by day of week
- **YouTube Integration**: Embedded sermon videos
- **Accessibility**: Semantic HTML with ARIA labels

## Sections

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Welcome section with call-to-action buttons
3. **About** - Mission statement and core values (Worship, Grow, Serve)
4. **Sermons** - YouTube sermon videos
5. **Events** - Announcements and upcoming events with filter buttons
6. **Testimonials** - Member stories and social proof
7. **Community Impact** - Outreach and mission work
8. **Give** - Online giving section
9. **Footer** - Copyright and social media links

### Leadership & Ministries Page (Separate)
- **Leadership Team** - Pastor Ebenezer Ku and leadership bios
- **Ministries** - Detailed information about each ministry group
- **How to Get Involved** - Guide for joining ministries

## Setup Instructions

### Local Development
Simply open `index.html` in your browser:
```bash
open index.html
```

Or use a local server:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

## Customization

### Colors
Edit CSS variables in `src/css/styles.css`:
```css
:root {
  --bg: #0b1020;           /* Background color */
  --card: #0f1530;         /* Card background */
  --ink: #e6e9f5;          /* Text color */
  --accent: #7c9cff;       /* Primary accent */
  --accent-2: #76e4c3;     /* Secondary accent */
  /* ... more variables ... */
}
```

### Content
Edit `index.html` to update:
- Church name and branding
- Service times and location
- Ministries and descriptions
- Sermon videos (YouTube embed IDs)
- Events and announcements
- Social media links

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Sizes

- `index.html`: ~15 KB
- `src/css/styles.css`: ~8 KB
- `src/js/main.js`: ~3 KB

## Performance

- No dependencies (uses vanilla JavaScript)
- External libraries: Google Fonts, YouTube embeds
- Optimized CSS with CSS Grid and Flexbox
- Smooth animations and transitions

## License

© 2025 Agape Ebenezer Karen Baptist Church. All rights reserved.

## Support

For questions or to report issues, contact: teemoo2212@gmail.com

---

**Last Updated**: 2025-09-12
