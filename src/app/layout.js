import { Header, Navbar } from "@/components";

import "./globals.css";

export const metadata = {
	title: "Movie Search Engine",
	description: "Buscador de películas",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className="bg-neutral-800">
				<Header />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
