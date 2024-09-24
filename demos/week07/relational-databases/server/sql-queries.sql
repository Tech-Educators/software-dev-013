-- These are our tables

CREATE TABLE books (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL, 
  author VARCHAR(255) NOT NULL,
  description TEXT,
  quote VARCHAR(255),
  released DATE,
  img_url TEXT
)


CREATE TABLE genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(100) NOT NULL,
  description VARCHAR(255)
)

-- many to many relationship from books to genres, so we have a junction table.

CREATE TABLE book_genres (
  book_id INT NOT NULL,
  genre_id INT NOt NULL,
  FOREIGN KEY (book_id) references books (id),
  FOREIGN KEY (genre_id) REFERENCES genres (id)
)


-- INNER JOIN (only matching records between tables)

SELECT books.title, genres.name
FROM books
INNER JOIN book_genres ON books.id = book_genres.book_id
INNER JOIN genres ON book_genres.genre_id = genres.id;


-- FULL JOIN

SELECT books.title, genres.name
FROM books
FULL JOIN book_genres ON books.id = book_genres.book_id
FULL JOIN genres ON book_genres.genre_id = genres.id;