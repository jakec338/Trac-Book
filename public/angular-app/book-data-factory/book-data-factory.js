angular.module('myApp').factory('bookDataFactory', bookDataFactory);

function bookDataFactory($http){
  return {
    bookList: bookList,
    bookDisplay: bookDisplay
  };

  function bookList(){
    return $http.get('api/json').then(complete).catch(fail);
  }

  function bookDisplay(id){
    $http.get('api/json/' + id).then(complete).catch(fail);
  }

  function complete(response){
    console.log(response);
    return response.data;
  }

  function fail(error){
    console.log(error.statusText);
  }
}
