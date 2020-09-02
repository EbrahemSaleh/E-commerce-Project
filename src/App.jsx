import React, { Component, Fragment } from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import {Route, Switch} from "react-router-dom";
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignOut from './pages/sign-in-and-sign-out/SignInAndSignOut';

class App extends Component {
  render() {
    return (
      <Fragment className='App'>
        <Header/>
        <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOut} />
        </Switch>
         </Fragment>
    ) 

  }
}

export default App;
