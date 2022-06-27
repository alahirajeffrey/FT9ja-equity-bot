# FT9ja-equity-bot
Simple bot that logs in every 5 minutes and scapes the Equity, Balance and Market Watch Time on `https://trade.mql5.com/trade?servers=.`

## Local Requirements
- [Nodejs](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Mongodb](https://www.mongodb.com/try/download/community) is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents. Documents consist of key-value pairs which are the basic unit of data in MongoDB. Collections contain sets of documents and function which is the equivalent of relational database tables. 

## Dependencies
- dotenv
- find-config
- mongoose
- playwright
- winston

## How to setup loaclly 
 Ensure you have nodejs, git, mongodb and postman installed locally.
- clone this repository using `git clone https://github.com/alahirajeffrey/FT9ja-equity-bot.git`
- Navigate to project folder and install dependencies using `npm install`
- Create .env file and add environment variables using .env.sample as a guide
- Open terminal and type `npm start` to start server in development mode

## Code Info
The code for this project can be found in the src folder
- [dbConnection.js](https://github.com/alahirajeffrey/FT9ja-equity-bot/blob/main/src/dbConnection.js) contains the script to connnect the app to a databse
- [index.js](https://github.com/alahirajeffrey/FT9ja-equity-bot/blob/main/src/index.js) contains the equity bot that scrapes the information
- [logger.js](https://github.com/alahirajeffrey/FT9ja-equity-bot/blob/main/src/logger.js) helps the bot log information to the logs folder
- [models.js](https://github.com/alahirajeffrey/FT9ja-equity-bot/blob/main/src/models.js) contains the mongodb model
- [server.js](https://github.com/alahirajeffrey/FT9ja-equity-bot/blob/main/src/models.js) contains the server that serves the react frontend app the required information 


## Author
[Alahira Jeffrey]((https://github.com/alahirajeffrey))

## LINCENSE
This project is available for use under the MIT License.

## Link to deployed app
`https://equity-bot-app.herokuapp.com/trades/:id`

**NB** The :id params specify the number of results you would like
