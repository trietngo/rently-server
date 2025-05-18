import cors from "cors"

import express from "express"

const PORT = process.env.PORT || 3001;

import predictController from "./controllers/predict-controller.js";

const app = express();

app.use(
    cors({
        credentials: true,
        origin: "https://rentlybytriet.netlify.app",
    })
); // configure cors right after instantiating express

// MODEL



app.use(express.json()); // Parse JSON from HTTP request body

app.get("/", (req, res) => {
    res.send("Hello World Server Main");
})

app.get("/api", (req, res) => {
    res.send("Hello World Server 1243");
})

predictController(app)

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});