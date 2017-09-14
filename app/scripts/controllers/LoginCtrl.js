(function() {
    function LoginCtrl($uibModalInstance) {

        this.tempVar = "a horse is a horse of course of course";

        this.logUserIn = function(userName) {
          console.log("logging in");
          this.userName = userName;
          $cookies.put('users', userName);
          $uibModalInstance.close();
        };
    };

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$uibModalInstance', LoginCtrl]);
})();
