import React from 'react';

import { filters } from '../assets';

const FilterPopUp = ({ stationFilter, setStationFilter, setStationFilterType }) => {
    return (
        <>
            <div className='absolute z-10 mt-20 text-transparent bg-clip-text rounded-lg'>
                <div className='p-5'>
                    <div className="grid grid-cols-2 gap-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black via-rose-600 to-violet-600">
                        {filters.map((filter) => (
                            <span
                                className={`hover:drop-shadow-[0_0px_4px_rgba(255,255,255,1)] cursor-pointer 
                                    ${stationFilter === filter && filter !== "All" ? "text-white drop-shadow-[0_0px_4px_rgba(255,255,255,0.8)]" : ""}   
                                    ${stationFilter === filter && filter === "All" ? "text-white drop-shadow-[0_1   px_4px_rgba(0,0,0,1)]" : ""} 
                                    ${filter === "All" ? "hover:text-red-800" : "hover:text-white"}`
                                }
                                onClick={() => {
                                    setStationFilter(filter)
                                    setStationFilterType("tag")
                                }}
                            >
                                {filter}
                            </span>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default FilterPopUp