export default class Book {
    /**Represents a book in the user's library. Properties hold data related
     * to such. To be stored in a Library object's books attribute array.*/
    constructor(title, author, linkToCoverPhoto, pages, 
        publisher, publicationYear, isbn, language) {
            this.read = false;
            this.title = title;
            this.author = author;
            this.linkToCoverPhoto = linkToCoverPhoto;
            this.pages = pages;
            this.publisher = publisher;
            this.publicationYear =  publicationYear;
            this.isbn = isbn;
            this.language = language;
    }    

    display() {
        const book = document.querySelector('.book');
        const node = document.importNode(book.content, true);
        document.body.appendChild(node);
    }
}