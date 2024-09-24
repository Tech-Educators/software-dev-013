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




-- Some test data

INSERT INTO books (title, author, description, quote, released, img_url) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'A novel set in the 1920s about the enigmatic Jay Gatsby and his obsession with Daisy Buchanan.', 'So we beat on, boats against the current, borne back ceaselessly into the past.', '1925-04-10', 'http://example.com/great_gatsby.jpg'),
('To Kill a Mockingbird', 'Harper Lee', 'A novel about racial injustice in the Deep South seen through the eyes of a young girl.', 'You never really understand a person until you consider things from his point of view.', '1960-07-11', 'http://example.com/to_kill_a_mockingbird.jpg'),
('1984', 'George Orwell', 'A dystopian novel about a totalitarian regime that uses surveillance and propaganda to maintain control.', 'War is peace. Freedom is slavery. Ignorance is strength.', '1949-06-08', 'http://example.com/1984.jpg'),
('The Hobbit', 'J.R.R. Tolkien', 'A fantasy novel about the journey of hobbit Bilbo Baggins.', 'In a hole in the ground there lived a hobbit.', '1937-09-21', 'http://example.com/the_hobbit.jpg'),
('The Blind Owl', 'Sadegh Hedayat', 'A psychological novel exploring themes of isolation and madness.', 'Will anyone ever know what it is to die?', '1937-01-01', 'http://example.com/the_blind_owl.jpg'),
('House of Leaves', 'Mark Z. Danielewski', 'A novel that blends horror, satire, and romance through an unconventional narrative.', 'This is not for you.', '2000-03-07', 'http://example.com/house_of_leaves.jpg'),
('Dune Messiah', 'Frank Herbert', 'The second novel in the Dune series, following Paul Atreides as he faces new challenges.', 'Think you of the fact that a deaf person cannot hear. Then, what deafness may we not all possess? What senses do we lack that we cannot see and cannot hear another world all around us?', '1969-10-15', 'http://example.com/dune_messiah.jpg'),
('The Three-Body Problem', 'Liu Cixin', 'A science fiction novel that explores first contact with an alien civilization.', 'The universe is a dark forest.', '2008-01-01', 'http://example.com/the_three_body_problem.jpg'),('The Swallows and Amazons', 'Arthur Ransome', 'A childrens adventure novel about sailing and exploring.', 'Grab a chance and you won’t be sorry for a might-have-been.', '1930-07-21', 'http://example.com/the_swallows_and_amazons.jpg');



INSERT INTO genres (name, description) VALUES
('Fiction', 'Literary works invented by the imagination, such as novels or short stories.'),
('Classics', 'Timeless literature that has remained relevant through the ages.'),
('Dystopian', 'A genre of speculative fiction that explores social and political structures in a dark, nightmare world.'),
('Fantasy', 'A genre of speculative fiction set in a fictional universe, often inspired by real world myth and folklore.'),
('Psychological', 'A genre focusing on the mental and emotional states of its characters.'),
('Horror', 'A genre intended to, or has the capacity to frighten, scare, or disgust.'),
('Science Fiction', 'A genre of speculative fiction that typically deals with imaginative and futuristic concepts.'),
('Adventure', 'A genre of fiction that usually presents danger, or gives the reader a sense of excitement.'),
('Children', 'Literature aimed at children.');


INSERT INTO book_genres (book_id, genre_id) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(3, 3),
(1, 1), -- The Hobbit: Fantasy
(2, 2), -- The Blind Owl: Psychological
(3, 2), -- House of Leaves: Psychological
(3, 3), -- House of Leaves: Horror
(4, 1), -- Dune Messiah: Fantasy
(4, 4), -- Dune Messiah: Science Fiction
(5, 4), -- The Three-Body Problem: Science Fiction
(6, 5), -- The Swallows and Amazons: Adventure
(6, 6); -- The Swallows and Amazons: Children