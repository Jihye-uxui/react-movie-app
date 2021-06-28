// Page - About
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import tmdbLogo from '../images/tmdb-logo.png';
import '../scss/components/_page-about.scss';

const PageAbout = () => {

	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

	return (
		<div className="wrapper">
			<h1 className="page-heading">About</h1>
			<div class="about-main">
				<section>
					<h2>Kine Movie</h2>
					<p>Kine Movie is a live movie database website listing movies based on popularity, rating, and release date. Browse for your favourite film, create your Favourite movie archive list online!<br/><br/>
					Kine Movie is always up to date and shows the latest of movie data.</p>
				</section>
				<section>
					<h2>Project</h2>
					<p>Kine Movie is developed through the React JavaScript Framework and REST APIs. This website is proudly created by <a href="https://jihyedesign.com/" target="_blank">Jihye Choe</a> and uses the TMDb API, but is not endorsed or certified by TMDb.</p>
					<div class="tmdb-logo">
						<a href="https://www.themoviedb.org/" target="_blank"><img src={tmdbLogo} alt="TMDB movie database logo" /></a>
					</div>
				</section>
			</div>
		</div>
	);
	
};

export default PageAbout;