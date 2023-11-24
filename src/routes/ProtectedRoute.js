// ProtectedRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../redux/selectors/authSelectors";

const ProtectedRoute = ({ element }) => {
    const user = useSelector(selectUser);

    if (user) {
        return element;
    } else {
        return <Navigate to="/" />;
    }
};

export default ProtectedRoute;
