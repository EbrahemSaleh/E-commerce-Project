import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import {Route, Switch} from "react-router-dom";
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/shop' component={ShopPage} />
        </Switch>
         </div>
    ) 

  }
}

export default App;
