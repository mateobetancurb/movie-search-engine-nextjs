import {
	PopularMovies,
	UpcomingMovies,
	NowPlaying,
	TopRatedMovies,
} from "@/components";

export const metadata = {
	title: "Movies.com - Películas",
	description: "Aquí podrás ver y guardar en favoritos tus películas favoritas",
};

const HomePage = async () => {
	return (
		<div className="p-20">
			<TopRatedMovies />
			<PopularMovies />
			<UpcomingMovies />
			<NowPlaying />
		</div>
	);
};

export default HomePage;
