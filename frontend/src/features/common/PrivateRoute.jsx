import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function PrivateRoute({ children }) {
    const authContext = useAuth();
    if (authContext.loading) {
        return <h1>Loading...</h1>
    } else if (authContext.user) {
        return children;
    }
    return <Navigate to={"/auth"} />
}