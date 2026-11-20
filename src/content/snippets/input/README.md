---
title: Input
description: Input variants opted into with data-input-icon - stock Blades inputs with no classes, an icon slot at either end, prefix/suffix text in a group, a native select or a pair of buttons joined to the input.
stage: alpha
size: 24
tag: [input]
variants:
  - id: blade
    label: Pico (Default)
  - id: icon
    label: Icon
  - id: prefix-suffix
    label: Span Affix
  - id: select-affix
    label: Select Affix
  - id: button-affix
    label: Button Affix
---

## Structure

- Use a plain `<input>` for the default style. No classes or attributes are needed: it is the stock Blades (Pico) input.
- Wrap the input in an element with `data-input-icon` to add icons at either end.
- Place an `<svg>` before the input for the start icon, after it for the end icon, or one on each side. The icon side follows the markup order, so it mirrors in RTL.
- Icons are decorative: mark them `aria-hidden="true"`. The input keeps its own visible or accessible label.
- Icons sit in the input's padding and take no layout space; the input gains inline padding on the side that has an icon.
- For a group of controls, put a `role="group"` element around the input and the elements beside it, then add `data-input-group`. Blades joins the border and radius across the group, so the parts read as one field.
- Inside the group, a `span` before the input is a prefix and one after it is a suffix. The group draws one border around the field, so the parts are seamless.
- A `select` works in the same slots: it hugs its longest option, keeps its native dropdown and chevron, and the input takes the remaining width. Picking another option changes the value, not the field width.
- Add `data-input-group="flush"` to drop the padding between an affix and the input, so typing starts right at its edge.
- Buttons work in the same slots too, taking the field's surface instead of the filled primary style. Use one before the input as a prefix, one after it as a suffix, or one on each side, like a number stepper.
- Add `data-step="-1"` and `data-step="1"` to the buttons; `button-affix.js` steps the group's number input, using the input's own `step` and staying inside `min` and `max` when they are set.
- Only the button affix variant ships JavaScript, for the `data-step` buttons. The default, icon, span affix and select affix variants are HTML and CSS alone.
- Copy the CSS of the variant you want. The default variant has no CSS.
