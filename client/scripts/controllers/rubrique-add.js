
angular.module('spiApp')
.controller('rubriqueAddCtrl', ['$scope', 'rubriqueSvc', '$location' ,function ($scope, rubriqueSvc, $location) {

  $scope.sujet = "une rubrique";
  $scope.editoption = "l\'ajout";

  $scope.editRubrique = {};

  

  $scope.editSubmit = function () {
    rubriqueSvc.saveRubrique($scope.editRubrique, function (data) {
      $location.path('rubriques');
    });
  }   

  $scope.cancelEditing = function () {
    $location.path('rubriques');
  }


}]);