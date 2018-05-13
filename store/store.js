const store = new Vuex.Store({
  state: {
    currentUser: null,
    people: [],
    player1Id: null,
    player2Id: null,
    messages: []
  },
  getters: {
    people: state => {
      return state.people;
    },
    player1Id: state => {
      return state.player1Id;
    },
    player2Id: state => {
      return state.player2Id;
    },
    messages: state => {
      return state.messages;
    },
    currentUser: state => {
      return state.currentUser;
    },
    isLoggedIn: state => {
      return state.currentUser != null;
    },
    isPlayer1: state => uid => {
      if (state.player1Id == null) return false;
      return state.player1Id == uid;
    },
    isPlayer2: state => uid => {
      if (state.player2Id == null) return false;
      return state.player2Id == uid;
    },
    getPlayer: state => number => {
      if (state.people == null) return null;
      if (state.people.length == 0) return null;
      let idToFind = '';
      if (number === 1) {
        if (state.player1Id == null) return null;
        idToFind = state.people1Id;
      } else if (number === 2) {
        if (state.player2Id == null) return null;
        idToFind = state.peopl2Id;
      }
      for (var i = 0; i < state.people; i++) {
        var person = state.people[i];
        if (person.uid == idToFind) return person;
      }
      return null;
    }
  },
  mutations: {
    setCurrentUser: (state, payload) => {
      if (payload == null) {
        state.currentUser = null;
      } else {
        state.currentUser = {
          uid: payload.uid,
          displayName: payload.displayName,
          email: payload.email,
          photoURL: payload.photoURL
        };
      }
    },
    setPeople: (state, payload) => {
      state.people = [];
      if (payload == null) return;
      var list = Object.values(payload);
      var keys = Object.keys(payload);
      for (var i = 0; i < list.length; i++) {
        var person = list[i];
        state.people.push({
          uid: keys[i],
          displayName: person.displayName,
          email: person.email,
          photoURL: person.photoURL
        });
      }
    },
    setMessages: (state, payload) => {
      state.messages = [];
      if (payload == null) return;
      var list = Object.values(payload);
      for (var i = 0; i < list.length; i++) {
        var message = list[i];
        state.messages.push({
          message: message.message,
          displayName: message.displayName
        });
      }
    },
    setPlayer1: (state, payload) => {
      if (payload == null || payload == '.') {
        state.player1Id = null;
      } else {
        state.player1Id = payload;
      }
    },
    setPlayer2: (state, payload) => {
      if (payload == null || payload == '.') {
        state.player2Id = null;
      } else {
        state.player2Id = payload;
      }
    },
    addPerson: (state, payload) => {
      firebaseHelper.refs.people.child(payload.uid)
        .set({
          displayName: payload.displayName,
          email: payload.email,
          photoURL: payload.photoURL
        });
    },
    removeSelf: state => {
      firebaseHelper.refs.people.child(state.currentUser.uid).remove();
    }
  },
  actions: {
    login: (context, payload) => {
      context.commit('setCurrentUser', payload);
      context.commit('addPerson', payload);
    },
    logout: (context) => {
      context.commit('removeSelf');
      context.commit('setCurrentUser', null);
    },
    initStateFromFirebase: (context) => {
      firebaseHelper.refs.people.on("value", function (snapshot) {
        context.commit('setPeople', snapshot.val());
      });
      firebaseHelper.refs.player1Id.on("value", function (snapshot) {
        context.commit('setPlayer1', snapshot.val());
      });
      firebaseHelper.refs.player2Id.on("value", function (snapshot) {
        context.commit('setPlayer2', snapshot.val());
      });
      firebaseHelper.refs.messages.on("value", function (snapshot) {
        context.commit('setMessages', snapshot.val());
      });
    }
  }
});
