import type { Task } from '@prisma/client';

export type { Task } from '@prisma/client';

const ENDPOINT = '/api/tasks';

export async function getTasks(): Promise<Task[]> {
	const res = await fetch(ENDPOINT);

	if (!res.ok) throw new Error('Failed to fetch tasks');

	return res.json();
}

export async function createTask(name: string): Promise<void> {
	const res = await fetch(ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name }),
	});

	if (!res.ok) throw new Error('Failed to create task');
}

export async function updateTask(id: number, name: string): Promise<void> {
	const res = await fetch(`${ENDPOINT}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name }),
	});

	if (!res.ok) throw new Error('Failed to update task');
}

export async function deleteTask(id: number): Promise<void> {
	const res = await fetch(`${ENDPOINT}/${id}`, {
		method: 'DELETE',
	});

	if (!res.ok) throw new Error('Failed to delete task');
}
