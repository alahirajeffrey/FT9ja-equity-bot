const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({

    balance: { type: String, require: true },
    equity: { type: String, require: true },
    market_watch_time: { type: String }
})

module.exports = mongoose.model('Trade', tradeSchema)