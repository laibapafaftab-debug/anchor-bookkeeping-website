# Anchor & Co. — Bookkeeping for Small Businesses

**Inovegen Internship — Task 3: Responsive Service Business Website**
**Domain:** Web Development — Front-End
**Author:** Laiba Aftab

**Live demo:** _add your GitHub Pages link here after deploying_

## Description

Anchor & Co. is a fictional small-business bookkeeping, tax preparation, and payroll service. The site introduces the business, explains its three core services, builds trust with an about section, answers common questions, and collects inquiries through a contact form.

## Sections

1. **Home** — hero introduction with the core offer and a call to action
2. **Services** — bookkeeping, tax preparation, and payroll, each explained plainly
3. **About** — who the business serves and why, with two trust stats
4. **FAQ** — common questions answered in an expandable accordion
5. **Contact** — a validated inquiry form

## Technologies

- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`)
- CSS3 — Flexbox and Grid for layout, custom properties for theming, hover and focus states throughout
- Vanilla JavaScript (no frameworks or libraries)
- Google Fonts: Newsreader (headings) and Public Sans (body)

### JavaScript interactivity
- **Mobile navigation menu** — hamburger toggle for small screens
- **FAQ accordion** — expand/collapse, one answer open at a time
- **"Book a consultation" modal** — opens from the nav, closes on click-outside, close button, or Escape
- **Contact form validation** — required fields and email format checked on blur and on submit, with inline error messages and a success confirmation

## Project structure

```
├── index.html
├── styles.css
├── script.js
├── favicon.svg
├── screenshots/
└── README.md
```

## How to run  

No build step or dependencies required — open `index.html` directly in any browser, or serve locally with `npx serve .`.

## How to deploy (GitHub Pages)

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**, set the source to the `main` branch, root folder.
3. The site will be live at `https://<username>.github.io/<repo-name>/`.

## Notes

- Colour palette (navy, gold, soft blue-grey) and typography were chosen to suit a finance/professional-services brand.
- Respects `prefers-reduced-motion` and keeps visible keyboard focus states throughout.
- Screenshots for **desktop, tablet, and mobile** views are included in `/screenshots`, as required by the task deliverables.
