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
			<h1>About</h1>
			<main class="about-main">
				<section>
					<h2>Kine Movie</h2>
					<p>Kine Movie is a live movie database website listing movies based on popularity, rating, and release date. Browse for your favourite film, create your Favourite movie archive list online!<br/><br/>
					Kine Movie is always up to date and shows the last 6 months of movie data. Currently it shows from <div class="highlight">2020-08-29</div> to <div class="highlight">2021-02-27</div>.</p>
				</section>
				<section>
					<h2>Project</h2>
					<p>Kine Movie is developed through the React JavaScript Framework and REST APIs. This website is proudly created by Jihye Choe and uses the TMDb API, but is not endorsed or certified by TMDb.</p>
					<div class="tmdb-logo">
						<img src={tmdbLogo} alt="TMDB movie database logo" />
					</div>
				</section>
			</main>
		</div>
	);
	
};

export default PageAbout;