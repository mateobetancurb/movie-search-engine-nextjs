import Image from "next/image";
import { Link } from "next-view-transitions";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components";

export const MoviesCarousel = async ({ list }) => {
	const imageDomainUrl = "https://image.tmdb.org/t/p/w500";

	return (
		<Carousel>
			<CarouselContent>
				{list?.map((item) => (
					<CarouselItem
						key={item.id}
						className="basis-6/7 md:basis-1/2 lg:basis-1/5 pl-4"
					>
						<Link href={`pelicula/${item.id}`}>
							<Image
								src={`${imageDomainUrl}${item?.poster_path}`}
								alt={item?.original_title}
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
