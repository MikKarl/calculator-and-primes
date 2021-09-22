const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// check if number is prime
const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if(n % i === 0) return false; 
    return n > 1;
}


// index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


// calculator
app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/calculator.html'))
})

app.get('/calculator/answer', (req, res) => {
    const num1 = parseInt(req.query.num1)
    const num2 = parseInt(req.query.num2)
    const answer = num1 + num2

    if (isPrime(answer) == true) {
        res.send( "<h1> Answer is " + answer + " and it IS prime number" )
    } else {
        res.send( "<h1> Answer is " + answer + " and it's NOT prime number")
    }

    console.log(num1, '+', num2, '=', answer)
    console.log('isPrime:', isPrime(answer))
})


// primes
app.get('/primes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/primes.html'))
})

app.get('/primes/isPrime', (req, res) => {
    const num = parseInt(req.query.num)
    
    if (isPrime(num) == true) {
        res.send( "<h1> " + num + " is prime number" )
    } else {
        res.send( "<h1> " + num + " is not prime number")
    }
    
    console.log('isPrime: ', isPrime(num))
})

app.listen(port, () => console.log(`App running and listening on port ${port}!`))
