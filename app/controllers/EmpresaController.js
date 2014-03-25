'use strict';

define(['app'], function (app) {

    var empresaController = function ($scope, $rootScope, $stateParams, $filter, $http, $location) {
        var appTitle = 'Empresa';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };

			$("#banner").backstretch("./img/banner/empresa.jpg");
		    var $window = $(window).on('resize', function() {
		    	if ($(window).width() <= 767) {
					$('#contenido').height(
						($(window).height() - $('#header').height() - $('#footer').height() - 20) / 2
					);    
		    	} else {
					$('#contenido').height(
						$(window).height() - $('#header').height() - $('#footer').height() - 50
					);    
	    		}
				$("#banner").backstretch("./img/banner/empresa.jpg");
			}).trigger('resize'); //on page load     
    };

    app.register.controller('EmpresaController', ['$scope', '$rootScope', '$stateParams', '$filter', '$http', '$location', empresaController]);
    
});
