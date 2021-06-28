// Page - About
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import SearchMovies from '../components/SearchMovies';
import SpeechRecognitionFunc from '../components/SpeechRecognition';
import '../scss/components/_page-about.scss';


const PageAbout = () => {

	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

	return (
		<div className="wrapper">
			<h1 className="page-heading">Search Movies</h1>
			<SearchMovies/>
			{/* <SpeechRecognitionFunc/> */}
		</div>
	);
	
};

export default PageAbout;