import {
	PopularMovies,
	UpcomingMovies,
	NowPlaying,
	TopRatedMovies,
} from "@/components";

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
