angular.module("marvelApp")
.controller("personagemCtrl", ($scope) => {
  $scope.app = "hello"
  var privateKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';

  let obj = {
    key: '5a237863b3cc2061003cbbc4fe20dc06',
    ts: '1',
    hashString: function() {
      return md5(this.ts + privateKey + this.key);
    }
  }

})