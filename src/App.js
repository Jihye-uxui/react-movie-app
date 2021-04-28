// AppRouter
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

/* Pages */
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageFavourites from './pages/PageFavourites';

// 404 Page Not Found Page
import PageNotFound from './pages/PageNotFound';

// Home page Gallery section
import PageHomeItem from './pages/PageHomeItem';


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
          <main>
            <Switch>
              <Route path="/" exact><PageHome/></Route>
              <Route path="/movie:id"><PageHomeItem/></Route>     
              <Route path="/about"><PageAbout/></Route>
              <Route path="/favourites"><PageFavourites/></Route>
              <Route><PageNotFound/></Route>
            </Switch>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;