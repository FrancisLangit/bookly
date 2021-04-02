import Book from './book.js';
import Library from './library.js';


let library = new Library;

let book1 = new Book(
    'Catcher in the Rye', 
    'J.D. Salinger', 
    '277',
);

let book2 = new Book(
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
);

let book3 = new Book(
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
);

let book4 = new Book(
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
);

let book5 = new Book(
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
);

let book6 = new Book(
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
);

let book7 = new Book(
    'To Kill a Mockingbird', 
    'Harper Lee', 
    '281',
);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
library.addBook(book7);

library.displayLibrary();