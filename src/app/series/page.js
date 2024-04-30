import { AiringToday } from "@/components";

export const metadata = {
	title: "Películas",
	description: "Aquí podrás ver y guardar en favoritos tus películas favoritas",
};

export default function Series() {
	return (
		<>
			<div className="p-20">
				<AiringToday />
			</div>
		</>
	);
}
