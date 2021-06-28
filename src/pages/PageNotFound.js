// Page - Not Found
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globals';

const PageNotFound = () => {

	useEffect(() => {
		document.title = `${appTitle} - Page Not Found`;
	}, []);
    
	return (
		<div className="wrapper">
			<h1 className="page-heading">404 Error</h1>
			<section className="error-section">
				<div className="error-message">
					<h2>Oops! Page Not Found</h2>
					<p>The page you were looking for doesn't exsit. It might have been removed, renamed. Please try it again!<br/><br/><Link to="/">Back to Home</Link></p>
				</div>
			</section>
		</div>
	);
};

export default PageNotFound;