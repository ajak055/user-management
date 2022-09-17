const { urlencoded } = require("express")
require("dotenv").config({path:"./.env"});
const express = require("express")
const bunyan = require("bunyan")
const userBusiness = require("../business")
const {successResponse, failureResponse} = require("../utils/expressResponse")

const app = express()
app.use(express.json())
app.use(urlencoded({extended: false}))

const baseUrl = "/v1/user"
const logger = bunyan.createLogger({name: process.env.MODULE});


async function createUser(request, response){
    try{
        logger.info("createUser function invoked")
        const result = userBusiness.createUser(request, logger);
        successResponse(response, result, 201, logger);
    }catch(error){
        logger.error("API error: error in createUser API "+error.message)
        failureResponse(response, error.message, error.code, logger)
    }
}


//routes

app.post(`${baseUrl}`, createUser)

app.get(`${baseUrl}`, createUser)

app.put(`${baseUrl}`, createUser)

app.delete(`${baseUrl}`, createUser)


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })