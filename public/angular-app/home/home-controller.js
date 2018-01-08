angular.module('myApp').controller('HomeController', HomeController);

function HomeController(bookDataFactory, $routeParams, $filter) {
  var vm = this;
  vm.title = 'Test';
  vm.tags = 'Tags';
  vm.genre = 'Genres';
  vm.genSearch = "";
  vm.tagSearch = "";
  vm.genreSearch = function(genre){
    vm.genSearch = genre;
    return vm.genSearch;
  };
  vm.tagsSearch = function(tag){
    vm.tagSearch = tag;
    return vm.tagSearch;
  };
  console.log($routeParams.id);
  bookDataFactory.bookList().then(function(response){
    console.log(response);
    vm.books = response;
    return vm.books;
  })
}




// CUSTOM FILTER
