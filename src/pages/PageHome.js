import { useEffect, useState } from 'react';
import { API_TOKEN } from '../globals/globals';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import HomeHero from '../components/HomeHero';

function PageHome({ sort }) {

    // Main section - 12 movie
    const [moviesData, setMoviesData] = useState(null);

    // Hero section - 1 movie
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            const moviesData = await res.json();
            // Show 12 movies from array of 20 movies...
            const first12Movies = moviesData.results.splice(0, 12);
            setMoviesData(first12Movies);

            // Show the first movie in the Hero section
            const firstMovie = moviesData.results.splice(0, 1);
            setMovieData(firstMovie);
        }
    
        fetchMovies();

    }, [sort]);

    return (
        <div>
            {movieData !== null && <HomeHero moviesData={movieData}/> }
            {/* Request loading bar / error messages here... */}
            <div className="wrapper">
            <NavSort />
                {moviesData !== null && <Movies moviesData={moviesData}/>}
            </div>
        </div>
    )
}

export default PageHome;
