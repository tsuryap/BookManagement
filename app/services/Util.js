app.service('Util', ['$timeout', function($timeout) {
    this.showFormValidationErrors = function(form, touched) {
        _.each(form.$error, function(value, key) {
            _.each(form.$error[key], function(value) {
                value.$touched = touched;
            });
        });
    };
}])
