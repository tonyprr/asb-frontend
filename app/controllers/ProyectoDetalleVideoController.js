'use strict';

define(['app'], function (app) {

    var proyectoDetalleVideoController = function ($scope, $stateParams, $http, $sce,
                                contenidoService) {

//        $scope.proyecto = $scope.parent;
        console.log($scope.contenido);

        $scope.urlVideo = $sce.trustAsHtml(contenido.url);
    };

    app.register.controller('ProyectoDetalleVideoController', ['$scope', '$stateParams', '$http', '$sce',
        'contenidoService', proyectoDetalleVideoController]);
    
});
