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
    }

    createBookCard() {
        /**Grabs .book template from index.html and returns such as a node.*/
        const bookCardTemplate = document.querySelector('#bookCard');
        const newBookCard = bookCardTemplate.content;
        return document.importNode(newBookCard, true);
    }

    setReadStatus() {
        /**Returns sets footer of Book card based on object's this.read 
         * property.*/
        const bookCardFooter = this.card.querySelector('.card-footer');
        if (this.read) {
            bookCardFooter.innerHTML = 'Read';
        } else {
            bookCardFooter.classList.add('text-muted');
            bookCardFooter.innerHTML = 'Not Read';
        }
    }

    setUpDeleteButton(deleteButton) {
        /**Adds click event listener to delete button of card, giving it the 
         * functionality to delete Book instance from user's library.*/
        deleteButton.addEventListener('click', () => {
            this.main.library.removeBook(this);
            document.getElementById(this.id).remove()
        });
    }

    createDeleteButton() {     
        /**Creates a functional delete button that removes Book object from 
         * user's library.*/
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('btn', 'btn-outline-danger', 'btn-sm');
        this.setUpDeleteButton(deleteButton);
        this.card.querySelector('.card-body').appendChild(deleteButton);
    }

    fillBookCard() {
        /**Gets index.html .book template as argument and fills such up with 
         * the Book object's data.*/
        this.card.querySelector('#bookTitle').innerHTML = (this.title);
        this.card.querySelector('#bookAuthor').innerHTML = (
            `by ${this.author}`);
        this.card.querySelector('#bookPages').innerHTML = (
            `${this.pages} Pages`);
        this.setReadStatus(this.card);
        this.createDeleteButton(this.card);
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