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
import PageSearch from '../pages/PageSearch';

// 404 Page Not Found Page
import PageNotFound from '../pages/PageNotFound';

// Movie detail information section
import PageMovieInfo from '../pages/PageMovieInfo';
import { APP_FOLDER_NAME } from '../globals/globals';


function AppRouter() {
  return (
    <Router basename={ APP_FOLDER_NAME }>
        <Header/>
          <main>
            <Switch>
              <Route path='/' exact><PageHome sort='popular'/></Route>
              <Route path="/movie/:id"><PageMovieInfo /></Route>
              <Route path='/sort/popular'><PageHome sort='popular' /></Route>
              <Route path='/sort/top-rated'><PageHome sort='top_rated' /></Route>
              <Route path='/sort/now-playing'><PageHome sort='now_playing' /></Route>
              <Route path='/sort/upcoming'><PageHome sort='upcoming' /></Route>
              <Route path='/favourites'><PageFavs/></Route>
              <Route path='/about'><PageAbout/></Route>
              <Route path='/search'><PageSearch/></Route>
              <Route path='/'><PageNotFound/></Route>

            </Switch>
          </main>
        <Footer/>
    </Router>
  );
}

export default AppRouter;