var length = 0;
 
function fibonacci(length) {
    var fibonacciArray = [];
    for (var i = 0; i < length; i++) {
        if (i === 0) {
            fibonacciArray.push(0);
        } else if (i === 1) {
            fibonacciArray.push(1);
        } else {
            var sumTwoNumber = 0;
            sumTwoNumber = fibonacciArray[i-2] + fibonacciArray[i-1];
            fibonacciArray.push(sumTwoNumber); 
        }
    }
    return fibonacciArray;
}
