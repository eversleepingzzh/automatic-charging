const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(cookieParser())

app.use('/static',express.static(path.join(__dirname, 'public')));
app.use(express.json({limit:'50mb'}));


app.get('/get_empty_car_position', (req, res) => {
  // todo
})


app.get('/get_empty_charge_position', (req, res) => {
  // todo
})


app.get('/get_empty_charge_position', (req, res) => {
  // todo
})



// app.post('/', (req, res) => {
// })

app.listen(3000, () => console.log('app listening on port 3000!'))