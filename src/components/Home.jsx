import Navbar from './navbar';

import Buttons from './Login.jsx'

import React, { Component } from 'react';
import Pizza from './Pizza';


class Home extends React.Component{


render() {
  
   
  
  
   return <div>
      <Navbar/>
    <div className='row'>
       <div className='col'><Buttons/></div>
       <div className='col'> <Pizza/> </div>
   
    </div>
    
    
    
     
    
    </div>
    

 }
}


export default Home;




