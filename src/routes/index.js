import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import MainLayout from "../components/layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Accounts from "../pages/Accounts";
import Schedule from "../pages/Schedule";
import Files from "../pages/Files";
import Settings from "../pages/Setting";
import Analytics from "../pages/Analytics";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";

export const AppRouter = () => (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Login />} />
            <Route
                path="dashboard"
                element={<ProtectedRoute element={<MainLayout />} />}
            >
                <Route index element={<Dashboard />} />
            </Route>
            <Route
                path="accounts"
                element={<ProtectedRoute element={<MainLayout />} />}
            >
                <Route index element={<Accounts />} />
            </Route>
            <Route
                path="schedule"
                element={<ProtectedRoute element={<MainLayout />} />}
            >
                <Route index element={<Schedule />} />
            </Route>
            <Route path="Files" element={<ProtectedRoute element={<MainLayout />} />}>
                <Route index element={<Files />} />
            </Route>
            <Route
                path="setting"
                element={<ProtectedRoute element={<MainLayout />} />}
            >
                <Route index element={<Settings />} />
            </Route>
            <Route
                path="analytics"
                element={<ProtectedRoute element={<MainLayout />} />}
            >
                <Route index element={<Analytics />} />
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Route>
    </Routes>
);
