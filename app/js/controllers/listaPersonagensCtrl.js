angular.module("marvelApp")
  .controller("listaPersonagensCtrl",  function($scope, $location,personagemService, loadingService) {

    $scope.app = "hello";
    $scope.characters = [];

    $scope.totalItens = 1000;

    let init = () => {

      personagemService.getCharacters()
      .then(async (res) => {
        $scope.characters = res.data.data.results
        $scope.totalItens = res.data.data.total
      }, error => {console.log(error)})

      
    }

    $scope.getThumbnail = (thumbnail) => {
      return personagemService.getThumbnail(thumbnail, 'standard_fantastic')
    } 

    $scope.limitDesc = (text) => {
      if(text && text.length > 85) return text.substring(0,85) + '...';
      return text;
    }

    $scope.goToDetalhes = (id) => {
      $location.path(`/detail/${id}`)
    }

    $scope.paginate = (page) => {
      personagemService.getCharactersPaginate(page)
      .then(res => {
        $scope.characters = res.data.data.results

      }, error => {console.log(error)})
    }

    $scope.current = 2

    init()

  })