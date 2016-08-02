angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
  function BooksIndexController ($http) {
    var vm = this;
    $http({
    method: 'GET',
    url:'https://super-crud.herokuapp.com/books',
  }).then(function successCallback(response) {
    vm.books = response.data.books;
    console.log(response.data);
    console.log(vm.books);
    // console.log(response.data.books)
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createBook = function () {
    console.log("test");
    console.log("newBook");
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books/',
      data: vm.newBook,
    }).then(function successCallback(response) {
      vm.bookmon.push(response.data);
      $('#myModal').modal('toggle');
      bookSound(bulbasaur);
      setTimeout(function(){ $('.newBookForm').find("input[type=text], input[type=url], textarea").val(""); }, 3000);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  };

//   vm.editBook = function (book) {
//     console.log(book);
//     $http({
//       method: 'PUT',
//       url: 'https://super-crud.herokuapp.com/bookmon/'+book._id,
//       data: book
//     }).then(function successCallback(json) {
//       console.log("PUT!");
//       bookSound(pikachu);
//     }, function errorCallback(response) {
//       console.log('There was an error editing the data', response);
//     });
//   };
//
//   vm.deleteBook = function (book) {
//     $http({
//       method: 'DELETE',
//       url: 'https://super-crud.herokuapp.com/bookmon/'+ book._id
//     }).then(function successCallback(json) {
//       console.log("test");
//       bookSound(charmander);
//       var index = vm.bookmon.indexOf(book);
//       vm.bookmon.splice(index,1);
//     }, function errorCallback(response) {
//       console.log('There was an error deleting the data', response);
//     });
  }
