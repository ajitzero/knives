A button affix is a plain `role="group"` with `data-input-group`: the buttons take the field's surface, and Blades shares the border and radius across the children, so the buttons and the input read as one control. Put a button before the input for a prefix and after it for a suffix, or one on each side, like the number stepper.

Copy `button-affix.js` with a stepper: each `data-step` button listens for its own clicks and steps the number input beside it, using the input's own `step` and staying inside `min` and `max` when those are set.
