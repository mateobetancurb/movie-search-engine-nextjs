"use client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useStore from "@/stores/favorites";

export const FavoriteButton = ({ movie }) => {
	const { favoriteMovies, addMovieToFavorites, showSonner } = useStore();
	const router = useRouter();

	const addMovieToFavoriteList = (movie) => {
		return () => {
			addMovieToFavorites(movie);
			console.log(favoriteMovies);
			toast.success(
				"Película agregada a favoritos",
				{
					action: {
						label: "Ver",
						onClick: () => router.push("/favoritos"),
					},
				},
				{
					position: "top-right",
				}
			);
		};
	};

	return (
		<div className="flex justify-end">
			<button
				onClick={addMovieToFavoriteList(movie)}
				className="absolute z-20 shadow-xl bg-neutral-600 px-5 py-1 rounded-xl text-white hover:bg-neutral-700 transition-all"
			>
				Agregar a favoritos ❤️
			</button>
		</div>
	);
};
