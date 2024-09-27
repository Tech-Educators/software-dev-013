import { Router } from "express";
import { getBooks, getIndividaulBook } from "./controllers/books.js";

// books

export const routes = Router();

routes.get("/books", getBooks);
routes.get("/books/:id", getIndividaulBook);
routes.post("/books", (req, res) => {});
routes.delete("/books/:id", (req, res) => {});
routes.put("/books/:id", (req, res) => {});
