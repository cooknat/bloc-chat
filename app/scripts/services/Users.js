(function() {
  function Users($firebaseArray, $cookies){

    var Users = {};
    var ref = firebase.database().ref().child('usersOnline');
    var activeUsers = $firebaseArray(ref);

    Users.getActiveUsers = function(){
      return activeUsers;
    };

    Users.addActiveUser = function(name){
      activeUsers.$add(name);
    ;
    };
  /*  Users.logIn(){

  };

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
    .factory('Users', ['$firebaseArray', '$cookies', Users]);
})();
