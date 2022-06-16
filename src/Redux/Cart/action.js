import axios from "axios";
export const ADD_PRODUCT_CART_REQUEST = "ADD_PRODUCT_CART_REQUEST";
export const ADD_PRODUCT_CART_SUCCESS = "ADD_PRODUCT_CART_SUCCESS";
export const ADD_PRODUCT_CART_FAILURE = "ADD_PRODUCT_CART_FAILURE";

export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";

export const ADD_WISHLIST_REQUEST = "ADD_WISHLIST_REQUEST";
export const ADD_WISHLIST_SUCCESS = "ADD_WISHLIST_SUCCESS";
export const ADD_WISHLIST_FAILURE = "ADD_WISHLIST_FAILURE";

export const FETCH_WISHLIST_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_WISHLIST_SUCCESS = "FETCH_WISHLIST_SUCCESS";
export const FETCH_WISHLIST_FAILURE = "FETCH_WISHLIST_FAILURE";

export const REMOVE_PRODUCT_CART_REQUEST = "REMOVE_PRODUCT_CART_REQUEST";
export const REMOVE_PRODUCT_CART_SUCCESS = "REMOVE_PRODUCT_CART_SUCCESS";
export const REMOVE_PRODUCT_CART_FAILURE = "REMOVE_PRODUCT_CART_FAILURE";

export const REMOVE_WISHLIST_REQUEST = "REMOVE_WISHLIST_REQUEST";
export const REMOVE_WISHLIST_SUCCESS = "REMOVE_WISHLIST_SUCCESS";
export const REMOVE_WISHLIST_FAILURE = "REMOVE_WISHLIST_FAILURE";

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

//for adding product to wishlit
export const addProductWishlistRequest = () => {
    return {
        type: ADD_WISHLIST_REQUEST,

    }
}

export const addProductWishlistSuccess = (payload) => {
    return {
        type: ADD_WISHLIST_SUCCESS,
        payload

    }
}

export const addProductWishlistFailure = (data) => {
    return {
        type: ADD_WISHLIST_FAILURE,
        payload: data,

    }
}

export const addProductWishlist = (product) => (dispatch) => {
    // console.log("product", product)
    axios.post("http://localhost:8080/wishlist",product)
        .then(d => dispatch(addProductWishlistSuccess(d.data)))
        .catch(error => addProductWishlistFailure(error.data))

}


//for fetching wishlist data

export const fetchWishlistRequest = (payload) => {
    return {
        type: FETCH_WISHLIST_REQUEST,
        payload
    }
}

export const fetchWishlistSuccess = (payload) => {
    console.log("action1", payload)
    return {
        type: FETCH_WISHLIST_SUCCESS,
        payload

    }
}

export const fetchWishlistFailure = (payload) => {
    return {
        type: FETCH_WISHLIST_FAILURE,
        payload

    }
}
export const fetchWishlist = (payload) => (dispatch) => {
    dispatch(fetchWishlistRequest())
    axios.get("http://localhost:8080/wishlist").then(d => dispatch(fetchWishlistSuccess(d.data)))
        .then(err => dispatch(fetchWishlistFailure(err.data)))

}

//for removing product from the cart page 


export const delteProductCartRequest = (payload) => {
    return {
        type: REMOVE_PRODUCT_CART_REQUEST,
        payload
    }
}

export const delteProductCartSucess = (payload) => {
    return {
        type: REMOVE_PRODUCT_CART_SUCCESS,
        payload

    }
}

export const delteProductCartFailure = (payload) => {
    return {
        type: REMOVE_PRODUCT_CART_FAILURE,
        payload

    }
}
export const delteProductCart = (id) => (dispatch) => {
    dispatch(delteProductCartRequest())
    axios.delete(`http://localhost:8080/cart/${id}`)
        .then(d => dispatch(delteProductCartSucess()))
        .then(() => dispatch(fetchCart()))
        .catch(error => dispatch(delteProductCartFailure(error.data)))
}

// shifting wishlist product to cart page
export const delteProductWishlistRequest = (payload) => {
    return {
        type: REMOVE_WISHLIST_REQUEST,
        payload
    }
}

export const delteProductWishlistSucess = (payload) => {
    return {
        type: REMOVE_WISHLIST_SUCCESS,
        payload

    }
}

export const delteProductWishlistFailure = (payload) => {
    return {
        type: REMOVE_WISHLIST_FAILURE,
        payload

    }
}
export const delteProductWishlist = (id) => (dispatch) => {
    dispatch(delteProductWishlistRequest())
    axios.delete(`http://localhost:8080/wishlist/${id}`)
        .then(d => dispatch(delteProductWishlistSucess()))
        .then(() => dispatch(fetchWishlist()))
        .catch(error => dispatch(delteProductWishlistFailure(error.data)))
}
