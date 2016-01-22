'use strict';

/**
 * @ngdoc function
 * @name sespaApp.controller:AdvisorListCtrl
 * @description
 * # AdvisorListCtrl
 * Controller of the sespaApp
 */
angular.module('sespaApp')
  .controller('AdvisorListCtrl', function(advisingData, advisingUtilities, $scope) {
    $scope.advisorListHeader = 'All Advisors';
    $scope.selected = null;
    $scope.sortType = 'last_name';
    $scope.sortReverse = false;
    $scope.searchAdvisor = '';
    $scope.progress = 0;
    // $scope.scroll = scroll;

    advisingData.allAdvisors().then(function(advisors) {
      $scope.progress = 100;
      $scope.advisors = advisors;
    }, function(reason) {
      advisingUtilities.httpErrorHandler(reason, $scope);
    }, function(update) {
      advisingUtilities.updateProgress(update, $scope);
    });
  });
