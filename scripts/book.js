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
    }

    createBookCard() {
        /**Grabs .book template from index.html and returns such as a node.*/
        const bookCardTemplate = document.querySelector('#bookCard');
        const newBookCard = bookCardTemplate.content;
        return document.importNode(newBookCard, true);
    }

    getReadStatus() {
        /**Returns read status of Book object based on this.read.*/
        if (this.read) {
            return "Read";
        } else {
            return "Not Read";
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

    createDeleteButton(bookCard) {     
        /**Creates a functional delete button that removes Book object from 
         * user's library.*/
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('btn', 'btn-outline-danger', 'btn-sm');
        this.setUpDeleteButton(deleteButton);
        bookCard.querySelector('.card-body').appendChild(deleteButton);
    }

    fillBookCard(bookCard) {
        /**Gets index.html .book template as argument and fills such up with 
         * the Book object's data.*/
        bookCard.querySelector('#bookTitle').innerHTML = (this.title);
        bookCard.querySelector('#bookAuthor').innerHTML = (
            `by ${this.author}`);
        bookCard.querySelector('#bookPages').innerHTML = (
            `${this.pages} Pages`);
        bookCard.querySelector('#bookReadStatus').innerHTML = (
            this.getReadStatus());
        this.createDeleteButton(bookCard);
    }

    display() {
        /**Creates container div with id set to Book object's id. Then fills
         * such up with a Bootstrap card containing data related to Book 
         * object.*/
        const bookCardContainer = document.createElement('div');
        bookCardContainer.id = this.id;
        document.querySelector('#books').appendChild(bookCardContainer);

        const bookCard = this.createBookCard();
        this.fillBookCard(bookCard);
        bookCardContainer.appendChild(bookCard)
    }
}