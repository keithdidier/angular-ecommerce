angular.module('ecommerce').component('product', {
    templateUrl: 'app/components/product/product.html',
    controller: function() {
       
    },
    controllerAs: 'prdct',
    bindings: {
        product: "<",
        buttonLabel: "@",
        buttonAction: "&"
    }
})