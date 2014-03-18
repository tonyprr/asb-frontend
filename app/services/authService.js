'use strict';

define(['app'], function (app) {

    var authService = function ($http, $rootScope, $q, $cookieStore) {
        var accessLevels = routingConfig.accessLevels
            , userRoles = routingConfig.userRoles
            , currentUser = $cookieStore.get('user') || { username: 'Invitado', role: userRoles.public };


        function changeUser(user) {
            $cookieStore.put('user', user);
            _.extend(currentUser, user);
//            console.log(currentUser);
        };

        return {
            authorize: function(accessLevel, role) {
                if(role === undefined)
                    role = currentUser.role;
//                console.log("rol de usuario: ");
//                console.log(role);
                return accessLevel.bitMask & role.bitMask;
            },
            isLoggedIn: function(user) {
                if(user === undefined)
                    user = currentUser;
                return user.role.title == userRoles.user.title || user.role.title == userRoles.admin.title;
            },
            register: function(user, success, error) {
                $http.post($rootScope.appUrl + '/registro', {operacion: 'new_user', user: user}).success(function(res) {
                    //changeUser(res);
                    success(res);
                }).error(error);
            },
            activation: function(user, key, success, error) {
                $http.put($rootScope.appUrl + '/registro', {operacion: 'activation_user', user: user, key: key}).success(function(res) {
                    //changeUser(res);
                    success(res);
                }).error(error);
            },
            login: function(user, success, error) {
                $http.post($rootScope.appUrl + '/login', user).success(function(user){
                    if (user.role === "user") {
                        user.role = userRoles.user
                    }
                    changeUser(user);
                    success(user);
                }).error(error);
            },
//            return $http.post($rootScope.appUrl + '/login', { 'usuariox' : usuario, 'clave': clave })
//                    .success(function(data, status, headers, config) {
//                        //$scope.productos = data.data;
//                        //angular.copy($scope.productos, $scope.copy);
//                        return {data: data, headers: headers};
//                });
            
            logout: function(success, error) {
                $http.post($rootScope.appUrl + '/logout').success(function(){
                    changeUser({
                        username: 'Invitado',
                        role: userRoles.public
                    });
                    $cookieStore.remove('user');
                    success();
                }).error(error);
            },
            retrieveKey : function (email, success, error) {
                $http.put($rootScope.appUrl + '/login', {operacion: 'retrieve_key', email: email}).success(function(res) {
                    success(res);
                }).error(error);
            }
            ,accessLevels: accessLevels,
            userRoles: userRoles,
            user: currentUser
        };

    };

    app.factory('Auth', ['$http', '$rootScope', '$q', '$cookieStore', authService]);

});