# Knives

**Classless code snippets for [Blades CSS](https://blades.dev).**

A website for templates and snippets created and styled with [Blades CSS](https://blades.dev). The site itself is also built and styled with Blades. The site identity (name and description) lives in `src/consts.ts`.

## Styling architecture

- `src/assets/styles.css` is the single CSS entry point, imported once from `BaseHead`.
- It imports Blades CSS (the **layered** build) and every role CSS file the site needs.
- Role CSS files are written separately (e.g. `src/assets/roles/docs-sidebar.css`, `footer.css`, …) and imported into `styles.css`. Blades ships inside `@layer blades`; role files are unlayered, so site customizations win over the framework without needing `!important`.
- The site-level styling scope is **`docs-`**: there is **no page-root class** for site styling (do not add one). Scope customizations with semantic element selectors and layout selectors anchored on the landmarks or structure they apply to — e.g. `body:has(> aside.docs-sidebar)`, `aside.docs-sidebar > hgroup`.
- **No classes by default.** If a site-level component genuinely needs a CSS class, the class must start with the **`docs-`** prefix. `docs-sidebar` is the approved exception currently in use for the sidebar.

```css
/* src/assets/styles.css */
@import '@anyblades/blades/layered/blades.layered';
@import '@anyblades/blades/layered/layout/landmarks';
@import './roles/docs-sidebar.css';
```

```css
/* src/assets/roles/docs-sidebar.css — scoped via semantic landmarks, not a root class */
body:has(> aside.docs-sidebar) {
	/* two-column docs layout */
}
aside.docs-sidebar > hgroup {
	/* site identity */
}
```

## Commands

| Command             | Purpose                                |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Start the dev server (background mode) |
| `pnpm build`        | Build the production site to `./dist/` |
| `pnpm preview`      | Preview the production build           |
| `pnpm format`       | Format all files with Prettier         |
| `pnpm format:check` | Check formatting without writing       |

Start the dev server in background mode and manage it with:

```sh
astro dev --background
astro dev stop
astro dev status
astro dev logs
```

## Verifying a change

1. `pnpm format:check` — formatting is clean.
2. `pnpm build` — the site builds without errors.
3. Start `astro dev --background` and open the affected routes — confirm the change renders as expected, including light/dark mode and responsive layout.

## Content collections

- Snippets live in a **`snippets`** content collection (`src/content/snippets/`), registered in `src/content.config.ts`.
- Each snippet must be individually navigable **and** appear in a general index/listing of all snippets.
- Ignore the `blog` collection for now — it's a leftover from the starter template and not part of this project's direction.

## Styling a snippet

Snippet-specific styles (the snippet's own styles, distinct from the site's `docs-`-scoped styles) go in a dedicated CSS file relative to the snippet, wrapped in its own layer:

```css
@layer snippets.my-snippet {
	/* snippet styles */
}
```

- Import that file only where the snippet is rendered.
- Use a stable layer name so it doesn't collide with Blades (`@layer blades`) or Astro's image styles (`@layer astro.images`).
- Don't put snippet styles in a site-wide CSS file.
