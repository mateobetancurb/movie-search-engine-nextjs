"use client";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import useStore from "@/stores/favorites";

export const FavoriteList = () => {
	const { favoriteMovies, deleteMovieToFavorites } = useStore();
	const imageDomainUrl = "https://image.tmdb.org/t/p/w500";

	const showSonnerWhenMovieWasDeleted = (movie) => {
		try {
			deleteMovieToFavorites(movie);
			toast.success("Película eliminada de favoritos");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{favoriteMovies.length < 1 ? (
				<div className="text-white flex items-center mt-10 space-y-5 flex-col">
					<p>No hay nada por aquí</p>
					<Link
						href={"/"}
						className="bg-neutral-500 w-fit px-3 py-1 rounded-lg hover:bg-neutral-600 transition-all"
					>
						Agrega tus películas favoritas
					</Link>
				</div>
			) : (
				<div className="grid px-10 md:grid-cols-4 my-10 gap-5">
					{favoriteMovies.map((movie) => (
						<div
							key={movie.id}
							className="text-white pb-10 border shadow-2xl border-gray-500 rounded-xl"
						>
							<Image
								src={`${imageDomainUrl}/${movie.backdrop_path}`}
								width={390}
								height={350}
								alt={movie.original_title}
								className="mb-5 rounded-t-xl"
							/>
							<div className="px-5 space-y-5">
								<h2 className="text-lg font-bold text-center">
									{movie.original_title}
								</h2>
								<p className="clamp-6 overflow-hidden h-24">{movie.overview}</p>

								<button
									onClick={() => showSonnerWhenMovieWasDeleted(movie)}
									className="bg-red-400 mx-auto px-5 py-1 rounded-xl flex gap-2 hover:bg-red-700 transition-all"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
										/>
									</svg>
									Eliminar de favoritos
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};
