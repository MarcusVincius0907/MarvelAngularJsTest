const express = require('express');
const cors = require("cors");
const app = express()
const PORT = process.env.PORT || 3000;

const fs = require("fs");

app.use(express.static(__dirname));


app.get('/', (req, res) => {
  
  fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
     
    res.write(html) 
    res.end() 
});
})

app.post('/login', (req, res) => {
  res.json({status: 'OK', token: '123'})
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})


//parar poder receber arquivos json
app.use(express.json());

//habilitando cors
app.use(cors());







