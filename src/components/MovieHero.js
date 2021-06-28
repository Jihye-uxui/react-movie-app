import { Link } from 'react-router-dom';
import { backdropPath } from '../globals/globals';
import SvgStar from '../icons/SvgStar';
import useGlobal from '../store/globalAppState';

function MovieHero({movie, movieObj, profileLink }) {

    const globalStateAndglobalActions = useGlobal();
    const globalActions = globalStateAndglobalActions[1];

    return (

        <div className="movie-hero" id="overlay"
            style={{backgroundImage: `url(${backdropPath + movie.backdrop_path})`
            }}>

            <div className="overlay">
                <div className="hero-info wrapper">
                    
                    <h1>{movie.title}</h1>
                    <p>{movie.release_date}</p>
                    <p className="movie-rate"><SvgStar/>{movie.vote_average}</p><br/>

                        <p className="movie-overview">{(movie.overview).substring(0, 130)}...
                        </p>

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
        </div>
    )
}

MovieHero.defaultProps = {
    profileLink: true
}


export default MovieHero;
