'use strict';

define(['app'], function (app) {

    var contactoService = function ($http, $rootScope, $timeout) {
        var contactoFactory = {};
        contactoFactory.enviarContacto = function(contacto) {
            console.log(contacto.nombre);
            
            $http.post($rootScope.appUrl + '/contacto', contacto)
            .success(function(data, status, headers, config) {
                if (data.success === 1) {
                    $("#formContacto").html('<p class="bg-info">' + data.msg + '</p>');
                } else {
                    $rootScope.error = data.msg;
                    $timeout(function() {
                        $rootScope.error = null;
                    }, 5000);
                }
            }).error(function(err) {
                    $rootScope.error = "Error en la consulta.";
                    $timeout(function() {
                        $rootScope.error = null;
                    }, 4000);
            });
        };
        return contactoFactory;
    };

    app.factory('contactoService', ['$http', '$rootScope', '$timeout', contactoService]);

});