'use strict';

/**
 * @ngdoc function
 * @name sespaApp.controller:StudentListCtrl
 * @description
 * # StudentListCtrl
 * Controller of the sespaApp
 */
angular.module('sespaApp')
  .controller('StudentListCtrl', function(studentExplorer, $scope) {
    $scope.selected = null;
    $scope.sortType = 'last_name';
    $scope.sortReverse = false;
    $scope.searchAdvisor = '';
    $scope.scroll = scroll;

    $scope.students = [];
    studentExplorer.addAllStudents($scope.students);
  });
