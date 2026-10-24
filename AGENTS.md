# Blades Snippets

A website for templates and snippets created and styled with [Blades CSS](https://blades.dev). The site itself is also built and styled with Blades.

## Styling architecture

- `src/assets/styles.css` is the single CSS entry point, imported once from `BaseHead`.
- It imports Blades CSS (the **layered** build) and every role CSS file the site needs.
- Role CSS files are written separately (e.g. `src/assets/roles/header.css`, `footer.css`, …) and imported into `styles.css`.
- All site customizations are scoped under a parent-level class, `.dogs` — add `class="dogs"` to the page root.
- A demo snippet that must render without the site's `.dogs` styling opts out with a `data-theme-exclude` attribute (presence is truthy).

```css
/* src/assets/styles.css */
@import '@anyblades/blades/layered/blades.layered';
@import '@anyblades/blades/layered/layout/landmarks';
@import './roles/header.css';
@import './roles/footer.css';
```

```css
/* src/assets/roles/header.css — scoped under .dogs */
.dogs header {
	/* site-specific header overrides */
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

Snippet-specific styles (the snippet's own styles, distinct from the site's `.dogs` overrides) go in a dedicated CSS file relative to the snippet, wrapped in its own layer:

```css
@layer snippets.my-snippet {
	/* snippet styles */
}
```

- Import that file only where the snippet is rendered.
- Use a stable layer name so it doesn't collide with Blades (`@layer blades`) or Astro's image styles (`@layer astro.images`).
- Don't put snippet styles in a site-wide CSS file.
