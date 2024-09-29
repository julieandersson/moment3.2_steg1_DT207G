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

// Arbetserfarenheter - schema
const workExperienceSchema = new mongoose.Schema({
    companyname: {
        type: String, 
        required: [true, "Du måste ange ett företagsnamn."]
    },
    jobtitle: {
        type: String,
        required: [true, "Du måste ange en jobbtitel."]
    },
    location: {
        type: String,
        required: [true, "Du måste ange en plats."]
    },
    startdate: {
        type: Date,
        required: [true, "Du måste ange ett startdatum."]
    },
    enddate: {
        type: Date,
        required: [true, "Du måste ange ett slutdatum."]
    },
    description: {
        type: String,
        required: [true, "Du måste ange en beskrivning."]
    }
});

// Inkluderar schemat till databas med tabell Workexperience
const Workexperience = mongoose.model("Workexperience", workExperienceSchema);

// Routes
app.get("/api", async (req, res) => {
    res.json({message: "Välkommen till mitt API"});
});

// Get-route - Hämtar arbetserfarenheter
app.get("/workexperience", async (req, res) => {
    try {
        let result = await Workexperience.find({});

        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
})

app.listen(port, () => {
    console.log("Server startad på port: " + port);
});