angular.module("marvelApp")
  .controller("loginCtrl",  function($scope, $location,loginService) {

    $scope.app = "hello";

    $scope.doLogin = (user) => {
      /* loginService.doLogin(user)
      .then(res => {
        localStorage.setItem('TOKEN', res.data.token)
        $location.path('/home')
      }) */

      const res = loginService.doLogin(user)
      localStorage.setItem('TOKEN', res.data.token)
      $location.path('/home')

    }

  })