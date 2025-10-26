import Discount from '@/components/Discount';
import Task from '@/components/Task';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center py-[10%] px-[5vw]">
			<Discount />
			<Task />
		</main>
	);
}
