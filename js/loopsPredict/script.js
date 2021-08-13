for(var num = 0; num < 15; num++){
    console.log(num);
}

//

// this will print in the console the numbers 0-14 as it starts at 0 and prints a total of 15 numbers.

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    } // else { understood return to it moves to the next part of the for loop}
    // console.log(i) // will print every time through the loop since it is outside of the {}
}

// if i = 1 is divisible by 3 console.log , but it's not so add 2
// i = 3 /3 is 0 print console.log then increase by 3
// i = 5/3 not 0 +2 and move on
// i = 7/3 not 0 +2 move on
// i = 9/3 console.log 9 +2 move on
// i > 10 so stop

// this will print the numbers 3 and 9

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    } // exits to console.log only if true if false skips and moves to next if statement
    else if(j % 3 == 0){
        j++;
    } // exits to console.log if true if false skips and moves to next statement (happens to be a console.log so just prints current j)
    // else {return i}
    console.log(j);
}  

// i=1
// if 1/2 = not true move to else if
// if 1/3 = not true exit to console.log and print 1 +1
// i=2
// 2/2 = true following instructions adding 2 to j = 4 exit brackets console.log j=4 loop still active add 1
// i = 5 
// 5/2 not true move to else if
// 5/3  not true move to console.log
// j=5 print and continue loop add 1
// j=6 
// 




// this will print the following 1, 4, 5, 8, 10, 11, 14, 16

// if statement is true follow instruction in {}
// if not move to next statement else if
// if else if is true follow instructions in those {}
// if else is is not true console.log 