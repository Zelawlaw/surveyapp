const mongoose = require('mongoose');

module.exports = function (){

// Connecting to the Database
//let mongodb_url = 'mongodb://localhost/';
let dbName = process.env.dbName;
let db_user = process.env.db_user;
let db_pass = process.env.db_pass;
let mongodb_url='mongodb+srv://'+db_user+':'+db_pass+'@home-ownership.m1m5aex.mongodb.net/';
console.log(mongodb_url);
let options = {
   maxPoolSize:10,
   family : 4
};

mongoose.connect(mongodb_url + dbName,options)
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
   console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
   console.log(error);
})
}

