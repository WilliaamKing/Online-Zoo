import {ADD_ANIMAL} from '../contstants';
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
        default:
                return state;
    }
}

export default animals;