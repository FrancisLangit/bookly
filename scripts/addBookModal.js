import Book from './book.js';

export default class AddBookModal {
    /**Represents modal that pops up when user clicks "Add Book" card.*/
    constructor(main) {
        this.main = main;
        this.modal = new bootstrap.Modal(
            document.querySelector('#addBookModal'));
    }

    getInputValues() {
        /**Returns list of the modal's form input's values.*/
        return [
            document.querySelector('#inputBookTitle').value,
            document.querySelector('#inputBookAuthor').value,
            document.querySelector('#inputBookPages').value,
        ];
    }

    clearForm() {
        /**Clears out title, author, and pages inputs in modal form.*/
        const inputValues = this.getInputValues();
        for (let i = 0; i < getInputValues.length; i++) {
            inputValues[i] = '';
        } 
        document.querySelector('#inputBookReadStatus').checked = false;
    }

    setUpCancelButton() {
        /**Adds click event listener to modal cancel button that makes it 
         * clear the form before closing the modal.*/
        this.cancelButton = document.querySelector(
            '#addBookModalCancelButton');
        this.cancelButton.addEventListener('click', this.clearForm);
    }

    isInputValid() {
        /**Returns true if none of the form input values are left blank.*/
        const inputValues = this.getInputValues();
        return (!inputValues.includes(''));
    }

    createBookObject() {
        /**Creates a new Book object based on values of modal form inputs.*/
        return new Book(
            document.querySelector('#inputBookTitle').value,
            document.querySelector('#inputBookAuthor').value,
            document.querySelector('#inputBookPages').value,
            document.querySelector('#inputBookReadStatus').checked,
        );
    }

    setUpSaveButton() {
        /**Adds click event listener to modal save button that makes it create
         * and display a new Book object, add such to the user's library, and 
         * clears the modal form after closing it.*/
        const saveButton = document.querySelector('#addBookModalSaveButton');
        saveButton.addEventListener('click', () => {
            if (this.isInputValid()) {
                const newBook = this.createBookObject(); 
                newBook.display();
                this.main.library.addBook(newBook);
                this.modal.hide();
                this.clearForm();
            }
        });
    }

    setUp() {
        /**Sets up all the functionalities of the modal.*/
        this.setUpCancelButton();
        this.setUpSaveButton();
    }
}