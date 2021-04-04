import bookButton from './bookButton.js';

export default class BookMarkButton extends bookButton {
    constructor(main, parentBook) {
        /**Represents Delete button on Book cards that removes respective 
         * parent's from user's library.*/
        super(main, parentBook);
        this.button.innerHTML = 'Toggle Status';
        this.button.classList.add('btn-outline-secondary');
        this.setUp();
    }

    setUp() {
        /**Adds click event listener to mark button. Makes it toggle the read
         * status of the book object and its card.*/
        this.button.addEventListener('click', () => {
            this.parentBook.read = !this.parentBook.read;
            const bookCardContainer = document.getElementById(
                this.parentBook.id);
            const bookCardFooter = bookCardContainer.querySelector(
                '.card-footer');
            bookCardFooter.innerHTML = '';
            bookCardFooter.appendChild(this.parentBook.getReadStatus());
        });
    }
}