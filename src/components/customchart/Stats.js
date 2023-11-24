import React from "react";
import { useSelector } from "react-redux";
import { currencyFormat } from "../../utils/helpers";
import { Text, Image } from "../base";

const Stats = () => {
    const { cryptoCoins, error } = useSelector((state) => state.data);

    return (
        <div className="flex items-center bg-gray-100">
            {!error && (
                <div className="mb-4 w-full">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                        {cryptoCoins &&
                            cryptoCoins.map((coin) => {
                                return (
                                    <div key={coin.id} className="p-5 bg-white rounded shadow-sm">
                                        <div className="text-base text-gray-400 flex items-center gap-2">
                                            <div className="flex items-center justify-center w-5 h-5">
                                                <Image src={coin?.image} />
                                            </div>
                                            {`${coin?.name}(${coin?.symbol})`}
                                        </div>
                                        <div className="flex items-center pt-1">
                                            <div className="text-2xl font-bold text-gray-900">
                                                {currencyFormat(coin?.current_price)}
                                            </div>
                                            <Text as="span"
                                                className={`flex items-center px-2 py-0.5 mx-2 text-sm rounded-full
                                                            ${
                                    coin?.price_change_percentage_24h <
                                                            0 ?
                                        "text-red-600 bg-red-100" :
                                        "text-green-600 bg-green-100"
                                    }`}
                                            >
                                                {coin?.price_change_percentage_24h > 0 ? (
                                                    <svg
                                                        className="w-4 h-4"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M18 15L12 9L6 15"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        className="w-4 h-4"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6 9L12 15L18 9"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                )}
                                                <span>{`${coin?.price_change_percentage_24h?.toFixed(
                                                    1
                                                )}%`}</span>
                                            </Text>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stats;
