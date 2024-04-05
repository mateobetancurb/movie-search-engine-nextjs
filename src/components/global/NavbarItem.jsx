"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarItem = ({ path, name }) => {
	const pathName = usePathname();
	return (
		<>
			<Link
				key={path}
				href={path}
				className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
					path === pathName ? "bg-neutral-200 text-black" : ""
				}`}
			>
				{name}
			</Link>
		</>
	);
};
