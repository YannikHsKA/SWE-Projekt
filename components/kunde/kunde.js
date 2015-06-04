/**
 * Created by bwpc on 19.05.2015.
 */
angular.module('AngularApp.kunde', [])

    .controller('KundeController', ['$routeParams', '$resource', KundeController]);

function KundeController($routeParams, $resource) {

    this.kundenUri = 'https://localhost:8443/shop/rest/kunden';

    this.kundenResource = $resource(this.kundenUri, {}, {
        'getAll': {method: 'GET', isArray:true}
    });

    this.submit = function() {
        this.kunden = this.kundenResource.getAll();
    }





    /*this.show = false;

    this.toggle = function(){
        this.show = !this.show;
    };

    this.id = $routeParams.id;*/
};