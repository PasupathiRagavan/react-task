import React from 'react';
import { Text, Link } from "../components/base";

const NotFound = () => {
    return (
        <div className="flex items-center h-full p-16 bg-light-white">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <Text as="h2" className="mb-8 font-extrabold text-9xl text-dark-purple">
                        <Text as="span" className="sr-only">Error</Text>404
                    </Text>
                    <Text as="p" className="text-2xl font-semibold md:text-3xl">
                        Sorry, we couldn't find this page.</Text>
                    <Text as="p" className="mt-4 mb-8 text-gray-400">
                        But don't worry, you can find plenty of other things on our homepage.</Text>
                    <Link href="/dashboard" className="px-8 py-3 font-semibold rounded
                    bg-dark-purple text-white">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
