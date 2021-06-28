// Main Navigation bar
import { apiKey } from '../globals/globals';
import { useState, useEffect } from 'react';
import useGlobal from '../store/globalAppState';
import SvgSearch from '../icons/SvgSearch';
import SvgMic from '../icons/SvgMic';
import MovieCard from './MovieCard';
import isFav from '../utilities/isFav';
import '../scss/components/_search.scss';


// Variables for Speech Recognition Function
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';


const SearchMovies = () => {

    // State for input query, movies
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);

    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];

    const searchMovies = async (e) => {
        e.preventDefault();
        if (query.trim() === ''){
            return;
        }

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch( url );
            const data = await res.json();
            setMovies(data.results);

        } catch ( err ) {
            console.error(err);
        }
    }
    
    // Speech Recognition Function
    const [isListening, setIsListening] = useState(false);
    const [note, setNote] = useState(null);
    const [savedNotes, setSavedNotes] = useState([]);

    useEffect(() => {
        handleListen();
    }, [isListening]);

    const handleListen = () => {
        if (isListening) {
            mic.start();
            mic.onend = () => {
                mic.start();
            }
        } else {
            mic.stop();
            mic.onend = () => {
                console.log('Stopped Mic on Click');
            }
        }
        mic.onstart = () => {
            console.log('Mics on');
        }
        
        mic.onresult = e => {
            const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
            setQuery(transcript);

            mic.onerror = e => {
                console.log(e.error);
            }
        }
    }

    return (
        <div class="search-page">
            <form action="form" onSubmit={searchMovies}>
                <input className="input" type="text" name="query" placeholder="Search movie titles by keywords" value={query} onChange={(e) => setQuery(e.target.value)}
                />

                <button className="record-btn" onClick={() => setIsListening(prevState => !prevState)}><SvgMic/></button>
                <button className="submit-btn" type="submit"><SvgSearch/></button>
            </form>

            {movies !== null && movies.length > 0 &&
            <div>
                <div className="user-input">Search for "{query}"</div>

                <div className="movies-container">
                    {movies.map((movie, i) => <MovieCard key={i} 
                                                    movieObj={movie} 
                                                    movie={movie}
                                                    isFav={isFav(globalState.favs, null, movie.id)}/>
                    )}
                </div>
            </div>
            }
        </div>
    );

};

export default SearchMovies;