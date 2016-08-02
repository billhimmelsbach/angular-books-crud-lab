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
  
  // console.log(vm.book);
}
