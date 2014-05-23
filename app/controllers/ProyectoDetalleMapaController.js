'use strict';

define(['app'], function (app) {

    var proyectoDetalleMapaController = function ($scope, $stateParams, $http, $location,
                                contenidoService) {

//        $scope.proyecto = $scope.parent;
        console.log($scope.contenido);

    };

    app.register.controller('ProyectoDetalleMapaController', ['$scope', '$stateParams', '$http', '$location',
        'contenidoService', proyectoDetalleMapaController]);
    
});
