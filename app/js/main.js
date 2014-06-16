var VarsApp = {
    baseUrl : '/asb-frontend/app',
    autor : "Biellcon Digital"
};

require.config({
    baseUrl: VarsApp.baseUrl,
    urlArgs: 'v=1.0'
});

require(
    [
        'app',
//        'js/shoppingCart',
        'js/routingConfig',
        'services/routeResolver',
        'services/CategoriaContenidoService',
        'services/ContenidoService',
        'services/authService',
//        'services/dataService',
        'services/userService',
        'services/ContactoService',
        'directives/accessLevel',
        'directives/fbLike',
        'directives/fallbackSrc',
        'directives/ngVideo',
        'filters/parserDate',
        'controllers/InitController'
    ],
    function () {
        angular.bootstrap(document, ['myApp']);
    });