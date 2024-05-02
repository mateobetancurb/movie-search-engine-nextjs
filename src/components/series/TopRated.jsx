import { getTopRated } from "@/services/series";
import { MoviesCarousel } from "@/components";

export const TopRated = async () => {
	const topRated = await getTopRated();

	return (
		<section className="mb-10">
			<h2 className="text-white text-xl mb-5">💯 Las más vistas</h2>
			<MoviesCarousel list={topRated} />
		</section>
	);
};
