import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from "chart.js";


import { fetchData } from "../redux/actions/dataActions";

import Stats from "../components/customchart/Stats";

import Weather from "../components/customchart/Weather";
import Trending from "../components/customchart/Trending";
import LineChart from "../components/customchart/LineChart";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const Dashboard = () => {
    const dispatch = useDispatch();
    const { cryptoData, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (error) {
        return <div>Error fetching data</div>;
    }

    return (
        <div className="">
            <Stats />
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <LineChart cryptoData={cryptoData} />
                <Trending />
            </div>
            <div className="">
                <Weather />
            </div>
        </div>
    );
};

export default Dashboard;
