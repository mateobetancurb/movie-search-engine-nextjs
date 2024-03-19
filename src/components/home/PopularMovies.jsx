import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components";

import { getPopularMovies } from "@/services/movies";

export const PopularMovies = async () => {
	const popularMoviesList = await getPopularMovies();
	const imageDomainUrl = "https://image.tmdb.org/t/p/w500";

	return (
		<section>
			<Carousel>
				<CarouselContent>
					{popularMoviesList.map((movie) => (
						<CarouselItem
							key={movie.id}
							className="md:basis-1/2 lg:basis-1/5 pl-4"
						>
							<Image
								src={`${imageDomainUrl}${movie.poster_path}`}
								alt={movie.original_title}
								width={200}
								height={200}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
};
