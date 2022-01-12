angular.module('marvelApp')
  .factory('loadingService', function($q) {

    let _isLoading = false;

    let toggleLoading = () => {
      _isLoading = !_isLoading;
    }
    
    return {
      toggleLoading,
      isLoading:_isLoading
    }

  })