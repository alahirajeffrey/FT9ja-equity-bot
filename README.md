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

## Author
[Alahira Jeffrey]((https://github.com/alahirajeffrey))

## LINCENSE
This project is available for use under the MIT License.

## Link to deployed app