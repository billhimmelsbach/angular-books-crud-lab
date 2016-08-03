
angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];

  function BooksIndexController ($http) {
    var vm = this;
    vm.newBook = {};
    vm.orderBy="title";
    vm.reverse=false;
    $http({
    method: 'GET',
    url:'https://www.reddit.com/r/music/new.json?sort=new',
  }).then(function successCallback(response) {
    console.log(response.data.data.children);
    console.log(response.data.data.children[0].data.url);
    console.log(response.data.data.children[0].data.media_embed.content);
    redditPosts = response.data.data.children;
    console.log(redditPosts);
    for (var i = 0; i < redditPosts.length; i++) {
      redditPosts[i].data.children
    }
    // for (var i = 0; i < redditPosts.length; i++) {
    //   array[i]
    // }
    //   console.log(response.data.data.children.media_embed.content);
    // }

    // for (var i = 0; i < response.data.data.children; i++) {
    //   url = response.data.data.children[i].data.url = url;
    //   console.log(url);
    //   if(preg_match("/youtu.be\/[a-z1-9.-_]+/", url)) {
    //     preg_match("/youtu.be\/([a-z1-9.-_]+)/", url, matches);
    //     if(isset(matches[1])) {
    //         url = 'http://www.youtube.com/embed/'.matches[1];
    //     }
    //   }
    //   else if(preg_match("/youtube.com(.+)v=([^&]+)/", url)) {
    //     preg_match("/v=([^&]+)/", url, matches);
    //     if(isset(matches[1])) {
    //         url = 'http://www.youtube.com/embed/'.matches[1];
    //     }
    //   }
    //   // Vimeo video
    //   else if(preg_match("/vimeo.com\/[1-9.-_]+/", url)) {
    //     preg_match("/vimeo.com\/([1-9.-_]+)/", url, matches);
    //     if(isset(matches[1])) {
    //         url = 'http://player.vimeo.com/video/'.matches[1];
    //     }
    //   }
    //   console.log(url);
    //   vm.books.push(url);
    // }

    // vm.books = response.data.data.children[i]
// YouTube url?

// return url;
    // console.log(vm.books);
    // vm.books = response.data.data.children;
    // console.log(response.data.data.children);
    // console.log(response.data.data.children.data.url);
    // console.log(vm.books);
    // console.log(response.data.books)
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
  //
  // vm.createBook = function () {
  //   console.log("test");
  //   console.log(vm.newBook);
  //   $http({
  //     method: 'POST',
  //     url: 'https://super-crud.herokuapp.com/books/',
  //     data: vm.newBook,
  //   }).then(function successCallback(response) {
  //     vm.books.push(response.data);
  //     console.log(response.data);
  //     $('#myModal').modal('toggle');
  //     // bookSound(bulbasaur);
  //     setTimeout(function(){ $('.newBookForm').find("input[type=text], input[type=url], textarea").val(""); }, 3000);
  //   }, function errorCallback(response) {
  //     console.log('There was an error posting the data', response);
  //   });
  // };
  // //
  // // vm.editBook = function (book) {
  // //   console.log(book);
  // //   $http({
  // //     method: 'PUT',
  // //     url: 'https://super-crud.herokuapp.com/books/'+book._id,
  // //     data: book
  // //   }).then(function successCallback(json) {
  // //     console.log("PUT!");
  // //   }, function errorCallback(response) {
  // //     console.log('There was an error editing the data', response);
  // //   });
  // // };
  // //
  // // vm.deleteBook = function (book) {
  // //   $http({
  // //     method: 'DELETE',
  // //     url: 'https://super-crud.herokuapp.com/books/'+ book._id
  // //   }).then(function successCallback(json) {
  // //     console.log("test");
  // //     var index = vm.book.indexOf(book);
  // //     vm.books.splice(index,1);
  // //   }, function errorCallback(response) {
  // //     console.log('There was an error deleting the data', response);
  // //   });
  // // };
}
