import useGlobal from '../store/globalAppState';
import '../scss/components/_movies-container.scss';
import isFav from '../utilities/isFav';
import MovieHero from '../components/MovieHero';


function HomeHero({moviesData}) {

    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];

    return (
        <div className="movie-container">
            {moviesData.map((movie, i) => <MovieHero key={i} 
                                                movieObj={movie} 
                                                movie={movie}
                                                isFav={isFav(globalState.favs, null, movie.id)}/>)}
        </div>
    )
}


export default HomeHero;
