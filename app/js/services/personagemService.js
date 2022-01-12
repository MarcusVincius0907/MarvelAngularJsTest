angular.module('marvelApp')
  .factory('personagemService', function($http, $sce, config, apiCredentials) {
    
    let _getCharacters = () => {
      const _url =  config.baseUrl  + '/v1/public/characters' + apiCredentials.generateQueryStringCredential();
      const _trustedUrl = $sce.trustAsResourceUrl(_url);
      return $http.get(_trustedUrl);
    } 

    return {
      getCharacters:_getCharacters
    }

  })