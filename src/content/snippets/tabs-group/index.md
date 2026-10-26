---
title: Tabs Group
description: A horizontal row of tabs built on the native exclusive accordion, swapping a single content panel beneath it with no JavaScript.
stage: 'alpha'
size: 24
tag:
  - tabs
---

## Progress Tracker

- [x] Horizontal tab row from the native `<details name>` exclusive accordion.
- [x] Single shared content panel via `::details-content`.
- [x] Any number of tabs — no per-tab CSS.
- [x] Horizontal scrollbar when the tabs overflow.
- [x] Active tab marked by `details[open]`.
- [x] Keyboard focus styles.
- [x] Responsive spacing.
- [x] RTL.
- [x] Stacked-accordion fallback for browsers without `::details-content`.

## Structure

- Wrap the tabs in an element with `data-tabs`.
- Put a `data-tabs-strip` wrapper inside it. The strip scrolls horizontally when the tabs overflow.
- Use one `<details>` per tab. Give every `<details>` the same `name` so the group stays exclusive: opening one closes the rest.
- Put the tab label in `<summary>`.
- Put the panel content in a `<div>` after the `<summary>`.
- Add `open` to the tab that should be visible first.
- By default each tab is sized to its label. Add `data-variant="stretch"` to the `data-tabs-strip` wrapper to distribute the tabs evenly across the available width.

```html
<div data-tabs>
	<div data-tabs-strip>
		<details name="tabs-group" open>
			<summary>Recent Tracks</summary>
			<div>…</div>
		</details>
		<details name="tabs-group">
			<summary>Loved tracks</summary>
			<div>…</div>
		</details>
		<details name="tabs-group">
			<summary>Following</summary>
			<div>…</div>
		</details>
	</div>
</div>
```

### Notes

- The `name` attribute groups `<details>` elements anywhere in the document. Use a unique name per group to avoid collisions.
- The panel is absolutely positioned below the strip (so the strip's scrollbar can't clip it). It is out of flow: leave vertical room for it if content follows the tabs.

## Limitations

- **Requires `::details-content`** to move the panel below the tab row. Baseline since September 2025: Chrome/Edge 131+, Firefox 143+, Safari 18.4+.
- **Requires the `name` attribute** on `<details>` for exclusivity: Chrome 120+, Safari 17.2+, Firefox 130+. Older browsers let more than one panel stay open.
- **The panel is out of flow.** It does not contribute to the page height, so content after the tabs can overlap it unless you reserve space.
- **Not a true ARIA tablist.** `<summary>` is announced as a disclosure button, not a tab, and there is no arrow-key switching between tabs — that needs JavaScript.
- **Clicking the open tab closes it**, because `<details>` toggles natively; CSS alone cannot force one tab to stay open.
- **The panel height is not animated.** Open/close is instantaneous unless you transition it, and animating `content-visibility` needs `allow-discrete`.
- **`overflow: overlay` is deprecated.** The strip uses `overflow-x: auto` with `scrollbar-width: thin` for a slimmer scrollbar.
- **Fallback:** browsers without `::details-content` get a stacked exclusive accordion instead of the horizontal tab row.
