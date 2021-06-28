import { Link } from 'react-router-dom';
import { posterPath } from '../globals/globals';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import useGlobal from '../store/globalAppState';
import SvgStar from '../icons/SvgStar';

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
            {(movie.title).length > 40 ?
                <h3>{(movie.title).substring(0, 40)}...</h3> :
                <h3>{movie.title}</h3>
            }
                <p>{movie.release_date}</p>
                <p class="movie-rate"><SvgStar/>{movie.vote_average}</p>
            </div>

            <div className="movie-info-overlay">
                <p className="movie-overview">{(movie.overview).substring(0, 120)}...</p>

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
