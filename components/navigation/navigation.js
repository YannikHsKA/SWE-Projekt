/**
 * Created by bwpc on 19.05.2015.
 */
angular.module("AngularApp.navigation", [])
    .controller("NavigationController", NavigationController);

// Note that the controller name is NavigationController. If we give something else, Angular wont be able to do binding.
// Note that the controller doesnt inject $scope.
function NavigationController() { // Dont inject $scope. Angular wont be able to create controller.
    this.title = "Welcome"; // Binding on this not $scope
    this.options = ["Home", "My Account", "Log Out"]; // Binding on this not $scope
}