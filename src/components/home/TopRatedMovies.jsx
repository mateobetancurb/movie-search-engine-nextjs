import { MoviesCarousel } from "@/components";
import { getTopRatedMovies } from "@/services/movies";

export const TopRatedMovies = async () => {
	const topRatedMoviesList = await getTopRatedMovies();

	return (
		<section className="mb-10">
			<h2 className="text-white text-xl mb-5">💯 Las mejores calificadas</h2>
			<MoviesCarousel movies={topRatedMoviesList} />
		</section>
	);
};
