import useGlobal from '../store/globalAppState';
import MovieCard from './MovieCard';
import '../scss/components/_movies-container.scss';
import isFav from '../utilities/isFav';


function FavMovies() {

    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];

    const favMoviesData = globalState.favs;

    return (
        <div className="movies-container">
            {favMoviesData.map((movie, i) => <MovieCard key={i} 
                                                movieObj={movie} 
                                                movie={movie}
                                                isFav={isFav(favMoviesData, null, movie.id)}/>)}
        </div>
    )
}


export default FavMovies;
