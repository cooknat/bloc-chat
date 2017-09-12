(function() {
  function Message($firebaseArray){

    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
       // Filter the messages by their room ID.       
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.getMsg = function(){
       return messages;
    };

    Message.add = function(msg){
        messages.$add(msg);
    };



    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
