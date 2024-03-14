import "./globals.css";

export const metadata = {
	title: "Movie Search Engine",
	description: "Buscador de películas",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<header className="text-center space-y-3">
					<h1 className="mt-10 text-3xl font-bold">Movies.com</h1>
					<h2>Busca tus películas favoritas y comienza a verlas</h2>
				</header>
				{children}
			</body>
		</html>
	);
}
