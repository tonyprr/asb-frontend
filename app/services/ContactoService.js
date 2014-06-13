'use strict';

define(['app'], function (app) {

    var contactoService = function ($http, $rootScope, $q, $timeout) {
        var catecontactoFactory = {};
        catecontactoFactory.getGaleriaById = function(idcont, tipo, success) {
            $http.post($rootScope.appUrl + '/login', { 'usuariox' : usuario, 'clave': clave })
                .success(function(data, status, headers, config) {
                    return {data: data, headers: headers};
            }).error(function(err) {
                    $rootScope.error = "Error en la consulta.";
                    $timeout(function() {
                        $rootScope.error = null;
                    }, 4000);
            });

            $http.get($rootScope.appUrl + '/contacto', {params: {operacion: 'getGaleriaById', idcont: idcont, idtipo: tipo}}).success(function(data) {
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
        
        
        return catecontactoFactory;
        
    };

    app.factory('contactoService', ['$http', '$rootScope', '$q', '$timeout', contactoService]);

});