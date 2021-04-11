import bookButton from './bookButton.js';

export default class BookReadButton extends bookButton {
    constructor(main, parentBook) {
        /**Represents read button on Book cards that toggles read status 
         * displayed.*/
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

    getlocalParentBookIndex() {
        /**Returns the index of the button's parent book in the user's 
         * locally stored booklyLibrary array.*/
        return this.main.localLibrary.findIndex((book) => {
                return JSON.parse(book).id === this.parentBook.id;
            }
        );
    }

    toggleParentBookStatusInLocalStorage() {
        /**Toggles the read status of the button's parent book in the user's 
         * locally stored booklyLibrary array.*/
        let localParentBookIndex = this.getlocalParentBookIndex();
        this.main.localLibrary[localParentBookIndex] = JSON.stringify({
            'title': this.parentBook.title,
            'author': this.parentBook.author,
            'pages': this.parentBook.pages,
            'read': !this.parentBook.read,
            'id': this.parentBook.id,
        });
        this.main.saveLocalStorage();
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
            this.button.classList.add('btn-success');
            this.button.classList.remove('btn-outline-success');
        } else {
            this.button.classList.add('btn-outline-success');
            this.button.classList.remove('btn-success');
        }
    }

    setUp() {
        /**Adds click event listener to read button. Makes it toggle the read
         * status of the book object and its card.*/
        this.setStyle();
        this.button.addEventListener('click', () => {
            this.toggleParentBookStatusInLocalStorage();
            this.toggleParentBookStatus();
            this.setStyle();
        });
    }
}