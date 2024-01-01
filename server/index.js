const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./src/models/Users')
const dotenv = require('dotenv')
const connectToDatabase = require("./src/database/connect")

dotenv.config() //DEVE SER CHAMADO PRIMEIRO SEMPRE!

connectToDatabase()


const app = express()
app.use(cors())
app.use(express.json())


//Routes from our APP

//Home Route
app.get("/", (req, res) => {
    UserModel.find({})
    .then(users => res.json(users)) //Passamos os usuarios dentro do DB pro nosso FRONTEND
    .catch(err => res.json(err))
})

//Create user Route:
app.post("/createuser", (req, res) => {
    UserModel.create(req.body) //Fazemos a requisicao do BODY na do nosso modelo de user do DB
    .then(users => res.json(users)) //Enviamos para nosso frontend a resposta em JSON
    .catch(err => res.json(err))
})


app.listen(3001 , () => {
    console.log("Server is running")
} )

