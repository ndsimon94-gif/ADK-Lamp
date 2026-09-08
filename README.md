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

## Known placeholders — needs your input before launch

This was built without direct file access to the logo/photos (they were
shared as pasted images in chat, not as files), so a few things are
stand-ins:

1. **Logo** — `src/components/logo-mark.tsx` recreates the heart + flame +
   rays mark as an SVG in the brand colors, with the Tibetan seed syllable
   ཨ (a) rendered as real text in the Noto Serif Tibetan font (not a
   hand-traced glyph), so the character itself is accurate. The heart,
   flame, and ray *illustration* are a close hand-drawn approximation of
   the reference logo, not a pixel-exact trace. If you have the original
   vector/logo file, swap it in: drop `logo.svg` into `public/` and replace
   the `<LogoMark />` usages (header, footer, photo placeholders) with an
   `<Image>`.
2. **Photos** — every photo slot on the site (`<PhotoPlaceholder />`) is a
   textured placeholder panel, not a real image. Replace these with actual
   photos of Davis, the Adirondacks, gatherings, etc. by dropping files into
   `public/images/` and swapping `<PhotoPlaceholder label="..." />` for
   `<Image src="/images/your-file.jpg" alt="..." fill className="object-cover" />`
   in each page.
3. **Donation links** — Venmo is live on `/support`
   (`https://venmo.com/davis-trachte`). PayPal is still a disabled
   placeholder — add the real PayPal.me link in `src/app/support/page.tsx`
   (search for "to be added").
4. **Contact & newsletter forms** — since there's no backend configured,
   both forms (`src/components/contact-form.tsx`,
   `src/components/newsletter-form.tsx`) currently open the visitor's email
   client with a pre-filled message to `dtrachtensa@gmail.com`. This works
   with zero setup, but for a more seamless experience you may want to wire
   these to a form service (e.g. Formspree) or a server action that emails
   submissions directly.

## Deploying

This is a standard Next.js app — deploy to [Vercel](https://vercel.com),
Netlify, or any Node host. No environment variables are required for the
current feature set.
