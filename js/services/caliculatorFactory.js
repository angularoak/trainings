app.factory("multi", function() {
    var factory={};
    factory.mul = function(num){ return num*num };
    factory.add = function(a,b){ return parseInt(a)+b};
    factory.sub = function(num){ return num-num};
    factory.div = function(num){ return num/num};
    return factory;
});

app.factory("calc", function(multi) {
var cal= {};
    cal.square = function(num) {
        return multi.mul(num)
    };
    cal.cube = function(num) {
        return multi.mul(num) * num;
    };
    cal.add = function(a,b) {
        return multi.add(a,b)
    };
    return cal;
});
/*Factry injected inside services*/
/*app.service("calc", function(multi) {
    this.square = function(num) {
        return multi.mul(num)
    };
    this.cube = function(num) {
        return multi.mul(num) * num;
    };
    this.add = function(a,b) {
        return multi.add(a,b)
    };
});*/