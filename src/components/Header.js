// Header
import {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavMain from './NavMain';
import SvgSearch from '../icons/SvgSearch';
import SvgAbout from '../icons/SvgAbout';
import SvgHeart from '../icons/SvgHeart';
import SvgHome from '../icons/SvgHome';


// import logo image
import logo from '../images/kinemovie-logo.png';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    function isDesktop(e) {
        if(e.matches) {
            setNavOpen(false);
        }
    }

    useEffect(() => {
        // Media query
        // When the width is over 680px, close the mobile nav bar
        let mq = window.matchMedia('(min-width: 680px)');
        mq.addListener(isDesktop);
        return () => mq.removeListener(isDesktop);
    }, [])

    function showHideNav() {
        setNavOpen(!navOpen);
    }

    return (
        <div className="wrapper">
            <header className={navOpen ? 'show' :undefined}>
                <Link to="/"><img className="logo" src={logo} alt="Kine Movie Logo"/></Link>

                <ul className="btn-main-nav">
                    <li><NavLink to="/" exact><SvgHome /></NavLink></li>
                    <li><NavLink to="/favourites"><SvgHeart /></NavLink></li>
                    <li><NavLink to="/about"><SvgAbout /></NavLink></li>
                    <li><NavLink to="/search"><SvgSearch /></NavLink></li>
                    <span className="sr-only">Menu</span>
                </ul>

                <NavMain handleShowHideNav={showHideNav}/>
            </header>
        </div>
    );
}

export default Header;