import AddBookModal from './objects/addBookModal.js';
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

    saveLocalStorage() {
        /**Re-saves this.localLibrary to booklyLibrary item in localStorage.*/
        localStorage.setItem(
            'booklyLibrary', JSON.stringify(this.localLibrary));
    }

    setUp() {
        /**Sets up the user interface.*/
        this.addBookModal.setUp();
        this.library.display();
    }
}

const main = new Main;
main.setUp();