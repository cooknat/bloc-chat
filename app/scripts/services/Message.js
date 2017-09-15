(function() {
  function Message($firebaseArray, $cookies){

    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
       // Filter the messages by their room ID.
       if (!Number.isNaN(Number(roomId))) {
       roomId = Number(roomId);
}
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.getMsg = function(){
       return messages;
    };

    Message.send = function(message, activeRoom) {
       // Send method logic
       var user = $cookies.get('blocChatCurrentUser');
       var timestamp = new Date();
       var timeString = timestamp.getHours() + ":" + timestamp.getMinutes();
       var messageRoom = "";
       if (!Number.isNaN(Number(activeRoom.$id))){
          messageRoom =  Number(activeRoom.$id);
       }
       else{
         messageRoom = activeRoom.$id;
       }
       messages.$add({
                      content: message,
                      roomId: messageRoom,
                      sentAt: timeString,
                      username: user
                    });

   };


    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
