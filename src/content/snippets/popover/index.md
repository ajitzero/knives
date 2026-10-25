---
title: Popover
description: A dropdown menu opened declaratively using the Popover API, with no JavaScript or CSS classes.
stage: 'alpha'
size: 25
tag:
  - popover
---

## Progress Tracker

- [x] Basic Popover interaction and styling.
- [x] Support both links & buttons.
- [x] Separator via `<hr />`
- [x] Section header via `<header>`
- [x] Shortcut hint via `<kbd>`
- [x] SVG-based icons.
- [x] Reserve space for icons when not used.
- [x] `.destructive` class for dangerous actions.
- [x] Grouped actions.
- [ ] Nested actions.
- [ ] Radio group.
- [ ] Checkbox group.
- [x] RTL.
- [ ] RTL for Grouped actions. Existing bug in Pico/Blade [#212](https://github.com/anyblades/blades/issues/212)

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
- RTL: Blade/Pico supports RTL automatically. No special CSS required.

### Optional

#### Custom classes

- `.destructive` class for dangerous actions.

#### Custom JavaScript

- JavaScript is not required for any of the popover interaction.
- This snippet uses JavaScript to toggle the active state on the star icon in the demo.
