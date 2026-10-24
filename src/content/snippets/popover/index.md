---
title: Popover
description: A dropdownn menu opened declaratively by the popover API, with no JavaScript or classes.
stage: 'alpha'
size: 25
tag:
  - popover
---

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
- `svg`-based icons are support for icons on the left/start.
- RTL: Blade/Pico supports RTL automatically. No special CSS required.

### Optional classes

- `.destructive` class for dangerous actions.

## Progress Tracker

- [x] Basic Popover interaction and styling.
- [x] Support both links & buttons.
- [x] Separator via `<hr />`
- [x] Section header via `<header>`
- [x] Shortcut hint via `<kbd>`
- [x] SVG-based icons.
- [x] Reserve space for icons when not used.
- [x] `.destructive` class for dangerous actions.
- [ ] Grouped actions.
- [ ] Nested actions.
- [ ] Radio group.
- [ ] Checkbox group.
- [x] RTL.
