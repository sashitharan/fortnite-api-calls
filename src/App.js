import './App.css';
import React from 'react'
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import ItemDetails from './ItemDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" exact component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

//Just another Home Component

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};

export default App;
