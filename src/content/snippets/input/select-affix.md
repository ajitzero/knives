A `select` inside `data-input-group` works like a span affix, but it opens a menu instead of showing fixed text: use it for the part with a short list of choices, like a URL scheme or a domain ending. The options are native, so clicking the select gives the regular dropdown with no JavaScript.

Put the select before the input for a prefix and after it for a suffix, and leave the input for the editable part. The input takes the remaining width while the select stays as wide as its longest option, so picking another option doesn't resize the field.

The chevron is Pico's own select image, which the group keeps while the rest of the surface comes from the group. The open menu is native too, so the CSS paints its option rows with the field's own background and text colours: without that, a dark page can open a light menu whose options are unreadable. With `data-input-group="flush"`, the padding between the select and the input goes away, leaving the room the chevron needs. Keep the field's direction explicit with `dir="ltr"` when the values read left to right, like a scheme or a domain ending.

#### Limitation

Pico exposes the chevron only as an image (`--pico-icon-chevron`); where it sits (0.75rem from the inline end) and how wide it is (1rem) are hardcoded in its select rule. The CSS restates that offset in the `:dir()` rules so a `dir="ltr"` field keeps its chevron at the end on an RTL page. If you replace the chevron or change Pico's select spacing, update that position to match; the flush padding has no such dependency, since it leaves the select's own inline-end reserve alone.
