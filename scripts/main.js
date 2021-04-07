import AddBookModal from './objects/addBookModal.js';
import Book from './objects/book.js';
import HeaderInterface from './objects/headerInterface.js';
import Library from './objects/library.js';

class Main {
    /**Holds logic of the website's JavaScript together.*/
    constructor() {
        this.auth = firebase.auth();
        this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

        this.addBookModal = new AddBookModal(this);
        this.headerInterface = new HeaderInterface(this);
        this.library = new Library;
    }

    setUp() {
        /**Sets up the user interface.*/
        this.addBookModal.setUp();
        this.headerInterface.setUp();
        this.library.display();
    }
}

const main = new Main;

let book1 = new Book(
    main,
    'Elantris',
    'Brandon Sanderson',
    496,
    true,
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

main.setUp();