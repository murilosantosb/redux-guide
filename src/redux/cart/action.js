import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProduct = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const inclementProduct = (payload) => ({
    type: CartActionTypes.INCLEMENT_PRODUCT,
    payload,
})

export const declementProduct = (payload) => ({
    type: CartActionTypes.DECLEMENT_PRODUCT,
    payload,
})