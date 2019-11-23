import React, {Fragment} from 'react';
import { Button } from 'antd';
import Animal from '../Animal/index';
import 'antd/dist/antd.css';
import './style.css';

const store = [{name: "Горила рівнинна"},{name: "Казуар шоломоносний"},{name: "Сом червонохвостовий"},
    {name: "Ропуха колорадська"},{name: "Скорпіон імператорський"},{name: "Анаконда парагвайська"}];
export default function Animals(){
    return (
        <Fragment>
            {store.map(el => <Animal name = {el.name}  image = "https://zoo.kiev.ua/upload/iblock/507/5071ade6a92f09e52cd626ba5fd91f7d.JPG"/>)}

            <article className = "tool-bar">
                <Button type="primary" size = "large">Додати</Button>
                <Button type="danger" size = "large">Видалити</Button>
                <Button size = "large">Змінити</Button>
            </article>
        </Fragment>
    )
}