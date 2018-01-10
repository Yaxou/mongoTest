require('colors'); 
const helmet = require('helmet') 
const morgan = require('morgan') 
const express = require('express') 
const MongoClient = require('mongodb').MongoClient 
 
const app = express() 
let db = null; 
 
MongoClient.connect('mongodb://localhost:27017', (err, client) => { 
 
    db = client.db('pokemons') 
 
    app.use(helmet()) 
    app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev')) 
 
    app.get('/api/pokemons', (request, response) => { 
        db.collection('pokemons').find({}).toArray((err, pokemons) => { 
            response.json(pokemons) 
        }) 
    }) 
 
    app.listen(9000, () => console.log(`L'application écoute sur le port 9000`.black.bgGreen)) 
}) 
 