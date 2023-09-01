import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import radioRoutes from "./routes/radioRoutes.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

// Routes
app.use("/api/v1/radio", radioRoutes);

app.get("/", async (req, res) => {
    res.send("Welcome to my Radio Server");
});

const startServer = async () => {
    try {
        ///
    } catch (err) {
        console.log(`Error : ${err}`);
    }

    app.listen(process.env.PORT, () => {
        console.log(`Server has started on http://localhost:${process.env.PORT}`);
    })
};

startServer();