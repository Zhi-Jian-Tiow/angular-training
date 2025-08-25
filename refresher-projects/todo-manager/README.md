# Todo Manager — Starter (Refresher)

## Goal

Build a local-first Todo Manager to practice modern Angular fundamentals: standalone components, Signals, Dependency Injection, component communication, forms, ControlValueAccessor, content projection, custom directives/pipes, and basic unit testing.

## Functional Requirements

- List tasks with title, description (optional), priority, tags, due date, status (active/completed), createdAt/updatedAt, and `order`.
- Create new tasks via quick-add and full form.
- Edit, delete, toggle complete.
- Bulk actions (select multiple → delete/complete).
- Filter (All / Active / Completed), search, sort, manual reorder.
- Persist tasks in localStorage.
- Import / Export JSON (Merge / Replace).
- Panel container supporting content projection (header/body/footer).
- Truncate long titles (pipe).
- Highlight item on hover (directive).
- Tags input implemented as a ControlValueAccessor.
- Unit tests for service and at least one component.

## What you’ll implement (high-level steps)

1. Initialize Angular project (standalone-first, strict mode).
2. Copy starter scaffold into your project.
3. Implement `TodoService` with persistence, import/export, and CRUD APIs.
4. Build standalone components:
   - Header, AddTodo (quick-add), TodoList, TodoItem, TodoForm, ImportExport, Panel.
5. Use Signals for state inside service or store; expose computed signals for filtered list.
6. Wire component communication (data down, events up).
7. Implement Reactive Forms for TodoForm; implement tags control as ControlValueAccessor.
8. Implement truncate pipe and highlight directive.
9. Implement manual reorder and bulk actions.
10. Add unit tests for the service and one component.
11. Write brief usage notes in README.

## What you'll learn

- Standalone components & component composition
- Signals (`signal`, `computed`, `effect`) in real apps
- Dependency Injection & service design
- Component inputs & outputs, event-driven design
- Reactive Forms & validation
- ControlValueAccessor (custom form control)
- Content projection (slots) & reusable container patterns
- Custom directives & pipes
- Local persistence & JSON import/export
- Unit testing services and components

## Files provided

- `index.html`, `styles.css` (global)
- `data/seed.json` (starter tasks)
- `src/app/models/todo.ts` (interface)
- Static templates for components (HTML + CSS)
- utils: instructions for pipe & directive
- tests: instructions for unit tests

## How to get started (student checklist)

- [ ] Create Angular project (standalone, strict)
- [ ] Copy scaffold files into project
- [ ] Implement `TodoService` and wire persistence
- [ ] Build components and wire state via Signals
- [ ] Implement forms, custom tags control, pipe & directive
- [ ] Implement import/export & reorder
- [ ] Add unit tests
