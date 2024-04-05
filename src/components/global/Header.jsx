import Link from "next/link";

export const Header = () => {
	return (
		<header className="text-center mb-10 space-y-3 text-white">
			<Link href="/">
				<h1 className="mt-10 text-3xl font-bold">Movies.com</h1>
			</Link>
			<h2>Busca tus películas favoritas y comienza a verlas</h2>
		</header>
	);
};
