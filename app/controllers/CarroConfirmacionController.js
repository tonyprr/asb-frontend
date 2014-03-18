'use strict';

define(['app'], function (app) {

    var carroConfirmacionController = function ($scope, $stateParams, $filter, $http, $location, Auth, userService, dataService) {
        $scope.pedido = {};

        var load = function() {
            console.log("load... tipo: " + localStorage['ultCompraTipo']);
//                userService.cartUser.getPedido(7,
//                    function(resp) {
//                        $scope.pedido = resp.data;
//                    }
//                 );
            
            if (parseInt(localStorage['ultCompraTipo']) === 1) {//deposito
                userService.cartUser.getPedido(localStorage['ultCompraId'],
                    function(resp) {
                        $scope.pedido = resp.data;
                        $scope.idUltimaOrden = localStorage['ultCompraId'];
                        console.log("lista de pedido por banco");
                    }
                 );
                localStorage['ultCompraTipo'] = 0;
            } else if (parseInt(localStorage['ultCompraTipo']) === 2) {//paypal
                console.log("inciar pedido por paypal...");
                var codigoTransaccion =  $location.search()['tx'],
                    estadoTransaccion =  $location.search()['st'],
                    montoTransaccion =  $location.search()['amt'];
            
                userService.cartUser.confirmarPagoPayPal(localStorage['ultCompraId'], codigoTransaccion, 
                    function(resp) {
                        userService.cartUser.getPedido(localStorage['ultCompraId'],
                            function(resp) {
                                $scope.pedido = resp.data;
                                $scope.idUltimaOrden = localStorage['ultCompraId'];
                                localStorage['ultCompraTipo'] = 0;
                                console.log("lista de pedido por paypal");
                            }
                         );
                    }
                 );
                
            } else {
                return;
            }
            
        }
        
        load();
        
        
    };
    
    app.register.controller('CarroConfirmacionController', ['$scope', '$stateParams', '$filter', '$http', '$location', 'Auth', 'userService', 'dataService', carroConfirmacionController]);
    
});