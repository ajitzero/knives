---
title: Popover
description: A popover menu opened declaratively by the popover API, with no JavaScript and minimal. optional classes.
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
- `hr` tag immediately after a `header` tag should have extra padding under it.
- `kbd` tag can be used to denote a keyboard shortcut.
- `svg`-based icons are support for icons on the left/start.

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
- [ ] Nested actions.
- [ ] Radio group.
- [ ] Checkbox group.
- [ ] RTL.
