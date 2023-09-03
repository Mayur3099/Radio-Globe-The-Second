import React from 'react'

const FilterTypePopUp = ({ logo, filterType, setStationFilterType }) => {
    return (
        <div className="relative my-2">
            <div className='flex items-center w-full py-1 px-4 appearance-none bg-transparent text-sm text-gray-900 bg-opacity-0 rounded-lg border hover:ring-blue-500 hover:border-blue-500 dark:bg-opacity-0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <div className="flex items-center mx-2">
                    <img
                        className='w-8'
                        src={logo} alt="" />
                </div>
                <button
                    className="flex items-center w-full pt-1 pb-2 px-4 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-opacity-0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onClick={() => setStationFilterType(() => {
                        console.log(filterType);

                        if (filterType === "countries") {
                            return "country";
                        }

                        if (filterType === "tags") {
                            return "tag";
                        }

                        console.log("Now type should be language");
                        return filterType;
                    })}
                >
                    Search by {filterType}
                </button>
            </div>
        </div >
    )
}

export default FilterTypePopUp