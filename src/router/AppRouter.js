// AppRouter
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Movies from '../components/Movies';

/* Pages */
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';

// 404 Page Not Found Page
import PageNotFound from '../pages/PageNotFound';

// Home page Gallery section
import PageMovieInfo from '../pages/PageMovieInfo';
import { APP_FOLDER_NAME } from '../globals/globals';


function AppRouter() {
  return (
    <Router basename={APP_FOLDER_NAME}>
        <div className="wrapper">
        <Header/>
          <main>
            <Switch>
              <Route path='/' exact><PageHome sort='popular'/></Route>
              <Route path="/movie/:id"><PageMovieInfo /></Route>
              <Route path='/sort/popular'><PageHome sort='popular' /></Route>
              <Route path='/sort/top-rated'><PageHome sort='top_rated' /></Route>
              <Route path='/sort/now-playing'><PageHome sort='now_playing' /></Route>
              <Route path='/sort/upcoming'><PageHome sort='upcoming' /></Route>

              <Route path='/favs'><PageFavs/></Route>
              <Route path='/about'><PageAbout/></Route>

            </Switch>
          </main>
        <Footer/>
        </div>
    </Router>
  );
}

export default AppRouter;