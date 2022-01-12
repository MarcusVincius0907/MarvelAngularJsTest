angular.module('marvelApp')
  .factory('apiCredentials', function(md5, config) {

    const ts = '1'

    let _hashString = () => {
      return md5.createHash(ts + config.privateKey + config.publicKey);
    }

    let _generateQueryString = () => {
      return `?apikey=${config.publicKey}&ts=${ts}&hash=${_hashString()}`
    }

    return {
      generateQueryStringCredential: _generateQueryString
    };
  });