//here, z is default parameter added after required parameters x and y
function add(x: number, y: number, z: number = 0): number {
    return x + y + z;
    }
    let resul1 = add(2, 3); //5
    let resul2 = add(2, 3, 5); //10