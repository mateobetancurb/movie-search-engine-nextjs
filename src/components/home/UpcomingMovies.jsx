import { getUpcomingMovies } from "@/services/movies";
import { MoviesCarousel } from "@/components";

export const UpcomingMovies = async () => {
	const upcomingMovies = await getUpcomingMovies();
	return (
		<section className="mb-10">
			<h2 className="text-white text-xl mb-5">🍿 Espéralas muy pronto</h2>
			<MoviesCarousel list={upcomingMovies} />
		</section>
	);
};
