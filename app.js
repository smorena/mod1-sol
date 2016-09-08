(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.CountResult = "";
  $scope.lunch = "";

  $scope.CheckQty = function () {
    var menuResult = calculateQty($scope.lunch);
    $scope.CountResult = menuResult;
  };


  function calculateQty(string) {
    var msg = "";
    var lunchMenu = string.split(',');
    lunchMenu = lunchMenu.filter(function (n) {
      return n != ""
    });
    var qty = lunchMenu.length;


    if (qty > 3) {
        msg = "Too Much"
    }
    else if (qty >0 && qty <= 3 ) {
      msg = "Enjoy!"
    } else {
      msg = "Please, enter data first";
    }
    return msg;
  }
}


})();
