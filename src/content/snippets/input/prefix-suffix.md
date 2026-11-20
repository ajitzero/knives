A `span` inside `data-input-group` reads as part of the input: the group draws one border and surface around every part, so no hairline shows between the affix and the field. Put the span before the input for a prefix (`https://`) and after it for a suffix (`@gmail.com`); both sides at once works too.

By default the field keeps its padding on both sides of the join, like the currency example. Add `data-input-group="flush"` to drop the padding between the affix and the input, so typing starts right where the affix ends — the scheme and email examples do this.

The markup order picks the side, and the joins are logical, so the group mirrors in RTL. Keep the text short and static; the input stays the only editable part.

Text that must read left to right, like a URL scheme or an email domain, can carry `dir="ltr"`: RTL layout would otherwise reorder its punctuation.
