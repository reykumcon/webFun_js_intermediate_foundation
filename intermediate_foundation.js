// 1. Sigma

function sigma(num) {
    var sum = 0
    
    for (i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

// 2. Factorial

function factorial(num) {
    var product = 1;
    
    for (var i = 2; i <= num; i++) {
        product *= i;
    }

    return product;
}

// 3. Fibonacci

function fibonacci(num) {
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;

    for (var i = 2; i <= num; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib;
}

// 4. Array: Second to Last

function secondToLast(arr) {
    if (arr.length <= 2) {
        return "Array is too short!";
    } else {
        return arr[arr.length-2];
    }
}

// 5. Array: Nth-to-last

function nthToLast(arr, num) {
    if(arr.length < num) {
        return "Array is too short!";
    } else {
        return arr[arr.length-num];
    }
}

// 6. Array: Second-Largest

function secondLargest(arr) {
    var max = 0;
    
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    if(arr[arr.length-1] > max) {
        return max;       
    } else {
        return arr[arr.length-1];
    }
}

// 7. Double Trouble

function doubleTrouble(arr) {
    var double = [];
    
    for (var i = 0; i < arr.length; i++) {
        double.push(arr[i]);
        double.push(arr[i]);
    }

    return double;
}