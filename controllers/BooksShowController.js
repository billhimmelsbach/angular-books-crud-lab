angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  console.log($routeParams.index);
  var vm = this;
  // vm.book ={};
    $http({
    method: 'GET',
    url:'https://super-crud.herokuapp.com/books/'+$routeParams.index,
  }).then(function successCallback(response) {
    vm.book = response.data;
    console.log(response.data);
    console.log(vm.book);
    // console.log(response.data.books)
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
  vm.editBook = function (book) {
    console.log(book);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/'+book._id,
      data: book
    }).then(function successCallback(json) {
      console.log("PUT!");
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  };

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/'+ book._id
    }).then(function successCallback(json) {
      console.log("test");
      console.log("delete!");
      window.location = '/';
      // var index = vm.books.indexOf(book);
      // vm.books.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };
  vm.goToIndex = function() {
      window.location = '/';
  };
  // console.log(vm.book);
}
