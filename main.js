angular.module('craftApp', []);

angular.module('craftApp').controller('mainController', ['$scope', function($scope) {







$scope.materials = []

var Material = function(materialName) {

	this.name = materialName;
	
	$scope.materials.push(this)

}

// console.log($scope.materials)



var pipeCleaners = new Material ('pipe cleaners')
var glitter = new Material ('glitter')
var pomPoms	= new Material (' pom poms')
var feathers = new Material ('feathers')
var cottonBalls = new Material ('cotton balls')
var googlyEyes = new Material ('googly eyes')
var sequins = new Material ('sequins')
var string = new Material ('string')
var yarn = new Material ('yarn')
var crayons = new Material ('crayons')
var markers = new Material ('markers')
var coloredPencils = new Material ('colored pencils')
var felt = new Material ('felt')
var magazines = new Material ('magazines')
var cardboard = new Material ('cardboard')
var eggCartons = new Material ('egg cartons')
var masonJars = new Material ("mason jars")
var newspaper = new Material ('newspaper')
var paperBags = new Material ('paper bags')
var paper = new Material ('paper')
var constructionPaper = new Material ('construction paper')
var tissuePaper = new Material ('tissue paper')
var coffeeFilters = new Material ('coffee filters')
var paintBrushes = new Material ('paint brushes')
var glue = new Material ('glue')
var scissors = new Material ('scissors')
var paperTowels = new Material ('paper towels')
var scotchTape = new Material ('tape')
var ductTape = new Material ('duct tape')
var maskingTape = new Material ('masking tape')
var contactPaper = new Material ('contact paper')
var toiletPaperRolls = new Material ('toilet paper rolls')
var aluminumFoil = new Material ('aluminum foil')
var craftSticks = new Material ('craft sticks')
var cardstock = new Material ('cardstock')
var clothespins = new Material ('clothespins')
var stickers = new Material ('stickers')
var ribbon = new Material ('ribbon')
var buttons = new Material ('buttons')
var magnets = new Material ('magnets')
var beads = new Material ('beads')
var stencils = new Material ('stencils')
var paint = new Material ('paint')
var watercolors = new Material ('watercolors')
var hotGlueGun = new Material ('hot glue gun')
var modPodge = new Material ('mod podge')
var woodFrames = new Material ('wood frames')
var foam = new Material ('foam')





$scope.projectResources = []

$scope.projectMaterials = function(index) {
// console.log($scope.materials)

$scope.projectResources.push($scope.materials)

console.log($scope.projectResources)
}


$scope.submitProject = function() {
	$scope.project = {
		material01: $scope.material01,
		material02: $scope.material02,
		material03: $scope.material03
	}
console.log($scope.project)

}



// var heartCraft = function() {
// 	if(string)


// }

}])












