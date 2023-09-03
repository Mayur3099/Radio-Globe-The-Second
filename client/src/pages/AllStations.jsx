import React from 'react';

import { RadioCard } from '../components';
import { Link } from 'react-router-dom';

const AllStations = ({ stations }) => {
    return (
        <div className='bg-gradient-to-b from-black via-teal-600 to-black'>
            <h1 className='flex justify-center pt-10 pb-8 text-5xl text-white font-bold'>Available Stations</h1>

            <div className="grid grid-cols-4">
                {stations &&
                    stations.map((station, index) => {
                        return (
                            <RadioCard
                                key={index}
                                station={station}
                            />
                        );
                    })}
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to='/' class="hover:underline hover:cursor-pointer hover:text-teal-600">RadioEarth</Link>. All Rights Reserved.</span>
        </div>
    )
}

export default AllStations