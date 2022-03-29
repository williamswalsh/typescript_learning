// Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// When no type for obj:
// Parameter 'obj' implicitly has an 'any' type, but a better type may be inferred from usage.
// any is bad, we can do better
// generic -> <T>
var addId = function (obj) {
    console.log(typeof obj);
    var id = Math.random().toFixed(16);
    return __assign(__assign({}, obj), { id: id });
};
var jack = {
    name: 'jack'
};
var result = addId(jack);
console.log("result", result);
