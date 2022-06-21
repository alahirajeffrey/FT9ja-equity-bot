const mongoose = require('mongoose')
require('dotenv').config({path: require('find-config')('.env')})
const {infoLogger, errorLogger} = require('./logger')

const connectDatabase = () => {

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            infoLogger.info('Database connected...')
        }).catch((err) => {
            errorLogger.error(err.message)
        })
}

module.exports = connectDatabase