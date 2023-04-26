import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth";

const PrivateRoute = ({ children }) => {
    const isAuthenticaded = isAuthenticated();

    if (!isAuthenticaded) {
        return <Navigate to="/landing" replace />;
    }

    return children;
};

export default PrivateRoute;