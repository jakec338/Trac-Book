angular.module('myApp').controller('BookController', BookController);

function BookController($http, $routeParams, $scope) {
  var vm = this;
  var id = $routeParams.id;     // Can just use $scope. This odes work enliu of vm.
  $http.get('api/json/' + id).then(function(response){
    vm.book = response.data;
  })
}
