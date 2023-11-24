// Extract the page name from the pathname
export const getPageName = (pathname) => {
    const pathParts = pathname.split("/"); // Split the pathname into parts
    const lastPart = pathParts[pathParts.length - 1]; // Get the last part of the path

    // You might want to handle special cases or formatting here
    return lastPart;
};

// array format
export const cryptoFormatData = (data) => {
    const formattedData = {
        labels: data?.map((item) => new Date(item[0]).toLocaleDateString()),
        prices: data?.map((item) => item[1])
    };

    return formattedData;
};

// currency format
export function currencyFormat (num) {
    // Check if current_price is an integer
    const isInteger = Number.isInteger(num);

    // Use the isInteger variable to conditionally format the value
    const formattedPrice = isInteger ? num.toFixed(0) : num.toFixed(2);

    return "₹" + formattedPrice?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
