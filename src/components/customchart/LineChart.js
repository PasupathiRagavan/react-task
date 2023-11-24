import React from 'react';
import { Line } from "react-chartjs-2";

const LineChart = ({ cryptoData }) => {
    return (
        <div className="w-full lg:w-3/6 xl:w-4/6 bg-white p-4">
            <div className="mb-3">
                <h4 className="text-xl font-bold m-0">15 Days Price Chart</h4>
            </div>
            {cryptoData && (
                <Line
                    data={{
                        labels: cryptoData?.cryptoPricesData?.labels, // Define your labels based on the cryptoData structure
                        datasets: [
                            {
                                fill: true,
                                label: "Price",
                                data: cryptoData?.cryptoPricesData?.prices, // Define your prices based on the cryptoData structure
                                borderColor: "rgba(8, 26, 81, 1)",
                                backgroundColor: "rgba(8, 26, 81, 0.4)"
                            }
                        ]
                    }}
                    options={{
                        responsive: true,
                        scales: {
                            x: {
                                type: "category",
                                title: {
                                    display: true,
                                    text: "DATE"
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "PRICE (INR)"
                                }
                            }
                        }
                    }}
                />
            )}
        </div>
    );
};

export default LineChart;
