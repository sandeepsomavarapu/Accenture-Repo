function add(...x: number[]): number {
    let result = 0;
    for (var i = 0; i < x.length; i++) {
    result += x[i];
    }
    return result;
    }
    let nums: number[] = [2, 5, 5,7,8];
    
    let result = add(...nums);