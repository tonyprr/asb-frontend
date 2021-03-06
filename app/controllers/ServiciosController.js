'use strict';

define(['app'], function (app) {

    var serviciosController = function ($scope, $rootScope, $stateParams, $filter, $timeout, $location, contenidoService) {
        var appTitle = 'Servicios';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };
        $(window).off("resize");

        $("#banner").backstretch("./img/banner/servicios.jpg");
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
            $("#banner").backstretch("./img/banner/servicios.jpg");
        }).trigger('resize'); //on page load     
        
       var load = function() {
             contenidoService.listaContenidos(null, 3,
                 function(resp) {
                    $scope.contenidos = resp.data;

                    $timeout(function() {
                        
                        var owl = $("#owl-carousel");
                        owl.owlCarousel({
                            items : 4, //10 items above 1000px browser width
                            itemsDesktop : [1000,3], //5 items between 1000px and 901px
                            itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
                            itemsTablet: [600,2], //2 items between 600 and 0;
                            itemsMobile : [500, 1], // itemsMobile disabled - inherit from itemsTablet option

                            slideSpeed : 800,
                            paginationSpeed : 3000,

                            pagination : false,
                            autoPlay : true,

                            autoHeight : true

                            //lazyLoad : true

                            //transitionStyle:"fade"


                        });
                        $(".next").click(function(){
                            owl.trigger('owl.next');
                        });

                        $(".prev").click(function(){
                            owl.trigger('owl.prev');
                        });

                    }, 900);
                    
                }
             );
     
        }
        load();
      
    };

    app.register.controller('ServiciosController', ['$scope', '$rootScope', '$stateParams', '$filter', '$timeout', '$location', 'contenidoService', serviciosController]);
    
});
