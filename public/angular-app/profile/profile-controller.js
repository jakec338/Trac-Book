angular.module('myApp').controller('ProfileController', ProfileController);

function ProfileController($location, $http, bookDataFactory) {
    var vm = this;
  
    $http.get('/api/users/myprofile').then(function (response) {
      if (response.status === 200) {
        vm.User = response.data.user;
     }
    });

    bookDataFactory.bookList().then(function(response){
      console.log(response);
      vm.books = response;
      return vm.books;
    })
  }