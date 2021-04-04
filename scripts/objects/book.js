import BookDeleteButton from './bookDeleteButton.js';
import BookMarkButton from './bookMarkButton.js';

export default class Book {
    /**Represents a book in the user's library. Properties hold data related
     * to such. To be stored in a Library object's books property array.*/
    constructor(main, title, author, pages, read) {
            this.main = main;
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
            this.id = Math.random().toString(36).substr(2, 9);
            
            this.card = this.createBookCard();            
            this.deleteButton = new BookDeleteButton(main, this);
            this.markButton = new BookMarkButton(main, this);
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
            newStatus.classList.add('text-muted');
            newStatus.innerHTML = 'Not Read';
        }
        return newStatus;
    }

    createButton() {
        /**Creates and returns a Bootstrap styled button element.*/
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn', 'me-2');
        return button;
    }

    fillBookCard() {
        /**Fills up Book's card with it's data, buttons, and read status.*/
        this.card.querySelector('#bookTitle').innerHTML = (this.title);
        this.card.querySelector('#bookAuthor').innerHTML = (
            `by ${this.author}`);
        this.card.querySelector('#bookPages').innerHTML = (
            `${this.pages} Pages`);

        this.card.querySelector('.card-body').appendChild(
            this.markButton.button);
        this.card.querySelector('.card-body').appendChild(
            this.deleteButton.button);

        this.card.querySelector('.card-footer').appendChild(
            this.getReadStatus());
    }

    display() {
        /**Creates container div with id set to Book object's id. Then fills
         * such up with a Bootstrap card containing data related to object.*/
        const bookCardContainer = document.createElement('div');
        bookCardContainer.id = this.id;
        document.querySelector('#books').appendChild(bookCardContainer);
        this.fillBookCard();
        bookCardContainer.appendChild(this.card)
    }
}