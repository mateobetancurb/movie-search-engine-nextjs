import { getNowPlayingMovies } from "@/services/movies";
import { MoviesCarousel } from "@/components";

export const NowPlaying = async () => {
	const playingMovies = await getNowPlayingMovies();

	return (
		<section className="mb-10">
			<h2 className="text-white text-xl mb-5">📺 Las personas están viendo</h2>
			<MoviesCarousel list={playingMovies} />
		</section>
	);
};
