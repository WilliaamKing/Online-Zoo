import React, {Fragment} from 'react';
import Animal from '../Animal/index';
import './style.css';

const store = [{name: "Горила рівнинна"},{name: "Казуар шоломоносний"},{name: "Сом червонохвостовий"},
    {name: "Ропуха колорадська"},{name: "Скорпіон імператорський"},{name: "Анаконда парагвайська"}];
export default function Animals(){
    return (
        <Fragment>
            {store.map(el => <Animal name = {el.name}  image = "https://zoo.kiev.ua/upload/iblock/507/5071ade6a92f09e52cd626ba5fd91f7d.JPG"/>)}
        </Fragment>
    )
}