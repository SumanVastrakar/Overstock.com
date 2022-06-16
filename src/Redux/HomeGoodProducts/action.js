// action types for fetching data
import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";


//action creator

export const fetchDataRequest = (payload) => {
    return {
        type : "FETCH_DATA_REQUEST",
      
    }
}
export const fetchDataSuccess = (data) => {
 
    return {
        type : "FETCH_DATA_SUCCESS",
        payload : data,
    }
}
export const fetchDataFailure = (data) => {
    return {
        type : "FETCH_DATA_FAILURE",
        payload : data,
    }
}

export const fetchData = (payload) => (dispatch) => {

    dispatch(fetchDataRequest())
    axios.get("http://localhost:8080/HomeGoods", {
        params : {
            ...payload
        }
    })
    .then((d) =>(dispatch(fetchDataSuccess(d.data))))
    .then((error) => dispatch(fetchDataFailure(error.data)))
}
// for single product data fetchng

export const GET_SINGLE_PRODUCT_REQUEST = "GET_SINGLE_PRODUCT_REQUEST";
export const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS";
export const GET_SINGLE_PRODUCT_FAILURE = "GET_SINGLE_PRODUCT_FAILURE";

///for the single product details

export const getSingleProductRequest = (payload) => {
    return {
        type: GET_SINGLE_PRODUCT_REQUEST,
        payload,
    }
}

export const getSingleProductSuccess = (payload) => {
    return {
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload

    }
}

export const getSingleProductFailure = (payload) => {
    return {
        type: GET_SINGLE_PRODUCT_FAILURE,
        payload,

    }
}

export const getSingleProduct = (id) => (dispatch) => {
    axios.get(`http://localhost:8080/HomeGoods/${id}`).then(d => dispatch(getSingleProductSuccess(d.data)))
        .catch(error => dispatch(getSingleProductFailure(error.data)))
}
