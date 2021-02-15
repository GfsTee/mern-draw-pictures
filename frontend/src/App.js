import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GameAdd from './components/GameAdd';
import Nav from './components/Nav';
import Home from './components/Home';
import Gallery from './components/Gallery';


function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" component={Home} exact />

            <Route path="/gallery" component={Gallery} exact />

            <Route path="/gallery/:id" component={GameAdd} />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
