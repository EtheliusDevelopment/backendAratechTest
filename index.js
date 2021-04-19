const express = require('express')
const app = express()
const cors = require('cors')
var morgan = require('morgan')



const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json())
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.use('/radar', require('./routes/radar'))

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})


module.exports = app;



