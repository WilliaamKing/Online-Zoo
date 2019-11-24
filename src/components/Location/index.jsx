import React from 'react';
import './style.css';

export default function Locations({info}){
    return(
        <div className = "location" style  = {{background: `url(${info.photo})`}}>
            <section>
                <p>{info.name}</p>
            </section>
        </div>
    )
}