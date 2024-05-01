import { getOnTheAir } from "@/services/series";
import { MoviesCarousel } from "@/components";

export const OnTheAir = async () => {
	const onTheAirSeries = await getOnTheAir();

	return (
		<section className="mb-10">
			<h2 className="text-white text-xl mb-5">🍿 Series al aire</h2>
			<MoviesCarousel list={onTheAirSeries} />
		</section>
	);
};
