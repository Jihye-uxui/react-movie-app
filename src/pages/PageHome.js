import { useEffect, useState } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import {API_TOKEN} from '../globals/globals';

function PageHome({ sort }) {

    const [moviesData, setMoviesData] = useState(null);

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
        }
    
        fetchMovies();

    }, [sort]);

    return (
        <div class="wrapper">
            <section className="home-page">
                <NavSort />
                {/* Request loading bar / error messages here... */}
                {moviesData !== null && <Movies moviesData={moviesData}/>}
            </section>
        </div>
    )
}

export default PageHome;
