# M1 Cafe Lounge

[![Live site](https://img.shields.io/badge/live-m1cafe.farukportfolio.live-e2643a?style=flat)](https://m1cafe.farukportfolio.live)
![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-0AE448?style=flat&logo=greensock&logoColor=black)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

Bilingual (English and Arabic) concept website for M1 Cafe Lounge in Al Bateen, Abu Dhabi.

> **Concept site.** An unofficial study I designed and built to practise hospitality web design. It was not commissioned by M1 Cafe Lounge and is not affiliated with it. The cafe's name and brand belong to its owners.

**Live:** [m1cafe.farukportfolio.live](https://m1cafe.farukportfolio.live)

![M1 Cafe Lounge homepage](docs/screenshot.png)

## Features

- English and Arabic with a language toggle and full right-to-left layout
- Separate Arabic display and body fonts (El Messiri, Tajawal)
- Video hero with a staggered headline reveal
- Menu, gallery, reviews, about and location sections
- Order and WhatsApp buttons, plus a sticky mobile call-to-action bar
- Magnetic buttons and scroll-triggered reveals
- Smooth scroll with Lenis, synced to GSAP ScrollTrigger

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis
- Fraunces, Hanken Grotesk, DM Mono, El Messiri and Tajawal via `next/font`

## How the translation works

All copy lives in `lib/content.ts` as one object per language. `LanguageProvider` holds the active language, sets `dir` and `lang` on the document, and every section reads its text from the provider, so adding a language means adding one object.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## My role

Solo concept project: design and development.

## License

No license is granted for the code. All rights reserved by Farouk Battikh. Names, logos and brand assets of the cafe belong to its owners.
