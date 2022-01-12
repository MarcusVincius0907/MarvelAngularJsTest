angular.module("marvelApp")
  .config(($routeProvider) => {
    $routeProvider.when("/home", {
      templateUrl: 'view/home.html',
      controller: 'listaPersonagensCtrl'
    })
    $routeProvider.when("/detalhe/:id", {
      templateUrl: 'view/detalhePersonagem.html',
      controller: 'detalhePersonagensCtrl'
    })
    $routeProvider.otherwise({redirectTo: '/home'})
  })