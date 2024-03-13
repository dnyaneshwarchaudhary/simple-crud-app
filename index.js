const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/product.model.js")
const productRoute = require("./routes/product.route.js")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//middleware
app.use('/api/products', productRoute);

app.get('/',(req,res) => {
    res.send("Hello from Node API Server, this is danny")
});


mongoose.connect('mongodb+srv://dnyaneshwarworkin:Danny%402001@backenddb.ce9jmgf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected! to database');
    app.listen(3000,()=>{
        console.log("Server is running on Port 3000")
    })
  })
  .catch(() =>
    console.log("Database Connection Failed")  
  )


