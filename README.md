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
3. The site will be live at `https://github.com/laibapafaftab-debug/anchor-bookkeeping-website/`.

## Notes

- Colour palette (navy, gold, soft blue-grey) and typography were chosen to suit a finance/professional-services brand.
- Respects `prefers-reduced-motion` and keeps visible keyboard focus states throughout.
- Screenshots for **Desktop, Tablet, and Mobile** views are included in `/screenshots`, as required by the task deliverables.

## Screenshots

**Desktop**

![Anchor & Co. Desktop view](**<img width="1571" height="776" alt="Screenshot 2026-09-30 145158" src="https://github.com/user-attachments/assets/6f57d813-1af8-4304-b5b2-c58548163fb1" />
**)

**Tablet**

![Anchor & Co. Tablet view](<img width="956" height="631" alt="Screenshot 2026-09-30 145044" src="https://github.com/user-attachments/assets/dd1167bf-b7e5-46fd-845a-4f652833c3c5" />
**)

**Mobile**

![Anchor & Co. Mobile view(<img width="535" height="1075" alt="WhatsApp Image 2026-09-30 at 2 48 43 AM" src="https://github.com/user-attachments/assets/3dea87fe-13c8-4052-9550-dbad2946105c" />
**)
