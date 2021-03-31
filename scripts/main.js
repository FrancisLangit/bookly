class Book {
    constructor(title, author, linkToCoverPhoto, pages, publisher,
        publicationYear, isbn, language) {
        this.read = false;

        // Required attributes. 
        this.title = title;
        this.author = author;

        // Optional attributes.
        this.linkToCoverPhoto = linkToCoverPhoto;
        this.pages = pages;
        this.publisher = publisher;
        this.publicationYear =  publicationYear;
        this.language = language;
    }    
}

class Main {
    constructor() {
        this.library = [];
    }
}