# Hakuryu Kato's Portfolio Website

A modern, responsive portfolio website showcasing full-stack development, game design, and mobile app projects.

## Overview

This is a personal portfolio website built with **HTML, CSS, and vanilla JavaScript**. It features a clean, polished interface with smooth scroll animations and highlights work across three main areas:

- **Website Projects** — Flask apps, web applications, and responsive designs
- **Game Development** — Unity game prototypes and interactive mechanics
- **Mobile Apps** — Android Studio utilities and productivity tools

## Features

### Design & UX
- **Responsive Layout** — Mobile-friendly design that adapts to all screen sizes
- **Smooth Animations** — Intersection Observer-based scroll reveals for a polished feel
- **Modern Aesthetics** — Gradient orbs, custom typography (Inter & Outfit fonts), and clean card-based layouts
- **Dark-Friendly** — Professional color scheme optimized for readability

### Site Structure

```
portfolio_website/
├── public/
│   ├── index.html              # Home page with hero and overview sections
│   ├── profile.html            # Profile, skills, and expertise
│   ├── portfolio.html          # Main portfolio hub (website projects)
│   ├── portfolio_game.html     # Game development projects
│   ├── portfolio_mobile.html   # Mobile app projects
│   ├── about.html              # About section with contact links
│   ├── preview.html            # Project preview page
│   └── static/
│       ├── style.css           # Global styles and animations
│       ├── images/             # Project screenshots and icons
│       └── downloads/          # Project files for download
```

### Pages

| Page | Purpose |
|------|---------|
| **Home** (`index.html`) | Hero section, quick introduction, and three main portfolio categories |
| **Profile** (`profile.html`) | Detailed bio, skills, and what's featured in the portfolio |
| **Portfolio** (`portfolio.html`) | Web and website projects with screenshots and previews |
| **Game Dev** (`portfolio_game.html`) | Game prototypes and interactive experiments |
| **Mobile** (`portfolio_mobile.html`) | Android apps and mobile utilities |
| **About** (`about.html`) | Full background, education, contact links (GitHub, Facebook, Instagram) |

## Technologies Used

### Frontend
- **HTML5** — Semantic markup
- **CSS3** — Flexbox, Grid, animations, and custom properties
- **JavaScript (Vanilla)** — Scroll reveal animations, dynamic project rendering

### Skills Highlighted
- **Languages** — C#, Java, Python, JavaScript
- **Frameworks** — Flask, Unity, Android Studio
- **Tools** — Git, HTML/CSS, responsive design

## Key Components

### Scroll Reveal Animation
Uses the Intersection Observer API to reveal elements as they come into view:
```javascript
const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});
```

### Dynamic Project Rendering
Projects are defined as JavaScript objects and rendered into the DOM:
```javascript
const projects = [
  {
    name: 'Project Name',
    description: '...',
    tags: ['Tag1', 'Tag2'],
    image: 'static/images/project.png',
    actions: [...]
  }
];
```

### Responsive Navigation
Fixed header with navigation links to all main sections.

## Getting Started

1. **Open locally** — Open `public/index.html` in a browser
2. **View sections** — Use the navigation to explore projects
3. **Download projects** — Each project card has download links for source/builds
4. **Contact** — Social links on the About page (GitHub, Facebook, Instagram)

## Customization

- **Colors & Fonts** — Edit `static/style.css` for custom themes
- **Projects** — Update project objects in each portfolio page's `<script>` section
- **Images** — Add screenshots to `static/images/` and reference in project data
- **Content** — Edit HTML sections to update bio, skills, and descriptions

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge) with responsive design for mobile, tablet, and desktop.

## Contact

- **GitHub** — [github.com/HakuHaku1](https://github.com/HakuHaku1)
- **Facebook** — [Hakuryu Kato](https://www.facebook.com/hakuryu.kato.54/)
- **Instagram** — [@kato_hakuryu](https://www.instagram.com/kato_hakuryu/)

---

**Location** — Parañaque City, Philippines  
**Status** — Full-stack developer & aspiring game designer
