import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from '../Login/index';
import './Menu.css';

function Menu(){
    return (               
            <nav id="Menu" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
                <div className="container">
                    {/* eslint-disable-next-line */}                
                    <a className="navbar-brand" href="#">GeekBrains</a>
                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        &#9776;
                    </button>
                    <div className="collapse navbar-collapse" id="exCollapsingNavbar">
                        <ul className="nav navbar-nav"> 
                            {/* eslint-disable-next-line */}
                            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                            {/* eslint-disable-next-line */}
                            <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
                            {/* eslint-disable-next-line */}
                            <li className="nav-item"><a href="#" className="nav-link">Service</a></li>
                            {/* eslint-disable-next-line */}
                            <li className="nav-item"><a href="#" className="nav-link">More</a></li>
                        </ul>                         
                        <Login/>
                    </div>
                </div>
            </nav>                           
    );
}
export default Menu;

 