import { Switch, Route} from 'react-router';

import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/work'>
          <Work />
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
