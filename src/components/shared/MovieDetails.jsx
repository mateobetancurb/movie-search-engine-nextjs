export const MovieDetails = ({ details }) => {
	const imageDomainUrl = "https://image.tmdb.org/t/p/w500";
	return (
		<>
			<section
				style={{
					backgroundImage: `url(${imageDomainUrl}${details.backdrop_path})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "100vh",
					opacity: 0.05,
				}}
			></section>
		</>
	);
};
