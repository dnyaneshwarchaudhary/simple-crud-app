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



app.get('/api/products/:id',async (req,res)=> {

    try{
      const {id} = req.params;
      const product = await Product.findById(id)
      res.status(200).json(product);
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
})

app.put('/api/products/:id',async (req,res)=> {

  try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body)
    res.status(200).json(product);
}
catch(error){
  res.status(500).json({message: error.message});
}
})

app.post('/api/products',async (req,res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
});

app.delete('/api/products/:id', async (req,res) => {
  try{

    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product){
      return res.status(404).json({message:"Product not found"})
    }
    res.status(200).json({message: "Product Deleted Successfully"});
}
catch(error){
  res.status(500).json({message: error.message});
}
})

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


