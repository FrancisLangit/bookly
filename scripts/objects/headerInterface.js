export default class HeaderInterface {
    /**Represents interface in header section of page that changes dependent 
     * on authentication state of user.*/
    constructor(main) {
        this.auth = main.auth;

        this.headerSignedOut = document.getElementById('headerSignedOut');
        this.headerSignedIn = document.getElementById('headerSignedIn');

        this.authStateDisplay = document.getElementById('authStateDisplay'); 
        this.signInButton = document.getElementById('signInButton');
        this.signOutButton = document.getElementById('signOutButton');
    }

    setUpSignInButton() {
        /**Adds event listener to signInButton. Makes it open Google Sign in 
         * popup when clicked.*/
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        this.signInButton.addEventListener('click', () => {
            this.auth.signInWithPopup(googleAuthProvider);
        });
    }

    setUp() {
        this.setUpSignInButton();
    }
}