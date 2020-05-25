import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Home from './Home/Home'
import Fruits from './Fruits/Fruits'
import Purchase from './Purchase/Purchase'
import Contact from './Contact/Contact'
import { Route } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
    <div>
    <Nav />
    <Route
    exact path='/'
    component={Home}/>
    <Route
    exact path='/fruits'
    component={Fruits} />
    <Route 
    exact path='/buy'
    component={Purchase} />
    <Route 
    exact path='/contact'
    component={Contact} />
    </div>
    )
};
}

export default App;
