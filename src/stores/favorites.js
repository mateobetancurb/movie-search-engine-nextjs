import { create } from "zustand";

const useStore = create((set) => ({
	favoriteMovies: [],
	addMovieToFavorites: (movie) =>
		set((state) => ({ favoriteMovies: [...state.favoriteMovies, movie] })),
}));

export default useStore;
