'use strict';

define(['app'], function (app) {

    var categoriaContenidoService = function ($http, $rootScope, $timeout) {
        var cateContenidoFactory = {};
        cateContenidoFactory.listaCategorias = function(idcate, success) {
            $http.get($rootScope.appUrl + '/categoria-contenido', {params: {operacion: 'lista', idcontcate: idcate }}).success(function(data) {
                if (data.success == 0) {
                    $rootScope.error = data.msg;
                    $timeout(function() {
                        $rootScope.error = null;
                    }, 5000);
                }
                success(data);
            }).error(function(err) {
                    $rootScope.error = "Error en la consulta.";
                    $timeout(function() {
                        $rootScope.error = null;
                    }, 4000);
                });
        };
        
        return cateContenidoFactory;
        
    };

    app.factory('categoriaContenidoService', ['$http', '$rootScope', '$timeout', categoriaContenidoService]);

});