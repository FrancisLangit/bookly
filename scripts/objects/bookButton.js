export default class BookButton {
    /**Represents a button on a Book card's interface.*/
    constructor(main, parentBook) {
        this.main = main;
        this.parentBook = parentBook;
        this.button = this.create();
    }

    create() {
        /**Creates and returns button element styled as a small Bootstrap 
         * button with a right margin.*/
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn', 'btn-sm' ,'me-2');
        return button;
    }
}