app.service("multi", function() {
    this.mul= function(num){ return num*num };
    this.add= function(a,b){ return a+b};
    this.sub= function(num){ return num-num};
    this.div= function(num){ return num/num};
});

app.service("calc", function(multi) {
    this.square = function(num) {
        return multi.mul(num)
    };
    this.cube = function(num) {
        return multi.mul(num) * num;
    };
    this.add = function(a,b) {
        return multi.add(a,b)
    };
});