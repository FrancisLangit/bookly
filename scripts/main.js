import Book from './book.js';
import Library from './library.js';

class AddBookModal {
    constructor(main) {
        this.main = main;
    }

    setUp() {
        const saveButton = document.querySelector('#addBookModalSaveButton');
        saveButton.addEventListener('click', () => {
            const title = document.querySelector('#inputBookTitle').value;
            const author = document.querySelector('#inputBookAuthor').value;
            const pages = document.querySelector('#inputBookPages').value;
            const newBook = new Book(title, author, pages); 
            newBook.display();
            this.main.library.addBook(newBook);
        });
    }
}

class Main {
    constructor() {
        this.library = new Library;
        this.addBookModal = new AddBookModal(this);
    }

    setUp() {
        this.addBookModal.setUp();
        this.library.display();
    }
}

const main = new Main;
main.setUp();