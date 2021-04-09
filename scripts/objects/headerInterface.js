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

    setUpSignOutModal() {
        /**Adds event listener to signOutButton. Makes it sign out user when
         * clicked. */
        this.signOutButton.addEventListener('click', () => {
            this.auth.signOut();
        });
    }

    setUpAuthChange() {
        /**Configure apperance of header dependent on authentication state of
         * user.*/
        this.auth.onAuthStateChanged(user => {
            if (user)  {
                this.headerSignedIn.hidden = false;
                this.headerSignedOut.hidden = true;
                this.authStateDisplay.innerHTML = (
                    `Welcome, ${user.displayName}.`
                );
            } else {
                this.headerSignedOut.hidden = false;
                this.headerSignedIn.hidden = true;
                this.authStateDisplay.innerHTML = "Signed out.";
            }
        });
    }

    setUp() {
        /**Adds event listeners to buttons and configures display based on 
         * onAuthStateChanged.*/
        this.setUpSignInButton();
        this.setUpSignOutModal();
        this.setUpAuthChange();
    }
}