import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";

import { images } from "../../assets";
import { useLocation } from "react-router-dom";
import { Text, Image, Link } from "../base";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
    // Dispatch the logout action
        dispatch(logout());

        // Remove user data from local storage
        localStorage.removeItem("user");

        // Navigate to the login page
        navigate("/");
    };

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: images.ChartFill, href: "/dashboard" },
        { title: "Accounts", src: images.User, href: "/accounts" },
        { title: "Schedule ", src: images.Calendar, href: "/schedule" },
        { title: "Analytics", src: images.Chart, href: "/analytics" },
        { title: "Files ", src: images.Folder, href: "/files" },
        { title: "Setting", src: images.Setting, href: "/setting" },
        {
            title: "Logout",
            src: images.Logout,
            href: "",
            gap: true,
            onClick: handleLogout
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.matchMedia("(max-width: 1024px)").matches;
            setOpen(!isMobile);
        };

        // Initial check on component mount
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // The empty dependency array means this effect runs only once, similar to componentDidMount


    return (
        <div
            className={` ${
                open ? "w-72" : "w-20 "
            } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
        >
            <Image
                src={images.Control}
                className={`absolute cursor-pointer -right-3 z-[2] top-9 w-7 border-dark-purple
        border-2 rounded-full hidden lg:block ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
                <Image
                    src={images.Logo}
                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                />
                <Text
                    as="h1"
                    label="React Task"
                    className={`text-white origin-left font-extrabold text-xl duration-200 ${
                        !open && "scale-0"
                    }`}
                />
            </div>
            <div className="flex gap-x-4 mt-9 items-center">
                <Image
                    src={images.Profile}
                    className={`cursor-pointer  duration-500 ${
                        open && "rotate-[360deg]"
                    } ${open ? "w-16 h-16" : "w-10 h-10 "}`}
                />
                <div className="">
                    <Text
                        as="h1"
                        label={user && user.name}
                        className={`text-white origin-left font-bold text-lg duration-200 
                    ${!open && "scale-0 hidden"}`}
                    />
                    <Text
                        as="p"
                        label={user && user.email}
                        className={`m-0 text-white font-normal text-xs ${
                            !open && "hidden"
                        }`}
                    />
                </div>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) =>
                    index === Menus.length - 1 ? (
                        <li key={index}>
                            <Link
                                onClick={handleLogout}
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white
                            text-gray-300 text-sm items-center gap-x-4 ${
                        Menu.gap ? "mt-9" : "mt-2"
                        }`}
                            >
                                <Image src={Menu.src} />
                                <Text
                                    as="span"
                                    label={Menu.title}
                                    className={`${!open && "hidden"} origin-left duration-200`}
                                />
                            </Link>
                        </li>
                    ) : (
                        <li key={index}>
                            <Link
                                href={`/#${Menu.href}`}
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white
                        text-gray-300 text-sm items-center gap-x-4 ${
                        Menu.gap ? "mt-9" : "mt-2"
                        }
                    ${location.pathname === Menu.href ? "bg-light-white" : ""}`}
                            >
                                <Image src={Menu.src} />
                                <Text
                                    as="span"
                                    label={Menu.title}
                                    className={`${!open && "hidden"} origin-left duration-200`}
                                />
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
