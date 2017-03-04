var dashboard = angular.module("dashboard", []); 

dashboard.directive('groceryList', function() {
    return {

        restrict: 'E',
        templateUrl: 'templates/grocery.html',
        controller: function($scope, $element, $attrs, $transclude) {
			$scope.availableCat = [
				"Fruits et légumes",
				"Boissons",
				"Autre"
			];
			$scope.newItem = {quantity:1};
			$scope.showNewItem = false;
			
			
			$scope.toggleAddItem = function(item) {
				$scope.showNewItem = !$scope.showNewItem;
			};
		}
    };
});

/*
app.controller("myCtrl", function($scope) {
    $scope.availableCat = [
        "Fruits et légumes",
        "Boissons",
        "Autre"
    ];
    $scope.newItem = {quantity:1};
    $scope.showNewItem = false;
    
    grocerySocket.on("listCategories", function(categories){
        $scope.categories = categories;
        $scope.$apply();
    });
    
    $scope.toggle = function(item) {
        grocerySocket.emit('toggleItem', item);
    };
    
    $scope.toggleAddItem = function(item) {
        $scope.showNewItem = true;
    };
    $scope.addItem = function(item) {
        grocerySocket.emit('addItem',$scope.newItem);
        $scope.newItem = {quantity:1};
        $scope.showNewItem = false;
    };
    $scope.cleanUp = function() {
        grocerySocket.emit('cleanUp');
    };
});//*/