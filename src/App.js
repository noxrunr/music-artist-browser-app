import React from 'react';
import './App.css';
import Home from './scenes/Home/Home'
import Artist from './scenes/Artist/Artist'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route  path='/:limit?' component={Home} />
          <Route path='/artist:artistId' component={Artist} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
