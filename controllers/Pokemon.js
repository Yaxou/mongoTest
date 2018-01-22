const PokemonModel = require('../models/Pokemon')

/*
    GET /api/pokemons
    Renvoie la liste de tous les pokemons en base
*/
exports.findAll = (request, response) => {
    PokemonModel.find().then(pokemonsList => {
        response.json(pokemonsList)
    })
    .catch(err => response.status(500).send(err.message))
}

exports.findOne = (request, response) => {
    PokemonModel.findById(request.params.id).then(pokemon =>{
      response.json(pokemon)
    })

    .catch(err => response.status(500).send(err.message))
}
