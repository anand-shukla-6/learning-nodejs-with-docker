const express = require('express');
const bodyParser = require('body-parser');
const {userRoutes} = require('./routes/userRoutes');
const app= express();
const port = 3000;


// Add middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


console.log("App is running !!");

app.use("/api",userRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});