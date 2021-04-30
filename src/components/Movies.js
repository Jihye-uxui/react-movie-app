import useGlobal from '../store/globalAppState';
import MovieCard from './MovieCard';
import '../scss/components/_movies-container.scss';
import isFav from '../utilities/isFav';


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
