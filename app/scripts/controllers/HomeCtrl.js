(function() {
    function HomeCtrl(Room) {

        this.rmList = Room.getRooms();

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
