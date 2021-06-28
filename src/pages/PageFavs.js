// Page Favs
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle, imageFolderPath } from '../globals/globals';
import useGlobal from '../store/globalAppState';
import FavMovies from '../components/FavMovies';
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

    // Save to local storage in a variable
    const favMoviesData = globalState.favs;

    return (
        <div className="wrapper">
            <h1 className="page-heading">Favourites</h1>
            <section className="favs-section">
                {favMoviesData.length < 1 ? 
                <div className="empty-favs">
                    <h2>No Favourite movie yet!</h2>
                    <p>Create your favorite movie list by clicking <img class="fav-icon" src={`${imageFolderPath}heart-filled.png`} alt="Add to favourites"/></p><br/><Link to="/">Back to Home</Link>
                </div> : 
                <div className="movies-grid">
                    <FavMovies/>
                </div>}
            </section>
        </div>
    );
	
}

export default PageFavs;
