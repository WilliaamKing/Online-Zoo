import React from "react";
import './style.css';

export default function Animal({info}){
    return (
        <div className = "animal-card" style  = {{background: `url(${info.photo})`}}>
            <section>
                <p>{info.species}</p>
            </section>

            <section id = "additionalInfo">
                <h2>Біологічна класифікація</h2>
                <p>Тип: {info.typeName}</p>
                <p>Клас: {info.className}</p>
                <p>Ряд: {info.series}</p>
                <p>Родина: {info.family}</p>
                <p>Рід: {info.genus}</p>
                <p>Вид: {info.species}</p>
            </section>
        </div>
    );
}