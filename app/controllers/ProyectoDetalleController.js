'use strict';

define(['app'], function (app) {

    var proyectoDetalleController = function ($scope, $rootScope, $stateParams, $sce, $http, $location,
                                $timeout, contenidoService) {
        var appTitle = 'Detalle del Proyecto';
        $scope.appTitle = appTitle;
        $scope.contenido = {};
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };

        $(window).off("resize");
        
        $("#banner").backstretch("./img/banner/arequipa1.jpg");
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
            $("#banner").backstretch("./img/banner/arequipa1.jpg");
        }).trigger('resize'); //on page load     

        $scope.deliberatelyTrustDangerousSnippet = function(html) {
            return $sce.trustAsHtml(html);
        };        
        
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
       var load = function() {
             contenidoService.getById($stateParams.idcont,
                 function(resp) {
                    $scope.contenido = resp.data;

                    jQuery(function() {
                        $timeout( function() {
                            $('.imgPrinProy').magnificPopup({
                                delegate: 'a', // child items selector, by clicking on it popup will open
                                type: 'image',
                                tLoading: 'Cargando imagen #%curr%...',
                                closeOnContentClick: true,
                                closeBtnInside: false,
                                fixedContentPos: true,
                                mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                                image: {
                                    verticalFit: true
                                },
                                zoom: {
                                    enabled: true,
                                    duration: 300 // don't foget to change the duration also in CSS
                                }
                            });
                        }, 2000);
                    });

                }
             );
     
        };

        load();
        
        
    };

    app.register.controller('ProyectoDetalleController', ['$scope', '$rootScope', '$stateParams', '$sce', '$http', '$location',
        '$timeout', 'contenidoService', proyectoDetalleController]);
    
});
