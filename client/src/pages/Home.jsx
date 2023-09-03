import React, { useEffect, useState, useRef } from 'react';
import Globe from "react-globe.gl";

import { Earth, FilterPopUp, AudioPlayer, SearchBar } from '../components';


const Home = ({ stations, stationFilter, setStationFilter, setStationFilterType, stationFilterType }) => {
    const [showPlayer, setShowPlayer] = useState(false);

    const [points, setPoints] = useState();

    const [selectedStation, setSelectedStation] = useState({
        urlResolved: "https://stream.0nlineradio.com/christmas?ref=radiobrowser"
    });
    const [stationSelected, setStationSeleted] = useState(false);

    const [searchText, setSearchText] = useState("");
    const [search, setSearch] = useState(false);


    useEffect(() => {
        setPoints(stations.map(item => {
            return {
                currentStation: item,
                lat: item.geo_lat,
                lng: item.geo_long,
                size: 5,
                color: "red",
            }
        }));
    }, [stations]);

    const handlePointClick = (e) => {
        setSelectedStation(e.currentStation);
        setStationSeleted(true);
        setShowPlayer(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSearch(true);
        setStationFilter(searchText);
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <>
            <div className='relative overflow-hidden '>

                <div className='absolute bg-white z-10 w-80 h-80 -m-40 -rotate-45'></div>

                <div className='absolute text-5xl px-5 py-2 z-10 bg-black text-transparent bg-clip-text rounded-lg bg-gradient-to-r from-black via-violet-300 to-violet-600'>
                    <h1 className='font-bold'>Choose Amongst these amazing filters</h1>
                </div>

                <FilterPopUp stationFilter={stationFilter} setStationFilter={setStationFilter} setStationFilterType={setStationFilterType} />

                <div className='z-10 absolute w-1/4 mx-auto mt-10 mr-10 right-0'>
                    <SearchBar
                        searchText={searchText}
                        setSearchText={setSearchText}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        setStationFilterType={setStationFilterType}
                        stationFilterType={stationFilterType}
                    />
                </div>

                <div className='flex justify-center z-5'>
                    <Earth
                        points={points}
                        handlePointClick={handlePointClick}
                    />
                </div>

                {
                    showPlayer &&
                    <div className='z-10 absolute -mt-28 w-1/2 rounded-lg mx-auto left-0 right-0'>
                        <AudioPlayer selectedStation={selectedStation} />
                    </div>
                }

            </div>
        </>
    )
}

export default Home
