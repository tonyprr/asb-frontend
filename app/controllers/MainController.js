'use strict';

define(['app'], function (app) {

    var mainController = function ($scope, $location) {
        var appTitle = 'Home';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };

           $("#banner").backstretch([
                "./img/banner/1.jpg"
              , "./img/banner/2.jpg"
              , "./img/banner/3.jpg"
              , "./img/banner/4.jpg"
              , "./img/banner/5.jpg"
            ], {duration: 3000, fade: 800});          

//           $("#banner").backstretch("./img/banner-portada.jpg");
          var $window = $(window).on('resize', function() {
            $('#contenido').height(
              $(window).height() - $('#header').height() - $('#footer').height() - 20
            );    
            /*
            $("#banner").backstretch([
                "./img/banner-portada.jpg"
              , "http://dl.dropbox.com/u/515046/www/garfield-interior.jpg"
              , "./img/banner-about.jpg"
            ], {duration: 4000, fade: 750});          
            */
            //$('#banner').data('backstretch').pause();
            //$('#banner').data('backstretch').next();


          }).trigger('resize'); //on page load      
    	
          //$('#modalLoading').modal('hide');

//            jQuery171(function($) {
//                jQuery171( "#carousel" ).rcarousel({
//                    visible: 10,
//                    step: 1,
//                    speed: 5000,
//                    width: 151, 
//                    height: 170,
//                    auto: {enabled: true, direction: "next", interval: 0}
//                });
//            });

        var owl = $("#owl-demo");
        owl.owlCarousel({
            items : 10, //10 items above 1000px browser width
            itemsDesktop : [1000,5], //5 items between 1000px and 901px
            itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
            itemsTablet: [600,2], //2 items between 600 and 0;
            itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        });

        owl.trigger('owl.play',1000);
    }

    app.register.controller('MainController', ['$scope', '$location', mainController]);
    
});