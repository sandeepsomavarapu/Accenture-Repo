function add(x: number, ...y: number[]): number {
    let result = x;
    for (var i = 0; i < y.length; i++) {
    result += y[i];
    }
    return result;
    }
    let result1 = add(2, 5); //7
    let result2 = add(2, 5, 7, 2); //16