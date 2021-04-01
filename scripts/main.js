import Book from './book.js';
import Library from './library.js';


let library = new Library;

let book1 = new Book(
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg',
    'Catcher in the Rye', 
    'J.D. Salinger', 
    '277',
    'Little, Brown and Company',
    '1951',
    '0316769177',
    'English',
);

let book2 = new Book(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
    'J. B. Lippincott & Co.',
    '1960',
    '0446310786',
    'English',
);

let book3 = new Book(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
    'J. B. Lippincott & Co.',
    '1960',
    '0446310786',
    'English',
);

let book4 = new Book(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
    'J. B. Lippincott & Co.',
    '1960',
    '0446310786',
    'English',
);

let book5 = new Book(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
    'J. B. Lippincott & Co.',
    '1960',
    '0446310786',
    'English',
);

let book6 = new Book(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
    'J. B. Lippincott & Co.',
    '1960',
    '0446310786',
    'English',
);

let book7 = new Book(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
    'J. B. Lippincott & Co.',
    '1960',
    '0446310786',
    'English',
);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
library.addBook(book7);

library.displayLibrary();