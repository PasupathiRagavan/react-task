import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumbs, Text } from "../base";
import { getPageName } from "../../utils/helpers";

const Header = () => {
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const scrollContainer = document.getElementById("content-body");

        // Function to handle the scroll event
        const handleScroll = () => {
            // Check the scroll position and set the state accordingly
            const scrolled = scrollContainer.scrollTop > 20;
            setIsScrolled(scrolled);
        };

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const currentPageName = getPageName(location.pathname);

    // Add a CSS class based on the scroll state
    const scrollClassName = isScrolled ? "is-fixed" : "";

    return (
        <header className="">
            <div
                className={`fixed top-0 z-[1] w-full py-3 px-10 transition-all
            ease-in-out duration-200 ${scrollClassName}`}
            >
                <Breadcrumbs pageTitle={currentPageName} pageLink={location.pathname} />
                <Text
                    as="h1"
                    label={currentPageName}
                    className="text-3xl font-extrabold capitalize"
                />
            </div>
        </header>
    );
};

export default Header;
