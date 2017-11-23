angular.module('myApp').controller('HomeController', HomeController);

function HomeController($http) {
  var vm = this;
  vm.title = 'Test';
  $http.get('api/json').then(function(response){
    console.log(response);
    vm.books = response.data;
  })
}
