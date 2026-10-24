---
title: Popover
description: A popover menu opened declaratively by the popover API, with no JavaScript and minimal. optional classes.
stage: "alpha"
tag:
  - popover
---

## Structure

- Use `button` for the trigger. Other tags work, but are good for accessibility.
- Use `ul` for dropdown.
- `li` tags must include either a `button` or `a` tag.
- `hr` tag in an `li` can be used to separate groups of links.
- `kbd` tag can be used to denote a keyboard shortcut.
- `svg`-based icons are support for icons on the left/start.

### Optional classes

- `.destructive` class for dangerous actions.

## Progress Tracker

- [x] Basic Popover interaction and styling.
- [x] Support both links & buttons.
- [x] Separator via `<hr />`
- [ ] Section header.
- [x] Shortcut hint via `<kbd>`
- [x] SVG-based icons.
- [x] Reserve space for icons when not used.
- [x] `.destructive` class for dangerous actions.
- [ ] Nested actions.
- [ ] Radio group.
- [ ] Checkbox group.
- [ ] RTL.
