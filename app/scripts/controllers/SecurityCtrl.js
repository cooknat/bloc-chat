(function() {
    function SecurityCtrl($uibModalInstance, $cookies, $firebaseAuth, Users) {

        this.logUserIn = function(userName) {
          console.log(Users.testVar);
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

            /*this.createMessage = function(newMessage){
                Message.send(newMessage, $scope.activeRoom);
                $scope.newMessage = null;
            };*/

            this.addNewUser = function(userName){
              console.log("am i adding?");
                User.addUser(userName);
            };

            $uibModalInstance.close();
        };



        /*this.logUserOut = function(){
          this.username = null;
          this.loggedInUser = null;
          firebaseUser.uid = null;

          console.log(username + loggedInUser + firebaseUser.uid);
        };*/

};
    angular
        .module('blocChat')
        .controller('SecurityCtrl', ['$uibModalInstance', '$cookies', '$firebaseAuth', 'Users', SecurityCtrl]);
})();
