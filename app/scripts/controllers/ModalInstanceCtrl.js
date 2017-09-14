(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        this.cancel = function() {
            $uibModalInstance.dismiss('dismiss');
        };
        this.add = function(newRoom) {
          Room.add(newRoom);
            $uibModalInstance.close();
        };
    };

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
