import AddBookModal from './addBookModal.js';
import Book from './book.js';
import Library from './library.js';

class Main {
    /**Holds logic of the website's JavaScript together.*/
    constructor() {
        this.library = new Library;
        this.addBookModal = new AddBookModal(this);
    }

    setUp() {
        /**Sets up the user interface.*/
        this.addBookModal.setUp();
        this.library.display();
    }
}

const main = new Main;

let book1 = new Book(
    main,
    'Elantris',
    'Brandon Sanderson',
    496,
);

let book2 = new Book(
    main,
    'Catcher in the Rye',
    'J.D. Salinger',
    277,
);

let book3 = new Book(
    main,
    "Harry Potter and the Sorcerer's Stone",
    'J.K. Rowling ',
    345,
);

main.library.addBook(book1);
main.library.addBook(book2);
main.library.addBook(book3);

main.library.removeBook(book2);

main.setUp();