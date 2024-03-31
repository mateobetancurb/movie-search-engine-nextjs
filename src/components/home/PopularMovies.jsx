import Image from "next/image";
import Link from "next/link";
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
		<section className="mb-10">
			<h2 className="text-white text-xl mb-5">Películas populares</h2>
			<Carousel>
				<CarouselContent>
					{popularMoviesList.map((movie) => (
						<CarouselItem
							key={movie.id}
							className="md:basis-1/2 lg:basis-1/5 pl-4"
						>
							<Link href={`pelicula/${movie.id}`}>
								<Image
									src={`${imageDomainUrl}${movie.poster_path}`}
									alt={movie.original_title}
									width={200}
									height={200}
									priority={true}
								/>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
};
