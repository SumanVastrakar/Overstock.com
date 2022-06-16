import {   ADD_PRODUCT_CART_REQUEST,
    ADD_PRODUCT_CART_SUCCESS,
    ADD_PRODUCT_CART_FAILURE,
    FETCH_CART_FAILURE,
    FETCH_CART_REQUEST, 
    FETCH_CART_SUCCESS,

} from "./action"

const initialstate = {
   products : [],
   error : false,
   loading : false,
   currentProduct : {},
   cart : []
}
export const HomeCartProductReducer = ( state = initialstate, {type, payload}) =>{
  
   switch(type) {
           // for add to  cart functiuonality

           case ADD_PRODUCT_CART_REQUEST : {
            return {
                ...state, 
                error : "",
                loading : true
            }
        }
        case ADD_PRODUCT_CART_SUCCESS : {
            
            return {
                ...state,
              cart : [...state.cart, payload],
                error : "",
                loading : false
            }
        }
        case ADD_PRODUCT_CART_FAILURE : {
            return {
                ...state,
                error : payload,
                loading : false
            }
        }
          //for fetching up the cart
          case FETCH_CART_REQUEST : {
            return {
                ...state, 
                error : "",
                loading : true
            }
        }
        case FETCH_CART_SUCCESS : {
            console.log("cart reducer", payload)
            return {
                ...state,
                cart : [...payload],
           
                error : "",
                loading : false
            }
        }
        case FETCH_CART_FAILURE : {
            return {
                ...state,
                error : payload,
                loading : false
            }
        }
       default : return state;
   }
}