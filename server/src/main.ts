import { NestFactory } from '@nestjs/core';
import { seedTasks } from 'prisma/seed';
import { AppModule } from './app.module';

async function bootstrap() {
	await seedTasks();

	const app = await NestFactory.create(AppModule);

	await app.listen(process.env.PORT ?? 4000);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
