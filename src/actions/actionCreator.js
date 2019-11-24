import {ADD_ANIMAL, REMOVE_ANIMAL, ADD_LOCATION, REMOVE_LOCATION, REMOVE_ALL_ANIMALS} from "../contstants";

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

export const addLocation = (name,photo) =>({
    type: ADD_LOCATION,
    name,
    photo,
});

export const removeLocation = name =>({
    type: REMOVE_LOCATION,
    name,
});

export const removeAllAnimals = () => ({
    type: REMOVE_ALL_ANIMALS,
});