import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './style.css';

export default function Header(){
    return(
        <header id = "header">
            <figure>
                <img src = {logo} alt="logo" />
            </figure>

            <h1><span>The Online Zoo</span></h1>
            
            <nav>
                <div><Link to = "/"><span>Тварини</span></Link></div>
                <div><Link to = "/places"><span>Локації</span></Link></div>
                <div><Link to = "/contact"><span>Розробнику</span></Link></div>
            </nav>
        </header>
    )
}