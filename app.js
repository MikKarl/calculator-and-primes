const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const calculatorRoute = require('./routes/calculator')
const primesRoute = require('./routes/primes')

// index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.use('/calculator', calculatorRoute)
app.use('/primes', primesRoute)

app.listen(port, () => console.log(`App running and listening on port ${port}!`))
