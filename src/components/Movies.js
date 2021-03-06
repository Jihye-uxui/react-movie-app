// Execute movie contents from database
import useGlobal from '../store/globalAppState';
import MovieCard from './MovieCard';
import isFav from '../utilities/isFav';
import '../scss/components/_movies-container.scss';


function Movies({moviesData}) {

    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];

    return (
        <div className="movies-container">
            {moviesData.map((movie, i) => <MovieCard key={i} 
                                                movieObj={movie} 
                                                movie={movie}
                                                isFav={isFav(globalState.favs, null, movie.id)}/>)}
        </div>
    )
}


export default Movies;
