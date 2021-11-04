var sumFunction = function (n1, n2, cb) {
    if (cb === void 0) { cb = function (n) { }; }
    console.log("n1", n1);
    console.log("n2", n2);
    var result = n1 + n2;
    console.log("cb", cb(result));
};
sumFunction(2, 3, function (number) {
    console.log(number);
    return;
});
