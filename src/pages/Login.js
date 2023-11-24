import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";

import { Input, Text, Button } from "../components/base";
import natureImage from "../assets/images/nature.png";

import { login } from "../redux/actions/authActions";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const error = useSelector((state) => state.auth.error);

    const [showPassword, setShowPassword] = useState(false);

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const LoginInSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email is not valid")
            .required("Email is Required"),
        password: Yup.string().required("Password is Required")
    });

    const handleLogin = (values) => {
    // Dispatch the LOGIN_SUCCESS action
        dispatch(login(values));

        // Save user data to local storage
        localStorage.setItem(
            "user",
            JSON.stringify({ name: "Jordan Gersh", email: values.email })
        );

        // Navigate to the dashboard after successful login
        navigate("/dashboard");
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="lg:flex items-center h-screen">
            <div className="lg:w-1/2 xl:max-w-screen-sm h-full">
                <div
                    className="flex justify-center flex-col h-full px-12 sm:px-24
                md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl"
                >
                    <Text
                        as="h2"
                        label=" Log in"
                        className="text-center text-4xl text-dark-purple font-extrabold
                    lg:text-left xl:text-5xl"
                    />
                    <div className="mt-12">
                        <Formik
                            initialValues={credentials}
                            onSubmit={(values) => handleLogin(values)}
                            validationSchema={LoginInSchema}
                            enableReinitialize
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                touched,
                                isValid,
                                errors
                            }) => (
                                <form>
                                    {error && (
                                        <Text
                                            as="p"
                                            className="mt-1 leading-6 font-normal text-left text-xs text-red-600"
                                            label={error}
                                        />
                                    )}
                                    <div>
                                        <Text
                                            as="p"
                                            label="Email Address"
                                            className="text-sm font-bold
                                        text-gray-700 tracking-wide"
                                        />
                                        <Input
                                            inputClassName="w-full text-lg py-2 px-3 border-b border-gray-300
                                            focus:outline-none focus:border-dark-purple"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            password
                                            onChange={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                        />
                                        {errors.email && touched.email && (
                                            <Text
                                                as="p"
                                                className="mt-1 leading-6 font-normal text-left text-xs text-red-600"
                                                label={errors.email}
                                            />
                                        )}
                                    </div>
                                    <div className="mt-8">
                                        <Text
                                            as="p"
                                            label="Password"
                                            className="text-sm font-bold
                                        text-gray-700 tracking-wide"
                                        />
                                        <div className="flex items-center relative">
                                            <Input
                                                inputClassName="w-full text-lg py-2 px-3 border-b border-gray-300
                                                focus:outline-none focus:border-dark-purple"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="Enter your password"
                                                value={values.password}
                                                onChange={handleChange("password")}
                                                onBlur={handleBlur("password")}
                                            />
                                            <Button
                                                className="absolute top-1/2 right-3 -translate-y-1/2"
                                                type="button"
                                                onClick={handleTogglePassword}
                                            >
                                                {showPassword ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        id="eye"
                                                        fill="#081A51"
                                                    >
                                                        <path
                                                            d="M18.521 1.478a1 1 0 0 0-1.414 0L1.48 17.107a1 1 0 1 0
                                                        1.414 1.414L18.52 2.892a1 1 0 0 0 0-1.414zM3.108
                                                        13.498l2.56-2.56A4.18
                                                        4.18 0 0 1 5.555 10c0-2.379 1.99-4.309 4.445-4.309.286 0
                                                        .564.032.835.082l1.203-1.202A12.645 12.645 0 0 0 10
                                                        4.401C3.44 4.4 0 9.231 0 10c0 .423 1.057 2.09 3.108
                                                        3.497zm13.787-6.993l-2.562 2.56c.069.302.111.613.111.935
                                                        0 2.379-1.989 4.307-4.444 4.307-.284 0-.56-.032-.829-.081l-1.204
                                                        1.203c.642.104 1.316.17 2.033.17 6.56 0 10-4.833
                                                        10-5.599 0-.424-1.056-2.09-3.105-3.495z"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        id="eyeOne"
                                                        fill="#081A51"
                                                    >
                                                        <g data-name="Layer 2">
                                                            <g data-name="eye">
                                                                <circle cx="12" cy="12" r="1.5" />
                                                                <path
                                                                    d="M21.87
                                                                11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73
                                                                5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4
                                                                6.5 9.89 6.5h.25c5.53-.14
                                                                8.74-5 9.6-6.5a1 1 0 0 0 0-1zm-9.87
                                                                4a3.5 3.5 0 1 1 3.5-3.5
                                                                3.5 3.5 0 0 1-3.5 3.5z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                )}
                                            </Button>
                                        </div>
                                        {errors.password && touched.password && (
                                            <Text
                                                as="p"
                                                className="mt-1 leading-6 font-normal text-left text-xs text-red-600"
                                                label={errors.password}
                                            />
                                        )}
                                    </div>
                                    <div className="mt-10">
                                        <Button
                                            className="bg-dark-purple text-gray-100 p-4 w-full rounded-md text-base
                                            font-bold focus:outline-none focus:shadow-outline
                                            shadow-lg"
                                            onClick={handleSubmit}
                                        >
                      Log In
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <div
                className="hidden lg:flex items-center justify-center bg-dark-purple flex-1 h-screen
                bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${natureImage})` }}
            />
        </div>
    );
};

export default Login;
