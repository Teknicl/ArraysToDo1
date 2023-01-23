// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
function pushFront1() {
    
    arr = [5,7,2,3];
    addValue = 8;
    newArr = [];
    
    newArr.push(addValue);
    newArr.push(arr[0]);
    newArr.push(arr[1]);
    newArr.push(arr[2]);
    newArr.push(arr[3]);
    console.log(newArr);
}

// pushFront([5,7,2,3], 8) => [8,5,7,2,3] without push() method.
function pushFront1_alt() {
    arr = [5,7,2,3];
    addValue = 8;
    newArr = [];

    newArr[0] = addValue;
    for (i=0; i<=3; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

// pushFront([99], 7) => [7,99]
function pushFront2() {
    arr = [99];
    addValue = 7;
    newArr = [];

    newArr[0] = addValue;
    newArr[1] = arr[0];
    console.log(newArr);
}

//popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
function popFront1() {
    arr = [0,5,10,15];
    newArr = [];

    for (i=1; i<=3; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
    return arr[0];
}

//popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
function popFront2() {
    arr = [4,5,7,9];
    newArr = []

    for (i=1; i<=3; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

//insertAt([100,200,5], 2, 311) => [100,200,311,5]
function insertAt1() {
    arr = [100,200,5];
    toInsert = [2,311];
    arr[3] = arr[2];
    arr[2] = toInsert[1];
    console.log(arr);
}

//insertAt([9,33,7], 1, 42) => [9,42,33,7]
function insertAt2() {
    arr = [9,33,7];
    toInsert = [1,42];
    arr[3] = arr[2];
    arr[2] = arr[1];
    arr[1] = toInsert[1];
    console.log(arr);
}