export default class Book {
    /**Represents a book in the user's library. Properties hold data related
     * to such. To be stored in a Library object's books property array.*/
    constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
    }

    createBookCard() {
        /**Grabs .book template from index.html and returns such as a node.*/
        const bookCardTemplate = document.querySelector('#book');
        return document.importNode(bookCardTemplate.content, true);
    }

    getReadStatus() {
        /**Returns read status of Book object based on this.read.*/
        if (this.read) {
            return "Read";
        } else {
            return "Not Read";
        }
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
    }

    display() {
        /**Creates a book card and fills it up with Book object's data. Then 
         * appends such to the webpage.*/
        const bookCard = this.createBookCard();
        this.fillBookCard(bookCard)
        document.querySelector('#books').appendChild(bookCard);
    }
}