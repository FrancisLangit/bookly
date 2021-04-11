import BookDeleteButton from './bookDeleteButton.js';
import BookReadButton from './bookReadButton.js';

export default class Book {
    /**Represents a book in the user's library. Properties hold data related
     * to such as well as objects related to its card's interface. To be 
     * stored in a Library object's books property array.*/
    constructor(main, title, author, pages, read, id) {
        this.main = main;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = this.getId(id);
        
        this.card = this.createBookCard();
        this.deleteButton = new BookDeleteButton(this.main, this);
        this.readButton = new BookReadButton(this.main, this);
    }

    getId(id) {
        /**If id argument !== null, returns id. Otherwise, generates a random 
         * string that will serve as the object's id property.*/
        if (id) {
            return id;
        } else {
            return Math.random().toString(36).substr(2, 9);
        }
    }

    createBookCard() {
        /**Grabs .book template from index.html and returns such as a node.*/
        const bookCardTemplate = document.querySelector('#bookCard');
        const newBookCard = bookCardTemplate.content;
        return document.importNode(newBookCard, true);
    }

    getReadStatus() {
        /**Returns span with content and style dependent on object's 
         * this.read property.*/
        let newStatus = document.createElement('span');
        if (this.read) {
            newStatus.innerHTML = 'Read';
        } else {
            newStatus.innerHTML = 'Not Read';
            newStatus.classList.add('text-muted');
        }
        return newStatus;
    }

    fillBookCard() {
        /**Fills up Book's card with it's data, buttons, and read status.*/
        this.card.querySelector('#bookTitle').innerHTML = (this.title);
        this.card.querySelector('#bookAuthor').innerHTML = (
            `by ${this.author}`);
        this.card.querySelector('#bookPages').innerHTML = (
            `${this.pages} Pages`);

        this.card.querySelector('.card-body').appendChild(
            this.readButton.button);
        this.card.querySelector('.card-body').appendChild(
            this.deleteButton.button);

        this.card.querySelector('.card-footer').appendChild(
            this.getReadStatus());
    }

    display() {
        /**Creates container div with id set to Book object's id. Then fills
         * such up with a Bootstrap card containing data related to object and
         * appends such to the library section of the document.*/
        const bookCardContainer = document.createElement('div');
        bookCardContainer.id = this.id;
        document.querySelector('#libraryCards').appendChild(
            bookCardContainer);
        this.fillBookCard();
        bookCardContainer.appendChild(this.card)
    }
}