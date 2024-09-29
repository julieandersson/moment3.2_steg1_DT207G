const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Anslut till Mongodb
mongoose.connect("mongodb://localhost:27017/DT207G").then(() => {
    console.log("Ansluten till MongoDB");
}).catch((error) => {
    console.log("Fel vid anslutning av databasen: " + error);
})

// Routes
app.get("/api", async (req, res) => {
    res.json({message: "Välkommen till mitt API"});
});

app.listen(port, () => {
    console.log("Server startad på port: " + port);
});