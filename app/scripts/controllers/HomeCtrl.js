(function() {
    function HomeCtrl(Room) {
        //no parentheses here because you're just assigning, not actually calling the method
        this.rmList = Room.getRooms();

        //ditto. this takes a parameter (room name) pass it in from the template not from here
        this.newRoom = Room.add;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
