import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/helpers";

export const MovieDetails = ({ details }) => {
	const imageDomainUrl = "https://image.tmdb.org/t/p/w500";

	const isMovieForKids = () => {
		if (details?.adult === true) {
			return (
				<div className="flex gap-2 my-5 text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
						/>
					</svg>
					<p className="text-white">Película NO apta para niños</p>
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<div className="relative h-screen">
			<div
				style={{
					backgroundImage: `url(${imageDomainUrl}${details?.backdrop_path})`,
					opacity: 0.05,
				}}
				className="bg-cover bg-center h-screen absolute top-0 left-0 right-0 bottom-0 z-10"
			/>
			<main className="relative top-14 bg-black rounded-xl w-3/4 p-5 items-center mx-auto h-fit text-white">
				<Link
					href={"/"}
					className="flex gap-2 bg-neutral-600 px-5 py-1 rounded-xl text-white absolute z-20 top-[-15px] left-5 hover:bg-neutral-700 transition-all"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-4 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
						/>
					</svg>
					Volver
				</Link>
				<h2 className="text-center font-bold text-2xl mb-5">
					{details?.original_title}
				</h2>
				<section className="flex gap-5 mb-5">
					<div className="flex-1">
						<Image
							src={`${imageDomainUrl}${details?.backdrop_path}`}
							alt={details?.original_title}
							priority={true}
							width={900}
							height={900}
							className="rounded-xl object-cover"
						/>
					</div>
					<div className="flex-1 space-y-3 flex flex-col justify-center">
						<p className="font-bold">
							📅 Fecha de lanzamiento:{" "}
							<span className="font-normal">
								{formatDate(details?.release_date)}
							</span>
						</p>
						<p className="font-bold">
							Idioma original:{" "}
							{details?.original_language === "en" ? "🇺🇸" : "🇪🇸"}
						</p>
						<p className="font-bold">
							🏆 Calificación promedio:{" "}
							<span className="font-normal">
								{Math.round(details?.vote_average)}
							</span>
						</p>
						{isMovieForKids()}
						<p className="font-bold">
							🎬 Descripción:{" "}
							<span className="font-normal">{details?.overview}</span>
						</p>
					</div>
				</section>
				<div className="flex justify-end">
					<button className="absolute z-20 shadow-xl bg-neutral-600 px-5 py-1 rounded-xl text-white hover:bg-neutral-700 transition-all">
						❤️ Agregar a favoritos
					</button>
				</div>
			</main>
		</div>
	);
};
