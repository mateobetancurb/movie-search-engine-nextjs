import { AiringToday } from "@/components";

export const metadata = {
	title: "Series",
	description: "Aquí podrás ver y guardar en favoritos tus series favoritas",
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
