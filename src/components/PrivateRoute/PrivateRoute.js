import { useNavigate, Navigate } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
export const PrivateRoutes = ({children}) => {
    const nvigate = useNavigate();
    const isAuth = useSelector(store => store.auth.status)
    console.log("isAuth of private Route", isAuth)
    if(!isAuth){
        return <Navigate to="/login" return = {true} />
    }
    else {
        return children;
    }
}