﻿'use strict';

define(['app'], function (app) {

    var dataService = function ($http, $rootScope, $q) {
       var productosFactory = {};

        productosFactory.getProductos = function (pageIndex, pageSize) {
            return null;
        };
        
        
        // create shopping cart
        var myCart = new shoppingCart("AngularStore");

        // enable PayPal checkout
        // note: the second parameter identifies the merchant; in order to use the 
        // shopping cart with PayPal, you have to create a merchant account with 
        // PayPal. You can do that here:
        // https://www.paypal.com/webapps/mpp/merchant
        myCart.addCheckoutParameters("PayPal", "tonyprr-facilitator@gmail.com");

        // enable Google Wallet checkout
        // note: the second parameter identifies the merchant; in order to use the 
        // shopping cart with Google Wallet, you have to create a merchant account with 
        // Google. You can do that here:
        // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
        myCart.addCheckoutParameters("Google", "xxxxxxx",
            {
                ship_method_name_1: "UPS Next Day Air",
                ship_method_price_1: "20.00",
                ship_method_currency_1: "USD",
                ship_method_name_2: "UPS Ground",
                ship_method_price_2: "15.00",
                ship_method_currency_2: "USD"
            }
        );

        // enable Stripe checkout
        // note: the second parameter identifies your publishable key; in order to use the 
        // shopping cart with Stripe, you have to create a merchant account with 
        // Stripe. You can do that here:
        // https://manage.stripe.com/register
        myCart.addCheckoutParameters("Stripe", "pk_test_xxxx",
            {
                chargeurl: "https://localhost:1234/processStripe.aspx"
            }
        );

        // return data object with store and cart
        return {
            store: productosFactory,
            cart: myCart
        };

    };

    app.factory('dataService', ['$http', '$q', '$rootScope', dataService]);

});