angular.module('myApp').controller('BookController', BookController);

function BookController($http, $routeParams, $scope) {
  var vm = this;
  var id = $routeParams.id;     // Can just use $scope. This odes work enliu of vm.
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/',
      text: "test",
      id: 0
    },
    {
      image: 'http://lorempixel.com/400/200/food',
      text: "test",
      id: 1

    },
    {
      image: 'http://lorempixel.com/400/200/sports',
      text: "test",
      id: 2
    },
    {
      image: 'http://lorempixel.com/400/200/people',
      text: "test",
      id: 3
    }
  ];
  $http.get('api/json/' + id).then(function(response){
    vm.book = response.data;
  })
}
