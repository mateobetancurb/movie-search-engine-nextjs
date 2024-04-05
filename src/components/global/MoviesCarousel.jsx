import Image from "next/image";
import Link from "next/link";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components";

export const MoviesCarousel = async ({ movies }) => {
	const imageDomainUrl = "https://image.tmdb.org/t/p/w500";

	return (
		<Carousel>
			<CarouselContent>
				{movies?.map((movie) => (
					<CarouselItem
						key={movie.id}
						className="md:basis-1/2 lg:basis-1/5 pl-4"
					>
						<Link href={`pelicula/${movie.id}`}>
							<Image
								src={`${imageDomainUrl}${movie?.poster_path}`}
								alt={movie?.original_title}
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
	);
};
