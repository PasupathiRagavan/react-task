import React from "react";
import { Text } from "../base";

const Highlights = ({ stats }) => {
    return (
        <div className="bg-dark-purple p-4 text-slate-200 flex flex-col justify-start items-center ">
            <Text as="h2" className="text-sm mt-2" label={stats.title} />
            <div className="mt-2">
                {" "}
                <Text as="span" className="text-4xl font-bold" label={stats.value} />
                <Text as="span" className="text-2xl" label={stats.unit} />
            </div>
            {stats.direction ? (
                <div className="flex mt-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-slate-200"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27
                            20.876L5.999 12zm0 0h7.5"
                        />
                    </svg>
                    <div className="text-slate-200 ms-2">{stats.direction}</div>
                </div>
            ) : null}

            {stats.title === "Humidity" ? (
                <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4">
                    <div
                        className="bg-sky-600 h-1.5 rounded-full"
                        style={{ width: `${stats.value}%` }}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Highlights;
