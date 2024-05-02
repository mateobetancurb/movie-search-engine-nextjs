"use client";

import { useEffect } from "react";
import { Link } from "next-view-transitions";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="text-white flex justify-center items-center mt-10 flex-col">
			<h2 className="font-bold text-xl mb-5">Lo sentimos 😥</h2>
			<h3 className="mb-5">
				Algo salió mal al buscar la película que seleccionaste
			</h3>
			<div className="flex gap-5 items-center">
				<Link
					href="/"
					className="bg-neutral-700 px-5 py-2 rounded-lg hover:bg-neutral-900 transition-all"
				>
					Vuelve atrás
				</Link>
				<button
					onClick={() => reset()}
					className="bg-neutral-700 px-5 py-2 rounded-lg hover:bg-neutral-900 transition-all"
				>
					Intenta de nuevo
				</button>
			</div>
		</div>
	);
}
