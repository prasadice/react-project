import React, { Component } from 'react'

import Capture from '../components/Capture.png'
import shopping from '../components/shopping.png'
import search from '../components/search.png'
import user from './user.png'






class Navbar extends React.Component {
    

    render() { 
        return <div>
            <nav style={{ borderBottom:"1px solid grey" }} class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand mr-md-4" href="#">
    <img src={Capture} alt="hi" srcset="" />

    
    <span style={{color: "#ffcc00"}}>E</span><span>-Shop</span>
  </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item mr-5 ml-4">
          <a class="nav-link" href="#">Men <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mr-5 ml-4">
          <a class="nav-link" href="#">Women</a>
        </li>
        <li class="nav-item mr-5 ml-4">
          <a class="nav-link" href="#">Kids</a>
        </li>
        
      </ul>
      <form style={{marginLeft:"100px"}} class="form-inline my-2 my-lg-0">
        <a className='nav-link' href="#"><img src={shopping} alt="" /></a>
        <a className='nav-link' href="#"><img src={search} alt="" /></a>
        <a className='nav-link' href="#"><img src={user} alt="" /></a>
      </form>
    </div>
  </nav>
        </div>;
    }
}
 
export default Navbar;


