'use strict';

define(['app'], function (app) {

    var proyectoDetalleMapaController = function ($scope, $stateParams, $http) {

//        console.log($scope.contenido);

        jQuery(function() {
            $('.imgMapaProy').magnificPopup({
              delegate: 'a', // child items selector, by clicking on it popup will open
              type: 'image',
                    tLoading: 'Cargando imagen #%curr%...',
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                            enabled: false,
                            navigateByImgClick: true,
                            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    },
            });        
        });
    };

    app.register.controller('ProyectoDetalleMapaController', ['$scope', '$stateParams', '$http', proyectoDetalleMapaController]);
    
});
