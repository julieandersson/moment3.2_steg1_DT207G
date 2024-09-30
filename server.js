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
const Workexperience = mongoose.model("Workexperience", workExperienceSchema, "workexperience");

// Routes
app.get("/api", async (req, res) => {
    res.json({message: "Välkommen till mitt API"});
});

// GET-route - Hämtar arbetserfarenheter
app.get("/workexperience", async (req, res) => {
    try {
        let result = await Workexperience.find({});

        // Om det ej finns någon data/arbetserfarenheter, skriv ut felmeddelande
        if (result.length === 0) {
            return res.status(404).json({ message: "Inga arbetserfarenheter hittades." });
        }

        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
})

// POST-route - Lägg till arbetserfarenhet
app.post("/workexperience", async (req, res) => {
    try {
        let result = await Workexperience.create(req.body);

        return res.json({ message: "Arbetserfarenhet har lagts till", result});

    } catch (error) {
        return res.status(400).json(error);
    }
});

// PUT-route - Uppdatera arbetserfarenhet 
app.put("/workexperience/:id", async (req, res) => {
    try {
        // Hämtar job-ID från URL-parameter
        const id = req.params.id;

        // Hämta och uppdatera arbetserfarenhet med angivet ID
        let result = await Workexperience.findByIdAndUpdate(id, req.body, {
            new: true, // Returnerar den uppdaterade arbetserfarenheten istället för den gamla
        });

        // Kontrollerar om arbetserfarenheten med det angivna ID:t hittades
        if (!result) {
            return res.status(404).json({ message: "Ingen arbetserfarenhet kunde hittas med det angivna ID:t." });
        }

        return res.json({ message: "Arbetserfarenhet uppdaterad", result });

    } catch (error) {
        return res.status(400).json({ message: "Fel vid uppdatering", error });
    }
});

app.listen(port, () => {
    console.log("Server startad på port: " + port);
});