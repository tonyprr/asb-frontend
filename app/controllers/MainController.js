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
                if ($(window).width() <= 767) {
                    $('#banner').height(
                        ($(window).height() - $('#header').height() - $('#footer').height() - 90) / 2
                    );
                } else {
                    $('#banner').height(
                        $(window).height() - $('#header').height() - $('#footer').height() - 40
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
    }

    app.register.controller('MainController', ['$scope', '$location', mainController]);
    
});