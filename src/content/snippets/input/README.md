---
title: Input
description: Input variants opted into with data-input-icon - stock Blades inputs with no classes, an icon slot at either end, and a grouped number stepper.
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
---

## Structure

- Use a plain `<input>` for the default style. No classes or attributes are needed: it is the stock Blades (Pico) input.
- Wrap the input in an element with `data-input-icon` to add icons at either end.
- Place an `<svg>` before the input for the start icon, after it for the end icon, or one on each side. The icon side follows the markup order, so it mirrors in RTL.
- Icons are decorative: mark them `aria-hidden="true"`. The input keeps its own visible or accessible label.
- Icons sit in the input's padding and take no layout space; the input gains inline padding on the side that has an icon.
- For a stepper, put a `role="group"` element around a number input flanked by buttons. Blades joins the border and radius of the group's children.
- Add `data-step="-1"` and `data-step="1"` to the buttons; `stepper.js` steps the group's number input, using the input's own `step` and staying inside `min` and `max` when they are set.
- Only the stepper variant needs JavaScript. The default and icon variants are HTML and CSS alone.
- Copy the CSS of the variant you want. The default variant has no CSS.
