
function cross(_r){
}
function bar(_r){
return 5;
}
function foo(_r){
var bar1 = _r('import bar');
console.log(bar1);
}
var _req = function (_request) {
// Write your code within this block
var regex = /import\s([a-z]+)/g;
var str = _request;
var m=regex.exec(str);
var m1=eval(m[1]);
console.log(m[1])

return m1(_req);
//=================================
}
foo(_req);

