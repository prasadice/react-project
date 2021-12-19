import { clear } from '@testing-library/user-event/dist/clear';
import React, { Component } from 'react';


import Logged from './logged';


class Login extends Component {
   state = {
      em: '',
      pw: '',
      msg: '',
      jwt: ''
   }
   

   
   render() {
      let a='passed'
      
      return (
         <div className="App">
            <form className='form-inline'>
               <input className='form-control mr-2'
                  type="email"
                  name="em"
                  value={this.state.em}
                  onChange={this.onChange}
                  placeholder="email"
               />
               <input className='form-control ml-2'
                  type="password"
                  name="pw"
                  value={this.state.pw}
                  onChange={this.onChange}
                  placeholder="password"
               />
               <button className='btn ml-2'
                  onClick={this.postLogin} 
                  
               > login
               </button>
               <button className='btn ml-2'
                  onClick={this.postSignup}
               > signup
               </button><br></br>
               
            </form>
            <br></br>
            <div><p>
            SERVER RESPONSE MESSAGE: {this.state.msg}</p>
            </div>
            
            <br></br>
            
            <p>JWT: {  this.state.jwt}</p>
            {console.log(this.state.msg)}

            
             <p>{(this.state.msg) == 'true' ? window.location.href='http://localhost:3000/Logged' : 'false'}</p>
            
           
         </div>
      );
   }

   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }
   
   postLogin = (e) => {
      
      e.preventDefault();
      
      
      fetch("http://localhost:3001/login", {
         method: "POST",
         headers: {
            "accept": "application/json",
            "content-type": "application/json"
         },
         body: JSON.stringify({
            em: this.state.em,
            pw: this.state.pw
         })
      })
         .then((res) => res.json())
         .then((json) => {
            this.setState({
               em: '',
               pw: '',
               msg: json.msg,
               jwt: json.jwt
            })
         })
   }

   postSignup = (e) => {
      e.preventDefault();
      
      console.log(this.state.em, this.state.pw);
      fetch("http://localhost:3001/signup", {
         method: "POST",
         headers: {
            "accept": "application/json",
            "content-type": "application/json"
         },
         body: JSON.stringify({
            em: this.state.em,
            pw: this.state.pw
         })
      })
         .then((res) => res.json())
         .then((json) => {
            this.setState({
               em: '',
               pw: '',
               msg: json.msg,
               jwt: json.jwt
            })
         })
   }

}

export default Login;
