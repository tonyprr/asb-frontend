'use strict';

define(['app'], function (app) {

    var mainController = function ($scope, $location, $timeout, contenidoService) {
        var appTitle = 'Home';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };
        $(window).off("resize");

        $scope.mostrarTitulo = new Array();
        
        $scope.mostrarTitulo[0] = true;
        $scope.mostrarTitulo[1] = true;
        $scope.mostrarTitulo[2] = false;
        $scope.mostrarTitulo[3] = false;
        $scope.mostrarTitulo[4] = false;
        $scope.mostrarTitulo[5] = false;
        $scope.mostrarTitulo[6] = false;
        $scope.item = 1;
        $scope.activarTime = true;

        //$("#banner").backstretch("./img/banner/1.jpg");
           $("#banner").backstretch([
                "./img/banner/1.jpg"
              , "./img/banner/2.jpg"
              , "./img/banner/3.jpg"
              , "./img/banner/4.jpg"
              , "./img/banner/5.jpg"
              , "./img/banner/6.jpg"
            ], {duration: 6000, fade: 0});          

            var $window = $(window).on('resize', function() {
//            alert($(window).height())
                console.log("resize on...");
                if ($(window).height() <= 650 && $(window).width() >= 768) {
                } else 
                if ($(window).width() <= 767) {
                    $('#banner').height(
                        ($(window).height() - $('#header').height() - $('#footer').height() - 90) / 2
                    );
                } else {
                    $('#banner').height(
                        $(window).height() - $('#header').height() - $('#footer').height() - 65
                    );
                }

                $("#banner").backstretch([
                     "./img/banner/1.jpg"
                   , "./img/banner/2.jpg"
                   , "./img/banner/3.jpg"
                   , "./img/banner/4.jpg"
                   , "./img/banner/5.jpg"
                   , "./img/banner/6.jpg"
                 ], {duration: 6000, fade: 0});          
            }).trigger('resize'); //on page load      
    	
          //$('#modalLoading').modal('hide');

        //owl.trigger('owl.play',3000);
//        $('.carousel').carousel({
//            interval: 3000
//        });
//        $('.carousel').carousel('cycle')
        
//        $('#titulo-home').addClass('animated bounceInLeft');
//        $('#banner').addClass('animated fadeIn');
        

        $("#banner").on("backstretch.before", function (e, instance, index) {
            $(".backstretch").hide();
        });
        
        $("#banner").on("backstretch.after", function (e, instance, index) {
            $(".backstretch").show("slow");
            if ($scope.activarTime)
            {
                console.log("activacion time...")
                $scope.activarTime = false;
                $timeout(function() {
                    setInterval(function() {
        //                console.log("interval... " + $scope.item);
                        $scope.mostrarTitulo[$scope.item] = false;
                        if ($scope.item === 6)
                            $scope.item = 0;
                        $scope.item++;
                        $scope.mostrarTitulo[$scope.item] = true;
                        $scope.$apply();
                    }, 6000);
                }, 500, true);
            }
        });

       var load = function() {
             contenidoService.listaContenidos(null, 2,
                 function(resp) {
                    $scope.contenidos = resp.data;
                    $timeout(function() {
                    
                        var owl = $("#owl-proyectos");
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

                        });
                    }, 900);
        
                    
                }
             );
        };

        load();

    }

    app.register.controller('MainController', ['$scope', '$location', '$timeout', 'contenidoService', mainController]);
    
});