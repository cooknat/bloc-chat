(function() {
  function Users($firebaseArray, $cookies, $firebaseAuth){

    var Users = {};
    var ref = firebase.database().ref().child('usersOnline');
    var activeUsers = $firebaseArray(ref);

    Users.getActiveUsers = function(){
      return activeUsers;
    };

    Users.addActiveUser = function(name){
      activeUsers.$add(name);

    };

    Users.fireLogin = function(userName){
      firebase.auth().signInAnonymously().then(function(firebaseUser) {
          this.loggedInUser = {
                                id: firebaseUser.uid,
                                name: userName
                              };
                              console.log(this.loggedInUser.name);

        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
    };

    Users.login = function(userName){
        this.userName = userName;
        $cookies.put('blocChatCurrentUser', userName);
        Users.fireLogin(userName);
        Users.addActiveUser(userName);
      };


  /*
  Users.logUserOut = function(){
    this.username = null;
    this.loggedInUser = null;
    firebaseUser.uid = null;

    console.log(username + loggedInUser + firebaseUser.uid);
  };*/

    return Users;
  };

  angular
    .module('blocChat')
    .factory('Users', ['$firebaseArray', '$cookies', '$firebaseAuth', Users]);
})();
