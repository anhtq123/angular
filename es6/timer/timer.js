angular.module('timer', [])
    .directive('timer', function ($timeout, $compile) {
        return  {
            restrict: 'E',
            replace: false,
            scope: {
                interval: '=interval'
            },
            controller: function ($scope, $element) {
                if ($element.html().trim().length === 0) {
                    $element.append($compile('<span>{{millis}}</span>')($scope));
                }

                $scope.startTime = null;
                $scope.timeoutId = null;
                $scope.isRunning = false;

                $scope.$on('timer-start', function () {
                    $scope.start();
                });

                function resetTimeout() {
                    if ($scope.timeoutId) {
                        clearTimeout($scope.timeoutId);
                    }
                }

                $scope.start = $element[0].start = function () {
                    $scope.startTime = new Date();
                    resetTimeout();
                    tick();
                };

                $element.bind('$destroy', function () {
                    resetTimeout();
                });

                var tick = function () {
                    $scope.millis = new Date() - $scope.startTime;

                    $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
                    $scope.minutes = Math.floor((($scope.millis / (1000 * 60)) % 60));
                    $scope.hours = Math.floor((($scope.millis / (1000 * 60 * 60)) % 24));
                    $scope.days = Math.floor((($scope.millis / (1000 * 60 * 60)) / 24));
                    //We are not using $timeout for a reason. Please read here - https://github.com/siddii/angular-timer/pull/5
                    $scope.timeoutId = setTimeout(function () {
                        tick();
                        $scope.$apply();
                    }, $scope.interval);

                    $scope.$emit('timer-tick', {timeoutId: $scope.timeoutId, millis: $scope.millis});
                };

                $scope.start();
            }
        };
    });