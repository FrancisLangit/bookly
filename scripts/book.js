export default class Book {
    /**Represents a book in the user's library. Properties hold data related
     * to such. To be stored in a Library object's books property array.*/
    constructor(linkToCoverPhoto, title, author, pages,
        publisher, publicationYear, isbn, language) {
        this.linkToCoverPhoto = linkToCoverPhoto;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.isbn = isbn;
        this.language = language;
        this.read = false;
    }

    createBookCard() {
        /**Grabs .book template from index.html and returns such as a node.*/
        const bookCardTemplate = document.querySelector('#book');
        return document.importNode(bookCardTemplate.content, true);
    }

    fillBookCard(bookCard) {
        /**Gets index.html .book template as argument and fills such up with 
         * the Book object's data.*/
        bookCard.querySelector('#bookCover').src = (this.linkToCoverPhoto);
        bookCard.querySelector('#bookTitle').innerHTML = (this.title);
        bookCard.querySelector('#bookAuthor').innerHTML = (
            `by ${this.author}`);
        bookCard.querySelector('#bookPages').innerHTML = (
            `Pages: ${this.pages}`);
        bookCard.querySelector('#bookPublisher').innerHTML = (
            `Publisher: ${this.publisher}`);
        bookCard.querySelector('#bookPublicationYear').innerHTML = (
            `Publication Year: ${this.publicationYear}`);
        bookCard.querySelector('#bookIsbn').innerHTML = (
            `ISBN: ${this.isbn}`);
        bookCard.querySelector('#bookLanguage').innerHTML = (
            `Language: ${this.language}`);
    }

    display() {
        /**Creates a book card and fills it up with Book object's data. Then 
         * appends such to the webpage.*/
        const bookCard = this.createBookCard();
        this.fillBookCard(bookCard)
        document.querySelector('#books').appendChild(bookCard);
    }
}