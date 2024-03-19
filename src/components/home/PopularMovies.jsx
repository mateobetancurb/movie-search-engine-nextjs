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
						<CarouselItem key={movie.id}>
							<h2>{movie.original_title} </h2>
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
