'use strict';

define(['app'], function (app) {

    var empresaController = function ($scope, $rootScope, $stateParams, $filter, $http, $location) {
        var appTitle = 'Empresa';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };

        $("#banner").backstretch("./img/banner/empresa.jpg");
        var $window = $(window).on('resize', function() {
            if ($(window).height() <= 650 && $(window).width() >= 768) {
            } else 
            if ($(window).width() <= 767) {
                            $('#banner').height(
                                    ($(window).height() - $('#header').height() - $('#footer').height() - 20) / 2
                            );    
            } else {
                            $('#banner').height(
                                    $(window).height() - $('#header').height() - $('#footer').height() - 40
                            );    
            }
            $("#banner").backstretch("./img/banner/empresa.jpg");
        }).trigger('resize'); //on page load     
    };

    app.register.controller('EmpresaController', ['$scope', '$rootScope', '$stateParams', '$filter', '$http', '$location', empresaController]);
    
});
