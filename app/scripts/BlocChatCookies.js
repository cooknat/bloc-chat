(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
        templateUrl: '/templates/security.html',
        controller: 'SecurityCtrl as security'
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
