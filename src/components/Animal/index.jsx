import React from "react";
import './style.css';

export default function Animal({name, image}){
    return (
        <div className = "animal-card" style  = {{background: `url(${image})`}}>
            <section>
                <p>{name}</p>
            </section>
        </div>
    );
}