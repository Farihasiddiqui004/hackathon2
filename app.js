import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

// Firebase configuration (replace with your actual Firebase credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCgkv36lm2z84j7VkJ1f1HBhoFKTw1grJQ",
    authDomain: "fir-project-1f34e.firebaseapp.com",
    projectId: "fir-project-1f34e",
    storageBucket: "fir-project-1f34e.firebasestorage.app",
    messagingSenderId: "80758509770",
    appId: "1:80758509770:web:dde625c66806260767e433",
    measurementId: "G-17FRFKYJZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listener for form submission
document.getElementById("login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get email and password from form inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Sign in with Firebase authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      const user = userCredential.user;
      alert("Login successful!");
      console.log("Logged in user:", user);

      // Redirect to the dashboard page
      window.location.href = "./index.html";
    })
    .catch((error) => {
      // Handle login errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
      console.error("Login error:", errorCode, errorMessage);
    });
});



// Sign-up function
document.addEventListener("DOMContentLoaded", () => {
    // Ab yeh code us waqt chalega jab HTML poori tarah load ho chuki ho
    document.getElementById("signup-form")?.addEventListener("submit", (e) => {
        e.preventDefault();

        // Form ke input values ko read karna
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Firebase sign-up process
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Sign-up successful!");
                window.location.href = "login.html"; // Ya jis page pe jaana ho
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
                console.error("Sign-up error:", errorMessage);
            });
    });
});