import Book from './book.js'

class Library {
    /**Represents a user's library. Holds user's Book objects.*/
    constructor() {
        this.books = [];
    }

    addBook(book) {
        /**Adds a book to the user's library.*/
        this.books.push(book);
    }

    displayLibrary() {
        /**Displays all books in the user's library.*/
        for (let i = 0; i < this.books.length; i++) {
            this.books[i].display();
        }
    }
}

let library = new Library;

let book1 = new Book(
    'Catcher in the Rye', 
    'J.D. Salinger', 
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg',
    '277',
    'Little, Brown and Company',
    '1951',
    '0316769177',
    'English',
);

library.addBook(book1);

library.displayLibrary();