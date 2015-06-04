angular.module('AngularApp.produkte', [])
      .controller('ProdukteController', ['$routeParams', ProdukteController]);

function ProdukteController($routeParams) {
this.artikelInfos = [ {
  beschreibung: "Dieses Sofa lädt zum ausgiebigen Entspannen ein. Es hat eine Breite von ca. 230 cm und eine eindrucksvolle Tiefe von ca. 130 cm. Damit haben Sie viel Platz zum Lesen, Dösen und um die Füße auszustrecken. Die Materialkombination punktet mit Natürlichkeit: Der erstklassige Bezug verbindet schwarzes Rindleder mit Leinen und Jute in Naturfarbe. Die Gestaltung der Nähte zeigt Liebe zum Detail und unterstreicht das ästhetische Design. Die Rücken- sowie Zierkissen machen gemeinsam mit der Schaumstoffpolsterung Lust auf lange Abende auf Ihrer Couch. Bequemes Extra: In den seitlichen Ablagetaschen verstauen Sie etwa Ihre Fernbedienungen oder Ihr Smartphone und haben diese selbst im Liegen griffbereit. Profitieren Sie mit diesem Megasofa von hochwertiger LANDSCAPE Markenqualität. Das Sofa ist eine Wohlfühloase in Ihrem Wohnzimmer!",
  artikel_img: "./src/img/sofa_isola.jpg",
  id: 1,
  bezeichnung: "Sofa Isola",
  preis: 150.50
  
},
{
  beschreibung: "Dieser Schwingstuhl lässt Sie komfortabel Sitzen! Der chromfarbene C-Fuß aus Flachrohr ist mit einem Bezug im braunen Lederlook kombiniert. Mit einer Sitzbreite von ca. 41 cm bietet der Schwingstuhl eine bequeme Sitzfläche. Fragen Sie unsere Fachberater für eine alternative Farb- und Stoffauswahl. Bequemes Sitzen in Ihrem Esszimmer!",
  artikel_img: "./src/img/LionStuhl.jpg",
  id: 2,
  bezeichnung: "Lion Stuhl",
  preis: 32.50
  
},
{
  beschreibung: "Dieser Esstisch punktet im trendigen Used-Look. Die vollmassive Tischplatte besteht aus Altholz mit einer antiken Oberfläche in Weiß. Eine zusätzliche Platte aus transparentem Sicherheitsglas versiegelt die Tischoberfläche. In Kombination dazu entsteht eine perfekte Harmonie durch die 2 modernen Füße aus glänzendem Edelstahl in U-Form. Durch die Breite von ca. 210 cm bietet der Esstisch umfangreichen Platz für Ihre Familie und Gäste. Mit dem Esstisch von AMBIA HOME verbringen Sie gemütliche Abendessen und lustige Spieleabende mit Ihren Freunden!",
  artikel_img: "./src/img/glastisch.jpg",
  id: 3,
  bezeichnung: "Moderner Glastisch",
  preis: 250.99
  
},
{
  beschreibung: "Dieses Regal ist einfach praktisch. Bei einer Größe von ca. 79 x 149 cm (B x H) bietet es 8 offene Fächer. Hier bewahren Sie Akten, Ordner oder dekorative Accessoires auf. Aus einer hochwertigen Flachpressplatte gefertigt, garantiert das Möbel beste Qualität. Dabei macht es dank der Dekorfolie in mattem Weiß eine exzellente Figur. Dieses Regal überzeugt!",
  artikel_img: "./src/img/regal.jpg",
  id: 4,
  bezeichnung: "Buecherregal Grunge",
  preis: 42.99
  
}]

  this.id = $routeParams.id;

}

