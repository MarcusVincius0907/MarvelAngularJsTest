angular.module("marvelApp")
  .controller("loginCtrl",  function($scope, $location,loginService) {

    $scope.app = "hello";

    $scope.doLogin = (user) => {
      loginService.doLogin(user)
      .then(res => {
        console.log('login',res);
        localStorage.setItem('TOKEN', res.data.token)
        $location.path('/home')
      }, error => console.log(error))

    }

  })