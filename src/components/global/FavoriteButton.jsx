"use client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useStore from "@/stores/favorites";

export const FavoriteButton = ({ movie }) => {
	const { favoriteMovies, addMovieToFavorites } = useStore();
	const router = useRouter();

	const isMovieAlreadyAdded = favoriteMovies.some(
		(favoriteMovie) => favoriteMovie.id === movie.id
	);

	const addMovieToFavoriteList = (movie) => {
		return () => {
			if (!isMovieAlreadyAdded) {
				addMovieToFavorites(movie);
				toast.success("Película agregada a favoritos", {
					action: {
						label: "Ver",
						onClick: () => router.push("/favoritos"),
					},
				});
			}
		};
	};

	return (
		<div className="flex justify-end">
			<button
				onClick={addMovieToFavoriteList(movie)}
				className={`absolute z-20 shadow-xl bg-neutral-600 px-5 py-1 rounded-xl text-white hover:bg-neutral-700 transition-all ${
					isMovieAlreadyAdded ? "cursor-not-allowed" : null
				} `}
			>
				{isMovieAlreadyAdded
					? "Película agregada a favoritos ✅"
					: "Agregar a favoritos ❤️"}
			</button>
		</div>
	);
};
