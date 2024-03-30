import Image from "next/image";
import Link from "next/link";

export const MovieDetails = ({ details }) => {
	const imageDomainUrl = "https://image.tmdb.org/t/p/w500";
	return (
		<div className="relative h-screen">
			<div
				style={{
					backgroundImage: `url(${imageDomainUrl}${details.backdrop_path})`,
					opacity: 0.05,
				}}
				className="bg-cover bg-center h-screen absolute top-0 left-0 right-0 bottom-0 z-10"
			/>
			<main className="relative top-14 bg-black rounded-xl w-2/3 p-5 items-center mx-auto h-[500px] text-white">
				<section className="flex gap-5">
					<div className="flex-1">
						<Image
							src={`${imageDomainUrl}${details.backdrop_path}`}
							alt={details.original_title}
							priority={false}
							width={900}
							height={900}
							className="rounded-xl w-full h-full object-cover"
						/>
					</div>
					<div className="flex-1 flex flex-col justify-center mx-auto text-center">
						<h2 className="text-center font-bold text-2xl">
							{details.original_title}
						</h2>
						<p>{details.overview}</p>
					</div>
				</section>
			</main>
		</div>
	);
};
