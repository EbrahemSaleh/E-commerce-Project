import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import {Route, Switch} from "react-router-dom";
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignOut from './pages/sign-in-and-sign-out/SignInAndSignOut';
import {auth} from './firebase/firebase.utils';



class App extends Component {

  state ={
    currentUser : null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOut} />
        </Switch>
         </div>
    ) 

  }
}

export default App;
