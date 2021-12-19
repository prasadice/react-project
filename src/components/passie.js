import React from "react";
import { useNavigate } from "react-router-dom";
export default function Passie(params) {
    const navigate = useNavigate();
      const toComponentB=()=>{
         navigate('/Passi', {state:{id:1,name:'sabaoon'}});
         
           }
           return (
               <div>
                   <a onClick={toComponentB}>Here</a>
               </div>
           )
    
}