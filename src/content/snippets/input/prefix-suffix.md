A `span` inside `data-input-group` takes the field's border, surface and padding, so it reads as part of the input: put it before the input for a prefix (`https://`) and after it for a suffix (`@gmail.com`). Both sides at once works too, e.g. a currency symbol and a unit.

The markup order picks the side, and the joins are logical, so the group mirrors in RTL. Keep the text short and static; the input stays the only editable part.

Text that must read left to right, like a URL scheme or an email domain, can carry `dir="ltr"`: RTL layout would otherwise reorder its punctuation.
