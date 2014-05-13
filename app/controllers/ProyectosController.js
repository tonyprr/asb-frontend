'use strict';

define(['app'], function (app) {

    var proyectosController = function ($scope, $rootScope, $stateParams, $filter, $http, $location, 
            categoriaContenidoService, contenidoService) {
        var appTitle = 'Proyectos';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };

        $scope.cateSelec = {idcontcate: ''};
        
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
        
       var load = function() {
             categoriaContenidoService.listaCategorias(5,
                 function(resp) {
                     $scope.categorias = resp.data;
                 }
              );
             contenidoService.listaContenidos(null, 2,
                 function(resp) {
                    $scope.contenidos = resp.data;
                }
             );
     
        }

        load();
        $scope.selectCategoria = function(cate) {
            console.log(cate.idcontcate);
            $scope.cateSelec.idcontcate = cate.idcontcate;
        }
 
    };

    app.register.controller('ProyectosController', ['$scope', '$rootScope', '$stateParams', '$filter', '$http', '$location', 'categoriaContenidoService', 'contenidoService',  proyectosController]);
    
});
