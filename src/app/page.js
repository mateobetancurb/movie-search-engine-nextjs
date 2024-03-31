import { PopularMovies } from "@/components/home/PopularMovies";
import { UpcomingMovies } from "@/components/home/UpcomingMovies";

const HomePage = async () => {
	return (
		<div className="p-20">
			<PopularMovies />
			<UpcomingMovies />
		</div>
	);
};

export default HomePage;
