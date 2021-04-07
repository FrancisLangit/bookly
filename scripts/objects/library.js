export default class Library {
    /**Represents a user's library. Holds and displays user's Book objects.*/
    constructor() {
        this.books = [];
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

    addBook(book) {
        /**Adds a book to the user's library.*/
        this.books.push(book);
        this.changeDisplayIfEmpty();
    }

    removeBook(bookToDelete) {
        /**Takes a Book object as an argument and removes such from 
         * Library.books.*/
        this.books = this.books.filter(function(book) {
            return book.id !== bookToDelete.id;
        });
        this.changeDisplayIfEmpty();
    }

    display() {
        /**Displays all books in the user's library.*/
        for (let i = 0; i < this.books.length; i++) {
            this.books[i].display();
        }
        this.changeDisplayIfEmpty();
    }
}