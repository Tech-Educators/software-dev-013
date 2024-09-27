// import {Router} from "express"
import { Router } from "express"
import { app } from "./server.js"
import { postBook } from "./controllers/books.js"


export const router = Router()

export const five = 5

router.get('/', (r, res) => {res.send('Hello')})
// books 

router.get('/books', (req, res) => {console.log('get request gotten'); res.json('hello')})
router.post('/books', postBook)
router.delete('/books', () => {})
router.put('/books', () => {})


// can use an array of callback functions to handle a request. 