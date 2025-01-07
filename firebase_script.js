import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_o-BqsEMXpt4YV6p6mH0cEXcqusicOSM",
  authDomain: "nft-marketplace-website.firebaseapp.com",
  projectId: "nft-marketplace-website",
  storageBucket: "nft-marketplace-website.firebasestorage.app",
  messagingSenderId: "500206598124",
  appId: "1:500206598124:web:4690da55fc22a77dde72c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const signUp = document.getElementById('login-btn');
signUp.addEventListener('click', function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });

})
 

