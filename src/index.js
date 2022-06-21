const playwright = require('playwright')
const connectDatabase = require('./dbConnection')
const TradeSchema = require('./models')
require('dotenv').config({path: require('find-config')('.env')})
const {errorLogger, infoLogger} = require('./logger')

// get current time
const date = new Date()
const currentTime = date.toTimeString()

// load environmental variables
const PASSWORD = process.env.PASSWORD
const LOGIN = process.env.LOGIN
const SERVER = process.env.SERVER

// set interval to 5 minutes
let INTERVAL = 300000

// connect to database
connectDatabase()

const scrapeData = async ()=>{

    console.log("app running")

    try{

        const browser = await playwright.firefox.launch({headless:true})
        const context = await browser.newContext()
        const page = await context.newPage()

        // go to website
        const result = await page.goto("https://trade.mql5.com/trade?servers=")

        //login to metatrader account
        await page.type('#login', LOGIN)
        await page.type('#password', PASSWORD)
        await page.fill('#server', SERVER)
        await page.click('body > div:nth-child(14) > div > div.b > button:nth-child(18)')

        // scrape equity and balance data
        const data = await page.innerText("body > div.page-block.frame.bottom > div:nth-child(3) > table > tbody > tr > td.iconed > div > span")
        
        // get values of balance, equity and market watch time
        balance = data.slice(9,17)
        equity = data.slice(31,39)

        // setup query
        const post = {balance: balance, equity: equity, market_watch_time: currentTime}

        // save to database
        const newTrade = new TradeSchema(post)
        const savedTrade = newTrade.save()

        infoLogger.info("Trade data saved")

        // close browser
        await browser.close()

    }catch(error){
        errorLogger.error(error)
    }
    
}

// run bot for first time
scrapeData()

// run fucntion after intervals of 5 minutes
setInterval(scrapeData, INTERVAL)