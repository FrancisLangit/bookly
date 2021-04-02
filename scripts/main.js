import AddBookModal from './addBookModal.js';
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
main.setUp();