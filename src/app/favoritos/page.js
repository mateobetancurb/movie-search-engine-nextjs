import { FavoriteList } from "@/components";

export const metadata = {
	title: "Movies.com - Favoritos",
	description:
		"Aquí podrás guardar tus programas de TV, películas o series favoritas",
};

export default function Favorites() {
	return (
		<>
			<FavoriteList />
		</>
	);
}
