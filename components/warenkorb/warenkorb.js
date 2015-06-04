angular.module('AngularApp.warenkorb', [])
    .controller('WarenkorbController', WarenkorbController);

function WarenkorbController() {

    this.artikelInfos = [ {
        artikelNr: 1,
        bezeichnung: "Sofa Isola",
        preis: 150.50

    },
        {
            artikelNr: 2,
            bezeichnung: "Lion Stuhl",
            preis: 32.50
        },
        {
            artikelNr: 3,
            bezeichnung: "Moderner Glastisch",
            preis: 250.99
        },
        {
            artikelNr: 4,
            bezeichnung: "Buecherregal Grunge",
            preis: 42.99
        }
    ]
}