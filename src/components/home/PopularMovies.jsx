import { MoviesCarousel } from "@/components";
import { getPopularMovies } from "@/services/movies";

export const PopularMovies = async () => {
	const popularMoviesList = await getPopularMovies();

	return (
		<section className="mb-10">
			<h2 className="text-white text-xl mb-5">✨ Películas populares</h2>
			<MoviesCarousel movies={popularMoviesList} />
		</section>
	);
};
