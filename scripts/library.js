export default class Library {
    /**Represents a user's library. Holds user's Book objects.*/
    constructor() {
        this.books = [];
    }

    addBook(book) {
        /**Adds a book to the user's library.*/
        this.books.push(book);
    }

    display() {
        /**Displays all books in the user's library.*/
        for (let i = 0; i < this.books.length; i++) {
            this.books[i].display();
        }
    }
}