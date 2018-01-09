angular.module('myApp').controller('BookController', BookController);

function BookController($http, $routeParams, $scope, AuthFactory) {
  var vm = this;
  var id = $routeParams.id;
  vm.canAddBook = true;
  vm.showBookIcon = false;
  vm.bookHighlight = false;
  $http.get('api/json/' + id).then(function (response) {
    vm.book = response.data;
  });

  if (AuthFactory.isLoggedIn) {
    vm.warn = "all good";
    vm.showBookIcon = true;
    $http.get('/api/users/myprofile').then(function (response) {
      if (response.status === 200) {
        vm.User = response.data.user;
        for (var b in vm.User.bookList) {
          if (vm.book.Title === vm.User.bookList[b]) {
            vm.bookHighlight = true;
            vm.canAddBook = false;
          }
        };

        vm.addBook = function () {
          if (vm.canAddBook === true) {
            var bookinput = {
              bookAdded: vm.book.Title,
              username: vm.User.username
            }
            vm.bookHighlight = true;
            vm.canAddBook = false;
            vm.bookInListWarn = "Book added to your reading list!"
            $http.put('/api/users/addbook', bookinput).then(function (res) {
              if (res.data.success) {
                console.log("update worked");
              }
            })
          } else {
            var bookremove = {
              bookToRemove: vm.book.Title,
              username: vm.User.username
            }
            vm.bookHighlight = false;
            vm.canAddBook = true;
            vm.bookInListWarn = "Book removed from your reading list"
            $http.put('/api/users/removebook', bookremove).then(function (res) {
              if (res.data.success) {
                console.log("update worked");
              }
            });
            // vm.bookInListWarn = "This book is already in your reading list!";
          }
        }
      } vm.warn = vm.canAddBook;
    });
  } else {
    vm.warn = "Please login to add books";
  };

}
