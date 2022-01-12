angular.module('marvelApp')
  .factory('personagemService', function($http, $sce, config, apiCredentials) {
    
    let _getCharacters = () => {
      const url =  `${config.baseUrl}/v1/public/characters${apiCredentials.generateQueryStringCredential()}&limit=100`;
      const trustedUrl = $sce.trustAsResourceUrl(url);
      return $http.get(trustedUrl);
    } 

    let _getCharactersPaginate = (page) => {
      const url =  `${config.baseUrl}/v1/public/characters${apiCredentials.generateQueryStringCredential()}&limit=100&offset=${page}`;
      const trustedUrl = $sce.trustAsResourceUrl(url);
      return $http.get(trustedUrl);
    }

    let _getCharactersById = (id) => {
      const url =  `${config.baseUrl}/v1/public/characters/${id}${apiCredentials.generateQueryStringCredential()}`;
      const trustedUrl = $sce.trustAsResourceUrl(url);
      return $http.get(trustedUrl);
    }

    let _getComicsByCharacterId = (id) => {
      const url =  `${config.baseUrl}/v1/public/characters/${id}/comics${apiCredentials.generateQueryStringCredential()}`;
      const trustedUrl = $sce.trustAsResourceUrl(url);
      return $http.get(trustedUrl);
    }

    let _getThumbnail = (thumbnail, size) => {
      const url =  `${thumbnail.path}/${size}.${thumbnail.extension}`
      return url
    }

    return {
      getCharacters:_getCharacters,
      getCharactersById:_getCharactersById,
      getCharactersPaginate:_getCharactersPaginate,
      getComicsByCharacterId:_getComicsByCharacterId,
      getThumbnail: _getThumbnail
    }

  })