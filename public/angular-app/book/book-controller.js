angular.module('myApp').controller('BookController', BookController);

function BookController($http, $routeParams, $scope, AuthFactory) {
  var vm = this;
  var id = $routeParams.id;  
  $http.get('api/json/' + id).then(function(response){
    vm.book = response.data;
  });

  if  (AuthFactory.isLoggedIn) {
  $http.get('/api/users/myprofile').then(function (response) {
    if (response.status === 200) {
      vm.User = response.data.user;
   }
  });
  // vm.addBook = function(){
  //   var bookAdded = vm.book.Title;
  //   $http.post('/api/users/addbook', bookAdded).then(function(res){

  //   })
  // }

    
} else {
  vm.warn = "Please login to add books";
};
  
}
