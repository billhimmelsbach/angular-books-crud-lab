angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];

  function BooksIndexController ($http) {
    var vm = this;
    vm.newBook = {};
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
    console.log(vm.newBook);
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books/',
      data: vm.newBook,
    }).then(function successCallback(response) {
      vm.books.push(response.data);
      console.log(response.data);
      $('#myModal').modal('toggle');
      // bookSound(bulbasaur);
      setTimeout(function(){ $('.newBookForm').find("input[type=text], input[type=url], textarea").val(""); }, 3000);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  };
  //
  // vm.editBook = function (book) {
  //   console.log(book);
  //   $http({
  //     method: 'PUT',
  //     url: 'https://super-crud.herokuapp.com/books/'+book._id,
  //     data: book
  //   }).then(function successCallback(json) {
  //     console.log("PUT!");
  //   }, function errorCallback(response) {
  //     console.log('There was an error editing the data', response);
  //   });
  // };
  //
  // vm.deleteBook = function (book) {
  //   $http({
  //     method: 'DELETE',
  //     url: 'https://super-crud.herokuapp.com/books/'+ book._id
  //   }).then(function successCallback(json) {
  //     console.log("test");
  //     var index = vm.book.indexOf(book);
  //     vm.books.splice(index,1);
  //   }, function errorCallback(response) {
  //     console.log('There was an error deleting the data', response);
  //   });
  // };
}
