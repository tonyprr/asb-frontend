'use strict';

define(['app'], function (app) {

    var proyectoDetalleGaleriaController = function ($scope, $stateParams, $sce, $http, $location,
                                contenidoService) {
        $scope.deliberatelyTrustDangerousSnippet = function(html) {
            return $sce.trustAsHtml(html);
        };        
        
       var load = function() {
             contenidoService.getGaleriaById($stateParams.idcont, $stateParams.tipo,
                 function(resp) {
                    $scope.galeriaImagenes = resp.data;
                    console.log("galeria loaded...");
                    jQuery(function() {
                        $('.itemsImgProy').magnificPopup({
                          delegate: 'a', // child items selector, by clicking on it popup will open
                          type: 'image',
                                tLoading: 'Cargando imagen #%curr%...',
                                mainClass: 'mfp-img-mobile',
                                gallery: {
                                        enabled: true,
                                        navigateByImgClick: true,
                                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                                },
                        });        
                    });
                }
             );
        };

        load();
        
    };

    app.register.controller('ProyectoDetalleGaleriaController', ['$scope', '$stateParams', '$sce', '$http', '$location',
        'contenidoService', proyectoDetalleGaleriaController]);
    
});
