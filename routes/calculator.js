const express = require('express')
const path = require('path')
const router = express.Router()

// check if number is prime
const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if(n % i === 0) return false; 
    return n > 1;
}

// localhost:3000/calculator
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/calculator.html'))
})

// localhost:3000/calculator/answer
router.get('/answer', (req, res) => {
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

module.exports = router
