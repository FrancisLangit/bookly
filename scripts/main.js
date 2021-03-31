class Book {
    /**Represents a book in the user's library. Attributes hold data related
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
}

class Library {
    /**Represents a user's library. Holds user's Book objects.*/
    constructor() {
        this.books = [];
    }

    addBook(book) {
        /**Adds a book to the user's library.*/
        this.books.push(book);
    }

    displayBooks() {
        /**Displays all books in the user's library.*/
        for (let i = 0; i < this.books.length; i++) {
            console.log(this.books[i].title, this.books[i].author);
        }
    }
}

library = new Library;

book1 = new Book("catcher in the rye", "j.d. salinger", null, 500);
book2 = new Book("harry potter 1", "jk rowling", null, 234);

library.addBook(book1);
library.addBook(book2);

library.displayBooks();