import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {addAnimal, removeAnimal} from '../../actions/actionCreator';
import { Button, Input} from 'antd';
import Animal from '../Animal/index';
import 'antd/dist/antd.css';
import './style.css';

const { Search } = Input;

function Animals(props){
    const [searchElement, setSearchElement] = useState("");

    const openAddSection = function (){
        closeDeleteSection();
        document.getElementById("addForm").style.display = "block";
    }

    const openDeleteSection = function (){
        closeAddSection();
        document.getElementById("deleteForm").style.display = "block";
    }
    
    const closeAddSection = function (){
        document.getElementById("addForm").style.display = "none";
    }

    const closeDeleteSection = function (){
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
        closeAddSection();
    }

    const removeAnimal = function (){
        const species = document.getElementById("animalName");
        const {removeAnimal} = props;

        removeAnimal(species.value);
        closeDeleteSection()
    }

    return (
        <Fragment>
             <div id = "search">
                <Search
                    placeholder="Пошук"
                    enterButton
                    size="large"
                    onSearch={value => setSearchElement(value)}
                />
             </div>

            {props.animals.filter(el => el.species.indexOf(searchElement)>=0).map((el,index) => <Animal info = {el} key = {`animal-${index}`}/>)}

            <article id = "toolBar">
                <Button type="primary" size = "large" onClick = {openAddSection}>Додати</Button>
                <Button type="danger" size = "large" onClick = {openDeleteSection}>Видалити</Button>
            </article>

            <article id = "addForm">
                <h2>Додати нову тварину</h2>

                <form>
                    <Input placeholder="Тип" size = "large" id = "type" allowClear = {true}/>
                    <Input placeholder="Клас" size = "large" id = "class" allowClear = {true}/>
                    <Input placeholder="Ряд" size = "large" id = "series" allowClear = {true}/>
                    <Input placeholder="Родина" size = "large" id = "family" allowClear = {true}/>
                    <Input placeholder="Рід" size = "large" id = "genus" allowClear = {true}/>
                    <Input placeholder="Вид" size = "large" id = "species" allowClear = {true}/>
                    <Input placeholder="Фото" size = "large" id = "photo" allowClear = {true}/>

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
                    <Input placeholder="Вид" size = "large" id = "animalName"/>

                    <section id = "btnSection">
                        <Button type="primary" size = "large" id = "addBtn" onClick = {removeAnimal}>Видалити</Button>
                        <Button type="danger" size = "large" id = "closeBtn"onClick = {closeDeleteSection}>
                            Відмінити</Button>
                    </section>
                </form>
            </article>
        </Fragment>
    )
}

export default connect (state =>({
    animals: state.animals
}),{addAnimal, removeAnimal})(Animals);