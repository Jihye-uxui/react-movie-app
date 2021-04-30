// Main Navigation bar
import { NavLink } from 'react-router-dom';

const NavMain = () => {

    function blur(e){
        e.target.blur();
    }
    
    return (
        <nav className="main-nav" onClick={blur}>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/favs">Favourites</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    );

};

export default NavMain;