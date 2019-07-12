// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBDKOxqXxoJl2TsCRMOI9JdZtlx8kbzGOc",
    authDomain: "gmcproject-5828b.firebaseapp.com",
    databaseURL: "https://gmcproject-5828b.firebaseio.com",
    projectId: "gmcproject-5828b",
    storageBucket: "",
    messagingSenderId: "124585908536",
    appId: "1:124585908536:web:60b32e660296b8de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


document.getElementById('contactForm').addEventListener('submit', submitForm);
var messageRef = firebase.database().ref('gmcproject');
function submitForm(e) {
    e.preventDefault();
    var nom = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var phonenumber = document.getElementById('phone').value;
    var choices = document.getElementById('choice').value;
    saveMessage(nom, email, phonenumber, choices);
}

function saveMessage(name, mail, phone, choice) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        nom: name,
        email: mail,
        phonenumber: phone,
        choices: choice,
    });
}