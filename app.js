const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const calculatorRoute = require('./routes/calculator')
const primesRoute = require('./routes/checkprime')

// localhost:3000/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// localhost:3000/calculator
app.use('/calculator', calculatorRoute)

// localhost:3000/checkprimes
app.use('/checkprime', primesRoute)

app.listen(port, () => console.log(`App running and listening on port ${port}!`))
