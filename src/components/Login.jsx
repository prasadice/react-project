import React, { Component } from 'react';

import Form from './buttons.jsx'



class Buttons extends React.Component {
    render() { 
        return <div className='col'>
             <h5 style={{marginTop:"4%", marginLeft:"6.2%"}}>Shipment and Payment</h5>
             <div style={{marginTop: "4%",marginLeft:"4%"}}>
            <button style={{marginLeft: "2%", borderRadius:"28px", width:"18%",fontWeight:"bold"}} 
             className='btn btn-success'
             onClick={()=>{window.location.href='/Login'}} 
             >
              LOG IN
                    </button>
           <button style={{marginLeft: "2%", borderRadius:"28px", width:"18%", fontWeight:"bold", border:"1px solid #cccccc"}} className='btn btn-light'>Sign Up</button>
           </div>
          
           <div style={{ marginTop:"4%",marginLeft: "6%"}}>
               <h6 >Shipping Information</h6>
               <br></br>
            <Form/>
           </div>
           
        </div>;
    }
}
 
export default Buttons;
