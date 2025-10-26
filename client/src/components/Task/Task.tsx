'use client';

import { useEffect, useState } from 'react';
import { Pencil, Plus, Trash } from 'lucide-react';

import {
	createTask,
	deleteTask,
	getTasks,
	Task,
	updateTask,
} from '@/lib/api/tasks';

import Container from '@/components/ui/Container';

import css from './Task.module.css';

export default function Discount() {
	const [tasks, setTasks] = useState<Task[]>([]);

	const load = async () => setTasks(await getTasks());

	const handleAdd = async () => {
		const name = prompt();

		if (!name) return;

		await createTask(name);
		await load();
	};

	const handleUpdate = async (task: Task) => {
		const name = prompt(undefined, task.name);

		if (!name) return;

		await updateTask(task.id, name);
		await load();
	};

	const handleDelete = async (task: Task) => {
		if (!confirm('Deleted?')) return;

		await deleteTask(task.id);
		await load();
	};

	useEffect(() => {
		load();
	}, []);

	return (
		<Container className={css.container}>
			<div className={css.title}>
				<h1>2 | Tasks</h1>
				<button className={css.add} onClick={() => handleAdd()}>
					<Plus />
				</button>
			</div>

			{tasks.length === 0 ? (
				<p>No tasks yet</p>
			) : (
				<ul>
					{tasks.map((task, index) => {
						return (
							<li key={index} className={css.item}>
								{task.name}
								<div className={css.controls}>
									<Pencil
										className={css.icon}
										onClick={() => handleUpdate(task)}
									/>
									<Trash
										className={css.icon}
										onClick={() => handleDelete(task)}
									/>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</Container>
	);
}
