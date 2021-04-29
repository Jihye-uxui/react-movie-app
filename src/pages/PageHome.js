// Page - Home
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { appTitle, endPointPopular, posterPath, imageFolderPath } from '../globals/globals';

import useGlobal from '../store/globalAppState';
import Movie from '../components/Movie';
import isFav from '../utilities/isFav';


// SCSS style file
import '../scss/components/_movie-list.scss';

// Fetch movie lists
const PageHome = () => {

    // local storage
	const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];

    // useState
    const [movies, setMovies] = useState(null);

    useEffect(() => {
		document.title = `${appTitle} - Home`;

        // Asyncronous requests
        const fetchMovies = async() => {
            const res = await fetch(endPointPopular);
            let data = await res.json();

            console.log(data.results);
            setMovies(data.results);
        }
        fetchMovies();
    
    }, []);

    // Navigation function bar
    function blur(e){
        e.target.blur();
    }


    return (
        <main>
            <section>
                <h2>Poplular Now</h2>
                    {movies !== null &&
                    <div className="gallery">
                        {movies.map(movie => 
                        <div key={movie.id}>
                            {isFav && 
                            <div className="heart">
                                <img src={`${imageFolderPath}heart-unfilled.png`} alt="Heart"/>
                            </div>}
                            <img src={posterPath + movie.poster_path} alt={movie.title}/>
                            <p>{movie.vote_average}</p>
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                            <p>{movie.overview}</p>
                        </div>)}
                    </div>}

                    {/* <Link to="movie1" className="movie-poster"><img src={poster01} alt="Movie 1"/></Link>*/}
            </section>
        </main>
    )

};

export default PageHome;