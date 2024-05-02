import { getPopular } from "@/services/series";
import { MoviesCarousel } from "@/components";

export const Popular = async () => {
	const popular = await getPopular();

	return (
		<section className="mb-10">
			<h2 className="text-white text-xl mb-5">💯 Series populares</h2>
			<MoviesCarousel list={popular} />
		</section>
	);
};
