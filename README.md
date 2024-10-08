# Moment 3.2 - Steg 1 - DT207G
## NoSQL-databaser

Beskrivning:
Denna uppgift gick ut på att skapa en REST-webbtjänst som hanterar arbetserfarenheter (work experience).
Applikationen är skapad med Node.js, Express och MongoDB via Mongoose för att hantera lagring av data. Applikationen har stöd för CRUD (Create, Read, Update, Delete) och möjliggör hantering av arbetserfarenheter med fält som companyname, jobtitle, location, startdate, enddate och description. 

### Länk
Webbtjänsten är publicerat via Render: https://moment3-2-steg1-dt207g.onrender.com, https://moment3-2-steg1-dt207g.onrender.com/workexperience

### Installation, databas
Webbtjänsten har skapats med en MongoDB Atlas-databas. Klona ner källkodsfilerna med kommandot: 
```bash
git clone https://github.com/julieandersson/moment3.2_steg1_DT207G.git
```

Kör kommando npm install (förutsatt att Node.js är installerat) för att installera alla nödvändiga beroenden. I server.js-filen hittar du schemat för hur collection ser ut:

|Tabell-namn|Fält  |
|--|--|
|workexperience  | **id** (skapas automatiskt), **companyname** (STRING), **jobtitle** (STRING), **location** (STRING), **startdate** (DATE), **enddate** (DATE), **description** (STRING) |

### Funktionalitet
Denna webbtjänst hanterar följande:
- Hämtar alla arbetserfarenheter (Read)
- Skapar nya arbetserfarenheter (Create)
- Uppdaterar en arbetserfarenhet baserat på angivet ID (Update)
- Radera en arbetserfarenhet baserat på angivet ID (Delete)

### Användning
Nedan finns beskrivet hur man når webbtjänsten på olika vis:
|Metod  |Ändpunkt               |Beskrivning                                                                        |
|-------|-----------------------|-----------------------------------------------------------------------------------|
|GET    |api/workexperience     |Hämtar alla arbetserfarenheter.                                                    |
|GET    |api/workexperience/:id |Hämtar specifik arbetserfarenhet med angivet ID.                                              |
|POST   |api/workexperience     |Lagrar/lägger till en ny arbetserfarenhet.
|PUT    |api/workexperience/:id |Uppdaterar en befintligt arbetserfarenhet med ett specifikt angivet ID. |
|DELETE |api/workexperience/:id |Raderar en arbetserfarenhet med ett specifikt angivet id.      

Exempel på svar:
```bash
  {
    "_id": "66faf005e356757ee6d3373c",
    "companyname": "Tech Solutions",
    "jobtitle": "Systemanalytiker",
    "location": "Göteborg",
    "startdate": "2021-06-01T00:00:00.000Z",
    "enddate": "2022-12-31T00:00:00.000Z",
    "description": "Analys av systemkrav och designlösningar"
  }
```
### Utvecklingsmiljö:
Verktyg och tekniker:
- Node.js: Server-side JavaScript
- Exrepss: Ramverk för att skapa och hantera HTTP-server och API
- MongoDB Atlas: NoSQL-databas som används för att lagra arbetserfarenheter
- Mongoose: ODM bibliotek för MongoDB och Node.js som används för att hantera databasscheman och operationer. 
- Nodemon: Används under utveckling för att automatiskt starta om servern vid kodändringar.
- dotenv: Hantering av miljövariabler, såsom databasanslutningar, via .env-fil.
- Thunderclient/Postman: Verktyg för att testa API-anrop under utvecklingen av arbetet.

### Skapad av:
- Julie Andersson
- Webbutvecklingsprogrammet på Mittuniversitetet i Sundsvall
- Moment 3.2 - steg 1 i kursen DT207G Backendbaserad Webbutveckling