const initialState = {
    cryptoData: null,
    weatherData: null,
    cryptoCoins: null,
    trendingData: null,
    error: null
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                cryptoData: action.payload.cryptoData,
                weatherData: action.payload.weatherData,
                cryptoCoins: action.payload.cryptoCoins,
                trendingData: action.payload.trendingData,
                error: null
            };
        case "FETCH_DATA_FAILURE":
            return {
                ...state,
                cryptoData: null,
                weatherData: null,
                cryptoCoins: null,
                trendingData: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default dataReducer;
