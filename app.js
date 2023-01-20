//imports
const express = require('express');


const app = express();


// Set a static folder
app.use(express.static('public'));
app.set('view engine', 'ejs');


let PORT= null;
// Define the port number
if(!process.env.PORT){
 PORT = 5455;
}
else{
   port = process.env.PORT
}
 //route for the index page
 app.get('/', (req, res)=>{
   res.render('home')
 });

app.listen(PORT, function(){
   console.log(`Server is listening on port ${PORT}`)
})