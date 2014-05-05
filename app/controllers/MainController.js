'use strict';

define(['app'], function (app) {

    var mainController = function ($scope, $location, $timeout) {
        var appTitle = 'Home';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };
        $scope.mostrarTitulo = true;

           $("#banner").backstretch([
                "./img/banner/1.jpg"
              , "./img/banner/2.jpg"
              , "./img/banner/3.jpg"
              , "./img/banner/4.jpg"
              , "./img/banner/5.jpg"
            ], {duration: 4000, fade: 1000});          

//           $("#banner").backstretch("./img/banner-portada.jpg");
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
                
            }).trigger('resize'); //on page load      
    	
          //$('#modalLoading').modal('hide');

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
        
        //owl.trigger('owl.play',3000);
//        $('.carousel').carousel({
//            interval: 3000
//        });
//        $('.carousel').carousel('cycle')
        
//        $('#titulo-home').addClass('animated bounceInLeft');
//        $('#banner').addClass('animated fadeIn');
        
            
            function mostrarTitulo () {
                $timeout(function() {
                    console.log("timeout...");
                    $scope.mostrarTitulo = true;
                }, 5000);
                
            }
            
            function ocultarTitulo () {
                $timeout(function() {
                    console.log("timeout ocultar...");
                    $scope.mostrarTitulo = false;
                }, 5000, true);
            }
            
            //ocultarTitulo()
//            setTimeout(function() {
//                alert("ccc");
//                //console.log("timeout ocultar...");
//                //$scope.mostrarTitulo = false;
//            }, 5000);
            
        $(window).on("backstretch.before", function (e, instance, index) {
          // If we wanted to stop the slideshow after it reached the end
            console.log("before...");
            $scope.mostrarTitulo = false;
            
//            if (index === instance.images.length - 1) {
//                instance.pause();
//            };
            
        });

    }

    app.register.controller('MainController', ['$scope', '$location', '$timeout', mainController]);
    
});