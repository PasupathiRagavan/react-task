import React from "react";
import Sidebar from "../common/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";

const MainLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Header />
            <div
                id="content-body"
                className="flex-grow pb-6 pt-[120px] px-10 bg-gray-100
            h-screen relative overflow-y-auto"
            >
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
