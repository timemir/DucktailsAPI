const express = require("express");
const cors = require("cors");
const {
    getCharactersController,
    postCharactersController,
    deleteCharactersController,
    putCharactersController,
    getAllCharactersController,
} = require("./controller/characters");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
// add json middleware
app.use(express.json());

//---------------------------------------------------
// Endpoints
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});
// Reads all characters
app.get("/characters", getAllCharactersController);
// Reads a single character
app.get("/characters/:name", getCharactersController);
// Updates a character
app.put("/characters/:name", putCharactersController);
// Deletes a character
app.delete("/characters/:name", deleteCharactersController);

// Creates a new character
app.post("/characters", postCharactersController);

//---------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
