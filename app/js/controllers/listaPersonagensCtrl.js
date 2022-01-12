angular.module("marvelApp")
  .controller("listaPersonagensCtrl",  function($scope, personagemService) {

    $scope.app = "hello";
    $scope.characters = [];

    let init = () => {

      personagemService.getCharacters()
      .then(res => {
        
        console.log(res)
        $scope.characters = res.data.data.results

      }, error => console.log(error))

      $scope.image =  $scope.getThumbnail({
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg"
      })

      
    }

    $scope.getThumbnail = (thumbnail) => {
      return personagemService.getThumbnail(thumbnail, 'standard_fantastic')
    } 

    $scope.limitDesc = (text) => {
      if(text && text.length > 85) return text.substring(0,85) + '...';
      return text;
    }

    $scope.goToDetalhes = (id) => {
      $location.path(`/detalhes/${id}`)
    }

    

    init()

  })