'use strict';

define(['app'], function (app) {

    var initController = function ($scope, $rootScope, $http, $location, Auth) {
        var appTitle = 'Inicio';
        $scope.appTitle = appTitle;
        $scope.user = Auth.user;
        $scope.userRoles = Auth.userRoles;
        $scope.accessLevels = Auth.accessLevels;
        $scope.menu = '';

//        $('#id_content_view').css('height', "100%");
//        $('#id_content_view').css('background-color', "black");
        $scope.logout = function() {
            Auth.logout(function() {
                $location.path('/login');
            }, function() {
                $rootScope.error = "No se pudo salir de su sesión.";
            });
        };

        
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
        
        $scope.path = function() {
            return $location.url();
        };
        
        $scope.buscarProductos = function() {
            $location.path( "/arreglos_busqueda/" + $scope.textSearch);
        };
        
        $scope.selectMenu = function (menu) {
            $scope.menu = menu;
        };
        
        $scope.isActiveMenu = function (menu) {
            return $scope.menu === menu;
        };

        $scope.selectMenu($location.path());
        //console.log($location.path());
        //$scope.isActiveMenu($location.path());
        
        
        $rootScope.appUrl = "/asb-backend/web/api";
    };

    app.controller('InitController', ['$scope', '$rootScope', '$http', '$location', 'Auth', initController]);
    
});