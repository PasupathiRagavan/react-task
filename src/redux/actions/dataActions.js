import axios from "axios";
import {
    WEATHER_API_KEY,
    WEATHER_API_URL,
    CRYPTO_URL,
    CRYPTO_PRICES_URL,
    COINS_LIST_API,
    TRENDING_API
} from "../../utils/constants";
import { cryptoFormatData } from "../../utils/helpers";

export const fetchData = () => async (dispatch) => {
    try {
        const cryptoData = await axios.get(CRYPTO_PRICES_URL, {
            params: {
                vs_currency: "inr",
                days: 15, // adjust the number of days as needed
                interval: "daily" // you can use 'hourly', 'daily', etc.
            }
        });

        const cryptoCoinsData = await axios.get(`${CRYPTO_URL}${COINS_LIST_API}`, {
            params: {
                vs_currency: "inr", // currency
                order: "market_cap_desc", // order
                per_page: 4 // no of data per page
            }
        });

        const cryptoTrendingData = await axios.get(`${CRYPTO_URL}${TRENDING_API}`);

        const weatherData = await axios.get(WEATHER_API_URL, {
            params: {
                q: "Chennai",
                key: WEATHER_API_KEY,
                aqi: "no"
            }
        });

        // Extract relevant data from the response
        const { prices, market_caps, total_volumes } = cryptoData.data;
        const coins = cryptoCoinsData?.data;
        const trendingCoins = cryptoTrendingData.data;

        const formattedPriceData = cryptoFormatData(prices);
        const formattedMarketData = cryptoFormatData(market_caps);
        const formattedTotalData = cryptoFormatData(total_volumes);

        dispatch({
            type: "FETCH_DATA_SUCCESS",
            payload: {
                cryptoData: {
                    cryptoPricesData: formattedPriceData,
                    cryptoMarketData: formattedMarketData,
                    cryptoTotalData: formattedTotalData
                },
                cryptoCoins: coins,
                trendingData: trendingCoins.coins,
                weatherData: weatherData.data
            }
        });
    } catch (error) {
        dispatch({
            type: "FETCH_DATA_FAILURE",
            payload: error
        });
    }
};
