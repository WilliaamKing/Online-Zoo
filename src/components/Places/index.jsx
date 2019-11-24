import React, {Fragment, useState} from 'react';
import {Button, Input} from 'antd';
import Location from '../Location/index';
import {addLocation, removeLocation} from '../../actions/actionCreator';
import {connect} from 'react-redux';
import "./style.css";

const { Search } = Input;

function Places(props){
    const [searchElement, setSearchElement] = useState("");

    const addNewLocation = function(){
        const name = document.getElementById("location").value;
        const photo = document.getElementById("photo").value;
        const {addLocation} = props;

        addLocation(name, photo);
        closeAddSection();
    }

    const removeLocation = function(){
        const name = document.getElementById("locationName").value;
        const {removeLocation} = props;

        removeLocation(name);
        closeDeleteSection();
    }

    const openAddSection = function (){
        closeDeleteSection();
        document.getElementById("addForm").style.display = "block";
    }

    const openDeleteSection = function(){
        closeAddSection();
        document.getElementById("deleteForm").style.display = "block";
    }

    const closeDeleteSection = function(){
        document.getElementById("deleteForm").style.display = "none";
    }

    const closeAddSection = function (){
        document.getElementById("addForm").style.display = "none";
    }

    return(
        <Fragment>
            <div id = "search">
                <Search
                    placeholder="Пошук"
                    enterButton
                    size="large"
                    onSearch={value => setSearchElement(value)}
                />
             </div>

            {props.locations.filter(el => el.name.indexOf(searchElement)>=0).map((el,index) => 
                <Location info = {el} key = {`location-${index}`}/>)}

            <article id = "toolBar">
                <Button type="primary" size = "large" onClick = {openAddSection}>Додати</Button>
                <Button type="danger" size = "large" onClick = {openDeleteSection}>Видалити</Button>
            </article>

            <article id = "addForm" className = "addForm">
                <h2>Додати нову локацію</h2>

                <form>
                    <Input placeholder="Назва" size = "large" id = "location" allowClear = {true}/>
                    <Input placeholder="Фото" size = "large" id = "photo" allowClear = {true}/>

                    <section id = "btnSection">
                        <Button type="primary" size = "large" id = "addBtn" onClick = {addNewLocation}>Додати</Button>
                        <Button type="danger" size = "large" id = "closeBtn"onClick = {closeAddSection}>
                            Відмінити</Button>
                    </section>
                </form>
            </article>

            <article id = "deleteForm">
                <h2>Видалити локацію</h2>
                <form>
                    <Input placeholder="Локація" size = "large" id = "locationName"/>

                    <section id = "btnSection">
                        <Button type="primary" size = "large" id = "addBtn" onClick = {removeLocation}>Видалити</Button>
                        <Button type="danger" size = "large" id = "closeBtn"onClick = {closeDeleteSection}>
                            Відмінити</Button>
                    </section>
                </form>
            </article>
        </Fragment>
    )
}

export default connect (state => ({
    locations: state.locations,
}),{addLocation, removeLocation})(Places);
