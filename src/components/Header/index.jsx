import React from 'react';
import './style.css';
import logo from './logo.png';

const navigationElements = ["Головна", "Тварини", "Локації"];

export default function Header(){
    return(
        <header>
            <figure>
                <img src = {logo} alt="logo" />
            </figure>

            <h1><span>The Online Zoo</span></h1>
            <nav>
                <ul>
                    {navigationElements.map(el => <li><span>{el}</span></li>)}
                </ul>
            </nav>
        </header>
    )
}