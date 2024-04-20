import { NavbarItem } from "@/components";

const navbarItems = [
	{ path: "/", name: "Películas" },
	{ path: "/peliculas", name: "TV Series" },
	{ path: "/favoritos", name: "Mis favoritos" },
];

export const Navbar = () => {
	return (
		<nav className="flex bg-neutral-600 text-white py-5 justify-center gap-10">
			{navbarItems.map((item) => (
				<NavbarItem key={item.path} path={item.path} name={item.name} />
			))}
		</nav>
	);
};
