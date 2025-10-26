import type { Task } from '@prisma/client';

import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Post()
	create(@Body('name') name: string): Promise<Task> {
		return this.tasksService.create(name);
	}

	@Get()
	findAll(): Promise<Task[]> {
		return this.tasksService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Promise<Task | null> {
		return this.tasksService.findOne(Number(id));
	}

	@Put(':id')
	update(@Param('id') id: string, @Body('name') name: string): Promise<Task> {
		return this.tasksService.update(Number(id), name);
	}

	@Delete(':id')
	remove(@Param('id') id: string): Promise<Task> {
		return this.tasksService.remove(Number(id));
	}
}
