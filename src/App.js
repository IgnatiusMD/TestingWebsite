import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/home-page/homePage';
import AboutPage from './pages/about-page/aboutPage';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;