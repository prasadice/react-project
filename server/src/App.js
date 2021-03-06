import React, { Component } from 'react';
import './App.css';

class App extends Component {
   state = {
      em: '',
      pw: '',
      msg: '',
      jwt: ''
   }

   render() {
  const a = this.state.jwt
      return (
         <div className="App">
            <form
            >
               <input className='form-control'
                  type="email"
                  name="em"
                  value={this.state.em}
                  onChange={this.onChange}
                  placeholder="email"
               />
               <input
                  type="password"
                  name="pw"
                  value={this.state.pw}
                  onChange={this.onChange}
                  placeholder="password"
               />
               <button
                  onClick={this.postLogin}
               > login
               </button>
               <button
                  onClick={this.postSignup}
               > signup
               </button>
            </form>

            <p>SERVER RESPONSE MESSAGE: {this.state.msg}</p>
            <p>JWT: {  this.state.jwt}</p>
            <p>HI:{(this.state.msg) == 'true' ? window.location.href = "http://www.w3schools.com" : "false"}
           </p>
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

export default App;
