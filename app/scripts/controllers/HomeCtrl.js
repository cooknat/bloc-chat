(function() {
    function HomeCtrl(Room, Message, Users, $scope) {
        //no parentheses here because you're just assigning, not actually calling the method (ask carrie - it doesn't work without?)
        this.rmList = Room.getRooms();
        //ditto. this takes a parameter (room name) pass it in from the template not from here
        this.newRoom = Room.add;

        this.newMessage = Message.send;

        this.usersOnline = Users.getActiveUsers();


        /*var self = this;

        this.setActiveRoom = function(activeRoom){
          self.activeRoom = activeRoom;
        };*/

        this.setActiveRoom = function(activeRoom){
          $scope.activeRoom = activeRoom;
          $scope.currMessages = Message.getByRoomId(activeRoom.$id);
        };

        this.createMessage = function(newMessage){
            Message.send(newMessage, $scope.activeRoom);
            $scope.newMessage = null;
        };

        this.logOut = function(){
            Users.logOut();
        };

    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'Users', '$scope', HomeCtrl]);
})();
