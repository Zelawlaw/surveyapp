//imports

const express = require('express');
const router = require('./routes/index');
const  dbConnect  = require('./config/database');

const app = express();


// Set a static folder
app.use(express.static('public'));
app.set('view engine', 'ejs');

//db connection
dbConnect();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({
   extended: true
 }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//import route
app.use('/',router);



let PORT= null;
// Define the port number
if(!process.env.PORT){
 PORT = 5455;
}
else{
   PORT = process.env.PORT
}
 //route for the index page
 app.get('/', (req, res)=>{
   res.render('home')
 });

app.listen(PORT, function(){
   console.log(`Server is listening on port ${PORT}`)
})