angular.module('myApp').controller('ProfileController', ProfileController);

function ProfileController($location, $http, bookDataFactory) {
  var vm = this;

  vm.test = true;
  vm.showUserList = true;

  vm.switchList = "Show Recommendations";

  var userBookTit = [];
  var userTags = [];

  vm.switch = function(){
    vm.showUserList = !vm.showUserList;
    if (vm.showUserList){
      vm.switchList = "Recommendations";
    } else {
      vm.switchList = "Reading list";
    }
    
  }
  

  $http.get('/api/users/myprofile').then(function (response) {
    if (response.status === 200) {
      vm.User = response.data.user;
      for (i = 0; i < vm.User.bookList.length; i++){
        userBookTit.push(vm.User.bookList[i]);
      }
    }
  });

  bookDataFactory.bookList().then(function (response) {
    console.log(response);
    vm.books = response;
    for (x in vm.books){
      for (y in userBookTit){
        if (vm.books[x].Title === userBookTit[y]){
          for (tag in vm.books[x].Tags){
            userTags.push(vm.books[x].Tags[tag]);
          }
        }
      }
    }
    vm.randTag = userTags[(Math.floor(Math.random() * userTags.length))];
    vm.test = vm.randTag;
    return vm.test;
    return vm.books;
  });

}

     // if (vm.test == false){
    //   for (b in vm.User.bookList) {
    //     vm.test = b;
    //     return vm.test;
    //   }



  // book recommend  -- 
  // make an array of tags that are associated with each book in reading list 
  // run through that array in an ng-for loop and use it in a filter
  // can use a function in filter that returns an array
  // might have to make own filter


  // OR OR (easier) use custom filter and do math.random on array to return only one type of tag 