import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { NavBar } from './components';
import { Home, AllStations } from './pages';
import { stationBank } from './assets';

import axios from "axios";

function App() {
  const [stations, setStations] = useState(stationBank);
  const [totalStations, setTotalStations] = useState(0);

  // useEffect(() => {
  //   getStations();
  // }, []);

  // const getStations = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/v1/radio', {
  //       data: "Hello",
  //     });

  //     const data = response.data;

  //     setTotalStations(data.totalRadios);
  //     setStations(data.stations);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     console.log(stations);
  //   }
  // }

  return (
    <BrowserRouter>
      <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
        <header>
          <NavBar />
        </header>

        <main className=''>
          <Home stations={stations} />

          <AllStations stations={stations.slice(0, 20)} />
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
