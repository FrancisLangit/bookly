export default class Book {
    /**Represents a book in the user's library. Properties hold data related
     * to such. To be stored in a Library object's books attribute array.*/
    constructor(linkToCoverPhoto, title, author, pages, 
        publisher, publicationYear, isbn, language) {
            this.read = false;
            this.linkToCoverPhoto = linkToCoverPhoto;
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.publisher = publisher;
            this.publicationYear =  publicationYear;
            this.isbn = isbn;
            this.language = language;
    }    

    display() {
        const bookTemplate = document.querySelector('.book');
        const book = document.importNode(bookTemplate.content, true);
        
        book.querySelector("#cover").src = this.linkToCoverPhoto;

        book.querySelector("#title").innerHTML += this.title;
        book.querySelector("#author").innerHTML += this.author;
        book.querySelector("#pages").innerHTML += this.pages;
        book.querySelector("#publisher").innerHTML += this.publisher;
        book.querySelector("#publicationYear").innerHTML += this.publicationYear;
        book.querySelector("#isbn").innerHTML += this.isbn;
        book.querySelector("#language").innerHTML += this.language;

        document.body.appendChild(book);
    }
}