# Knives

**Classless code snippets for [Blades CSS](https://blades.dev).**

An Astro site of Blades-based snippets, itself built and styled with Blades. The site identity (name and description) lives in `src/consts.ts`.

## Agent environment conventions

- **OpenChamber sessions** — manage plans, drafts, specs-in-progress, open questions and todos through OpenChamber's **Project Knowledge** tool (plans, notes, todos). Spec/plan files are committed to `docs/plans/` once drafted; the knowledge plan is the working copy that stays in sync until committed.
- **OpenCode CLI sessions** — use OpenCode's own plan/todo tools (Plan mode files, `todowrite`). When the bookkeeping is simple enough, also mirror it into the Project Knowledge tool so sessions from either harness see the same state.
- Either way, finish a task with leftover work by leaving it as a todo (both if simple), so the next session picks it up.

## Styling architecture

- `src/assets/styles.css` is the single CSS entry point, imported once from `BaseHead`. It imports Blades CSS (the **layered** build) plus one `src/assets/roles/*.css` file per concern.
- Blades ships inside `@layer blades`; role files are unlayered, so site customizations win over the framework without needing `!important`.
- The site-level styling scope is **`docs-`**: there is **no page-root class** for site styling (do not add one). Scope customizations with semantic element selectors and layout selectors anchored on the landmarks or structure they apply to — e.g. `body:has(> aside.docs-sidebar)`, `aside.docs-sidebar > hgroup`. Any site-level class must start with **`docs-`**; `docs-sidebar` is the only approved one so far.
- **Custom properties must start with the `knives-` prefix** (e.g. `--knives-menu-gap`), keeping them clear of Blades' `--pico-*` / `--blades-*` tokens and of other snippets.
- Prefer native CSS nesting for locality of descendant/state/responsive rules, preserving intended selector specificity.

## Styling a snippet

- Snippet-specific styles (distinct from the site's `docs-` scope) go beside the snippet in `snippet.css`, wrapped in a stable layer: `@layer snippets.my-snippet {}` — never in a site-wide CSS file.
- Put only the snippet's own rules and any one-off imports there. `DocsDemoPreview.astro` already supplies the shared base layered Blades stylesheet inside the demo iframe — don't repeat it in `snippet.css` or its displayed/copied source.

## Demo-only JavaScript and Markdown source

- `<variant>.js` (or `snippet.js` when the snippet has no variants, or for script shared by every variant) is optional, runs only inside the sandboxed `DocsDemoPreview` iframe, and is for preview-only interactions; a snippet described as requiring no JavaScript must not depend on it. The snippet page displays and copies HTML and CSS only — treat it as demo support, not part of the snippet's provided source.
- `snippet.md` is optional and never rendered; when present, its source is displayed (and copied) before the HTML section, to show a Markdown equivalent (e.g. the Markdown task list behind a task-list snippet).

## Content collections

- Snippets live in a **`snippets`** content collection (`src/content/snippets/`, registered in `src/content.config.ts`). Each snippet must be individually navigable **and** appear in a general index of all snippets.
- Ignore the `blog` collection — a starter leftover, outside this project's direction.

## Commands

| Command             | Purpose                                |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Start the dev server (background mode) |
| `pnpm build`        | Build the production site to `./dist/` |
| `pnpm preview`      | Preview the production build           |
| `pnpm format`       | Format all files with Prettier         |
| `pnpm format:check` | Check formatting without writing       |

The dev server also runs from the CLI: `astro dev --background | stop | status | logs`.

## Verifying a change

1. `pnpm format:check` — formatting is clean.
2. `pnpm build` — the site builds without errors.
3. With `astro dev --background`, open the affected routes — confirm the change renders as expected, including light/dark mode and responsive layout. You can also try to break the component by feeding it worst-case data.
