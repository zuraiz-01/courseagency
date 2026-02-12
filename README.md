<div align="center">

# 🚀 Marketing Agency Landing Page

✨ Modern, animated, and fully component-based React landing page built with Vite.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Private-8A2BE2)](#)

### 🌐 Live Demo
[🔗 Open Website](https://marketingagencyreact.netlify.app/)

</div>

## 📌 Overview
This is a long-form marketing website with premium UI sections, scroll-triggered animations, sticky navigation, a custom themed cursor, and responsive design for desktop + mobile.

## 🎯 Highlights
- 🧊 Sticky glass-style navbar
- 🖱️ Custom purple-themed cursor (desktop/fine pointer)
- 🎬 Scroll reveal animations via `IntersectionObserver`
- 🧩 Reusable component-based architecture
- 🗂️ Data-driven content (`siteData.js`)
- 📱 Fully responsive layout

## 🧱 Website Sections
- 🏠 Header / Navigation
- 🌟 Hero Banner
- 🤝 Partner Strip
- 🔎 Search Courses
- 💡 Benefits
- 📊 Learning Impact Stats
- 🛤️ Journey / Process Steps
- 👩‍🏫 Teachers
- 💸 Offers / Pricing
- 💬 Testimonials
- 📚 Popular Courses
- ❓ FAQ
- ✅ Final CTA
- 📩 Contact
- 🦶 Footer

## 🛠️ Tech Stack
- ⚛️ React 19
- ⚡ Vite 7
- 🎨 Custom CSS (no UI framework)

## 📁 Project Structure
```text
src/
  components/
    Header.jsx
    HeroSection.jsx
    PartnerStrip.jsx
    SearchSection.jsx
    BenefitsSection.jsx
    StatsSection.jsx
    JourneySection.jsx
    TeachersSection.jsx
    OffersSection.jsx
    TestimonialsSection.jsx
    CoursesSection.jsx
    FaqSection.jsx
    FinalCtaSection.jsx
    ContactSection.jsx
    FooterSection.jsx
    CustomCursor.jsx
  data/
    siteData.js
  hooks/
    useScrollAnimations.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## 🚀 Getting Started
### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run development server
```bash
npm run dev
```

### 3️⃣ Build for production
```bash
npm run build
```

### 4️⃣ Preview production build
```bash
npm run preview
```

## 📜 Available Scripts
- `npm run dev` → Start Vite dev server
- `npm run build` → Create production build
- `npm run preview` → Preview production output
- `npm run lint` → Run ESLint

## 🎛️ Customization Guide
- Update content data in `src/data/siteData.js`
- Update global styles in `src/App.css`
- Add/remove sections in `src/App.jsx`
- Replace favicon in `public/favicon.svg`

## 📝 Notes
- ♿ Scroll animations auto-disable if user prefers reduced motion.
- 📵 Custom cursor auto-disables on touch/coarse pointer devices.
