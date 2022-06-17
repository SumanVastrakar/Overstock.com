
export const loginActions = {
    LOGIN_REQUEST : "LOGIN_REQUEST",
    LOGIN_SUCCESS : "LOGIN_SUCCESS",
   LOGIN_FAILURE : "LOGIN_FAILURE",

    LOGOUT_REQUEST : "LOGOUT_REQUEST",
    LOGOUT_SUCCESS : "LOGOUT_SUCCESS",
    LOGOUT_FAILURE : "LOGOUT_FAILURE",
}





//action creator

export const loginSuccess = (data, token) => {
  
  return {
       type : loginActions.LOGIN_SUCCESS,
       payload : [data,token]
   }
}
export const loginRequest = () => (
   {
       type : loginActions.LOGIN_REQUEST,

   }
)
export const loginFailure = () => (
   {
       type : loginActions.LOGIN_FAILURE,
     
   }
)


//logout user
export const logoutSuccess = () => {
    console.log("called from action")
    
  return {
       type : loginActions.LOGOUT_SUCCESS,
        
   }
}
export const logoutRequest = () => (
   {
       type : loginActions.LOGOUT_REQUEST,

   }
)
export const logoutFailure = () => (
   {
       type : loginActions.LOGOUT_FAILURE,
     
   }
)