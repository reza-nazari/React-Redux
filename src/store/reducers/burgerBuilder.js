import * as actionTypes from "../actions/actionTypes";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
};

const INGRENDIENT_PRICES = {
    cheese: 1.5,
    salad: 0.5,
    meat: 3,
    bacon: 2,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]:
                        state.ingredients[action.ingredientName] + 1,
                },
                totalPrice:
                    state.totalPrice +
                    INGRENDIENT_PRICES[action.ingredientName],
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]:
                        state.ingredients[action.ingredientName] - 1,
                },
                totalPrice:
                    state.totalPrice -
                    INGRENDIENT_PRICES[action.ingredientName],
            };
        case actionTypes.SET_INGREDIENT:
            return {
                ...state,
                ingredients: action.ingredients,
                error: false,
                totalPrice: 4
            };
        case actionTypes.FETCH_INGREDIENT_FAILD:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};

export default reducer;
