// init firebase
let config = {
  apiKey: "AIzaSyCcuqzoIqXnvLG0Ryk_hpTRwUZWf1dc_ms",
  authDomain: "tic-tac-toe-e866e.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-e866e.firebaseio.com",
  projectId: "tic-tac-toe-e866e",
  storageBucket: "tic-tac-toe-e866e.appspot.com",
  messagingSenderId: "336525690370"
};
firebase.initializeApp(config);

// authentication
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'da';

// helpers
let firebaseHelper = {
  refs: {
    database: firebase.database(),
    people: firebase.database().ref('people'),
    messages: firebase.database().ref('messages'),
    player1Id: firebase.database().ref('player1_uid'),
    player2Id: firebase.database().ref('player2_uid')
  }
};
