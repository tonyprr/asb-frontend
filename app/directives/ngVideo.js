'use strict';

define(['app'], function (app) {

    var ngVideo = function ($sce) {
        return {
            restrict: 'EA',
            scope: { code:'=' },
            replace: true,
            template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
            link: function (scope) {
                console.log('here');
                scope.$watch('code', function (newVal) {
                   if (newVal) {
                       console.log(newVal);
//                       scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
                       scope.url = $sce.trustAsResourceUrl(newVal);
                   }
                });
            }

        };

    };

    app.directive('ngVideo', ngVideo);

});