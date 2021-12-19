import Navbar from './navbar';

import Buttons from './Login.jsx'

import React, { Component } from 'react';
import Pizza from './Pizza';

class Logged extends React.Component{
 state={
     a: 1
 }


render() {

    alert("Logged in")
    console.log(this.props.value)
  
  if(this.state.a == 1)
  {
    return <div>
    
     <Navbar/>
    <div className='row'>
       <div className='col'><Buttons/></div>
       <div className='col'> <Pizza/> </div>
   
    </div>
    
    
    </div>
  }
  return null
  
   
    

 }
}


export default Logged;




