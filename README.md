# ADK Loving Awareness Meditation Project

Marketing website for ADK LAMP — a non-denominational church and retreat
center founded by Davis Trachte — plus information about his separate
one-on-one Dharma coaching.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript) and
[Tailwind CSS v4](https://tailwindcss.com).

## Pages

- `/` — Home
- `/about` — About ADK LAMP, heart-based values, founder bio
- `/gather` — Gather & Practice, prayer requests, ceremonies, 1:1 coaching
- `/retreats` — Retreats
- `/youth` — Youth & Nature program
- `/vision` — Our Vision (the four development phases)
- `/support` — Support / Donate
- `/contact` — Contact form, prayer requests, stay-connected signup
- `/privacy`, `/terms` — Placeholder legal pages

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Brand

Colors and type are approximated from the logo/brand materials provided and
defined as CSS variables in `src/app/globals.css`:

| Token | Hex | Use |
|---|---|---|
| `--color-maroon` | `#7a2532` | primary accent, buttons, links |
| `--color-navy` | `#24374f` | headings, footer |
| `--color-cream` | `#f4ecdc` | page background |
| `--color-cream-alt` | `#ebdfc4` | alternating section background |

Fonts: **Playfair Display** for headings, **Lora** for body copy, and
**Noto Serif Tibetan** for the syllable in the logo (all loaded via
`next/font/google` in `src/app/layout.tsx`).

## Images

The real logo (`public/logo.png`) and 8 real photos (`public/images/`) are
in place, used via the `<PhotoFrame>` component (`src/components/photo-frame.tsx`).
A few secondary placeholder spots remain (`<PhotoPlaceholder>` — a textured
panel, not a real image) where no fitting photo was available yet: the
homepage hero, the Retreats cabin image, and two spots on Youth (trail,
partnership gathering). Drop a file into `public/images/` and swap the
`<PhotoPlaceholder label="..." />` for a
`<PhotoFrame src="/images/your-file.jpg" alt="..." rounded />` to fill
those in.

## Known placeholders — needs your input before launch

1. **Donation links** — Venmo is live on `/support`
   (`https://venmo.com/davis-trachte`). PayPal is still a disabled
   placeholder — add the real PayPal.me link in `src/app/support/page.tsx`
   (search for "to be added").
2. **Contact & newsletter forms** — since there's no backend configured,
   both forms (`src/components/contact-form.tsx`,
   `src/components/newsletter-form.tsx`) currently open the visitor's email
   client with a pre-filled message to `dtrachtensa@gmail.com`. This works
   with zero setup, but for a more seamless experience you may want to wire
   these to a form service (e.g. Formspree) or a server action that emails
   submissions directly.

## Deploying

The site is configured as a **static export** (`output: "export"` in
`next.config.ts`) — `npm run build` produces plain HTML/CSS/JS in `out/`
with no Node.js server required. That means it can be hosted anywhere,
including traditional shared hosting like SiteGround, not just
Vercel/Netlify.

### Deploying to SiteGround (adklamp.com)

1. On your machine (or any machine with Node installed):
   ```bash
   git clone https://github.com/ndsimon94-gif/ADK-Lamp.git
   cd ADK-Lamp
   npm install
   npm run build
   ```
   This creates an `out/` folder containing the entire built site.
2. In SiteGround **Site Tools** → **Site** → **File Manager** (or connect
   via SFTP under **Site** → **SFTP Accounts**), open the document root for
   `adklamp.com` — usually `public_html/` (or
   `public_html/adklamp.com/` if it's an addon domain).
3. Upload the **contents** of `out/` (not the `out` folder itself) into
   that document root, so `index.html` ends up directly at
   `public_html/index.html`.
4. If `adklamp.com` isn't already pointed at SiteGround, add it under
   **Site Tools** → **Site** → **Domains**, and update the domain's
   nameservers/DNS at your registrar to SiteGround's (SiteGround shows the
   exact records under that same screen). SiteGround also offers a free
   SSL certificate (Let's Encrypt) — enable it under **Security** → **SSL
   Manager** once the domain resolves.
5. Re-deploy future changes the same way: `npm run build`, then re-upload
   the contents of `out/` (overwriting existing files).

No Node.js hosting, database, or environment variables are needed on
SiteGround's side — it's just static files.

### Deploying to Vercel/Netlify instead

Both platforms detect `output: "export"` automatically — connect the
GitHub repo and deploy with no configuration. This gives free HTTPS,
instant redeploys on every push, and preview URLs for branches — worth
considering even if the live domain stays on SiteGround.
