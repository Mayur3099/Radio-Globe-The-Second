import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";
import { RadioBrowserApi, StationSearchType } from 'radio-browser-api';
// const axios = require('axios');

dotenv.config();
const router = express.Router();

const options = {
    method: 'GET',
    url: 'https://radio-world-75-000-worldwide-fm-radio-stations.p.rapidapi.com/all_radios.php',
    params: {
        limit: '2',
        order: 'ASC',
        page: '1',
        random: 'false'
    },
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_KEY,
        'X-RapidAPI-Host': process.env.RAPID_HOST
    }
};


router.route("/")
    .get((req, res) => {
        res.send("Welcome to my radio api route");
    })
    .post(async (req, res) => {
        const { Limit, extras, Country, gerne } = req.body;

        try {
            const api = new RadioBrowserApi('My Radio App');

            const stations = await api.searchStations({
                language: 'english',
                tag: 'all',
                limit: 100,
            });

            res.json(stations);

            // const response = await axios.request(options);

            // const totalRadios = response.data.total_radios;
            // const stations = response.data.stations;

            // res.json({
            //     totalRadios: totalRadios,
            //     stations: stations,
            // });
        } catch (err) {
            console.log(`Error --> ${err}`);
        }
    });

export default router;