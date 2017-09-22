(function() {
    function SecurityCtrl($uibModalInstance, Users) {


        this.setUserName = function(userName){
           this.userName = userName;
           this.logUserIn = Users.login(userName);
           $uibModalInstance.close();
        };

};
    angular
        .module('blocChat')
        .controller('SecurityCtrl', ['$uibModalInstance','Users', SecurityCtrl]);
})();
