import Image from "next/image";

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
			<main className="relative top-14 bg-black rounded-xl w-2/3 p-5 items-center mx-auto h-fit text-white">
				<section className="flex gap-5 mb-5">
					<div className="flex-1">
						<Image
							src={`${imageDomainUrl}${details.backdrop_path}`}
							alt={details.original_title}
							priority={false}
							width={900}
							height={900}
							className="rounded-xl object-cover"
						/>
					</div>
					<div className="flex-1 flex flex-col justify-center">
						<h2 className="text-center font-bold text-2xl">
							{details.original_title}
						</h2>
						<p>{details.overview}</p>
					</div>
				</section>
				<p className="text-white ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					provident hic temporibus labore? Aliquam soluta cum enim fugit
					cupiditate laudantium deserunt perferendis repudiandae ratione. Sunt
					quaerat rerum veritatis doloribus vel porro non dignissimos aliquid
					maxime fugit nobis itaque delectus, qui repudiandae assumenda eius ad
					a consequatur incidunt dolorum veniam. Maxime suscipit numquam
					voluptatibus voluptates animi aliquid autem rem, amet distinctio quos
					ipsum reiciendis non nostrum similique dicta, sed aspernatur sapiente
					nobis adipisci! Corporis, libero. Ab hic aliquid pariatur quo
					voluptatibus autem ea error necessitatibus dolorem corporis laborum
					numquam, fugit explicabo? Saepe, suscipit mollitia voluptatum ipsam
					aspernatur rem eligendi repudiandae quae qui fugit?
				</p>
			</main>
		</div>
	);
};
