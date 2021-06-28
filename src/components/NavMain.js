// Main Navigation bar
import { NavLink } from 'react-router-dom';
import SvgSearch from '../icons/SvgSearch';

const NavMain = () => {

    function blur(e){
        e.target.blur();
    }
    
    return (
        <nav className="main-nav" onClick={blur}>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/favourites">Favourites</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/search"><SvgSearch /></NavLink></li>
            </ul>
        </nav>
        
    );

};

export default NavMain;