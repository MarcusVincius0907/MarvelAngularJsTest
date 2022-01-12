angular.module("marvelApp")
  .controller("personagemCtrl", ($scope, personagemService) => {

    $scope.app = "hello"

    let init = () => {

      personagemService.getCharacters()
      .then(data => console.log(data), error => console.log(error))

    }

    init()

  })