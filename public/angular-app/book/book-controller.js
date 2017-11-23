angular.module('myApp').controller('BookController', BookController);

function BookController($http, $routeParams) {
  var vm = this;
  var id = $routeParams.id;
  $http.get('api/json/' + id).then(function(response){
    vm.book = response.data
  })
}
