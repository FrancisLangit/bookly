import bookButton from './bookButton.js';

export default class BookDeleteButton extends bookButton {
    /**Represents Delete button on Book cards that removes respective parent's
     * from user's library.*/
    constructor(main, parentBook) {
        super(main, parentBook);
        this.button.innerHTML = 'Delete';
        this.button.classList.add('btn-outline-danger');
        this.setUp();
    }

    setUp() {
        /**Adds click event listener to delete button of card, giving it the 
         * functionality to delete Book instance from user's library.*/
        this.button.addEventListener('click', () => {
            this.main.library.removeBook(this.parentBook);
            document.getElementById(this.parentBook.id).remove()
        });
    }
}