import React from 'react';

const FilterPopUp = ({ filters, stationFilter, setStationFilter }) => {
    return (
        <>
            <div className='absolute z-10 mt-20 text-transparent bg-clip-text rounded-lg'>
                <div className='p-5'>
                    <div className="grid grid-cols-2 gap-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black via-rose-600 to-violet-600">
                        {filters.map((filter) => (
                            <span
                                className={`hover:drop-shadow-[0_0px_4px_rgba(0,0,0,1)] hover:text-white cursor-pointer ${stationFilter == filter ? "text-yellow-400" : ""}`}
                                onClick={() => setStationFilter(filter)}
                            >
                                {filter}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterPopUp