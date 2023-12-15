import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import FullLoader from "./Fullloader";

export default function PrivateRoute({ children }) {
  const auth = useAuth();
  const loading = auth.status === "loading";
  const location = useLocation();
  return loading ? (
    <FullLoader />
  ) : !auth.user ? (
    <Navigate to={"/auth"} state={{ from: location }} />
  ) : (
    children
  );
}
