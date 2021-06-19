const express = require("express");
const app = express();
const router = require("./router");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

app.use(helmet());
app.use(cors());
app.use(express.static("public"));

app.use("/api", router);

// parse incoming traditional HTML form submits
app.use(express.urlencoded({ extended: false }));

// parse incoming JSON payloads
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "https://localhost:4000");
    next();
});

// Port Environment variable
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
