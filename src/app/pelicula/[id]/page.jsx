import { getMovieDetailsById } from "@/services/movies";

export default async function MoviePage({ params }) {
	const movieDetails = await getMovieDetailsById(params.id);
	return <>{JSON.stringify(movieDetails)}</>;
}
