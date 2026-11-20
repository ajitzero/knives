---
title: Popover
description: A dropdown menu opened declaratively using the Popover API, with no JavaScript or CSS classes.
stage: 'alpha'
size: 25
placeItems: 'start center'
tag:
  - popover
---

## Progress Tracker

- [x] Basic Popover interaction and styling.
- [x] Popover Position override via `data-position`.
- [x] Support both links & buttons.
- [x] Separator via `<hr />`
- [x] Section header via `<header>`
- [x] Shortcut hint via `<kbd>`
- [x] SVG-based icons.
- [x] Reserve space for icons when not used.
- [x] `.destructive` class for dangerous actions.
- [x] Grouped actions.
- [x] Nested actions.
- [x] Radio group.
- [x] Checkbox group.
- [x] Loading rows via `aria-busy`.
- [x] RTL.

## Structure

- Use `button` for the trigger. Other tags work, but are not good for accessibility.
- Use `ul` for dropdown items.
- `li` tags must include either a `button` or `a` tag.
  - Buttons are for actions. Avoid redirection.
  - Anchors are for navigating. Avoid dialogs.
- `hr` tag in an `li` can be used to separate groups of links.
- `header` tag in an `li` can be used as a group header.
- `hr` tag immediately after a `header` tag will add extra padding under it, as part of the section header.
- `kbd` tag can be used to denote a keyboard shortcut.
- `svg`-based icons are supported for icons on the left/start.
- Use `span` in button for the text to reserve space for icon.
- Nested menus: add `popovertarget` to the row's `button` and place the child `ul[popover]` outside the parent menu. The trigger anchors the child beside it, and the browser keeps both open as a stack.
- End a submenu trigger's content with a `chevron-right` `svg` in the same slot a `kbd` would use. It points at the side the nested menu opens and mirrors in RTL.
- Radio group: an `li` holds a `label` wrapping `input[type="radio"]` and a `span` for the text, instead of a `button`. Pico styles the control, the snippet lays the label out like a button row, and native radio semantics (arrow keys) move the selection.
- Checkbox group: same row shape with `input[type="checkbox"]`; any number of rows can be checked.
- Loading rows: set `aria-busy="true"` on the row's `button` or `a`. Pico's spinner is repainted with the menu's text colour so it stays visible in both themes.
- Add `data-position` to the popover to set where it opens, using a [`position-area`](https://developer.mozilla.org/en-US/docs/Web/CSS/position-area) value: `data-position="end span-start"`.
- RTL: Blade/Pico supports RTL automatically. No special CSS required.

### Optional

#### Position

- By default the menu opens below the trigger, on the inline-end side (mirrored in RTL).
- Add `data-position` to the popover to override it:
  - `data-position="end span-start"` opens below the trigger, toward inline-start.
  - `data-position="start span-end"` opens above the trigger, toward inline-end.
  - `data-position="inline-end span-block-end"` opens a nested menu beside its trigger row, on the inline-end side, level with it. The other menu placements work for nested menus too.
- The four block placements (`start` / `end` × `span-start` / `span-end`) cover opening above or below a trigger; all placements use logical keywords, so they mirror in RTL.
- Other values use typed `attr()` and need Chromium 133+ or Firefox 155+. Don't mix physical and logical keywords: `bottom span-start` is invalid.

#### Modifier classes

- `.destructive` class for dangerous actions.

#### Custom JavaScript

- JavaScript is not required for any of the popover interaction.
- This snippet uses JavaScript to toggle the active state on the star icon in the demo.
