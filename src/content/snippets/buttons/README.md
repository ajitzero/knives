---
title: Button
description: Button variants opted into with data-button-variant - a plain <button> or an anchor with role="button", no framework classes.
stage: alpha
size: 15
tag: [button]
variants:
  - id: blade
    label: Pico (Default)
  - id: ghost
    label: Ghost
---

## Structure

- Use a plain `<button>` for the default style. No classes or attributes are needed: it is the stock Blades (Pico) button.
- Add `data-button-variant="ghost"` to the button to opt into the ghost style. It also applies to anchors with `role="button"`.
- Add `data-button-variant="ghost"` to a parent element to style every button inside it at once - handy for a toolbar, without adding the attribute to each button and missing one.
- Copy the CSS of the variant you want. The default variant has no CSS.
