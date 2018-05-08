let config = {
  apiKey: "AIzaSyCcuqzoIqXnvLG0Ryk_hpTRwUZWf1dc_ms",
  authDomain: "tic-tac-toe-e866e.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-e866e.firebaseio.com",
  projectId: "tic-tac-toe-e866e",
  storageBucket: "tic-tac-toe-e866e.appspot.com",
  messagingSenderId: "336525690370"
};

firebase.initializeApp(config);

let firebaseDatabaseRef = firebase.database();
//let firebaseMessagesRef = firebase.database().ref('messages');
//let firebasePeopleRef = firebase.database().ref('people');
