import Link from "next/link";

const navbarItems = [
	{ path: "/", name: "Inicio" },
	{ path: "peliculas", name: "Películas" },
	{ path: "favoritos", name: "Mis favoritos" },
];

export const Navbar = () => {
	return (
		<nav className="flex bg-slate-600 text-white py-5 justify-center gap-10">
			{navbarItems.map((item) => (
				<Link
					key={item.path}
					href={item.path}
					className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
				>
					{item.name}
				</Link>
			))}
		</nav>
	);
};
