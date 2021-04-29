// Page - Contact

import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageFavourites = () => {

	useEffect(() => {
		document.title = `${appTitle} - Favourites`;
	}, []);

	return (
    	<section>
			<h2>Contact Me</h2>
			<p>Email me at: <a href="mailTo:info@mwhyte.ca">info@mwhyte.ca</a></p>
		</section>
	);

};

export default PageFavourites;


