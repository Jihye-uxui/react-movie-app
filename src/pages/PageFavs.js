// Page Favs

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globals';
import useGlobal from '../store/globalAppState';
import FavMovies from '../components/FavMovies';


function PageFavs() {

    // useGlobal hook
	const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];

    // useEffect hook
	useEffect(() => {
		document.title = `${appTitle} - Favourites`;
	}, []);

    // save local storage in a variable
    const favMoviesData = globalState.favs;

    return (
        <main>
			<section>
                <h2>Favourites</h2>
                {favMoviesData.length < 1 ? 
                <div className="empty-favs">
                    <h3>No Favourite movie list yet!</h3>
                    <p>Create your favorite movie list by clicking the "heart" button on each movie. <Link to="/">home</Link></p>
                </div> : 
                <div className="movies-grid">
                    <FavMovies/>
                </div>}
            </section>
		</main>
    );
	
}

export default PageFavs;
