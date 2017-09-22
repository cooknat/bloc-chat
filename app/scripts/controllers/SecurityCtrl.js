(function() {
    function SecurityCtrl($uibModalInstance, $cookies, $firebaseAuth, Users) {

        this.logUserIn = function(userName) {
          console.log(Users);
          this.userName = userName;
          $cookies.put('blocChatCurrentUser', userName);
          firebase.auth().signInAnonymously().then(function(firebaseUser) {

              this.loggedInUser = {
                                    id: firebaseUser.uid,
                                    name: userName
                                  };

            }).catch(function(error) {
              console.error("Authentication failed:", error);
            });           

            Users.addActiveUser(userName);

            $uibModalInstance.close();
        };



};
    angular
        .module('blocChat')
        .controller('SecurityCtrl', ['$uibModalInstance', '$cookies', '$firebaseAuth', 'Users', SecurityCtrl]);
})();
