---
title: Input
description: Input variants opted into with data-input-icon - stock Blades inputs with no classes, an icon slot at either end, prefix/suffix text in a group, and a grouped number stepper.
stage: alpha
size: 24
tag: [input]
variants:
  - id: blade
    label: Pico (Default)
  - id: icon
    label: Icon
  - id: stepper
    label: Stepper
  - id: prefix-suffix
    label: Prefix / Suffix
---

## Structure

- Use a plain `<input>` for the default style. No classes or attributes are needed: it is the stock Blades (Pico) input.
- Wrap the input in an element with `data-input-icon` to add icons at either end.
- Place an `<svg>` before the input for the start icon, after it for the end icon, or one on each side. The icon side follows the markup order, so it mirrors in RTL.
- Icons are decorative: mark them `aria-hidden="true"`. The input keeps its own visible or accessible label.
- Icons sit in the input's padding and take no layout space; the input gains inline padding on the side that has an icon.
- For a group of controls, put a `role="group"` element around the input and its buttons, then add `data-input-group`. The buttons take the field's surface instead of the filled primary style, and Blades joins the border and radius across the group.
- Add `data-step="-1"` and `data-step="1"` to the buttons; `stepper.js` steps the group's number input, using the input's own `step` and staying inside `min` and `max` when they are set.
- Inside the group, a `span` before the input is a prefix and one after it is a suffix; it takes the field's border, surface and padding.
- Only the stepper variant needs JavaScript. The default, icon and prefix/suffix variants are HTML and CSS alone.
- Copy the CSS of the variant you want. The default variant has no CSS.
