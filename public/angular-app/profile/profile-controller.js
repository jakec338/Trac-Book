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

  // book recommend  -- 
  // make an array of tags that are associated with each book in reading list 
  // run through that array in an ng-for loop and use it in a filter
  // can use a function in filter that returns an array
  // might have to make own filter


  // OR OR (easier) use custom filter and do math.random on array to return only one type of tag 