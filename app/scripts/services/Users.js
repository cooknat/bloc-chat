(function() {
  function Users($firebaseArray, $cookies){

    var Users = {};
    var ref = firebase.database().ref().child('usersOnline');
    var activeUsers = $firebaseArray(ref);
    
    this.getActiveUsers = function(){
      return activeUsers;
    }

    this.addActiveUser = function(name){
      usersOnline.$add(name);

      console.log("in USers " + name);
      return this.activeUsers;
    }
   this.testVar = "pleasepleasework";
    return Users;
  }

  angular
    .module('blocChat')
    .factory('Users', ['$firebaseArray', '$cookies', Users]);
})();
