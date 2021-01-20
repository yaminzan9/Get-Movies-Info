import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom';



class Header extends Component  {

   
        render () {
        return (
            <div className="container-flued mg-top" >
            <div className="header-btn-conteant" >
            <div className="header-btn-item" >
                <button><Link to="/" ></Link>Home</button>
            </div>
            <div className="header-btn-item" >
                <button><Link to="/About" >About</Link></button>
            </div>
            <div className="header-btn-item" >
                <button><Link to="/contact" >contact</Link></button>
            </div>
            <div className="header-btn-item" >
                <button><Link to="/contact" >contact</Link></button>
            </div>
            <div className="header-btn-item" >
                <button><Link to="/contact" >contact</Link></button>
            </div>
            
            </div>
            </div>
            
        )
    }
}

export default Header ;