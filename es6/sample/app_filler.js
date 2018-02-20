angular.module('orderByExample2', [])
    .controller('ExampleController', ['$scope', function($scope) {
        var employees = [
            { name: 'Tam', phone: '123456', age: 15 },
            { name: 'Quan', phone: '987612', age: 20 },
            { name: 'Linh', phone: '321223', age: 21 },
            { name: 'Huan', phone: '555878', age: 35 },
            { name: 'Khanh', phone: '551235', age: 29 }
        ];

        $scope.propertyName = 'age';
        $scope.reverse1 = true;
        $scope.employees = employees;

        $scope.sortBy = function(propertyName) {
            $scope.reverse1 = ($scope.propertyName === propertyName) ? !$scope.reverse1 : false;
            $scope.propertyName = propertyName;
        };
    }]);