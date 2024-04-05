import { create } from "zustand";

const useStore = create((set) => ({
	favoriteMovies: [],
	addMovieToFavorites: (movie) =>
		set((state) => ({ favoriteMovies: [...state.favoriteMovies, movie] })),
	deleteMovieToFavorites: (movie) =>
		set((state) => ({
			favoriteMovies: state.favoriteMovies.filter(
				(favoriteMovie) => favoriteMovie.id !== movie.id
			),
		})),
}));

export default useStore;
