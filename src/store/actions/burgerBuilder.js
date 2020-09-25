import axios from "../../axios-order";
import * as actionTypes from "./actionTypes";

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name,
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name,
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients,
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILD,
    };
};

export const initIngridients = () => {
    return (dispatch) => {
        axios
            .get("/ingredients.json")
            .then((response) => {
                dispatch(setIngredients(response.data));
            })
            .catch((err) => {
                dispatch(fetchIngredientsFailed());
            });
    };
};
