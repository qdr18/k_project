'use strict';

/**
 * @ngdoc function
 * @name kProjectApp.controller:CameraListCtrl
 * @description
 * # DigitalVideo
 * Controller of the kProjectApp
 */
var app = angular.module('kProjectApp');
app.controller('CameraListCtrl', ['Camera', 'Policestation', '$scope', '$location', '$rootScope',
        function (Camera, Policestation, $scope, $location, $rootScope) {
        $scope.Camera_lists = [];
        $scope.TotalDisplayed = 15;
        Policestation.find({
                filter: {
                    where: {
                        branchname: '第一分局'
                    }
                }
            },
            function (outer_val) {
                //                $scope.ip = val.ip;
                for (var i = 0; i < outer_val.length; i++) {
                    Camera.find({
                        filter: {
                            where: {
                                pId: outer_val[i].pId
                            }
                        }
                    }, function (inner_val) {
                        for (var j = 0; j < inner_val.length; j++) {
                            var Camera_list = {
                                branchname: '第一分局',
                                Policestation: inner_val[j].stationname,
                                buildnumber: inner_val[j].buildnumber,
                                direction: inner_val[j].cameradirection,
                                ip: inner_val[j].ip
                            }
                            $scope.Camera_lists.push(Camera_list);
                        }
                    });
                    //                    console.log("name:" + val[i].stationname);
                }
            });
        $scope.loadMore = function () {
            $scope.TotalDisplayed += 20;
        };
            }]);