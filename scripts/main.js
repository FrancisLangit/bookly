class Book {
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
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayBooks() {
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