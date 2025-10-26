import { PrismaClient } from '@prisma/client';

export async function seedTasks() {
	const prisma = new PrismaClient();

	try {
		const tasksCount = await prisma.task.count();

		if (tasksCount > 0) return;

		const tasks = [
			{ name: 'Learn NextJS' },
			{ name: 'Learn Tailwindcss' },
			{ name: 'Write NextJS application' },
			{ name: 'Learn NestJS' },
			{ name: 'Learn Prisma' },
			{ name: 'Write NestJS API' },
			{ name: 'Integrate API into the client' },
		];

		await prisma.task.createMany({ data: tasks });

		console.log('Seeded tasks');
	} finally {
		await prisma.$disconnect();
	}
}
