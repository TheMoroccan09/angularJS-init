

angular.module('App')
  .directive('inputTel', function($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModel) {

        // ONLY NUMbERS
        function onlyNumber(value) {
          if (value)  {
            var formattedValue = value.replace(/[^0-9]/g, '');
            if (formattedValue !== value) {
              ngModel.$setViewValue(formattedValue);
              ngModel.$render();
            }
            return  formattedValue;
          }
          return undefined;
        }
        ngModel.$formatters.push(onlyNumber) // to remove (+) first time
        ngModel.$parsers.push(onlyNumber) // to prevent insertting others thant numbers
        
        // MSG ERROR WHEN LENGTH < 10
        elem.on('blur', function(v) { 
          var value = elem[0].value;
          var isValid = (value && value.length > 10) ? true : false;

          scope.$apply(function() {
            ngModel.$setValidity('minLenght', isValid);
          });
        });
      }
    }
  });