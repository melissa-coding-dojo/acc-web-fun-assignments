var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

// This will print each number separately not as an array


var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){ // 0 means no remainder or even
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

// This will go through the array and print the number when it is an even number otherwise printing "That is odd!"

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){ //i starts a 0  increase by 1 until the length array
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }   // if i less than 0 push to newArr and change arr [i] to i*-1 / if false move to else if
    else if(arr[i] == 0){
        arr[i] = "Zero";
    } // if i  = 0 change arr [i]  to zero / if false move to else
    else{
        arr[i] = arr[i] * -1;
    } // final statement or all other cases change arr[i] to i*-1
}
console.log(arr);
console.log(newArr);


// arr.length = 8
//1st time through
// index 0 = 1
// arr [-1]
// newArr [*]
// 2nd time through
// index 1 = 3
// arr [-1, -3]
// newArr [**]
// 3rd time 
// index 2 = 8
// arr [-1,-3,-8]
// newArr [***]
// next time through
//index 3 = -5
// arr [-1,-3,-8,5]
// newArr [***,-5]
// next time
// index 4 = 0
// arr [-1,-3,-8,5,"zero"]
// newArr [***,-5-*]
// index 5 = -2
// arr [-1,-3,-8,5,"zero",2]
// newArr [***,-5-*,-2]
// index 6 = 4
// arr [-1,-3,-8,5,"zero",2,-4]
// newArr [***,-5-*,-2*]
// index 7 = -1
// arr [-1,-3,-8,5,"zero",2,-4,1]
// newArr [***,-5-*,-2*,-1]
// loop has ended as index 8 is equal to the length not less than.

// This will multiply each number buy -1 (basically making negative numbers positive and positive numbers negative) or print zero if it is 0
