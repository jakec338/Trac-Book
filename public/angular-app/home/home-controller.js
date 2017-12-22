angular.module('myApp').controller('HomeController', HomeController);

function HomeController(bookDataFactory, $routeParams) {
  var vm = this;
  vm.title = 'Test';
  vm.tags = 'Tags';
  vm.genre = 'Genres';
  console.log($routeParams.id);
  bookDataFactory.bookList().then(function(response){
    console.log(response);
    vm.books = response;
  })
}




// CUSTOM FILTER
