app.service('Util', ['$timeout', function($timeout) {
    this.showFormValidationErrors = function(form, touched) {
        _.each(form.$error, function(value, key) {
            _.each(form.$error[key], function(value) {
                value.$touched = touched;
            });
        });
    };
    this.requesPosttHeaders = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
    };
    this.requesGetHeaders = {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        },
    };
}])
