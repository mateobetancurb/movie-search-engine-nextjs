import { env } from "@/config/env";
import { TMDB_URLS } from "./urls";

export const getAiringToday = async () => {
	try {
		const ACCESS_TOKEN_API = env.ACCESS_TOKEN_API;

		const req = await fetch(TMDB_URLS.series.airingToday, {
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
		console.error("Error al obtener detalles de la serie:", error);
		throw error;
	}
};

export const getOnTheAir = async () => {
	try {
		const ACCESS_TOKEN_API = env.ACCESS_TOKEN_API;

		const req = await fetch(TMDB_URLS.series.onTheAir, {
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
		console.error("Error al obtener detalles de la serie:", error);
		throw error;
	}
};

export const getPopular = async () => {
	try {
		const ACCESS_TOKEN_API = env.ACCESS_TOKEN_API;

		const req = await fetch(TMDB_URLS.series.popular, {
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
		console.error("Error al obtener detalles de la serie:", error);
		throw error;
	}
};

export const getTopRated = async () => {
	try {
		const ACCESS_TOKEN_API = env.ACCESS_TOKEN_API;

		const req = await fetch(TMDB_URLS.series.topRated, {
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
		console.error("Error al obtener detalles de la serie:", error);
		throw error;
	}
};
