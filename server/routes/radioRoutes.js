import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const router = express.Router();

router.route("/stations")
    .get((req, res) => {
        res.send("Welcome to my radio api route");
    })
    .post(async (req, res) => {
        let { requestType, requestValue, responseLimit } = req.body;

        requestType = requestType.toLowerCase();
        requestValue = requestValue.toLowerCase();

        try {
            const response = await axios.get(`https://de1.api.radio-browser.info/json/stations/by${requestType}/${requestValue}`, {
                params: {
                    limit: responseLimit
                }
            });
            const stations = response.data;

            res.json({
                stations: stations,
            });
        } catch (err) {
            console.log(`Error --> ${err}`);
        }
    });

router.route("/stations/all")
    .get((req, res) => {
        res.send("Welcome to my all radio stations api route");
    })
    .post(async (req, res) => {
        const { responseLimit } = req.body;

        try {
            const response = await axios.get(`https://de1.api.radio-browser.info/json/stations`, {
                params: {
                    limit: responseLimit
                }
            });
            const stations = response.data;

            res.json({
                stations: stations,
            });
        } catch (err) {
            console.log(`Error --> ${err}`);
        }
    });

router.route("/list")
    .get((req, res) => {
        res.send("Welcome to my radio api get all usable values route");
    })
    .post(async (req, res) => {
        const { requestType, responseLimit } = req.body;

        try {
            const response = await axios.get(`https://de1.api.radio-browser.info/json/${requestType}`, {
                params: {
                    limit: responseLimit
                }
            });
            const items = response.data;

            res.json({
                items: items,
            });
        } catch (err) {
            console.log(`Error --> ${err}`);
        }
    });

export default router;