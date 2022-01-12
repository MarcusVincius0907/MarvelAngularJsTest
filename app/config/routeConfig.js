angular.module("marvelApp")
  .config(($routeProvider) => {
    $routeProvider.when("/login", {
      templateUrl: 'view/login.html',
      controller: 'loginCtrl'
    })
    $routeProvider.when("/home", {
      templateUrl: 'view/home.html',
      controller: 'listaPersonagensCtrl',
      resolve : {
        //This function is injected with the loginService where you'll put your authentication logic
        'auth' : function(loginService){
            return loginService.authenticate();
        }
    }
    })
    $routeProvider.when("/detail/:id", {
      templateUrl: 'view/detalhePersonagem.html',
      controller: 'detalhePersonagensCtrl',
      resolve : {
        //This function is injected with the loginService where you'll put your authentication logic
        'auth' : function(loginService){
            return loginService.authenticate();
        }
    }
    })
    $routeProvider.otherwise({redirectTo: '/home'})
  })
  