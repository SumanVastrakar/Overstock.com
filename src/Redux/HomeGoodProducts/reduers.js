import {FETCH_DATA_REQUEST,
     FETCH_DATA_SUCCESS,
     FETCH_DATA_FAILURE,
    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAILURE,} from "./action"

const initialstate = {
    products : [],
    error : false,
    loading : false,
    currentProduct : {}
}
export const HomeGoodProductReducer = ( state = initialstate, {type, payload}) =>{
   
    switch(type) {
        case FETCH_DATA_REQUEST : {
            return {
                ...state, 
                error : false,
                loading : true
            }
        }
        case FETCH_DATA_SUCCESS : {
            
            return {
                ...state,
                products : payload,
                error : false,
                loading : false
            }
        }
        case FETCH_DATA_FAILURE : {
            return {
                ...state,
                error : payload,
                loading : false
            }
        }
        case GET_SINGLE_PRODUCT_REQUEST : {
            return {
                ...state, 
                error : "",
                loading : true
            }
        }
        case GET_SINGLE_PRODUCT_SUCCESS : {
            
            return {
                ...state,
                currentProduct : payload,
                error : "",
                loading : false
            }
        }
        case GET_SINGLE_PRODUCT_FAILURE : {
            return {
                ...state,
                error : payload,
                loading : false
            }
        }
        default : return state;
    }
}