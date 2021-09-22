const express = require('express')
const path = require('path')
const router = express.Router()

// check if number is prime
const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if(n % i === 0) return false; 
    return n > 1;
}

// localhost:3000/primes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/primes.html'))
})

// localhost:3000/primes/isPrime
router.get('/isPrime', (req, res) => {
    const num = parseInt(req.query.num)
    
    if (isPrime(num) == true) {
        res.send( "<h1> " + num + " is prime number" )
    } else {
        res.send( "<h1> " + num + " is not prime number")
    }
    
    console.log('isPrime: ', isPrime(num))
})

module.exports = router
