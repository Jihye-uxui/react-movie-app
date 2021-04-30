// Page Movie Detail

import { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import { appTitle, posterPath } from '../globals/globals';
import isFav from '../utilities/isFav';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';


function PageMovieInfo( {movieObj, handleFavClick} ) {
    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];

    const dataFromRouterLink = useLocation();
    let { id } = useParams();

    const [movieInfoData, setMovieInfoData] = useState(null);

    useEffect(() => {
        document.title = `${appTitle} - Movie Info: ${id}`
        const fetchMovieInfo = async() => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=09f8ace8a3be8200da0914f4f22f3f8c&language=en-US`);

            const movieData = await res.json();
            setMovieInfoData(movieData);
        }
        fetchMovieInfo();

    }, [id]);

    return (
            <section className="movie-info-page">
            
            {movieInfoData !== null &&
            <div className="movie-info-detail">
                
                <FavButton movieObj={movieInfoData} remove={isFav(globalState.favs, null, movieInfoData.id)}/>
                
                <div className="movie-backdrop">
                    {movieInfoData.poster_path === null ?
                    <img src={noPoster} alt="no backdrop image"/> :
                    <img src={posterPath + movieInfoData.backdrop_path} alt={movieInfoData.title}/>}
                </div>
                <div className="movie-poster">
                    {movieInfoData.poster_path === null ?
                    <img src={noPoster} alt="no poster"/> :
                    <img src={posterPath + movieInfoData.poster_path} alt={movieInfoData.title}/>}
                </div>
                <h1>{movieInfoData.title}</h1>
                <p>{movieInfoData.vote_average}</p>
                <p>{movieInfoData.release_date}</p>
                <p>{movieInfoData.runtime}</p>
                <p>{movieInfoData.tagline}</p>
                <p>{movieInfoData.overview}</p>
                {/* <p>{movieInfoData.genres}</p> */}
            </div>
            }
            
            </section>
    )
}


export default PageMovieInfo;
