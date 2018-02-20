// Define the `my_app` module
var angularApp = angular.module('my_app', []);

// Define the `demo` controller on the `my_app` module
angularApp.controller('demo', function demo($scope, $interval, $location) {
    $scope.named ="anhtq";
}).directive('myDirective', function () {

    var html = `
                <table>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" value="{{named}}"/></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password"/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="Button" value="Login"/></td>
                    </tr>
                </table>
            `;

        return {
            template: html
        };
});