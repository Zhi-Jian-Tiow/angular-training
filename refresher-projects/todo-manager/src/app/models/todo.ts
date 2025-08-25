export interface Todo {
  id: string;
  title: string;
  description?: string | null;
  status: 'active' | 'completed';
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  dueDate?: string | null; // ISO date string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  completedAt?: string | null; // ISO date string
  order: number;
}
