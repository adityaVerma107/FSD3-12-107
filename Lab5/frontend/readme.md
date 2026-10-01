import express from 'express'

const app = express();

app.get("/", (req, res) => {
 //   res.send("Hello express");
 // res.send("<h1>Hello express</h1>");
res.send(`
    <h1>Hello server</h1>
    <h2>I am responding from express framework</h2>
    <h3> The code is minimal and easy to return</h3>
    `);
});

app.get("/about", (req, res) => {
    res.send(`<h2>about page</h2>`);
    });  
    
app.get("/products", (req, res) => {
    const product ={
        id: 1,
        name: "mobile",
        price: 25000,
    };
    res.send(product);
    });    

   

// this line must be last line 👇
app.listen(4444, () => console.log("prg1.js is Running on port 4444"));