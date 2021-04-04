export default class BookDeleteButton {
    /**Represents Delete button on Book cards that removes respective parent's
     * from user's library.*/
    constructor(main, parentBook) {
        this.main = main;
        this.parentBook = parentBook;

        this.button = this.parentBook.createButton(); 
        this.button.innerHTML = 'Delete';
        this.button.classList.add('btn-outline-danger', 'btn-sm');
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