import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {addAnimal} from '../../actions/actionCreator';
import { Button, Input} from 'antd';
import Animal from '../Animal/index';
import 'antd/dist/antd.css';
import './style.css';

function Animals(props){
    const openAddSection = function (){
        closeDleteSection();
        document.getElementById("addForm").style.display = "block";
    }

    const openDeleteSection = function (){
        closeAddSection();
        document.getElementById("deleteForm").style.display = "block";
    }
    
    const closeAddSection = function (){
        document.getElementById("addForm").style.display = "none";
    }

    const closeDleteSection = function (){
        document.getElementById("deleteForm").style.display = "none";
    }
    
    const addAnimal = function (){
        const type = document.getElementById("type");
        const className = document.getElementById("class");
        const series = document.getElementById("series");
        const family = document.getElementById("family");
        const genus = document.getElementById("genus");
        const species = document.getElementById("species");
        const photo = document.getElementById("photo");
        const {addAnimal} = props;
        
        addAnimal(type.value, className.value, series.value, family.value, genus.value, species.value,
            photo.value);
    }

    return (
        <Fragment>
            {props.animals.map((el,index) => <Animal name = {el.species} key = {`animal-${index}`} image = {el.photo}/>)}

            <article id = "toolBar">
                <Button type="primary" size = "large" onClick = {openAddSection}>Додати</Button>
                <Button type="danger" size = "large" onClick = {openDeleteSection}>Видалити</Button>
                <Button size = "large">Змінити</Button>
            </article>

            <article id = "addForm">
                <h2>Додати нову тварину</h2>

                <form>
                    <Input placeholder="Тип" size = "large" id = "type"/>
                    <Input placeholder="Клас" size = "large" id = "class"/>
                    <Input placeholder="Ряд" size = "large" id = "series"/>
                    <Input placeholder="Родина" size = "large" id = "family"/>
                    <Input placeholder="Рід" size = "large" id = "genus"/>
                    <Input placeholder="Вид" size = "large" id = "species"/>
                    <Input placeholder="Фото" size = "large" id = "photo"/>

                    <section id = "btnSection">
                        <Button type="primary" size = "large" id = "addBtn" onClick = {addAnimal}>Додати</Button>
                        <Button type="danger" size = "large" id = "closeBtn"onClick = {closeAddSection}>
                            Відмінити</Button>
                    </section>
                </form>
            </article>

            <article id = "deleteForm">
                <h2>Видалити тварину</h2>
                <form>
                    <Input placeholder="Вид" size = "large" id = "species"/>

                    <section id = "btnSection">
                        <Button type="primary" size = "large" id = "addBtn">Додати</Button>
                        <Button type="danger" size = "large" id = "closeBtn"onClick = {closeDleteSection}>
                            Відмінити</Button>
                    </section>
                </form>
            </article>
        </Fragment>
    )
}

export default connect (state =>({
    animals: state.animals
}),{addAnimal})(Animals);