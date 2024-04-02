"use client";

import useStore from "@/stores/favorites";

export const FavoriteButton = ({ movie }) => {
	const { favoriteMovies, addMovieToFavorites } = useStore();

	const addMovieToFavoriteList = (movie) => {
		return () => {
			addMovieToFavorites(movie);
			console.log(favoriteMovies);
		};
	};

	return (
		<div className="flex justify-end">
			<button
				onClick={addMovieToFavoriteList(movie)}
				className="absolute z-20 shadow-xl bg-neutral-600 px-5 py-1 rounded-xl text-white hover:bg-neutral-700 transition-all"
			>
				❤️ Agregar a favoritos
			</button>
		</div>
	);
};
