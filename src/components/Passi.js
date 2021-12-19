import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
export default function Passi(params) {
    const location = useLocation();
    let a = console.log(location.state.name)
    let b = location.state.name
    return b 
    
    
  }