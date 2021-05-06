import { Link } from 'react-router-dom';
import { posterPath, STAR_SVG } from '../globals/globals';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import useGlobal from '../store/globalAppState';

function MovieCard({movie, movieObj, profileLink, isFav}) {

    const globalStateAndglobalActions = useGlobal();
    const globalActions = globalStateAndglobalActions[1];

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            globalActions.addFav(obj);
        }else{
            globalActions.removeFav(obj.id);
        }   
    }

    return (
        <div className="movie-card">
            {/* Add to Favs */}
            <div className="btn-favourite">
                {isFav ? 
                    <FavButton movieObj={movieObj} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movieObj={movieObj} handleFavClick={handleFavClick} />
                }
            </div>
            <div className="movie-poster">
                {movie.poster_path === null ?
                <img src={noPoster} alt="no poster"/> :
                <img src={posterPath + movie.poster_path} alt={movie.title}/>}
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
            </div>

            <div className="movie-info-overlay">
                    <p className="text">{(movie.overview).substring(0, 100)}...</p>

                {/* More Movie Info */}
                {profileLink &&
                    <div className="btn-more-info">
                        <Link to={{pathname: `/movie/${movie.id}`,
                                    state: { movieObj }}}>
                            More Info
                        </Link>
                    </div>}

            </div>

        </div>
    )
}

MovieCard.defaultProps = {
    profileLink: true
}


export default MovieCard;
