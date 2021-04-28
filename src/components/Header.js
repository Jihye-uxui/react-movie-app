// Header

import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { appTitle } from '../globals/globals';

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
        // When the width is over 600px, close the mobile nav bar
        let mq = window.matchMedia('(min-width: 600px)');
        mq.addListener(isDesktop);
        return () => mq.removeListener(isDesktop);
    }, [])

    function showHideNav() {
        setNavOpen(!navOpen);
    }

    return (
        <header className={navOpen ? 'show' :undefined}>
            <h1><Link to="/"><img src={logo} alt="Kine Movie Logo"/></Link></h1>
            {/**
             * HTML for the Hamburger icon modified from HTMl 
             * found at this codepen:
             * https://codepen.io/RRoberts/pen/ZBYaJr
             */}
            <button className="btn-main-nav"
                    onMouseDown={(e) => {e.preventDefault(); }}
                    onClick={showHideNav}>
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                <span className="sr-only">Menu</span>
            </button>
            <Nav handleShowHideNav={showHideNav}/>
        </header>
    );
}

export default Header;