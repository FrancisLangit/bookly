export default class BookMarkButton {
    constructor(main, parentBook) {
        /**Represents Delete button on Book cards that removes respective 
         * parent's from user's library.*/
        this.main = main;
        this.parentBook = parentBook;

        this.button = this.parentBook.createButton(); 
        this.button.innerHTML = 'Toggle Status';
        this.button.classList.add('btn-outline-secondary', 'btn-sm');
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