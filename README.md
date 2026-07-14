# George Bligh Online Coaching

Live site: **[georgeblighcoaching.co.uk](https://georgeblighcoaching.co.uk)**

Single-page personal training website for George Bligh. No framework, no build step - vanilla HTML, CSS, and JS, deployed via Cloudflare Pages with auto-deploy on every push to `main`.

---

## Tech Stack

| Layer | Choice |
|---|---|
| HTML/CSS/JS | Vanilla, single `index.html`, no dependencies |
| Fonts | Google Fonts - Barlow Condensed 800 (display) + DM Sans 300 (body), loaded async |
| Forms | Formspree AJAX (`/f/mdaqkean`) |
| Email | Cloudflare Email Routing forwarded to Hotmail |
| Hosting | Cloudflare Pages (auto-deploys on push to `main`) |
| Domain | Fasthosts registrar, Cloudflare nameservers |

---

## Repository Structure

```
/
├── index.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── images/
│   │   ├── Hero 1080w x 2021h px.webp          Desktop hero (portrait)
│   │   ├── Hero 1to1 Mobile.webp                Mobile hero (square, served <=860px)
│   │   ├── About Main 1077w x 1915h px.webp
│   │   ├── about-main-600.webp                  Responsive variant (600px wide)
│   │   ├── About Secondary 1282x1282.webp
│   │   ├── Gallery 1-5 *.webp                   Full-res gallery images
│   │   ├── gallery-1-540.webp ... gallery-5-540.webp   Mobile variants (540px wide)
│   │   ├── Social meta Image.webp               OG/social share image
│   │   └── Favicon.webp
│   ├── logo.svg
│   └── og-template.html                         Source template for OG image
└── README.md
```

---

## Features

- **Sticky nav** with smooth-scroll anchor links and hamburger menu on mobile
- **Hero** - desktop uses a tall portrait image; mobile switches to a 1:1 square crop via `<picture>` element
- **Scroll-reveal animations** - sections fade up as they enter the viewport
- **Stats strip** - four key figures (experience, coaching style, flexibility, support)
- **About section** - two-image stack (main portrait + overlapping square accent image)
- **Services grid** - six service cards with numbered labels
- **Results section** - outcome list + client testimonial
- **Gallery** - 3-column asymmetric grid on desktop; horizontal swipe carousel with dot navigation and 2-second autoplay on mobile
- **Contact section** - phone, email, and WhatsApp links + Formspree AJAX form with honeypot spam protection
- **Footer** - logo, copy, social links, built-by credit

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 860px` | Full desktop layout, side-by-side hero, 3-col gallery grid |
| `<= 860px` | Stacked layout, hamburger menu, mobile hero image, 3-col square gallery |
| `<= 560px` | Carousel gallery, full-width buttons, about secondary image inset |
| `<= 380px` | Hero socials hidden, carousel cards widen to 85vw |

---

## Images

All images are WebP. Responsive variants are generated with Pillow and wired via `srcset`/`sizes` so the browser picks the right size automatically.

| Image | Served on | File size |
|---|---|---|
| Hero portrait | Desktop (>860px) | 323KB |
| Hero 1:1 square | Mobile (<=860px) | 119KB |
| About Main full-res | Desktop | 463KB |
| about-main-600 | Mobile | 58KB |
| Gallery 1-5 full-res | Desktop | 444-635KB each |
| gallery-1-5-540 | Mobile | 31-73KB each |

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#1C1A18` | Page background |
| `--bg-raised` | `#242220` | Alternate section background |
| `--bg-card` | `#2C2926` | Cards and footer |
| `--accent` | `#D4823A` | Amber - primary brand colour |
| `--text-primary` | `#F0EBE3` | Headings and key text |
| `--text-secondary` | `#A89E92` | Body copy |
| `--text-muted` | `#6B6059` | Labels, placeholders |
| `--border` | `#3A3632` | Borders |

---

## Making Changes

Any push to `main` triggers a Cloudflare Pages deploy - usually live within 60 seconds.

**Updating copy:** edit text directly in `index.html`. British English, first person (George's voice), hyphens not em dashes.

**Replacing images:** upload via the GitHub web UI to `assets/images/`, then update the `src`/`srcset` in `index.html`. For large new images, generate a smaller variant with Pillow (see the existing gallery/about pattern at 540px/600px) and add it to the `srcset`.

**Contact form:** submissions go to Formspree form `mdaqkean`, forwarded to `info@georgeblighcoaching.co.uk` via Cloudflare Email Routing.

---

*Built by [Josh Falconer](https://www.linkedin.com/in/joshua-w-falconer/)*
