(function() {
    function SecurityCtrl($uibModalInstance, $cookies) {        

        this.logUserIn = function(userName) {
          this.userName = userName;
          $cookies.put('blocChatCurrentUser', userName);
          $uibModalInstance.close();
        };

}
    angular
        .module('blocChat')
        .controller('SecurityCtrl', ['$uibModalInstance', '$cookies', SecurityCtrl]);
})();
