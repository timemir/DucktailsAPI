const charDB = require("../db/characters.js");

function getAllCharactersController(req, res) {
    res.json(charDB);
}

function getCharactersController(req, res) {
    const characterName = req.params.name.toLowerCase();
    if (charDB[characterName]) {
        res.json(charDB[characterName]);
    } else {
        res.json(charDB.unknown);
    }
}

function postCharactersController(req, res) {
    const newCharacter = req.body;
    charDB[newCharacter.firstName.toLowerCase()] = newCharacter;
    res.json(newCharacter);
}

function putCharactersController(req, res) {
    const characterName = req.params.name.toLowerCase();
    const updatedCharacter = req.body;
    charDB[characterName] = updatedCharacter;
    res.json(updatedCharacter);
}

function deleteCharactersController(req, res) {
    const characterName = req.params.name.toLowerCase();
    delete charDB[characterName];
    res.json(charDB);
}

module.exports = {
    getAllCharactersController,
    getCharactersController,
    postCharactersController,
    putCharactersController,
    deleteCharactersController,
};
