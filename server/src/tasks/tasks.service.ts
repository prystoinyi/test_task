import type { Task } from '@prisma/client';

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
	constructor(private prisma: PrismaService) {}

	create(name: string): Promise<Task> {
		return this.prisma.task.create({
			data: { name },
		});
	}

	findAll(): Promise<Task[]> {
		return this.prisma.task.findMany({
			orderBy: [{ createdAt: 'asc' }, { id: 'asc' }],
		});
	}

	findOne(id: number): Promise<Task | null> {
		return this.prisma.task.findUnique({
			where: { id },
		});
	}

	update(id: number, name: string): Promise<Task> {
		return this.prisma.task.update({
			where: { id },
			data: { name },
		});
	}

	remove(id: number): Promise<Task> {
		return this.prisma.task.delete({
			where: { id },
		});
	}
}
