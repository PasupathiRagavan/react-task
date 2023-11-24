import React, { useState } from "react";
import { useSelector } from "react-redux";
import Temperature from "../customchart/Temperature";
import Highlights from "../customchart/Hightlights";
import { Text } from "../base";

const Weather = () => {
    const { weatherData } = useSelector((state) => state.data);
    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-3/6 xl:w-2/5 bg-white p-4">
                {weatherData && (
                    <Temperature
                        stats={{
                            temp: weatherData.current.temp_c,
                            condition: weatherData.current.condition.text,
                            isDay: weatherData.current.is_day,
                            location: weatherData.location.name,
                            time: weatherData.location.localtime
                        }}
                    />
                )}
            </div>
            <div className="w-full lg:w-3/6 xl:w-4/6 grid lg:grid-cols-2 gap-4">
                <Text as="h1" className="text-black text-xl font-bold col-span-2" label="Today's Highlights" />
                {weatherData && (
                    <>
                        <Highlights
                            stats={{
                                title: "Wind Status",
                                value: weatherData.current.wind_mph,
                                unit: "mph",
                                direction: weatherData.current.wind_dir
                            }}
                        />
                        <Highlights
                            stats={{
                                title: "Humidity",
                                value: weatherData.current.humidity,
                                unit: "%"
                            }}
                        />
                        <Highlights
                            stats={{
                                title: "Visibility",
                                value: weatherData.current.vis_miles,
                                unit: "miles"
                            }}
                        />
                        <Highlights
                            stats={{
                                title: "Air Pressure",
                                value: weatherData.current.pressure_mb,
                                unit: "mb"
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Weather;
