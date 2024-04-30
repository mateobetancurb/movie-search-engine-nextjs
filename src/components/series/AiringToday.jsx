import { getAiringToday } from "@/services/series";
import { MoviesCarousel } from "@/components";

export const AiringToday = async () => {
	const airingTodaySeries = await getAiringToday();

	return (
		<section className="mb-10">
			<h2 className="text-white text-xl mb-5">📺 Las personas están viendo</h2>
			<MoviesCarousel list={airingTodaySeries} />
		</section>
	);
};
