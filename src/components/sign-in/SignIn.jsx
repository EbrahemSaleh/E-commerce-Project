import React, { Component } from 'react';
import './sign-in.style.scss';
import FormIn from '../form-in/FormIn';
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle} from '../../firebase/firebase.utils';

 class SignIn extends Component {
   state ={
     email: '',
     password : ''
   }

   handleSubmit = (event) => {
     event.preventDefault();
     this.setState({email : '' , password : '' })
   }

   handleChange = (event) => {
     const {name , value} = event.target;
     this.setState({ [name] : value })
   }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account </h2>
        <span>sign in with your email and password </span>
      
      <form onSubmit={this.handleSubmit} autoComplete='off' >
        <FormIn
         name = "email" 
         value={this.state.email }
          required 
          type="email"
          onChange={this.handleChange}
          label="email"
          />
          
          <FormIn
           name="password"
            value={this.state.password} 
            required 
            type="password"
            onChange={this.handleChange}
            label = 'password'
            />

          <CustomButton type='submit' > sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            SignIn with google 
          </CustomButton>
      </form>
      </div>
    )
  }
}

export default SignIn