export default class Library {
    /**Represents a user's library. Holds user's Book objects.*/
    constructor() {
        this.books = [];
    }

    addBook(book) {
        /**Adds a book to the user's library.*/
        this.books.push(book);
    }

    removeBook(bookToDelete) {
        /**Takes a Book object as an argument and removes such from 
         * Library.books.*/
        this.books = this.books.filter(function(book) {
            return book.id !== bookToDelete.id;
        });
    }

    display() {
        /**Displays all books in the user's library.*/
        for (let i = 0; i < this.books.length; i++) {
            this.books[i].display();
        }
    }
}