// authActions.js

import { EMAIL, PASSWORD, USERNAME } from "../../utils/constants";

export const login = (userCredentials) => {
    return (dispatch) => {
        // Simulate authentication
        if (
            userCredentials.email === EMAIL &&
      userCredentials.password === PASSWORD
        ) {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { name: USERNAME, email: userCredentials.email }
            });
        } else {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: "Invalid username or password"
            });
        }
    };
};

export const logout = () => {
    return { type: "LOGOUT" };
};
