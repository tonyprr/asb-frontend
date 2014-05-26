'use strict';

define(['app'], function (app) {

    var proyectoDetalleVideoController = function ($scope, $stateParams, $sce) {

//        $scope.proyecto = $scope.parent;
//        console.log($scope.contenido.url);

//        $scope.urlVideo = $sce.trustAsHtml(contenido.url);
        $scope.code = $scope.contenido.url;//'oHg5SJYRHA0';
    };

    app.register.controller('ProyectoDetalleVideoController', ['$scope', '$stateParams', '$sce', proyectoDetalleVideoController]);
    
});
