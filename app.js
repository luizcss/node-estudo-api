const express = require('express')
const path = require("path");

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const allEvents = [
  {
    name: 'Express',
    link: 'https://expressjs.com/pt-br/'
  },
  {
    name: 'Pug',
    link: 'https://pugjs.org/api/getting-started.html'
  }
]

app.get('/start', (req, res) => res.json(allEvents));

app.post('/post-test', (req, res) => {
  console.log('body:', req.body);
//   let cliente1 = new Cliente(req.body.nome, req.body.idade, req.body.email);
//   res.sendStatus(200).json(cliente1);
//   console.table(cliente1);
});

const lstTestes = [{ name: 'teste1', data: new Date()}]

app.get('/index',(req,res)=> {
  res.render('index', {lstTestes: lstTestes, teste2:'Luiz'});
  console.table('index');
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 8080}`)
  console.log('To shutdown the server: ctrl + c')
})
