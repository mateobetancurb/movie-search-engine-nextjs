import { env } from "@/config/env";
import { TMDB_URLS } from "./urls";

export const getPopularMovies = async () => {
	try {
		const ACCESS_TOKEN_API = env.ACCESS_TOKEN_API;

		const req = await fetch(TMDB_URLS.movies.popular, {
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${ACCESS_TOKEN_API}`,
			},
		});

		if (!req.ok) {
			throw new Error(`HTTP error ${req.status}`);
		}

		const { results } = await req.json();
		return results;
	} catch (error) {
		console.error("Error al obtener detalles de la película:", error);
		throw error;
	}
};

export const getMovieDetailsById = async (id) => {
	try {
		const ACCESS_TOKEN_API = env.ACCESS_TOKEN_API;
		const req = await fetch(`${TMDB_URLS.movies.findById}/${id}`, {
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${ACCESS_TOKEN_API}`,
			},
		});

		if (!req.ok) {
			throw new Error(`HTTP error ${req.status}`);
		}

		const results = await req.json();
		return results;
	} catch (error) {
		console.error("Error al obtener detalles de la película:", error);
		throw error;
	}
};
