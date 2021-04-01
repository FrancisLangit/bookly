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

library.addBook(book1);
library.addBook(book2);

library.displayLibrary();