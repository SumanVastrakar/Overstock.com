import { loginActions } from "./action";

const init = {
    user : [],
    loading : false,
    error : false,
    status : false
}
export const loginReducer = (store = init, action) => {
    switch(action.type){
        case loginActions.LOGIN_SUCCESS : { 
            return {
         ...store, user : action.payload, loading : false, status : true
        }}
        case loginActions.LOGIN_REQUEST : { 
            return {
         ...store, loading : true, error : false,
        }}
        case loginActions.LOGIN_FAILURE : { 
            return {
         ...store, loading : false, error : false
        }}
        case loginActions.LOGOUT_SUCCESS : { 
            console.log("Hi i am called")
            return {
         ...store, loading : false, status : false
        }}
        case loginActions.LOGOUT_REQUEST : { 
            return {
         ...store, loading : true, error : false,
        }}
        case loginActions.LOGOUT_FAILURE : { 
            return {
         ...store, loading : false, error : false
        }}
       default : return store
    }
}