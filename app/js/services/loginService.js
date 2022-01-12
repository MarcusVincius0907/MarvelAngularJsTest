angular.module('marvelApp')
  .factory('loginService', function($http, $q, $location, config) {

    let _doLogin = (user) => {
      return $http.post(`${config.authUrl}/login`, user)
    }

    let _authenticate = () => {
      let token = localStorage.getItem('TOKEN')
      if(token) return true;

      return $location.path('/login')
    }

    return {
      doLogin:_doLogin,
      authenticate: _authenticate
    }

  })