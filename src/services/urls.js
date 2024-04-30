import { env } from "@/config/env";

export const TMDB_URLS = {
	movies: {
		popular: `${env.TMDB_HOSTNAME}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
		findById: `${env.TMDB_HOSTNAME}/movie`,
		upcoming: `${env.TMDB_HOSTNAME}/movie/upcoming`,
		nowPlaying: `${env.TMDB_HOSTNAME}/movie/now_playing`,
		topRated: `${env.TMDB_HOSTNAME}/movie/top_rated`,
	},
	series: {
		airingToday: `${env.TMDB_HOSTNAME}/tv/airing_today`,
		onTheAir: `${env.TMDB_HOSTNAME}/tv/on_the_air`,
		popular: `${env.TMDB_HOSTNAME}/tv/popular`,
		topRated: `${env.TMDB_HOSTNAME}/tv/top_rated`,
	},
};
