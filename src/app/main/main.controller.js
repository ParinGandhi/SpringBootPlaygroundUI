(function () {
    'use strict';

    angular
        .module('springBootPlaygroundUi')
        .controller('MainController', function ($http, $log) {

            var vm = this;

            vm.getContactList = function () {
                $http.get("http://localhost:8080/person/all")
                    .then(function (successResponse) {
                        vm.contactInfo = successResponse.data;
                    }, function (failureResponse) {
                        $log.debug(failureResponse);
                    });
            };

        });
})();
