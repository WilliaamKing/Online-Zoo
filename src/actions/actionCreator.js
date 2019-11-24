import {ADD_ANIMAL, REMOVE_ANIMAL} from "../contstants";

export const addAnimal = (typeName, className, series, family, genus, species, photo) => ({
    type: ADD_ANIMAL,
    typeName,
    className,
    series,
    family,
    genus,
    species,
    photo
});

export const removeAnimal = species =>({
    type: REMOVE_ANIMAL,
    species,
});