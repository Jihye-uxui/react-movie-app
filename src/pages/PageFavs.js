// Page Favs

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globals';
import useGlobal from '../store/globalAppState';
import FavMovies from '../components/FavMovies';
import { imageFolderPath } from '../globals/globals';
import '../scss/components/_page-favs.scss';
import '../scss/components/_btn-favs.scss';

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
        <div className="wrapper">
            <h1>Favourites</h1>
            <main>
                <section class="favs-section">
                    {favMoviesData.length < 1 ? 
                    <div className="empty-favs">
                        <h2>No Favourite movie yet!</h2>
                        <p>Create your favorite movie list by clicking <img class="fav-icon" src={`${imageFolderPath}heart-filled.png`} alt="Add to favourites"/></p><br/><Link to="/">Back to Movies</Link>
                    </div> : 
                    <div className="movies-grid">
                        <FavMovies/>
                    </div>}
                </section>
            </main>
        </div>
    );
	
}

export default PageFavs;
