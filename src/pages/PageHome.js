// Page - Home
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { appTitle, endPointPopular, posterPath, apiKey } from '../globals/globals';

// SCSS style file
import '../scss/components/_movie-list.scss';

// Fetch movie lists
const PageHome = () => {
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


    function blur(e){
        e.target.blur();
    }

    return (
        <main>
            <section>
            <nav className="main-nav" onClick={blur}>
                <ul>
                    <li><NavLink to="/" exact>Popular</NavLink></li>
                    <li><NavLink to="/favourites">Top Rated</NavLink></li>
                    <li><NavLink to="/about">Upcoming</NavLink></li>
                    <li><NavLink to="/about">Now Playing</NavLink></li>

                </ul>
            </nav>

                <h2>Poplular Now</h2>
                <div className="gallery">

                    {movies !== null &&
                    <div name="movie-list">
                        {movies.map(movie => 
                        <div key={movie.id}>
                            <img src={posterPath + movie.poster_path} alt={movie.title}/>
                            <p>{movie.vote_average}</p>
                            <p>{movie.release_date}</p>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </div>)}
                    </div>}

                    {/* <Link to="movie1" className="movie-poster"><img src={poster01} alt="Movie 1"/></Link>*/}
                </div>
            </section>
        </main>
    )

};

export default PageHome;