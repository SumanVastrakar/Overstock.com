
export const loginActions = {
    LOGIN_REQUEST : "LOGIN_REQUEST",
    LOGIN_SUCCESS : "LOGIN_SUCCESS",
   LOGIN_FAILURE : "LOGIN_FAILURE",
}





//action creator

export const loginSuccess = (data, token) => {
    console.log(data, token, "------from action.js page")
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