# 📁 Building Your Own Portfolio Website Using Only HTML & CSS

A complete guide to building and deploying a personal portfolio website using only HTML, CSS, and a little JavaScript — no frameworks, no backend needed.

---

## 🧰 What You Need

- A code editor (VS Code recommended)
- A browser (Chrome, Edge, Firefox)
- A GitHub account (free)
- A Netlify account (free)

---

## 📂 Recommended Folder Structure

```
portfolio/
├── index.html              ← Home page
├── about.html              ← About page
├── portfolio.html          ← Portfolio listing page
├── preview.html            ← Project preview page
├── profile.html            ← Profile page
├── static/
│   ├── style.css           ← All your CSS styles
│   └── images/             ← All your images
│       ├── profile.jpg
│       ├── project1.jpg
│       └── ...
└── README.md
```

---

## 🏗️ Step 1 — Create Your HTML Pages

### index.html (Home Page)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="static/style.css">
</head>
<body>

    <!-- Header / Navigation -->
    <header class="site-header">
        <div class="container header-inner">
            <a href="index.html" class="brand">MyPortfolio</a>
            <nav class="main-nav">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="profile.html">Profile</a>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-panel">
        <div class="container hero-content">
            <h1>Hi, I'm Your Name</h1>
            <p>I'm a developer who builds cool things.</p>
            <div class="hero-actions">
                <a href="portfolio.html" class="button">View My Work</a>
                <a href="about.html" class="button button-secondary">About Me</a>
            </div>
        </div>
    </section>

    <!-- Overview Cards -->
    <section class="container home-overview">
        <div class="overview-card">
            <h2>🎮 Game Dev</h2>
            <p>Games built using Unity and other engines.</p>
        </div>
        <div class="overview-card">
            <h2>📱 Mobile Dev</h2>
            <p>Android apps built with Java and Flutter.</p>
        </div>
        <div class="overview-card">
            <h2>🌐 Web Dev</h2>
            <p>Websites built with HTML, CSS, and JavaScript.</p>
        </div>
    </section>

</body>
</html>
```

---

## 🎨 Step 2 — Link Your CSS

Always link your CSS in the `<head>` of every HTML file:

```html
<link rel="stylesheet" href="static/style.css">
```

For pages inside subfolders, adjust the path:
```html
<link rel="stylesheet" href="../static/style.css">
```

---

## 🖼️ Step 3 — Add Images

Place all images inside `static/images/` and reference them like this:

```html
<!-- Profile picture -->
<img src="static/images/profile.jpg" alt="My Profile Photo">

<!-- Project thumbnail -->
<img src="static/images/project1.jpg" alt="Project 1">
```

---

## 🔗 Step 4 — Linking Between Pages

Use relative links to navigate between pages:

```html
<!-- From index.html to about.html -->
<a href="about.html">About</a>

<!-- From index.html to portfolio.html -->
<a href="portfolio.html">Portfolio</a>

<!-- Back to home from any page -->
<a href="index.html">Home</a>
```

---

## ✨ Step 5 — Add Animations (CSS Only)

### Fade In on Load
```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}

.hero-content {
    animation: fadeIn 1s ease forwards;
}
```

### Hover Card Lift
```css
.overview-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.overview-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
```

### Smooth Scroll
```css
html {
    scroll-behavior: smooth;
}
```

---

## 📱 Step 6 — Make It Responsive

Add this to your CSS for mobile support:

```css
/* Tablet */
@media (max-width: 960px) {
    .home-overview {
        grid-template-columns: 1fr;
    }
}

/* Mobile */
@media (max-width: 640px) {
    .hero-content h1 {
        font-size: 2rem;
    }
    .main-nav {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }
}
No backend, no database, no cost — just pure HTML & CSS! 🎉
