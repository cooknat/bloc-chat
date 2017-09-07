(function() {
    function HomeCtrl(Room) {      
        this.message = "heeeellllp";
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
