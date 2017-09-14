(function() {
    function SecurityCtrl($uibModalInstance, $cookies) {

        this.tempVar = "a horse is a horse of course of course";

        this.logUserIn = function(userName) {
          this.userName = userName;
          console.log("logging in " + this.userName);
          $cookies.put('blocChatCurrentUser', userName);
          console.log($cookies.get('blocChatCurrentUser'));        
          $uibModalInstance.close();
        };

}
    angular
        .module('blocChat')
        .controller('SecurityCtrl', ['$uibModalInstance', '$cookies', SecurityCtrl]);
})();
