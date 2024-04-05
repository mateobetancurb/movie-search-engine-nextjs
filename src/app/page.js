import { PopularMovies, UpcomingMovies, NowPlaying } from "@/components";

const HomePage = async () => {
	return (
		<div className="p-20">
			<PopularMovies />
			<UpcomingMovies />
			<NowPlaying />
		</div>
	);
};

export default HomePage;
