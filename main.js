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

$scope.materials.sort()


//=================================================//

$scope.projectResources = []

$scope.projectMaterials = function(index) {
// console.log($scope.materials)

$scope.projectResources.push($scope.materials)

// console.log($scope.projectResources)
}

//==============================================//

$scope.crafts =  [
	{
		craftName       : 'String Art Heart',
		craftMaterials  : ['string', 'cardstock', 'scissors' ],
		craftDirections : ['Step 1', 'Step 2', 'Step 3'],
		craftDisplay	:  true
	},

	{
		craftName       : 'Duct Tape Pouch',
		craftMaterials  : ['construction paper', 'duct tape', 'scissors'],
		craftDirections : ['Step 1', 'Step 2', 'Step 3'],
		craftDisplay	:  true
	},

];


//==============================================//
$scope.submitProject = function() {
	$scope.project = []
	
		$scope.project.push($scope.material01)
		$scope.project.push($scope.material02)
		$scope.project.push($scope.material03)


	for(var i = 0; i < $scope.crafts.length; i++) {
		$scope.crafts[i].craftDisplay = false
		var craftList = []

		for(var j = 0; j < $scope.crafts[i].craftMaterials.length; j++) {


			for(var k = 0; k < $scope.project.length; k++) {
				
				if($scope.project[k].name === $scope.crafts[i].craftMaterials[j]) {
					// $scope.crafts[i].craftDisplay = true
					craftList.push($scope.project[k].name)

				}






				// console.log($scope.project[k])
				// console.log($scope.crafts[i].craftMaterials[j])
				// console.log('=-=-=-=-=-=-=-=-=-=-=')
			}
		}
		console.log(craftList)
		if(craftList.length >= 2) {
			$scope.crafts[i].craftDisplay = true
		}
	}

	
}


}])












