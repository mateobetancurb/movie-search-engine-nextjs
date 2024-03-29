import { getMovieDetailsById } from "@/services/movies";
import { MovieDetails } from "@/components";

export default async function MoviePage({ params }) {
	const movieDetails = await getMovieDetailsById(params.id);
	return (
		<>
			<MovieDetails details={movieDetails} />
		</>
	);
}
