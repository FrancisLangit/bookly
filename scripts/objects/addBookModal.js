import Book from './book.js';

export default class AddBookModal {
    /**Represents modal that pops up when user clicks "Add Book" card.*/
    constructor(main) {
        this.main = main;
        this.modal = new bootstrap.Modal(
            document.querySelector('#addBookModal'));
    }

    getInputFields() {
        /**Returns array containing nodes of modal's title, author, and pages 
         * input fields.*/
        return [
            document.querySelector('#inputBookTitle'),
            document.querySelector('#inputBookAuthor'),
            document.querySelector('#inputBookPages'),
        ];
    }

    resetForm() {
        /**Resets values of styling of inputs in modal form.*/
        const inputs = this.getInputFields();
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ''
            inputs[i].classList.remove('is-invalid');
        }
        document.querySelector('#inputBookReadStatus').checked = false;
    }

    setUpCancelButton() {
        /**Adds click event listener to modal cancel button that makes it
         * clear the form before closing the modal.*/
        this.cancelButton = document.querySelector(
            '#addBookModalCancelButton');
        this.cancelButton.addEventListener('click', () => {
            this.resetForm();
        });
    }

    isInputValid() {
        /**Returns true if none of the form input values are left blank. 
         * Otherwise, returns false.*/
        const inputs = this.getInputFields();
        let isValid = true;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                isValid = false;
            }
        }
        return isValid;
    }

    createBookObject() {
        /**Creates a new Book object based on values of modal form inputs.*/
        return new Book(
            this.main,
            document.querySelector('#inputBookTitle').value,
            document.querySelector('#inputBookAuthor').value,
            document.querySelector('#inputBookPages').value,
            document.querySelector('#inputBookReadStatus').checked,
        );
    }

    saveBook() {
        /**Creates and displays a new Book object and adds such to the user's
         * library.*/
        const newBook = this.createBookObject(); 
        newBook.display();
        this.main.library.addBook(newBook);
    }

    invalidateForm() {
        /**Adds .is-invalid class to input fields left blank by user.*/
        const inputs = this.getInputFields();
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                inputs[i].classList.add('is-invalid');
            } else {
                inputs[i].classList.remove('is-invalid');
            }
        }
    }

    setUpSaveButton() {
        /**Adds click event listener to modal save button that makes it 
         * validate input of user. If such input is valid saves the book 
         * inputted and closes and clears the modal form.*/
        const saveButton = document.querySelector('#addBookModalSaveButton');
        saveButton.addEventListener('click', () => {
            if (this.isInputValid()) {
                this.saveBook();
                this.modal.hide();
                this.resetForm();
            } else {
                this.invalidateForm();
            }
        });
    }

    setUpAddBookCard() {
        /**Adds event listener to #addBookCardBody div. When clicked, it 
         * opens the modal.*/
        const addBookCardBody = document.querySelector('#addBookButton');
        addBookCardBody.addEventListener('click', () => {
            this.modal.show();
        });
    }

    setUp() {
        /**Sets up all the functionalities of the modal.*/
        this.setUpCancelButton();
        this.setUpSaveButton();
        this.setUpAddBookCard();
    }
}