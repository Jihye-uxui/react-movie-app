// Footer
import { getYear } from '../utilities/utilities';
import '../scss/components/_footer.scss';

// import logo image
import logo from '../images/kinemovie-logo.png';

const Footer = () => (
    <div className="wrapper">
        <footer>
            <div className="footer-contents">
                <div className="footer-logo">
                    <img src={logo} alt="Kine Movie Logo"/>
                </div>
                <div>
                    <p>&copy; {getYear()} TMDb All Rights Reserved.</p>
                    <p>Created by Jihye Choe For Educational Purpose Only</p>
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;