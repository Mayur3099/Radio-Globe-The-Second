import React, { useEffect, useState } from 'react';
import { dropDown1, language, tags, countries } from '../assets';
import FilterTypePopUp from './FilterTypePopUp';

const SearchBar = ({ handleSubmit, handleChange, searchText, setSearchText, setStationFilterType, stationFilterType }) => {
    const [openDropDown, setOpenDropDown] = useState(false);

    useEffect(() => {
        setSearchText("");
    }, [stationFilterType]);

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        onChange={handleChange}
                        type="search"
                        id="default-search"

                        className="block w-full p-4 pl-10 appearance-none bg-transparent  text-sm text-gray-900 bg-opacity-0 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-opacity-0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={`Search by ${stationFilterType}`}
                        value={searchText}
                        required
                    ></input>
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-yellow-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-900 dark:hover:bg-yellow-500 dark:focus:ring-blue-800">Search</button>
                </div>

            </form>

            <div className='flex flex-col items-end justify-end px-2 py-1'>
                <button
                    onClick={() => setOpenDropDown(!openDropDown)}
                >
                    <img
                        className={`w-4 ${openDropDown ? "rotate-180" : ""} opacity-70 hover:opacity-100`}
                        src={dropDown1} alt="More Options"
                    />
                </button>

                {
                    openDropDown &&

                    <div>
                        <FilterTypePopUp
                            logo={language}
                            filterType="language"
                            setStationFilterType={setStationFilterType}
                        />

                        <FilterTypePopUp
                            logo={countries}
                            filterType="countries"
                            setStationFilterType={setStationFilterType}
                        />

                        <FilterTypePopUp
                            logo={tags}
                            filterType="tags"
                            setStationFilterType={setStationFilterType}
                        />
                    </div>
                }


            </div>
        </>
    )
}

export default SearchBar