import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Image } from "../base";

const Trending = () => {
    const { trendingData } = useSelector((state) => state.data);

    return (
        <div className="bg-white p-4 w-full lg:w-3/6 xl:w-2/5">
            <div className="flex flex-col">
                <div className="mb-3">
                    <Text as="h4" className="text-xl font-bold m-0" label="Trending" />
                </div>
                <div className="">
                    <ul className="flex flex-col">
                        {
                            trendingData && trendingData?.slice(0, 5).map((item) => {
                                const coinItem = item.item;
                                return (<li key={coinItem.id} className="py-3 border-b
                                border-gray-200 flex px-0 justify-between
                                    items-center">
                                    <Image src={coinItem.small} className="w-10 h-10 mr-2" />
                                    <div className="flex justify-between items-center w-full">
                                        <Text as="p" className="mb-0 text-black text-base font-bold"
                                            label={coinItem.name} />
                                        <Text as="span" className="text-sm mb-0 text-black font-bold"
                                            label={coinItem.symbol} />
                                    </div>
                                </li>);
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Trending;
