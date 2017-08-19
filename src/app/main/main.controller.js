(function () {
    'use strict';

    angular
        .module('springBootPlaygroundUi')
        .controller('MainController', function ($http, $log) {

            var vm = this;
            vm.person = {};

            vm.getContactList = function () {
                $http.get("http://localhost:8080/person/all")
                    .then(function (successResponse) {
                        vm.contactInfo = successResponse.data;
                    }, function (failureResponse) {
                        $log.debug(failureResponse);
                    });
            };

            vm.addPerson = function () {
                $http({
                        url: "http://localhost:8080/person/addPerson",
                        method: "POST",
                        data: vm.person
                    })
                    .then(function (successResponse) {
                        $log.debug(successResponse);
                        vm.getContactList();
                    }, function (failureResponse) {
                        $log.debug(failureResponse);
                    });
            };

        });
})();
