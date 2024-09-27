import { Router } from "express";
import { getAllBooks } from "./controllers/books.js";


export const routes = Router()


// all routes for books
routes.get('/books', getAllBooks)
routes.get('/books/:id', (req, res) => {})
routes.post('/books', (req, res) => {})
routes.put('/books/:id', (req, res) => {})
routes.delete('/books/:id', (req, res) => {})

// get id value by doing req.params.id