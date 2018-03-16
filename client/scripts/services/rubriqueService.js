angular.module('spiApp')
.factory('rubriqueSvc', ['$http', function ($http) {
  var factory = {};

  factory.getRubriques = function (callback) {
    var endPoint = "http://localhost:8090/rub"
    $http.get(endPoint).then(function (response) {
      callback(response.data);
    });
  }


  factory.saveRubrique = function (rubrique, callback) {
    var endPoint = "http://localhost:8090/rubrique"
    $http.post(endPoint, rubrique).then(function (response) {
      callback(response.data);
    });
  }

  factory.getRubriqueById = function (idRubrique, callback) {
    var endPoint = "http://localhost:8090/rub/" + idRubrique
    $http.get(endPoint).then(function (response) {
      callback(response.data);
    });
  }


  factory.deleteRubriqueById = function (idRubrique, callback) {
    var endPoint = "http://localhost:8090//deleteRubrique/" + idRubrique
    $http.delete(endPoint).then(function (response) {
      callback(response.data);
    });
  }

  factory.updateRubrique = function (rubrique, callback) {
    var endPoint = "http://localhost:8090/updateRubrique"
    $http.put(endPoint, rubrique).then(function (response) {
      callback(response.data);
    });
  }

  factory.getRubriquesCount = function (callback) {
    var endPoint = "http://localhost:8090/rub/count"
    $http.get(endPoint).then(function (response) {
      callback(response.data);
    });
  }

  return factory;

}])