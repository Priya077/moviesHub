import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',padding:'0.5'}}>
                <a  onClick={()=>{window.location.href="/"}}  style={{textDecoration:'none'}}><h1 style={{marginTop:'1rem',marginLeft:'1rem',color:'orangered'}}>Movies<span style={{color:'black'}}>Hub</span></h1></a>
                <a  onClick={()=>{window.location.href="/favourites"}} style={{textDecoration:'none'}}><h2 style={{marginLeft:'2rem',marginTop:'1.5rem',color:'blue'}}>Favourites</h2></a>
                
                
            </div>
        )
    }
}