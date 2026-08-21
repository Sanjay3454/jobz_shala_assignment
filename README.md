# Jobzshala Frontend Assignment

A responsive implementation of the supplied Jobzshala landing-page design. It supports English and Hindi.

## Run locally

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Production check:

```sh
npm run build
```

## Structure

- `app/page.tsx` renders the landing page route.
- `app/layout.tsx` defines metadata, fonts, and the root HTML language state.
- `content/en.ts` and `content/hi.ts` hold all visible page copy.
- `content/index.ts` maps each language code to its content file.
- `components/` contains one component for each major landing-page section plus shared controls.
- `public/images/` contains compressed WebP assets used by the hero and supporting sections.

## Language Toggle

The page supports English and Hindi. `LandingPage` keeps the current language in React state and passes the selected content to each section. The toggle updates that state, so all visible copy changes together without reloading the page.

## Assumptions

The Figma export only included desktop measurements. Tablet and mobile layouts use responsive adaptations of the same content hierarchy. Supplied Figma image and icon layers are converted to optimized WebP files in `public/images/`; the original exports remain in `public/exported_from_figma/` for reference.
