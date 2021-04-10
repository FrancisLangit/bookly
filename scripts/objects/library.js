import Book from './book.js';

export default class Library {
    /**Represents a user's library. Holds and displays user's Book objects.*/
    constructor(main) {
        this.main = main;
        this.books = this.getBooksFromLocalStorage();
    }

    changeDisplayIfEmpty() {
        /**Displays #emptyLibraryText div if user has no books in library.*/
        const emptyLibraryText = document.querySelector('#emptyLibraryText');
        if (this.books.length <= 0) {
            emptyLibraryText.hidden = false;
        } else {
            emptyLibraryText.hidden = true;
        }
    }

    addBookToLocalStorage(book) {
        /**Saves a newly added book to the user's local storage.*/
        const bookJsonString = JSON.stringify({
            'title': book.title,
            'author': book.author,
            'pages': book.pages,
            'read': book.read,
            'id': book.id,
        });
        this.main.localLibrary.push(bookJsonString);
        this.main.saveLocalStorage();
    }

    addBook(book) {
        /**Adds a book to the user's library.*/
        this.addBookToLocalStorage(book);
        this.books.push(book);
        this.changeDisplayIfEmpty();
    }

    removeBookFromLocalStorage(bookToDelete) {
        /**Removes a book from the user's locally stored booklyLibrary 
         * array.*/
        this.main.localLibrary = this.main.localLibrary.filter(
            function(book) {
                const bookObj = JSON.parse(book);
                return bookObj.id !== bookToDelete.id;
            }
        );
        this.main.saveLocalStorage();
    }

    removeBook(bookToDelete) {
        /**Takes a Book object as an argument and removes such from 
         * Library.books.*/
        this.removeBookFromLocalStorage(bookToDelete);
        this.books = this.books.filter(function(book) {
            return book.id !== bookToDelete.id;
        });
        this.changeDisplayIfEmpty();
    }

    getBooksFromLocalStorage() {
        /**Returns array of all books saved as JSON strings in user's locally 
         * stored booklyLibrary array converted into Book objects.*/
        let books = [];
        const localLibrary = this.main.getLocalStorage();
        for (let i = 0; i < localLibrary.length; i++) {
            let book = JSON.parse(localLibrary[i]);
            book = new Book(this.main, book.title, book.author, book.pages,
                book.read, book.id);
            books.push(book);
        }
        return books;
    }

    display() {
        /**Displays all books in the user's library.*/
        this.changeDisplayIfEmpty();
        for (let i = 0; i < this.books.length; i++) {
            this.books[i].display();
        }
    }
}