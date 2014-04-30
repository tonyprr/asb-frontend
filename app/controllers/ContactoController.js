'use strict';

define(['app'], function (app) {

    var contactoController = function ($scope, $location) {
        var appTitle = 'Contacto';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
        $('#map_canvas').height(360);
//        var $window = $(window).on('resize', function() {
//                    $('#map_canvas').height(
//                            $(window).height() - $('#header').height() - $('#footer').height() - $('#contact').height() - 35
//                    );    
//        }).trigger('resize'); //on page load      
        initialize();

        $("#banner").backstretch("./img/banner/contactenos.jpg");
        var $window = $(window).on('resize', function() {
            if ($(window).width() <= 767) {
                $('#contenido').height(
                        ($(window).height() - $('#header').height() - $('#footer').height() - 20) / 2
                );    
            } else if ($(window).width() <= 1280) {
                $('#contenido').height(
                        $(window).height() - $('#header').height() - $('#footer').height() - 80
                        //2*($(window).height() - $('#header').height() - $('#footer').height())/3 + 44
                );    
            }  else {
                    $('#contenido').height(
                            2*($(window).height() - $('#header').height() - $('#footer').height() - 15)/3
                    );    
            }

            $("#banner").backstretch("./img/banner/contactenos.jpg");
        }).trigger('resize'); //on page load     
        


        function initialize() {
                var myLatlng = new google.maps.LatLng(-12.1443000,-77.0180000);
                var mapOptions = {
                        zoom: 17,
                        center: myLatlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

                var contentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                   // '<h2 id="firstHeading" class="firstHeading">Maido Mitsuharu</h2>'+
                    '<div id="bodyContent">'+
                        '<div class="foto_mapa"></div>' +
                    '<p class="text-marron">Bolognesi 125 Of. 1101<br/>' +
                        '	Miraflores - Lima, Perú <br/>' +
                        '	Tele - Fax  241-8724 / 241 8142 <br/>' +
                        '	Email: <a href="mailto:asbcg@asbcontratistas.com">asbcg@asbcontratistas.com</a> </p>'
                   '</div>'+
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });


                var image = 'img/iconos/ico-ASB.png';
                var myLatLng = new google.maps.LatLng(-12.1443000,-77.0180000);
                var beachMarker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title:"ASB Contratistas",
                        animation: google.maps.Animation.DROP,
                        icon: image
                });


                google.maps.event.addListener(beachMarker, 'click', function() {
                        infowindow.open(map,beachMarker);
                });

                //google.maps.event.trigger(map, 'resize');

                var styles = [
                  {
                    featureType: "all",
                    stylers: [
                      { hue: "#656565" },
                      {Weight:3.5},
                      { saturation: -95 }
                    ]
                  },
                  {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                      { lightness: 90 },
                      { visibility: "simplified" }
                    ]
                  },{
                    featureType: "road",
                    elementType: "labels",
                    stylers: [
                      { visibility: "on" }
                    ]
                  }
                ];

                map.setOptions({styles: styles});


        }
//google.maps.event.addDomListener(window, 'load', initialize);
        google.maps.event.addDomListener(window, 'resize', initialize);

        
    };

    app.register.controller('ContactoController', ['$scope', '$location', contactoController]);
    
});