/**
 * Created by bwpc on 19.05.2015.
 */
angular.module('AngularApp.registrieren', [])

    .controller('RegistrierenController', ['$routeParams', '$resource', RegistrierenController]);

function RegistrierenController($routeParams, $resource) {
    this.submit = function(type, loginname, passwort, passwortWdh, email, nachname, vorname, plz, ort, strasse, hausnr) {
        this.neuerKunde = JSON.stringify({
            'type': type,
            'identity': {
                'loginname': loginname,
                'enabled': true,
                'expirationDate': null,
                'password': passwort,
                'passwordWdh': passwortWdh,
                'nachname': nachname,
                'vorname': vorname,
                'email': email,
                'adresse': {
                    'plz': plz,
                    'ort': ort,
                    'strasse': strasse,
                    'hausnr': hausnr
                }
            },
            'seit': '2015-05-05',
            'agbAkzeptiert': true
        });

        this.registrierenUri = 'https://localhost:8443/shop/rest/registrierung';
        this.registrierenResource = $resource(this.registrierenUri, {}, {
            'registriereKunde': {method: 'POST'}
        });

        this.registrierenResource.registriereKunde(this.neuerKunde, function(value, responseHeaders) {
            console.log(responseHeaders);
            console.log(value);
        }, function(httpResponse) {
            console.log(httpResponse);
        });
    }
}

