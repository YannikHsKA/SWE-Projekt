var module = angular.module("AngularApp", ["ngResource", "ngNewRouter", "AngularApp.navigation", "AngularApp.home", "AngularApp.produkte", "AngularApp.kunde", "AngularApp.warenkorb", "AngularApp.registrieren" ]);

module.controller("MainController", function($router){
    $router.config([
        {path: "/", redirectTo: "home"}, // Maps the default path to navigation component.
        {path: "/home", component:  "home"}, // Maps /home to navigation component.
        {path: "/produkte/:id", component: "produkte"},
        {path: "/kunde/:id", component: "kunde"},
        {path: "/registrieren", component: "registrieren"},
        {path: "/warenkorb", component: "warenkorb"}
    ]);
});