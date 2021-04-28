// Page - Home
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

// SCSS style file
import '../scss/components/_gallery.scss';


const PageHome = () => {

    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

    return (
        <main>
            <section>
                <h2>Poplular Now</h2>
                <div className="gallery">

                    <Link to="movie1" className="movie-poster"><img src={poster01} alt="Movie 1"/></Link>

                    <Link to="movie2" className="movie-poster"><img src={poster02} alt="Movie 2"/></Link>

                    <Link to="movie3" className="movie-poster"><img src={poster03} alt="Movie 3"/></Link>

                    <Link to="movie4" className="movie-poster"><img src={poster04} alt="Movie 4"/></Link>

                    <Link to="movie5" className="movie-poster"><img src={poster05} alt="Movie 5"/></Link>

                    <Link to="movie6" className="movie-poster"><img src={poster06} alt="Movie 6"/></Link>

                    <Link to="movie7" className="movie-poster"><img src={poster07} alt="Movie 7"/></Link>

                    <Link to="movie8" className="movie-poster"><img src={poster08} alt="Movie 8"/></Link>

                    <Link to="movie9" className="movie-poster"><img src={poster09} alt="Movie 9"/></Link>

                    <Link to="movie10" className="movie-poster"><img src={poster10} alt="Movie 10"/></Link>

                    <Link to="movie11" className="movie-poster"><img src={poster11} alt="Movie 11"/></Link>

                    <Link to="movie12" className="movie-poster"><img src={poster12} alt="Movie 12"/></Link>
                </div>
            </section>
        </main>
    )

};

export default PageHome;