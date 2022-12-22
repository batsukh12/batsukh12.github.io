const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const knex = require("knex");
const app = express();
const port = 3000;
let intialPath = path.join(__dirname, "");
app.use(bodyParser.json());
app.use(express.static(intialPath));
    app.get('/', (req, res) => {
res.sendFile(path.join(intialPath, "index.html"))
})
app.get('/cat=drinks', (req, res) => {
    res.sendFile(path.join(intialPath, "drinks.html"))
 })
 app.get('/cat=breads', (req, res) => {
    res.sendFile(path.join(intialPath, "breads.html"))
 })
 app.get('/cat=cakes', (req, res) => {
    res.sendFile(path.join(intialPath, "buteegdehuun.html"))
 })
//l="https://my.com/products?cat=drinks"
//color = req.url.split("/")[1].split("&")[0].split("=")[1];
app.listen(port, () => {
console.log(`Server is listening at http: //localhost:port`)
})