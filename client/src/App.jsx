import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { NavBar } from './components';
import { Home, AllStations, Contact, About } from './pages';
import { stationBank } from './assets';

import axios from "axios";

function App() {
  const [stations, setStations] = useState([]);
  const [responseLimit, setResponseLimit] = useState(1000);
  const [stationFilter, setStationFilter] = useState("all");
  const [stationFilterType, setStationFilterType] = useState("tag");

  useEffect(() => {
    if (stationFilter === "all") {
      getAllStations();
    }
    else {
      getStations();
    }
  }, [stationFilter, stationFilterType]);

  const getAllStations = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/radio/stations/all', {
        responseLimit
      });

      const data = response.data;

      setStations(data.stations);
    } catch (error) {
      console.error(error);
    }
  }

  const getStations = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/radio/stations', {
        requestType: stationFilterType,
        requestValue: stationFilter,
        responseLimit
      });

      const data = response.data;

      setStations(data.stations);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BrowserRouter>
      <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path='/' element={
              <div>
                <Home
                  stations={stations.filter((station, index) => {
                    if (station.geo_lat !== null)
                      return station;
                  })}

                  stationFilter={stationFilter}
                  setStationFilter={setStationFilter}
                  setStationFilterType={setStationFilterType}
                  stationFilterType={stationFilterType}
                />

                <AllStations stations={stations.slice(0, 20)} />
              </div>
            } />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>

        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
