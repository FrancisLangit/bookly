import bookButton from './bookButton.js';

export default class BookMarkButton extends bookButton {
    constructor(main, parentBook) {
        /**Represents Delete button on Book cards that removes respective 
         * parent's from user's library.*/
        super(main, parentBook);
        this.button.innerHTML = 'Read';
        this.setUp();
    }

    getParentBookCardFooter() {
        /**Returns the footer of the button's containing Bootstrap card.*/
        const parentBookContainer = document.getElementById(
            this.parentBook.id);
        return parentBookContainer.querySelector('.card-footer');
    }

    toggleParentBookStatus() {
        /**Toggles the read status of the button's parentBook object and HTML
         * within its respective card's footer.*/
        this.parentBook.read = !this.parentBook.read;
        let parentBookCardFooter = this.getParentBookCardFooter();
        parentBookCardFooter.innerHTML = '';
        parentBookCardFooter.appendChild(this.parentBook.getReadStatus());
    }

    setStyle() {
        /**Sets the style of the button based on its parent book's read 
         * property.*/
        if (this.parentBook.read) {
            this.button.classList.add('btn-secondary');
            this.button.classList.remove('btn-outline-secondary');
        } else {
            this.button.classList.add('btn-outline-secondary');
            this.button.classList.remove('btn-secondary');
        }
    }

    setUp() {
        /**Adds click event listener to mark button. Makes it toggle the read
         * status of the book object and its card.*/
        this.setStyle();
        this.button.addEventListener('click', () => {
            this.toggleParentBookStatus();
            this.setStyle();
        });
    }
}