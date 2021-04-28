// Page - Home
import { useEffect } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { appTitle } from '../globals/globals';

// import movie poster images (manually... for now!)
import poster01 from '../images/01-wonder-woman.jpg';
import poster02 from '../images/02-below-zero.jpg';
import poster03 from '../images/03-the-little-things.jpg';
import poster04 from '../images/04-outside-the-war.jpg';
import poster05 from '../images/05-black-water.jpg';
import poster06 from '../images/06-Vanguard.jpg';
import poster07 from '../images/07-breach.jpg';
import poster08 from '../images/08-soul.jpg';
import poster09 from '../images/09-skylines.jpg';
import poster10 from '../images/10-tenet.jpg';
import poster11 from '../images/11-finding-ohana.jpg';
import poster12 from '../images/12-space-sweepers.jpg';


const PageHomeItem = () => {
    
    // useParams
    let {id} = useParams();

    // useEffect
    useEffect(() => {
		document.title = `${appTitle} - Movie Information ${id}`;
	}, [id]);

    // Ensure id is between 1 and 12 (inclusive)
    // If is not, send user back to the main page.
    if (isNaN(id) || (id % 1 !== 0) || (id < 1) || (id > 12)) {
        return (
            <Redirect to="/" />
        );
    }

    // Set id type to number
    id = id * 1;
    
    // set img variable
    let img ;

    // Switch function to send user to each movie information
    // Apr 27, For now let's do hard coding...
    switch(id) {
        case 1:
            img = <div className="movie-poster"><img src={poster01} alt="Movie 1"/></div>;
            break;
        case 2:
            img = <div className="movie-poster"><img src={poster02} alt="Movie 2"/></div>;
            break;
        case 3:
            img = <div className="movie-poster"><img src={poster03} alt="Movie 3"/></div>;
            break;
        case 4:
            img = <div className="movie-poster"><img src={poster04} alt="Movie 4"/></div>;
            break;
        case 5:
            img = <div className="movie-poster"><img src={poster05} alt="Movie 5"/></div>;
            break;
        case 6:
            img = <div className="movie-poster"><img src={poster06} alt="Movie 6"/></div>;
            break;
        case 7:
            img = <div className="movie-poster"><img src={poster07} alt="Movie 7"/></div>;
            break;
        case 8:
            img = <div className="movie-poster"><img src={poster08} alt="Movie 8"/></div>;
            break;
        case 9:
            img = <div className="movie-poster"><img src={poster09} alt="Movie 9"/></div>;
            break;
        case 10:
            img = <div className="movie-poster"><img src={poster10} alt="Movie 10"/></div>;
            break;
        case 11:
            img = <div className="movie-poster"><img src={poster11} alt="Movie 11"/></div>;
            break;
        case 12:
            img = <div className="movie-poster"><img src={poster12} alt="Movie 12"/></div>;
            break;
    }

    return (
        <main>
            <section className="home-item-section">
                <h2>Home item {id}</h2>
                <div className="gallery-single-item">
                    {img}
                </div>
                <Link to="/" className="link-back-to-home">
                    Back to Home
                </Link>
            </section>
        </main>
    );
}


export default PageHomeItem;

