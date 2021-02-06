import { GET_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_CART, UPDATE_CART, DELETE_CART, GET_NUMBER_CART } from "../types";
import axios from "../../Config/Axios/index";

export const getProduct = () => dispatch => {
    let url = '/get-product';
    return axios.get(url).then(response => {
        // console.log(response)
        dispatch({
            type: GET_PRODUCT,
            payload: response.data.result
        });
    })
}

export const addCart = (payload) => dispatch => {
    return dispatch({
        type: ADD_CART,
        payload
    })
}

export const GetNumberCart = () => dispatch => {
    return dispatch({
        type: GET_NUMBER_CART
    })
}

export const UpdateCart = (payload) => dispatch => {
    return dispatch({
        type: UPDATE_CART,
        payload
    })
}

export const DeleteCart = (payload) => dispatch => {
    return dispatch({
        type: DELETE_CART,
        payload
    })
}

export const IncreaseQuantity = (payload) => dispatch => {
    return dispatch({
        type: INCREASE_QUANTITY,
        payload
    })
}

export const DecreaseQuantity = (payload) => dispatch => {
    return dispatch({
        type: DECREASE_QUANTITY,
        payload
    })
}