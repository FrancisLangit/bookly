import Book from './book.js';

export default class AddBookModal {
    /**Represents modal that pops up when user clicks "Add Book" card.*/
    constructor(main) {
        this.main = main;
    }

    clearForm() {
        /**Clears out title, author, and pages inputs in modal form.*/
        document.querySelector('#inputBookTitle').value = "";
        document.querySelector('#inputBookAuthor').value = "";
        document.querySelector('#inputBookPages').value = "";
        document.querySelector('#inputBookReadStatus').checked = false;
    }

    setUpCancelButton() {
        /**Adds click event listener to modal cancel button that makes it 
         * clear the form before closing the modal.*/
        this.cancelButton = document.querySelector(
            '#addBookModalCancelButton');
        this.cancelButton.addEventListener('click', this.clearForm);
    }

    setUpSaveButton() {
        /**Adds click event listener to modal save button that makes it create
         * and display a new Book object, add such to the user's library, and 
         * clear the modal form before closing it.*/
        const saveButton = document.querySelector('#addBookModalSaveButton');
        saveButton.addEventListener('click', () => {
            const newBook = new Book(
                document.querySelector('#inputBookTitle').value,
                document.querySelector('#inputBookAuthor').value,
                document.querySelector('#inputBookPages').value,
                document.querySelector('#inputBookReadStatus').checked,
            ); 
            newBook.display();
            this.main.library.addBook(newBook);
            this.clearForm();
        });
    }

    setUp() {
        /**Sets up all the functionalities of the modal.*/
        this.setUpCancelButton();
        this.setUpSaveButton();
    }
}