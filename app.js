angular.module('libraryApp', ['ngRoute'])
       .config(config);

      //  .controller('BooksShowController', BooksShowController)
      //  .controller('BooksIndexController', BooksIndexController);

////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider', '$sceProvider'];
function config (  $routeProvider,   $locationProvider, $sceProvider)  {
  $sceProvider.enabled(false);

  $routeProvider
    .when('/', {
      templateUrl: '/templates/books/index.html',
      controller:  'BooksIndexController',
      controllerAs: 'booksCtrl'
    })
    .when('/books/:index', {
        templateUrl: '/templates/books/show.html',
        controller: 'BooksShowController',
        controllerAs: 'bookCtrl'
      })
    .otherwise({
      redirectTo: '/'
    });

  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
