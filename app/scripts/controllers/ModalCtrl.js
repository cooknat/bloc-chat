(function() {
    function ModalCtrl($uibModal) {
        this.open = function() {

            var modalInstance = $uibModal.open({
              templateUrl: '/templates/modal.html',
              controller: 'ModalInstanceCtrl as modalInstance'
            });


          /*modalInstance.result.then(function() {

          });*/
    };
  }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();
