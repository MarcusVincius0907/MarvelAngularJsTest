angular.module("marvelApp")
  .controller("detalhePersonagensCtrl",  function($scope, $routeParams, $location, personagemService) {

    let init = () => {

      if($routeParams.id){

        personagemService.getCharactersById($routeParams.id)
        .then(res => {
          console.log('character',res)
          $scope.character = res.data.data.results[0]
  
        }, error => console.log(error))

        personagemService.getComicsByCharacterId($routeParams.id)
        .then(res => {
          console.log('comics',res)
          $scope.comics = res.data.data.results;
        }, error => console.log(error))
  
      }
      
    }

    $scope.getThumbnail = (thumbnail) => {
      return personagemService.getThumbnail(thumbnail, 'standard_fantastic')
    }

    $scope.goBack = () => {
      $location.path(`/home`)
    }

    init()

  })