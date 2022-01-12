angular.module("marvelApp")
  .controller("personagemCtrl", ($scope,$http,$sce,config,apiCredentials) => {
    $scope.app = "hello"
    console.log( config.baseUrl + apiCredentials.generateQueryStringCredential());
    let init = () => {
      var url =  config.baseUrl  + '/characters' + apiCredentials.generateQueryStringCredential();
        
      let trusted = $sce.trustAsResourceUrl(url)
      $http.get(trusted)
      .then(data => console.log(data), error => console.log(error))
    }

    
     

    init()

  })