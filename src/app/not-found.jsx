import { Link } from "next-view-transitions";

export default function NotFound() {
	return (
		<main className="relative w-full mt-20 flex flex-col justify-center items-center bg-neutral-800">
			<h1 className="text-9xl mb-20 font-extrabold text-white tracking-widest">
				404
			</h1>
			<div className="bg-neutral-600 font-bold text-white p-2 text-sm rounded rotate-12 top-32 absolute">
				Lo que estás buscando no existe
			</div>
			<Link
				href={"/"}
				className="px-8 py-3 rounded-lg bg-neutral-600 text-white border hover:bg-neutral-700 transition-all"
			>
				Volver
			</Link>
		</main>
	);
}
