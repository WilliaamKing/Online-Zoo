import {ADD_LOCATION, REMOVE_LOCATION} from "../contstants";
import {load} from 'redux-localstorage-simple';

let LOCATIONS = load({namespace: "zoo"});

if(!LOCATIONS || !LOCATIONS.locations || !LOCATIONS.locations.length){
    LOCATIONS = {
        locations: []
    }
};

const locations = (state = LOCATIONS.locations, {type, name, photo}) =>{
    switch(type){
        case ADD_LOCATION: 
            return [
                ...state,{
                    name,
                    photo,
                }
            ];
        case REMOVE_LOCATION:
            return [...state].filter(el => el.name !== name);
        default:
            return state;
    }
}

export default locations;