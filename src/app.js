const express = require('express')
const Cliente = require("./model/Cliente");
const path = require("path");

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const lstTestes = [
  {
    name: 'teste1',
    data: new Date()
  }
]

app.get('/',function(req,res) {
  res.render('index', {lstTestes: lstTestes, teste2:'Luiz'});
});


app.listen(process.env.PORT || 4100);
