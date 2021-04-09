import AddBookModal from './objects/addBookModal.js';
import Book from './objects/book.js';
import Library from './objects/library.js';

class Main {
    /**Holds logic of the website's JavaScript together.*/
    constructor() {
        this.addBookModal = new AddBookModal(this);
        this.library = new Library(this);
        this.localLibrary = this.getLocalStorage();
    }

    getLocalStorage() {
        /**Returns user's booklyLibrary array from their local storage. 
         * Makes one if not present.*/
        if (!localStorage.getItem('booklyLibrary')) {
            localStorage.setItem('booklyLibrary', JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem('booklyLibrary'));
    }

    setUp() {
        /**Sets up the user interface.*/
        this.addBookModal.setUp();
        this.library.display();

        console.log(localStorage);
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