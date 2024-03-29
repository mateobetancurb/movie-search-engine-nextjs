import { env } from "@/config/env";

export const TMDB_URLS = {
	movies: {
		popular: `${env.TMDB_HOSTNAME}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
		findById: `${env.TMDB_HOSTNAME}/movie`,
	},
};
