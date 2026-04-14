# George Bligh Online Coaching — Website

Personal training and online coaching website for George Bligh. Built as a single-page site with sticky navigation, deployed via GitHub Pages initially, then migrated to a custom domain via Cloudflare once secured.

---

## Tech Stack

| Layer | Choice |
|---|---|
| HTML | Semantic HTML5, single `index.html` |
| CSS | Vanilla CSS with custom properties, no framework |
| JS | Vanilla JS, no dependencies |
| Fonts | Google Fonts — Barlow Condensed + DM Sans |
| Deployment | GitHub Pages → Cloudflare + custom domain |
| Forms | Pending — see pre-launch checklist |

---

## Repository Structure

```
/
├── index.html          Main site (one-pager with anchor nav)
├── template.html       Reusable starting point for future pages
├── style.css           Global design system and component styles
├── main.js             Global JavaScript (nav, scroll reveal, form)
├── assets/             Add all images and media here (create folder)
│   ├── images/
│   └── og-image.jpg    Social share preview image
└── README.md
```

---

## Local Development

No build step required. Open `index.html` directly in a browser, or use a simple local server to avoid font/asset path issues:

```bash
# Python (built in)
python -m http.server 8000

# Node (if installed)
npx serve .
```

---

## Deployment

### GitHub Pages (current)

1. Push to `main` branch
2. Go to repo **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Site will be live at `https://jwfalc-coder.github.io/George-Bligh-Online-Coaching`

### Custom Domain via Cloudflare (once domain is secured)

1. Purchase domain (e.g. `georgeblighcoaching.com`)
2. Add domain to Cloudflare and point nameservers
3. In GitHub Pages settings, add custom domain
4. GitHub will auto-generate a `CNAME` file in the repo
5. In Cloudflare DNS, add a `CNAME` record pointing `www` → `jwfalc-coder.github.io` with proxy **off** (DNS only) during setup
6. Enable HTTPS in GitHub Pages settings once DNS propagates
7. Switch Cloudflare proxy back on for CDN and DDoS protection

---

## Email Setup (info@ address)

GitHub Pages only serves static files — there is no mail server involved. Cloudflare handles DNS but does not host email by default. The `info@yourdomain.com` address needs to be configured separately. Three options are listed below, from simplest to most fully-featured.

---

### Option 1 — Cloudflare Email Routing (recommended, free)

Cloudflare's built-in email routing forwards any mail sent to `info@yourdomain.com` straight to an existing inbox (e.g. George's personal Gmail). No separate email provider, no new apps, no monthly cost.

**Limitation:** receive only. George cannot *send* from `info@` unless he configures a Gmail "Send mail as" alias (see below).

**Setup steps:**

1. In the Cloudflare dashboard, go to **Email → Email Routing**
2. Click **Get started** and follow the wizard
3. Cloudflare will automatically add the required `MX` and `TXT` DNS records
4. Under **Routing rules**, add a custom address: `info@yourdomain.com` → forward to George's personal email
5. Verify the destination address when prompted (Cloudflare sends a confirmation link)
6. Done — emails to `info@` will arrive in George's existing inbox within minutes

**Optional — send from `info@` via Gmail:**

1. In Gmail, go to **Settings → Accounts → Send mail as → Add another email address**
2. Enter `info@yourdomain.com`, untick "Treat as alias"
3. Use `smtp.gmail.com` as the SMTP server with George's Gmail credentials
4. Gmail will send a verification code to `info@` — it will arrive via the forwarding rule above
5. Once verified, George can choose `info@yourdomain.com` as the From address when composing

---

### Option 2 — Google Workspace (~£5–6/month)

A full `info@yourdomain.com` mailbox George can send and receive from, using the standard Gmail interface. Most professional option if email is a primary client communication channel.

**Setup steps:**

1. Sign up at [workspace.google.com](https://workspace.google.com) and select the Starter plan
2. Enter the domain when prompted — Google will provide DNS records to add in Cloudflare
3. In Cloudflare DNS, add the `MX` records Google provides (delete any existing MX records first)
4. Add the `TXT` verification record to confirm domain ownership
5. Complete setup in the Google Workspace Admin console
6. `info@yourdomain.com` is live — access via Gmail or any mail client

---

### Option 3 — Zoho Mail (free for single domain)

Full send/receive custom email with no monthly cost. Slightly more setup than Cloudflare routing but a reasonable middle ground.

**Setup steps:**

1. Sign up at [zoho.com/mail](https://www.zoho.com/mail/) and choose the Free plan
2. Add the domain and follow Zoho's DNS verification steps
3. In Cloudflare DNS, add the `MX`, `SPF`, and `DKIM` records Zoho provides
4. Create the `info@` mailbox in the Zoho admin panel
5. Access mail via [mail.zoho.eu](https://mail.zoho.eu) or configure a mail client

---

### Which to choose

| | Cloudflare Routing | Google Workspace | Zoho Mail |
|---|---|---|---|
| Cost | Free | ~£5–6/month | Free |
| Send from `info@` | Via Gmail alias | Yes, natively | Yes, natively |
| Setup complexity | Very simple | Simple | Moderate |
| Best for | Forwarding only, keeping things lean | Professional daily use | Full mailbox without cost |

**Recommendation:** start with Cloudflare Email Routing. It takes under five minutes, costs nothing, and means all contact form submissions and direct emails land in George's existing inbox. Upgrade to Google Workspace if he needs to actively send from `info@` at scale.

> **Note:** whichever option is chosen, the contact form on the site routes through a separate service (Formspree etc.) and is not affected by the email setup. They are independent.

---

## Pre-Launch Checklist

Everything below must be resolved before the site goes live. Items are grouped by priority.

---

### 🔴 Critical — site will not function correctly without these

#### Content
- [ ] **Hero photo** — replace placeholder. Recommended size: `900 × 1080px`. Portrait orientation, George in action or strong solo shot.
- [ ] **About photo (main)** — replace placeholder. Recommended: `700 × 900px`.
- [ ] **About photo (secondary)** — optional overlapping accent image. Recommended: `500 × 500px`. Can be removed entirely if not needed.
- [ ] **Gallery photos** — minimum 6 images. At desktop, grid uses varied aspect ratios (see placeholders for sizes). At tablet/mobile, all images display as 1:1 squares — ensure subjects are centred so square cropping works.
- [ ] **Testimonial** — replace placeholder quote, client name, and result summary. Add client photo (48 × 48px, circular) or remove the photo slot if client prefers no image.
- [ ] **Contact details** — replace all `XXXX` placeholders in the contact section and footer:
  - Phone number (`tel:` link)
  - Email address (`mailto:` link)
  - WhatsApp number (`https://wa.me/44...` link — include country code, no spaces or `+`)
- [ ] **Social media URLs** — replace all `href="#"` on social links (Instagram, TikTok, Facebook, LinkedIn) in both the hero and footer.

#### Contact Form
- [ ] **Wire up the form** — the form currently simulates a send with a timeout. It does not actually send anything. Choose one of:
  - **[Formspree](https://formspree.io)** (free tier, easy, no backend needed) — add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag and remove the JS submit handler
  - **[EmailJS](https://emailjs.com)** (free tier, sends directly from JS) — add SDK and update `main.js`
  - **Netlify Forms** (if hosting moves to Netlify) — add `netlify` attribute to `<form>`
  - Custom backend endpoint

---

### 🟡 Important — affects SEO, trust, and professionalism

#### SEO
- [ ] **Page title** — update `<title>` in `index.html`. Suggested: `George Bligh Online Coaching | Personal Trainer Portsmouth`
- [ ] **Meta description** — update `<meta name="description">`. Should be 140–160 characters, include key terms (online coaching, personal trainer, Portsmouth).
- [ ] **Canonical URL** — update `<link rel="canonical" href="...">` once domain is confirmed.
- [ ] **Open Graph tags** — update `og:title`, `og:description`, `og:url` and provide a proper `og:image` (recommended: `1200 × 630px` — this is what appears when the link is shared on social media).
- [ ] **Structured data (optional but recommended)** — add a `LocalBusiness` or `Person` JSON-LD block in the `<head>`. Helps Google understand the business.
- [ ] **Alt text on all images** — once real photos are added, ensure every `<img>` tag has a descriptive `alt` attribute.
- [ ] **Sitemap** — add a `sitemap.xml` once domain is live. Can be generated at [xml-sitemaps.com](https://www.xml-sitemaps.com).
- [ ] **Google Search Console** — verify ownership once domain is live and submit sitemap.

#### Favicon & Brand
- [ ] **Favicon** — currently commented out. Once a logo is created, export:
  - `favicon-32.png` (32 × 32px)
  - `favicon-16.png` (16 × 16px)
  - `apple-touch-icon.png` (180 × 180px)
  - Optionally a `favicon.ico` for legacy browser support
  - Uncomment the `<link>` tags in `<head>`
- [ ] **Logo** — George has no logo currently. Options:
  - Commission a designer
  - Create a typographic logo using the existing Barlow Condensed font treatment
  - Use current text-only nav treatment as permanent brand identity (acceptable)

#### Legal
- [ ] **Footer year** — update `© 2025` if launch is in a different year, or make it dynamic with JS: `document.write(new Date().getFullYear())`
- [ ] **Privacy Policy** — required if the contact form collects personal data (name, email). Minimum: a simple page stating what data is collected, why, and how long it is kept. GDPR applies.
- [ ] **Cookie notice** — if Google Analytics or any third-party tracking is added later, a cookie consent banner is required under UK/EU law. Not needed in the current no-tracking build.
- [ ] **Business address** — consider whether to include a business address in the footer (not required for a sole trader operating online, but adds trust).

---

### 🟢 Nice to have — improve experience and growth

#### Performance
- [ ] **Compress all images** — run every photo through [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com) before uploading. Target under 200KB per image.
- [ ] **Convert images to WebP** — better compression than JPEG/PNG. Add JPEG fallback for older browsers using `<picture>` element.
- [ ] **Lazy load gallery images** — add `loading="lazy"` attribute to all `<img>` tags outside the initial viewport.
- [ ] **Preload hero image** — add `<link rel="preload" as="image" href="...">` in `<head>` for the hero photo to improve LCP score.
- [ ] **Self-host fonts (optional)** — Google Fonts loads from a third-party server. For maximum performance and privacy, download and self-host Barlow Condensed and DM Sans.

#### Analytics
- [ ] **Google Analytics 4** — add GA4 tracking snippet once domain is live. Create property at [analytics.google.com](https://analytics.google.com). Paste the `gtag.js` snippet before `</head>`.
- [ ] **Goal tracking** — set up conversion events in GA4 for form submissions and WhatsApp/phone link clicks.

#### Features (future)
- [ ] **Gallery lightbox** — clicking a gallery image should open it full-size with a close button. Placeholder slots are already 1:1 on mobile. A lightweight library like [GLightbox](https://biati-digital.github.io/glightbox/) or a custom implementation can be dropped in.
- [ ] **More testimonials** — the current build shows one quote. A carousel or a 2–3 card grid would strengthen social proof as more reviews come in.
- [ ] **Blog / tips section** — George mentioned he's open to adding more as the business grows. A simple `/blog/` folder with individual HTML pages using `template.html` is all that's needed.
- [ ] **WhatsApp floating button** — a fixed bottom-right WhatsApp icon for instant mobile contact. High conversion on mobile PT sites.
- [ ] **Booking integration** — if George moves to an online booking system (Calendly, Acuity, etc.), the "Book a Free Call" CTA can link directly to a booking page or embed a widget.

---

## Design Tokens (quick reference)

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#1C1A18` | Page background |
| `--bg-raised` | `#242220` | Alternate section background |
| `--bg-card` | `#2C2926` | Card and component background |
| `--accent` | `#D4823A` | Amber — primary brand colour |
| `--accent-dim` | `#A8632B` | Amber hover state |
| `--text-primary` | `#F0EBE3` | Headings and key text |
| `--text-secondary` | `#A89E92` | Body copy |
| `--text-muted` | `#6B6059` | Labels, captions, placeholders |
| `--border` | `#3A3632` | Default borders |
| `--border-light` | `#4A4540` | Hover/active borders |

Fonts: **Barlow Condensed** (headings, all-caps) + **DM Sans** (body, light weight)

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 860px` | Full desktop layout, horizontal nav |
| `≤ 860px` | Stacked layout, hamburger menu, 3-col square gallery |
| `≤ 560px` | Further simplification, 2-col square gallery, buttons full width |
| `≤ 380px` | Single column gallery, hero socials hidden |

---

*Built by Josh Falconer. Questions or changes — raise an issue or push a branch.*
