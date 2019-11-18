import React from 'react';
import './style.css';

const navigationElements = ["Головна", "Тварини", "Локації"];

export default function Header(){
    return(
        <header>
            <h1><span>The Online Zoo</span></h1>
            <nav>
                <ul>
                    {navigationElements.map(el => <li><span>{el}</span></li>)}
                </ul>
            </nav>
        </header>
    )
}