'use strict';

define(['app'], function (app) {

    var proyectosController = function ($scope, $rootScope, $stateParams, $filter, $http, $location) {
        var appTitle = 'Proyectos';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };

        $("#banner").backstretch("./img/banner/proyectos.jpg");
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
            $("#banner").backstretch("./img/banner/proyectos.jpg");
        }).trigger('resize'); //on page load     
        
//        var owl = $("#owl-carousel");
//        owl.owlCarousel({
//            items : 4, //10 items above 1000px browser width
//            itemsDesktop : [1000,3], //5 items between 1000px and 901px
//            itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
//            itemsTablet: [600,2], //2 items between 600 and 0;
//            itemsMobile : [500, 1], // itemsMobile disabled - inherit from itemsTablet option
//            
//            slideSpeed : 800,
//            paginationSpeed : 3000,
//
//            pagination : false,
//            autoPlay : true,
//            
//            autoHeight : true
//
//        });
//
        
        
    };

    app.register.controller('ProyectosController', ['$scope', '$rootScope', '$stateParams', '$filter', '$http', '$location', proyectosController]);
    
});
