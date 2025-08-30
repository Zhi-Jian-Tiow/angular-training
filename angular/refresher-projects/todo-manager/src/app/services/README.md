TodoService — development notes (no Angular code here)

Required API (methods to implement in your Angular service):

- load(): Promise<Todo[]> | Todo[]
  - Load tasks from localStorage; if none exists, load seed.json and persist it.
- save(tasks: Todo[]): void
  - Persist tasks to localStorage under a single key.
- getAll(): Todo[]
- create(taskInput): Todo
- update(id, updates): Todo
- delete(id): void
- bulkDelete(ids: string[]): void
- reorder(orderArray: { id: string; order: number }[]): void
- export(): string // returns JSON string
- import(jsonString: string, strategy: 'merge' | 'replace'): { imported: number; updated: number }

Notes:

- Keep persistence logic centralized inside this service.
- Expose a signal or observable representing the current list so components can subscribe/react.
