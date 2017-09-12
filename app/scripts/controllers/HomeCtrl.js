(function() {
    function HomeCtrl(Room, Message, $scope) {
        //no parentheses here because you're just assigning, not actually calling the method (ask carrie - it doesn't work without?)
        this.rmList = Room.getRooms();
        //ditto. this takes a parameter (room name) pass it in from the template not from here
        this.newRoom = Room.add;

        /*var self = this;

        this.setActiveRoom = function(activeRoom){
          self.activeRoom = activeRoom;
        };*/

        this.setActiveRoom = function(activeRoom){
          $scope.activeRoom = activeRoom;      
          console.log(typeof activeRoom.$id);
          $scope.currMessages = Message.getByRoomId(activeRoom.$id);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();
