// #1 Return all numbers 1-255

function allNums() {
    var array = []
    for (var i = 1; i <= 255; i++) {
        array.push(i)
    }
    return array
}

var one = allNums()
console.log(one)

// #2 Sum of all even numbers from 1-1000

function evenSum() {
    var add = 0
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            add = add + i
        }
    }
    return add
}
console.log(evenSum()) // 250500

// #3 Sum of all odd numbers from 1-5000

function oddSum() {
    var sum = 0
    for (var i = 1; i <= 5000; i+=2) {
        if (i % 2 == 1) {
            sum = sum + i
        }
    }
    return sum
}
console.log(oddSum()) // 6250000

// #4 Sum of all numbers in an array

function sumAll(array) {
    var all = 0
    for (var i = 0; i < array.length; i++) {
        all = all + array[i]
    }
    return all
}

console.log(sumAll([5,6,7,10])) // 28

// #5 find the highest number in a array

function findBiggest(arr) {
    var big = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > big) {
            big = arr[i]
        }
    }
    return big
}

console.log(findBiggest([1,3,5,-7,-10,50,24,30,-24,-15])) // 50

// #6 Find the average of all the values in an array

function average(arr) {
    var sum = 0
    var avg = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    avg = sum / arr.length
    return avg
}

console.log(average([100,95,80,75,100])) // 90

// #7 Return all odd numbers 1-50

function oddOnly() {
    var arr = []
    for (var i = 1; i < 50; i+=2) {
        arr.push(i)
    }
    return arr
}
console.log(oddOnly())

// #8 Return the # of values that are greater than Y

function greaterThan(arr, y) {
    var counter = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            counter++
        }
    }
    return counter
}
console.log(greaterThan([1,30,5,9,50,75,4], 24)) // 3

// #9 Return new array with the squared value of each value in original array

function squared(arr) {
    var sq = []
    for (var i = 0; i < arr.length; i++) {
        sq.push(arr[i]*arr[i])
    }
    return sq
}
console.log(squared([1,2,3,4])) // [1, 4, 9, 16]

// #10 Replace negative numbers in the array with 0

function removeNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    console.log(arr)
}
removeNegatives([-2,5,3,-4,6,10,-50]) // [0, 5, 3, 0, 6, 10, 0]

// #11 Return new array with the max, min and average of the original array

function maxMinAvg(arr) {
    var max = arr[0]
    var min = arr[0]
    var sum = 0
    var results = []
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) {
            min = arr[i]
        }
    }
    var avg = sum/arr.length
    results.push(max)
    results.push(min)
    results.push(avg)

    return results
}
console.log(maxMinAvg([90,80,75,100,80,92,98])) // [100, 75, 87.85714285714286]

// #12 New array that shows the 1st and last values swapped

function change(arr) {
    var swapped = arr[arr.length -1]
    arr[arr.length -1] = arr[0]
    arr[0] = swapped
}
var num = [1,5,3,4,8,6]
change(num)
console.log(num) // [6, 5, 3, 4, 8, 1]



// #13 New array with all negative numbers replaced with Dojo

function dojoReplace(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo'
        }
    }
    console.log(arr)
}
dojoReplace([2,-4,6,-2,5,-6])