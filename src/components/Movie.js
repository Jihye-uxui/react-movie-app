import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import FavButton from  '../components/FavButton';
import imageFolderPath from '../globals/globals';

function Movie({movieObj, profileLink, isFav, movie}) {
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
        <div className="movie">
            {isFav && 
                <div className="heart">
                    Heart
                </div>}
            {/* <div className="profile-picture">
                <img src={posterPath + movie.poster_path} alt={movie.title} />
            </div> */}
            <div className="title-and-name">
                <p><b>Name: </b>{movie.title}</p>
                <p><b>Position: </b>{movie.vote_average}</p>
            </div>
            {profileLink && <div className="link-profile">
                <Link to={{pathname: `/kitten-profile/${movie.id}`,
                           state: { movieObj }}}>
                    View Profile
                </Link>
            </div>}
            <div className="btn-favourite">
                {isFav ? 
                    <FavButton movieObj={movieObj} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movieObj={movieObj} handleFavClick={handleFavClick} />
                }
            </div>
        </div>
    );

}

Movie.defaultProps = {
    profileLink: true
}

export default Movie;
