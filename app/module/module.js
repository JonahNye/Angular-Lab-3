"use strict";
// Defining a module
angular
  .module("App", ["ngRoute"]) // adds ngRoute as a dependency to the module
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // when the user navigates to the comp-one route(see index.html), load the compOne component in ngView
      .when("/user-profile", {
        template: "<user-profile></user-profile>"})
      // when the user navigates to the comp-one route(see index.html), load the compOne component in ngView
      .when("/edit-profile", {
        template: "<edit-profile></edit-profile>"})
        .otherwise({redirectTo:"/user-profile"})
  }])