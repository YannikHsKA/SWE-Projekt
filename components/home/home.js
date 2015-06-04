/**
 * Created by bwpc on 18.05.2015.
 */
angular.module("AngularApp.home", [])
    .controller("HomeController", HomeController);

function HomeController() {
    this.name = "Home";

}