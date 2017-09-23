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

    Users.removeUser = function(name){
       activeUsers.$remove(name);
    };

    Users.fireLogin = function(userName){
      firebase.auth().signInAnonymously().then(function(firebaseUser) {
          this.loggedInUser = {
                                id: firebaseUser.uid,
                                name: userName
                              };

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

  Users.logOut = function(){
    Users.removeUser(this.userName);
    this.userName = null;  
    this.loggedInUser = null;
    $cookies.remove('blocChatCurrentUser');

    firebase.auth().signOut().then(function() {
        //console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
  };

    return Users;
  };

  angular
    .module('blocChat')
    .factory('Users', ['$firebaseArray', '$cookies', '$firebaseAuth', Users]);
})();
