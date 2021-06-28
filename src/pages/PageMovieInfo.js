// Page Movie Detail
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { appTitle, posterPath } from '../globals/globals';
import useGlobal from '../store/globalAppState';
import isFav from '../utilities/isFav';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import SvgStar from '../icons/SvgStar';
import '../scss/components/_page-movie-info.scss';


function PageMovieInfo() {
    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];

    let { id } = useParams();

    const [movieInfoData, setMovieInfoData] = useState(null);
    const [movieGenre, setMovieGenre] = useState([]);


    useEffect(() => {
        document.title = `${appTitle} - Movie Info: ${id}`
        const fetchMovieInfo = async() => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=09f8ace8a3be8200da0914f4f22f3f8c&language=en-US`);

            const movieData = await res.json();
            setMovieInfoData(movieData);
            setMovieGenre(movieData.genres);
        }
        fetchMovieInfo();

    }, [id]);

    return (
        <div className="wrapper">
            <section className="movie-info-page">
                
                {movieInfoData !== null &&
                <div className="movie-info-detail">
                    
                    {/* Movie Poster */}
                    <div className="movie-poster">
                        {movieInfoData.poster_path === null ?
                        <img src={noPoster} alt="no poster"/> :
                        <img src={posterPath + movieInfoData.poster_path} alt={movieInfoData.title}/>}
                    </div>

                    {/* Movie Main information */}
                    <div className="movie-information">
                        <div id="detail-fav">
                            <FavButton movieObj={movieInfoData} remove={isFav(globalState.favs, null, movieInfoData.id)}/>
                        </div>

                        <h1>{movieInfoData.title}</h1>

                        <div className="movie-details">
                            <p className="movie-rate"><SvgStar/>{movieInfoData.vote_average}</p>
                            <p>{movieInfoData.release_date}</p>
                            <p>{movieInfoData.runtime}m</p>
                        </div>

                        <p className="movie-tagline">{movieInfoData.tagline}</p>

                        <div className="overview-genre">
                            <h3>Overview</h3>
                            <p>{movieInfoData.overview}</p>

                            <h3>Genre</h3>
                            {movieGenre.map((genre, i) => {
                                return (
                                    <p className="movie-genres" key={i} id={genre.id}>{genre.name}</p>
                                )
                            })}
                        </div>
                    </div>

                </div>
                }
            </section>
        </div>
    )
}


export default PageMovieInfo;
