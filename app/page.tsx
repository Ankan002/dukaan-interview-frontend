import { Sidebar } from "@/components/common";

export default function Home() {
	return (
		<>
			<Sidebar />
			<main className="flex min-h-screen flex-col items-center justify-between p-24 font-inter text-black bg-primary-light text-3xl">
				<h1>Hello from page</h1>
			</main>
		</>
	);
}
