---
title: Task List
description: A task list built from a plain unordered list with disabled checkboxes, following the structure Astro generates for Markdown task lists.
stage: 'alpha'
size: 20
tag:
  - list
---

## Structure

- Use a single `<ul>` for the list.
- Start each `<li>` with `<input type="checkbox" disabled>` followed by the task text.
  - Add `checked` to the checkbox of a completed task.
  - Nest another `<ul>` inside an `<li>` to add subtasks. Nesting can go as deep as needed.
- No classes are required — the markup mirrors the task-list HTML Astro/GFM produces from markdown, excluding the optional generated classes and the whitespace after each checkbox so labels align with regular list-item text.

### Notes

- The checkboxes are `disabled`, so the list is read-only and the browser does not expect a form around it.
- Task lists reserve one marker gutter per level. List items that start with a disabled checkbox drop their marker and are pulled back into that gutter, so the checkbox takes the bullet's place. Regular list items keep their bullets.
- The optional `snippet.md` source shows the equivalent Markdown task list.
