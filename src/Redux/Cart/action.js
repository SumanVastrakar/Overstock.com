import axios from "axios";
export const ADD_PRODUCT_CART_REQUEST = "ADD_PRODUCT_CART_REQUEST";
export const ADD_PRODUCT_CART_SUCCESS = "ADD_PRODUCT_CART_SUCCESS";
export const ADD_PRODUCT_CART_FAILURE = "ADD_PRODUCT_CART_FAILURE";

export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";

export const addProductCartRequest = () => {
    return {
        type: ADD_PRODUCT_CART_REQUEST,

    }
}

export const addProductCartSuccess = (payload) => {
    return {
        type: ADD_PRODUCT_CART_SUCCESS,
        payload

    }
}

export const addProductCartFailure = (data) => {
    return {
        type: ADD_PRODUCT_CART_FAILURE,
        payload: data,

    }
}

export const addProductCart = (product) => (dispatch) => {
    // console.log("product", product)
    axios.post("http://localhost:8080/cart", product)
        .then(d => dispatch(addProductCartSuccess(d.data)))
        .catch(error => addProductCartFailure(error.data))

}

//for fetching cart data

export const fetchCartRequest = (payload) => {
    return {
        type: FETCH_CART_REQUEST,
        payload
    }
}

export const fetchCartSuccess = (payload) => {
    console.log("action1", payload)
    return {
        type: FETCH_CART_SUCCESS,
        payload

    }
}

export const fetchCartFailure = (payload) => {
    return {
        type: FETCH_CART_FAILURE,
        payload

    }
}
export const fetchCart = (payload) => (dispatch) => {
    dispatch(fetchCartRequest())
    axios.get("http://localhost:8080/cart").then(d => dispatch(fetchCartSuccess(d.data)))
        .then(err => dispatch(fetchCartFailure(err.data)))

}
