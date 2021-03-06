'use strict';

define(['app'], function (app) {

    var empresaController = function ($scope, $rootScope, $stateParams, $filter, $http, $location) {
        var appTitle = 'Empresa';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };
        $(window).off("resize");

        $("#banner").backstretch("./img/banner/empresa.jpg");
        $("#banner").on("backstretch.before", function (e, instance, index) {
            $(".backstretch").hide();
        });
        
        $("#banner").on("backstretch.after", function (e, instance, index) {
            $(".backstretch").show("slow");
        });

        var $window = $(window).on('resize', function() {
            if ($(window).height() <= 650 && $(window).width() >= 768) {
            } else 
            if ($(window).width() <= 800 && $(window).height() >= 700) {
                    $('#banner').height(
                            2*($(window).height() - $('#header').height() - $('#footer').height())/3
                    );    
            } else 
            if ($(window).width() <= 767) {
                    $('#banner').height(
                        $(window).height() - $('#header').height() - $('#footer').height() - 125
                    );
            } else {
                            $('#banner').height(
                                    $(window).height() - $('#header').height() - $('#footer').height() - 40
                            );    
            }
            $("#banner").backstretch("./img/banner/empresa.jpg");
        }).trigger('resize'); //on page load     
        $('.carousel').carousel();
    };

    app.register.controller('EmpresaController', ['$scope', '$rootScope', '$stateParams', '$filter', '$http', '$location', empresaController]);
    
});
