import { FavoriteList } from "@/components";

export const metadata = {
	title: "Tus favoritos",
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
