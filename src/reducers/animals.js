import {ADD_ANIMAL, REMOVE_ANIMAL, REMOVE_ALL_ANIMALS} from '../contstants';
import {load} from 'redux-localstorage-simple';

let ANIMALS = load({namespace: 'zoo'});

if(!ANIMALS || !ANIMALS.animals || !ANIMALS.animals.length){
     ANIMALS = {
         animals: []
     }
};

const animals = (state = ANIMALS.animals, {type, className, series, family,
    genus, species, photo}) => {
    switch(type){
        case ADD_ANIMAL:
            return [
                ...state, {
                    className,
                    series,
                    family,
                    genus,
                    species,
                    photo,
                }
            ];
        case REMOVE_ANIMAL:
            return [...state].filter(el => el.species !== species);
        case REMOVE_ALL_ANIMALS:
            return [];
        default:
            return state;
    }
}

export default animals;