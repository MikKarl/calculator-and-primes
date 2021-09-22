# Calculator & Primes

Simple app that can calculate numbers and shows if that number is prime number.

---

Created with [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/).

Front end solution is kept intentionally simple, just so user can test application.

---

## Install and run introductions

- install [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/)
- clone project: 
```
git clone https://github.com/<user>/<repo-name>.git
```
- navigate to project folder
- install dependencies
```
npm install
```
- run project 
```
node app.js
```
- if everything work as intended you should see message in the terminal
```
App running and listening on port 3000!
```
- navigate to http://localhost:3000/ and use the app

---

## API endpoints

```
/
/calculator
/calculator/answer
/primes
/primes/isPrime
```

## further development

It might be good idea to move routes from app.js file to their indifigual .js files just to keep app.js file cleaner. Use express.Router()

Implement so that application only reseves postitive numbers. at this point inplemented in front end