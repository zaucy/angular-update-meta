(function(){

  /**
   * Update a title dynamically
   *
   * @constructor
   */
  function UpdateTitleDirective($log, $rootScope) {

    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      link: function(scope, iElem, iAttrs) {

        // watch the value and set as needed
        // use document instead of $document as $document doesn't work here
        scope.$watch('title', function (newValue, oldValue) {
          if (typeof newValue !== 'undefined') {
            if(document){
              $rootScope.$broadcast("update-title", newValue, document.title);
              document.title = newValue;
            }
          }
        });
      }
    };
  }

  // Inject dependencies
  UpdateTitleDirective.$inject = ['$log', '$rootScope'];

  // Export
  angular
    .module('updateMeta')
    .directive('updateTitle', UpdateTitleDirective);
})();
